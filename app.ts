import { TAROT_CARDS, TarotCard } from './tarotData';

interface ReadingRecord {
  id: string;
  date: string;
  type: string;
  question: string;
  cards: { card: TarotCard; isReversed: boolean; positionName?: string }[];
}

class TarotApp {
  private currentSpread: 'daily' | 'three-card' = 'daily';
  private drawnCards: { card: TarotCard; isReversed: boolean; positionName?: string }[] = [];
  private history: ReadingRecord[] = [];

  constructor() {
    this.loadHistory();
    this.initEventListeners();
    this.renderHistory();
  }

  private initEventListeners() {
    const drawBtn = document.getElementById('draw-btn') as HTMLButtonElement;
    const spreadSelect = document.getElementById('spread-select') as HTMLSelectElement;
    const questionInput = document.getElementById('question-input') as HTMLInputElement;
    const clearHistoryBtn = document.getElementById('clear-history') as HTMLButtonElement;
    const modalClose = document.getElementById('modal-close') as HTMLButtonElement;

    if (drawBtn) {
      drawBtn.addEventListener('click', () => {
        const question = questionInput ? questionInput.value.trim() : '';
        this.currentSpread = spreadSelect ? (spreadSelect.value as any) : 'daily';
        this.performReading(question);
      });
    }

    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your reading history?')) {
          this.history = [];
          localStorage.removeItem('tarot_history');
          this.renderHistory();
        }
      });
    }

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        this.closeModal();
      });
    }

    window.addEventListener('click', (e) => {
      const modal = document.getElementById('card-modal');
      if (modal && e.target === modal) {
        this.closeModal();
      }
    });
  }

  private shuffleDeck(): TarotCard[] {
    const deck = [...TAROT_CARDS];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  private performReading(question: string) {
    const deck = this.shuffleDeck();
    this.drawnCards = [];

    let count = 1;
    let positions = ['Daily Guidance'];

    if (this.currentSpread === 'three-card') {
      count = 3;
      positions = ['Past / Root', 'Present / Current Energy', 'Future / Potential Outcome'];
    }

    for (let i = 0; i < count; i++) {
      const card = deck[i];
      const isReversed = Math.random() < 0.3; // 30% chance of reversal
      this.drawnCards.push({
        card,
        isReversed,
        positionName: positions[i]
      });
    }

    this.renderReadingResult(question);
    this.saveReading(question);
  }

  private renderReadingResult(question: string) {
    const resultsContainer = document.getElementById('reading-results');
    if (!resultsContainer) return;

    let html = `
      <div class="reading-summary fade-in">
        <h3>${this.currentSpread === 'daily' ? '1-Card Daily Guidance' : '3-Card Spread (Past, Present, Future)'}</h3>
        ${question ? `<p class="user-question">"${question}"</p>` : ''}
      </div>
      <div class="cards-layout ${this.currentSpread}">
    `;

    this.drawnCards.forEach((item, index) => {
      html += `
        <div class="tarot-card-container fade-in" style="animation-delay: ${index * 0.2}s">
          ${item.positionName ? `<div class="card-position-label">${item.positionName}</div>` : ''}
          <div class="tarot-card ${item.isReversed ? 'reversed' : ''}" data-index="${index}">
            <div class="card-face card-back">
              <div class="card-back-pattern"></div>
            </div>
            <div class="card-face card-front">
              <div class="card-header">${item.card.name}</div>
              <div class="card-symbol-art">✧</div>
              <div class="card-footer">${item.isReversed ? 'Reversed' : 'Upright'}</div>
            </div>
          </div>
          <div class="card-info-preview">
            <h4>${item.card.name} ${item.isReversed ? '(Reversed)' : ''}</h4>
            <p class="keywords"><strong>Keywords:</strong> ${item.card.keywords.join(', ')}</p>
            <p class="meaning-snippet">${item.isReversed ? item.card.reversedMeaning : item.card.uprightMeaning}</p>
            <button class="btn-details" data-index="${index}">View Full Wisdom</button>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    resultsContainer.innerHTML = html;

    // Attach click events for card details
    const detailBtns = resultsContainer.querySelectorAll('.btn-details');
    detailBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-index') || '0', 10);
        this.openCardModal(idx);
      });
    });

    // Also allow clicking the card itself to open details
    const cards = resultsContainer.querySelectorAll('.tarot-card');
    cards.forEach((cardEl) => {
      cardEl.addEventListener('click', (e) => {
        const parent = (e.currentTarget as HTMLElement).closest('.tarot-card-container');
        const btn = parent?.querySelector('.btn-details') as HTMLButtonElement;
        if (btn) btn.click();
      });
    });
  }

  private openCardModal(index: number) {
    const item = this.drawnCards[index];
    if (!item) return;

    const modal = document.getElementById('card-modal');
    const title = document.getElementById('modal-title');
    const subtitle = document.getElementById('modal-subtitle');
    const desc = document.getElementById('modal-description');
    const meaning = document.getElementById('modal-meaning');
    const symbolism = document.getElementById('modal-symbolism');
    const keywords = document.getElementById('modal-keywords');

    if (title) title.textContent = item.card.name;
    if (subtitle) subtitle.textContent = `Element: ${item.card.element} | Arcana: ${item.card.arcana.toUpperCase()} ${item.isReversed ? '| Reversed' : '| Upright'}`;
    if (desc) desc.textContent = item.card.description;
    if (meaning) {
      meaning.innerHTML = `<strong>${item.isReversed ? 'Reversed Meaning:' : 'Upright Meaning:'}</strong> ${item.isReversed ? item.card.reversedMeaning : item.card.uprightMeaning}`;
    }
    if (symbolism) symbolism.textContent = item.card.symbolism;
    if (keywords) keywords.innerHTML = item.card.keywords.map((k) => `<span class="badge">${k}</span>`).join(' ');

    if (modal) modal.style.display = 'flex';
  }

  private closeModal() {
    const modal = document.getElementById('card-modal');
    if (modal) modal.style.display = 'none';
  }

  private saveReading(question: string) {
    const record: ReadingRecord = {
      id: 'reading_' + Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      type: this.currentSpread === 'daily' ? '1-Card Daily Guidance' : '3-Card Spread',
      question: question || 'General Reading',
      cards: [...this.drawnCards]
    };

    this.history.unshift(record);
    if (this.history.length > 20) this.history.pop(); // keep last 20
    localStorage.setItem('tarot_history', JSON.stringify(this.history));
    this.renderHistory();
  }

  private loadHistory() {
    const saved = localStorage.getItem('tarot_history');
    if (saved) {
      try {
        this.history = JSON.parse(saved);
      } catch (e) {
        this.history = [];
      }
    }
  }

  private renderHistory() {
    const listEl = document.getElementById('history-list');
    if (!listEl) return;

    if (this.history.length === 0) {
      listEl.innerHTML = `<p class="no-history">No past readings yet. Draw your first card above!</p>`;
      return;
    }

    let html = '';
    this.history.forEach((rec) => {
      html = `
        <div class="history-item">
          <div class="history-header">
            <span class="history-type">${rec.type}</span>
            <span class="history-date">${rec.date}</span>
          </div>
          ${rec.question ? `<p class="history-q">"${rec.question}"</p>` : ''}
          <div class="history-cards-summary">
            ${rec.cards.map((c) => `<span class="history-card-tag">${c.card.name} ${c.isReversed ? '(Rev)' : ''}</span>`).join('')}
          </div>
        </div>
      ` + html; // newest first
    });

    listEl.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TarotApp();
});
