import { TAROT_CARDS, TarotCard } from './tarotData';

type SpreadId = 'ember' | 'thread' | 'crossroads';

interface SpreadDef {
  id: SpreadId;
  title: string;
  label: string;
  count: number;
  positions: string[];
}

interface DrawnCard {
  uid: string;
  card: TarotCard;
  isReversed: boolean;
  positionName?: string;
}

interface JournalRecord {
  id: string;
  date: string;
  spread: string;
  question: string;
  note: string;
  moon: string;
  cards: { id?: string; name: string; reversed: boolean; position: string }[];
}

const SPREADS: Record<SpreadId, SpreadDef> = {
  ember: {
    id: 'ember',
    title: 'Ember',
    label: 'Ember · one card',
    count: 1,
    positions: ['Attention']
  },
  thread: {
    id: 'thread',
    title: 'Thread',
    label: 'Thread · past / now / next',
    count: 3,
    positions: ['Past', 'Now', 'Next']
  },
  crossroads: {
    id: 'crossroads',
    title: 'Crossroads',
    label: 'Crossroads · situation · challenge · counsel',
    count: 3,
    positions: ['Situation', 'Challenge', 'Counsel']
  }
};

const STORAGE_KEY = 'lune_journal_v1';
const FAN_SIZE = 9;

/** Browser entry for LUNÉ lives in main.js (bundled with card data). */
export { SPREADS, STORAGE_KEY, FAN_SIZE, TAROT_CARDS };
export type { SpreadId, DrawnCard, JournalRecord };
