const TAROT_CARDS = [
  // Major Arcana
  {
    id: 'fool',
    name: '0. The Fool',
    number: 0,
    arcana: 'major',
    element: 'Air',
    keywords: ['New beginnings', 'Innocence', 'Spontaneity', 'Free spirit'],
    uprightMeaning: 'Embarking on a new journey, taking a leap of faith, embracing innocence and infinite potential.',
    reversedMeaning: 'Recklessness, risk-taking, hesitation, foolishness, naivety.',
    description: 'The Fool stands at the edge of a cliff, gazing into the unknown with absolute trust in the universe.',
    symbolism: 'The white rose represents purity; the small dog signifies loyalty and intuition protecting him.'
  },
  {
    id: 'magician',
    name: '1. The Magician',
    number: 1,
    arcana: 'major',
    element: 'Mercury',
    keywords: ['Manifestation', 'Resourcefulness', 'Power', 'Inspired action'],
    uprightMeaning: 'You have all the tools and resources you need to manifest your desires into reality.',
    reversedMeaning: 'Manipulation, poor planning, untapped talents, illusion, trickery.',
    description: 'The Magician bridges heaven and earth, pointing one wand up and one down ("As above, so below").',
    symbolism: 'The symbols of the four suits on the table represent mastery over all elements of life.'
  },
  {
    id: 'high_priestess',
    name: '2. The High Priestess',
    number: 2,
    arcana: 'major',
    element: 'Moon',
    keywords: ['Intuition', 'Sacred knowledge', 'Divine feminine', 'Subconscious'],
    uprightMeaning: 'Listen to your inner voice and intuition. Secrets are being revealed; look beneath the surface.',
    reversedMeaning: 'Secrets, disconnected intuition, superficiality, hidden agendas.',
    description: 'Seated between the pillars of darkness and light, she guards the veil of the subconscious mind.',
    symbolism: 'The pomegranate veil signifies fertility and hidden mysteries; the crescent moon rests at her feet.'
  },
  {
    id: 'empress',
    name: '3. The Empress',
    number: 3,
    arcana: 'major',
    element: 'Venus',
    keywords: ['Fertility', 'Abundance', 'Nurturing', 'Nature', 'Creativity'],
    uprightMeaning: 'A period of great abundance, comfort, creativity, and deep connection with the natural world.',
    reversedMeaning: 'Creative block, dependence on others, emptiness, smothering attention.',
    description: 'The Empress sits regally in a lush, golden wheat field wearing a crown of twelve glowing stars.',
    symbolism: 'The shield bearing the symbol of Venus represents love, beauty, grace, and fertility.'
  },
  {
    id: 'emperor',
    name: '4. The Emperor',
    number: 4,
    arcana: 'major',
    element: 'Aries',
    keywords: ['Authority', 'Structure', 'Control', 'Establishment', 'Leadership'],
    uprightMeaning: 'Taking charge with discipline, establishing order, setting clear boundaries, and leading with wisdom.',
    reversedMeaning: 'Tyranny, rigidity, abuse of power, lack of discipline, inflexibility.',
    description: 'The Emperor sits upon a massive stone throne adorned with ram heads, gazing steadfastly over his domain.',
    symbolism: 'The ram heads symbolize Aries and fiery leadership; the bare mountains signify unyielding strength.'
  },
  {
    id: 'hierophant',
    name: '5. The Hierophant',
    number: 5,
    arcana: 'major',
    element: 'Taurus',
    keywords: ['Spiritual wisdom', 'Tradition', 'Institutions', 'Guidance'],
    uprightMeaning: 'Following spiritual traditions, seeking mentorship, conforming to established social structures.',
    reversedMeaning: 'Rebellion, unconventional beliefs, challenging the status quo, dogma.',
    description: 'The Hierophant sits between two sacred pillars, raising his hand in blessing while two acolytes kneel.',
    symbolism: 'The triple crown and triple-barred cross symbolize spiritual authority across body, mind, and spirit.'
  },
  {
    id: 'lovers',
    name: '6. The Lovers',
    number: 6,
    arcana: 'major',
    element: 'Gemini',
    keywords: ['Love', 'Harmony', 'Vulnerability', 'Aligning values', 'Choices'],
    uprightMeaning: 'Deep emotional connections, soulmate relationships, and crucial choices aligned with your core values.',
    reversedMeaning: 'Disharmony, misaligned values, broken trust, difficult choices avoided.',
    description: 'An angel showers divine blessings upon two figures in a paradisiacal garden under a warm sun.',
    symbolism: 'The Tree of Life and Tree of Knowledge represent conscious choices and spiritual awakening.'
  },
  {
    id: 'chariot',
    name: '7. The Chariot',
    number: 7,
    arcana: 'major',
    element: 'Cancer',
    keywords: ['Willpower', 'Determination', 'Success', 'Control', 'Momentum'],
    uprightMeaning: 'Overcoming obstacles through sheer focus, discipline, and unwavering determination.',
    reversedMeaning: 'Lack of control, lack of direction, opposition, scattered energy.',
    description: 'A victorious warrior stands tall inside a swift chariot pulled by two opposing sphinxes.',
    symbolism: 'The black and white sphinxes represent dual forces that must be harmonized and mastered.'
  },
  {
    id: 'strength',
    name: '8. Strength',
    number: 8,
    arcana: 'major',
    element: 'Leo',
    keywords: ['Courage', 'Patience', 'Compassion', 'Inner power', 'Tame ego'],
    uprightMeaning: 'Mastering strong emotions and challenges with gentle compassion, inner fortitude, and calm confidence.',
    reversedMeaning: 'Self-doubt, weakness, raw emotion, insecurity, lack of self-control.',
    description: 'A serene woman gently closes the jaws of a fierce lion without force or fear.',
    symbolism: 'The infinity symbol above her head represents eternal spirit and infinite resilience.'
  },
  {
    id: 'hermit',
    name: '9. The Hermit',
    number: 9,
    arcana: 'major',
    element: 'Virgo',
    keywords: ['Soul-searching', 'Introspection', 'Solitude', 'Inner guidance'],
    uprightMeaning: 'Stepping back from the noise of the world to seek inner wisdom, truth, and spiritual clarity.',
    reversedMeaning: 'Isolation, loneliness, withdrawal, losing your way, paranoia.',
    description: 'An elderly sage stands alone on a snowy mountain peak holding a lantern containing a glowing star.',
    symbolism: 'The six-pointed star within the lantern is the Seal of Solomon, guiding the way through darkness.'
  },
  {
    id: 'wheel_of_fortune',
    name: '10. Wheel of Fortune',
    number: 10,
    arcana: 'major',
    element: 'Jupiter',
    keywords: ['Good luck', 'Karma', 'Life cycles', 'Destiny', 'Turning point'],
    uprightMeaning: 'Favorable changes in destiny, sudden good fortune, and understanding the cyclical nature of life.',
    reversedMeaning: 'Bad luck, negative cycles, unexpected setbacks, resisting change.',
    description: 'A mystical wheel inscribed with ancient symbols turns amidst clouds, surrounded by winged creatures.',
    symbolism: 'Hebrew letters YHWH and alchemical symbols on the wheel represent eternal cosmic forces.'
  },
  {
    id: 'justice',
    name: '11. Justice',
    number: 11,
    arcana: 'major',
    element: 'Libra',
    keywords: ['Fairness', 'Truth', 'Cause and effect', 'Law', 'Accountability'],
    uprightMeaning: 'Fair decisions, objective truth, balance, accountability, and karmic justice prevailing.',
    reversedMeaning: 'Dishonesty, unfairness, bias, avoiding accountability, corruption.',
    description: 'A stern figure sits holding scales in one hand and a double-edged sword in the other.',
    symbolism: 'The scales weigh truth impartially, while the sword represents decisive action and consequences.'
  },
  {
    id: 'hanged_man',
    name: '12. The Hanged Man',
    number: 12,
    arcana: 'major',
    element: 'Neptune',
    keywords: ['Surrender', 'New perspective', 'Letting go', 'Pause', 'Sacrifice'],
    uprightMeaning: 'Viewing situations from a completely different angle by surrendering control and pausing.',
    reversedMeaning: 'Stalling, needless sacrifice, stubbornness, martyrdom without purpose.',
    description: 'A figure hangs suspended upside down by one ankle from a living wooden cross with serene acceptance.',
    symbolism: 'The golden halo around his head signifies sudden enlightenment gained through stillness.'
  },
  {
    id: 'death',
    name: '13. Death',
    number: 13,
    arcana: 'major',
    element: 'Scorpio',
    keywords: ['Transformation', 'End of cycle', 'Transition', 'Rebirth', 'Change'],
    uprightMeaning: 'Profound personal transformation, shedding old skin, and welcoming new beginnings.',
    reversedMeaning: 'Resisting change, stagnation, fear of moving on, holding onto the past.',
    description: 'An armored skeleton rides a white horse across a battlefield, carrying a black banner with a white rose.',
    symbolism: 'The rising sun on the horizon promises inevitable rebirth after every ending.'
  },
  {
    id: 'temperance',
    name: '14. Temperance',
    number: 14,
    arcana: 'major',
    element: 'Sagittarius',
    keywords: ['Balance', 'Moderation', 'Patience', 'Purpose', 'Harmony'],
    uprightMeaning: 'Finding inner peace through moderation, blending contrasting elements, and maintaining calm patience.',
    reversedMeaning: 'Imbalance, excess, clashing energies, lack of patience, hasty choices.',
    description: 'An angelic being pours liquid back and forth between two golden cups without spilling a drop.',
    symbolism: 'One foot in water and one on land represents balancing the emotional and physical worlds.'
  },
  {
    id: 'devil',
    name: '15. The Devil',
    number: 15,
    arcana: 'major',
    element: 'Capricorn',
    keywords: ['Shadow self', 'Attachment', 'Addiction', 'Restriction', 'Materialism'],
    uprightMeaning: 'Recognizing self-imposed limiting beliefs, toxic attachments, and breaking free from inner chains.',
    reversedMeaning: 'Reclaiming personal power, breaking addiction, freedom, release from bondage.',
    description: 'A horned creature sits upon a pedestal while a human couple stands chained loosely below.',
    symbolism: 'The chains around their necks are loose enough to slip off, showing that their bondage is self-imposed.'
  },
  {
    id: 'tower',
    name: '16. The Tower',
    number: 16,
    arcana: 'major',
    element: 'Mars',
    keywords: ['Sudden upheaval', 'Revelation', 'Awakening', 'Chaos', 'Breakdown'],
    uprightMeaning: 'A sudden, shocking disruption that shatters false foundations to reveal ultimate truth.',
    reversedMeaning: 'Disaster avoided narrowly, delaying inevitable collapse, fear of suffering.',
    description: 'Lightning strikes a towering stone fortress high on a mountain, sending crowns and figures plummeting.',
    symbolism: 'The lightning bolt is the flash of divine illumination that destroys ignorance.'
  },
  {
    id: 'star',
    name: '17. The Star',
    number: 17,
    arcana: 'major',
    element: 'Aquarius',
    keywords: ['Hope', 'Faith', 'Inspiration', 'Healing', 'Serenity'],
    uprightMeaning: 'Renewed hope, spiritual blessings, profound healing, and deep trust in the universe.',
    reversedMeaning: 'Loss of faith, despair, discouragement, feeling disconnected from hope.',
    description: 'A kneeling woman pours water from two urns onto fertile earth and shimmering starlit waters.',
    symbolism: 'Seven smaller stars and one large guiding star represent chakras and celestial guidance.'
  },
  {
    id: 'moon',
    name: '18. The Moon',
    number: 18,
    arcana: 'major',
    element: 'Pisces',
    keywords: ['Illusion', 'Fear', 'Anxiety', 'Subconscious', 'Intuition'],
    uprightMeaning: 'Navigating uncertainty, decoding dreams, facing deep-seated fears, and trusting your intuition.',
    reversedMeaning: 'Overcoming fear, releasing anxiety, clarity emerging, truths revealed.',
    description: 'A full moon illuminates a winding path between two towers where a dog and wolf howl.',
    symbolism: 'The crawfish emerging from the abyss symbolizes deep thoughts crawling up from the subconscious.'
  },
  {
    id: 'sun',
    name: '19. The Sun',
    number: 19,
    arcana: 'major',
    element: 'Sun',
    keywords: ['Joy', 'Success', 'Vitality', 'Celebration', 'Positivity'],
    uprightMeaning: 'Radiant happiness, unbridled success, abundant vitality, warmth, and brilliant clarity.',
    reversedMeaning: 'Temporary sadness, overly optimistic outlook, dimmed joy, minor delays.',
    description: 'A radiant sun beams down its warm golden rays upon a joyful child riding a white horse.',
    symbolism: 'The sunflowers represent life and vitality turning naturally toward the light of truth.'
  },
  {
    id: 'judgement',
    name: '20. Judgement',
    number: 20,
    arcana: 'major',
    element: 'Pluto',
    keywords: ['Rebirth', 'Inner calling', 'Absolution', 'Awakening', 'Forgiveness'],
    uprightMeaning: 'Hearing a higher calling, evaluating your life path with honesty, and stepping into your true purpose.',
    reversedMeaning: 'Self-doubt, harsh self-criticism, ignoring the call, regret, hesitation.',
    description: 'An angelic archangel blows a mighty trumpet from the clouds as figures rise joyfully from graves.',
    symbolism: 'The trumpet call represents the awakening of consciousness and the judgment of past actions.'
  },
  {
    id: 'world',
    name: '21. The World',
    number: 21,
    arcana: 'major',
    element: 'Saturn',
    keywords: ['Completion', 'Achievement', 'Wholeness', 'Travel', 'Fulfillment'],
    uprightMeaning: 'Successful completion of a major life cycle, achieving mastery, celebration, and integration.',
    reversedMeaning: 'Lack of closure, feeling incomplete, delayed success, shortcuts.',
    description: 'A victorious dancer dances freely inside a sacred laurel wreath surrounded by four celestial guardians.',
    symbolism: 'The four corner guardians (angel, eagle, lion, bull) represent the four fixed signs of the zodiac.'
  },

  // Sample Minor Arcana (Cups, Wands, Swords, Pentacles)
  {
    id: 'ace_of_cups',
    name: 'Ace of Cups',
    number: 1,
    arcana: 'minor',
    suit: 'cups',
    element: 'Water',
    keywords: ['New love', 'Overflowing emotion', 'Compassion', 'Intuition'],
    uprightMeaning: 'New emotional beginnings, deep compassion, unconditional love, and spiritual awakening.',
    reversedMeaning: 'Emotional blockage, drained energy, repressed feelings, sadness.',
    description: 'A chalice overflows with living waters, blessed by a divine dove descending from above.',
    symbolism: 'The five streams of water flowing from the cup represent the five senses and emotional abundance.'
  },
  {
    id: 'three_of_cups',
    name: '3 of Cups',
    number: 3,
    arcana: 'minor',
    suit: 'cups',
    element: 'Water',
    keywords: ['Celebration', 'Friendship', 'Community', 'Collaboration'],
    uprightMeaning: 'Joyful gatherings, celebration with friends, community support, and collaborative harmony.',
    reversedMeaning: 'Gossip, overindulgence, exclusion, isolation from friends.',
    description: 'Three joyful women dance in a circle, raising their cups in a toast of celebration.',
    symbolism: 'Harvest wreaths of flowers and fruit symbolize abundance, joy, and shared success.'
  },
  {
    id: 'ten_of_cups',
    name: '10 of Cups',
    number: 10,
    arcana: 'minor',
    suit: 'cups',
    element: 'Water',
    keywords: ['Divine love', 'Family harmony', 'Domestic bliss', 'Happiness'],
    uprightMeaning: 'Ultimate emotional fulfillment, happy family life, lasting harmony, and contentment.',
    reversedMeaning: 'Family discord, broken homes, misaligned values, broken promises.',
    description: 'A happy family raises their arms in awe as a vibrant rainbow of cups arches across the sky.',
    symbolism: 'The rainbow represents peace, divine promise, and emotional completion.'
  },
  {
    id: 'ace_of_wands',
    name: 'Ace of Wands',
    number: 1,
    arcana: 'minor',
    suit: 'wands',
    element: 'Fire',
    keywords: ['Inspiration', 'Power', 'Creation', 'New passion', 'Energy'],
    uprightMeaning: 'A burst of fiery inspiration, passionate new ventures, creative breakthroughs, and high energy.',
    reversedMeaning: 'Lack of motivation, delays, creative block, hesitation.',
    description: 'A glowing hand reaches from the clouds, offering a living wooden wand bursting with fresh leaves.',
    symbolism: 'Floating leaves symbolize ongoing growth, vitality, and the spark of creation.'
  },
  {
    id: 'three_of_wands',
    name: '3 of Wands',
    number: 3,
    arcana: 'minor',
    suit: 'wands',
    element: 'Fire',
    keywords: ['Expansion', 'Far-seeing', 'Overseeing', 'Opportunities', 'Travel'],
    uprightMeaning: 'Looking ahead to future horizons, expanding your business or vision, and preparing for growth.',
    reversedMeaning: 'Lack of foresight, obstacles to expansion, delays in travel or plans.',
    description: 'A merchant stands on a high cliff looking out across ships sailing on the vast ocean.',
    symbolism: 'Three sturdy wands planted firmly in the ground represent stability and prepared vision.'
  },
  {
    id: 'ace_of_swords',
    name: 'Ace of Swords',
    number: 1,
    arcana: 'minor',
    suit: 'swords',
    element: 'Air',
    keywords: ['Mental clarity', 'Breakthrough', 'Truth', 'New ideas', 'Focus'],
    uprightMeaning: 'Sharp mental clarity, breakthrough insights, cutting through confusion, and speaking truth.',
    reversedMeaning: 'Confusion, miscommunication, hostility, clouded judgment.',
    description: 'A divine hand holds a double-edged sword upright, crowned with a golden laurel wreath.',
    symbolism: 'The crown and palm branch signify victory, intellect, and the triumph of truth.'
  },
  {
    id: 'ace_of_pentacles',
    name: 'Ace of Pentacles',
    number: 1,
    arcana: 'minor',
    suit: 'pentacles',
    element: 'Earth',
    keywords: ['New financial opportunity', 'Abundance', 'Manifestation', 'Security'],
    uprightMeaning: 'New financial or career opportunities, tangible prosperity, security, and solid foundations.',
    reversedMeaning: 'Missed opportunities, financial instability, poor planning, scarcity mindset.',
    description: 'A heavenly hand presents a glowing golden coin over a lush, flowering garden.',
    symbolism: 'The stone archway represents the gateway to wealth, security, and material success.'
  },
  {
    id: 'ten_of_pentacles',
    name: '10 of Pentacles',
    number: 10,
    arcana: 'minor',
    suit: 'pentacles',
    element: 'Earth',
    keywords: ['Wealth', 'Family legacy', 'Long-term success', 'Financial security'],
    uprightMeaning: 'Generational wealth, established family security, lasting legacy, and financial prosperity.',
    reversedMeaning: 'Financial loss, family disputes over money, broken legacy.',
    description: 'A prosperous family and their loyal dogs gather peacefully in a grand courtyard.',
    symbolism: 'The pentacles arranged on the arch represent the Tree of Life manifested in the material world.'
  }
];

const SPREADS = {
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
    label: 'Thread · past · present · becoming',
    count: 3,
    positions: ['Past', 'Present', 'Becoming']
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

function moonPhaseLabel(date) {
  date = date || new Date();
  const synodic = 29.53058867;
  const known = Date.UTC(2000, 0, 6, 18, 14, 0);
  const days = (date.getTime() - known) / 86400000;
  const phase = ((days % synodic) + synodic) % synodic;
  const idx = Math.floor((phase / synodic) * 8) % 8;
  const names = [
    'New Moon',
    'Waxing Crescent',
    'First Quarter',
    'Waxing Gibbous',
    'Full Moon',
    'Waning Gibbous',
    'Last Quarter',
    'Waning Crescent'
  ];
  return names[idx];
}

function defaultGlyph(card) {
  const suitPaths = {
    cups: '<path d="M20 14h24v10c0 10-6 16-12 18v6h8v4H24v-4h8v-6c-6-2-12-8-12-18V14z" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    wands: '<path d="M32 10v44M26 18l6-4 6 4M26 46l6 4 6-4" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    swords: '<path d="M32 8v40M24 18l8-6 8 6M22 52h20" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    pentacles: '<circle cx="32" cy="32" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M32 20l3.5 9.5H46l-8 6 3 9.5-9.5-6.5L23 45l3-9.5-8-6h10.5z" fill="none" stroke="currentColor" stroke-width="1.2"/>'
  };
  if (card.suit && suitPaths[card.suit]) return suitPaths[card.suit];
  return '<circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="32" cy="32" r="4" fill="currentColor"/>';
}

function pathFool() {
  return '<circle cx="32" cy="28" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M18 50c6-10 14-14 28-8" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="46" cy="18" r="2" fill="currentColor"/>';
}
function pathMagician() {
  return '<path d="M32 8v48M16 32h32" stroke="currentColor" stroke-width="1.5"/><rect x="20" y="44" width="24" height="6" fill="none" stroke="currentColor" stroke-width="1.3"/>';
}
function pathPriestess() {
  return '<path d="M18 12v40M46 12v40" stroke="currentColor" stroke-width="1.5"/><path d="M26 20h12v24H26z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M24 48c8-6 8-6 16 0" fill="none" stroke="currentColor" stroke-width="1.3"/>';
}
function pathEmpress() {
  return '<path d="M32 14l6 10H26l6-10zM20 48h24M24 28h16v12H24z" fill="none" stroke="currentColor" stroke-width="1.4"/>';
}
function pathEmperor() {
  return '<rect x="18" y="22" width="28" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M18 22l14-10 14 10M26 34h12" fill="none" stroke="currentColor" stroke-width="1.4"/>';
}
function pathStar() {
  return '<path d="M32 10l4 12h12l-10 8 4 12-10-7-10 7 4-12-10-8h12z" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="32" cy="48" r="3" fill="currentColor"/>';
}
function pathMoon() {
  return '<path d="M38 14a18 18 0 1 0 0 36 14 14 0 0 1 0-36z" fill="none" stroke="currentColor" stroke-width="1.6"/>';
}
function pathSun() {
  return '<circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M32 8v8M32 48v8M8 32h8M48 32h8M14 14l6 6M44 44l6 6M14 50l6-6M44 20l6-6" stroke="currentColor" stroke-width="1.4"/>';
}
function pathWorld() {
  return '<circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="32" cy="32" rx="8" ry="16" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M16 32h32" stroke="currentColor" stroke-width="1.2"/>';
}
function pathDeath() {
  return '<path d="M32 12v40M22 24h20M24 48h16" stroke="currentColor" stroke-width="1.5"/><circle cx="32" cy="18" r="5" fill="none" stroke="currentColor" stroke-width="1.3"/>';
}
function pathTower() {
  return '<path d="M24 50V22l8-10 8 10v28M20 50h24M28 30h8M28 38h8" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M18 18l10 6M46 18l-10 6" stroke="currentColor" stroke-width="1.3"/>';
}
function pathLovers() {
  return '<circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="40" cy="24" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M18 48c4-10 10-12 14-12s10 2 14 12" fill="none" stroke="currentColor" stroke-width="1.4"/>';
}

function cardSvg(card, size) {
  size = size || 64;
  const map = {
    fool: pathFool(),
    magician: pathMagician(),
    high_priestess: pathPriestess(),
    empress: pathEmpress(),
    emperor: pathEmperor(),
    star: pathStar(),
    moon: pathMoon(),
    sun: pathSun(),
    world: pathWorld(),
    death: pathDeath(),
    tower: pathTower(),
    lovers: pathLovers()
  };
  const inner = map[card.id] || defaultGlyph(card);
  return '<svg class="card-svg" viewBox="0 0 64 64" width="' + size + '" height="' + size + '" aria-hidden="true">' + inner + '</svg>';
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function displayName(name) {
  return String(name).replace(/^\d+\.\s*/, '');
}

class LuneApp {
  constructor() {
    this.spreadId = 'ember';
    this.question = '';
    this.note = '';
    this.fanDeck = [];
    this.picked = [];
    this.history = [];
    this.holdProgress = 0;
    this.holding = false;
    this.holdRaf = null;
    this.holdStarted = 0;

    this.cacheDom();
    this.loadJournal();
    this.bindEvents();
    this.initStarfield();
    this.renderMoon();
    this.renderJournal();
    this.showScreen('home');
  }

  cacheDom() {
    this.screens = {
      home: document.getElementById('screen-home'),
      intention: document.getElementById('screen-intention'),
      shuffle: document.getElementById('screen-shuffle'),
      draw: document.getElementById('screen-draw'),
      reveal: document.getElementById('screen-reveal'),
      journal: document.getElementById('screen-journal')
    };
    this.els = {
      moonPhase: document.getElementById('moon-phase'),
      question: document.getElementById('question-input'),
      shuffleOrb: document.getElementById('shuffle-orb'),
      orbProgress: document.getElementById('orb-progress'),
      shufflePrompt: document.getElementById('shuffle-prompt'),
      shuffleHint: document.getElementById('shuffle-hint'),
      cardFan: document.getElementById('card-fan'),
      drawTitle: document.getElementById('draw-title'),
      drawCopy: document.getElementById('draw-copy'),
      drawCount: document.getElementById('draw-count'),
      readingQuestion: document.getElementById('reading-question'),
      revealTitle: document.getElementById('reveal-spread-title'),
      revealCards: document.getElementById('reveal-cards'),
      journalList: document.getElementById('journal-list'),
      cardSheet: document.getElementById('card-sheet'),
      noteSheet: document.getElementById('note-sheet'),
      noteInput: document.getElementById('note-input')
    };
  }

  bindEvents() {
    document.getElementById('btn-begin').addEventListener('click', () => this.showScreen('intention'));
    document.getElementById('btn-open-journal').addEventListener('click', () => {
      this.renderJournal();
      this.showScreen('journal');
    });
    document.getElementById('btn-to-shuffle').addEventListener('click', () => {
      this.question = this.els.question.value.trim();
      this.resetShuffle();
      this.showScreen('shuffle');
    });
    document.getElementById('btn-new-reading').addEventListener('click', () => this.resetToIntention());
    document.getElementById('btn-finish').addEventListener('click', () => this.keepReading());
    document.getElementById('btn-save-note').addEventListener('click', () => this.openNoteSheet());
    document.getElementById('btn-save-note-confirm').addEventListener('click', () => this.saveNoteFromSheet());
    document.getElementById('note-close').addEventListener('click', () => this.closeNoteSheet());
    document.getElementById('sheet-close').addEventListener('click', () => this.closeCardSheet());
    document.getElementById('btn-clear-journal').addEventListener('click', () => this.clearJournal());

    document.querySelectorAll('.btn-back').forEach((btn) => {
      btn.addEventListener('click', () => this.showScreen(btn.dataset.back));
    });

    document.querySelectorAll('.spread-option').forEach((btn) => {
      btn.addEventListener('click', () => this.selectSpread(btn.dataset.spread));
    });

    const orb = this.els.shuffleOrb;
    const start = (e) => {
      e.preventDefault();
      this.startHold();
    };
    const end = (e) => {
      e.preventDefault();
      this.endHold();
    };
    orb.addEventListener('pointerdown', start);
    orb.addEventListener('pointerup', end);
    orb.addEventListener('pointerleave', end);
    orb.addEventListener('pointercancel', end);

    this.els.cardSheet.addEventListener('click', (e) => {
      if (e.target === this.els.cardSheet) this.closeCardSheet();
    });
    this.els.noteSheet.addEventListener('click', (e) => {
      if (e.target === this.els.noteSheet) this.closeNoteSheet();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCardSheet();
        this.closeNoteSheet();
      }
    });
  }

  renderMoon() {
    this.els.moonPhase.textContent = moonPhaseLabel() + ' · tonight';
  }

  showScreen(name) {
    Object.keys(this.screens).forEach((key) => {
      const el = this.screens[key];
      const active = key === name;
      el.classList.toggle('is-active', active);
      if (active) el.removeAttribute('hidden');
      else el.setAttribute('hidden', '');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectSpread(id) {
    this.spreadId = id;
    document.querySelectorAll('.spread-option').forEach((btn) => {
      const on = btn.dataset.spread === id;
      btn.classList.toggle('is-selected', on);
      btn.setAttribute('aria-checked', on ? 'true' : 'false');
    });
  }

  resetShuffle() {
    this.holdProgress = 0;
    this.holding = false;
    this.els.orbProgress.style.setProperty('--progress', '0%');
    this.els.shuffleOrb.classList.remove('is-holding', 'is-ready');
    this.els.shufflePrompt.textContent = 'Press and hold. Breathe with the deck.';
    this.els.shuffleHint.textContent = 'Hold for a full breath';
  }

  startHold() {
    if (this.holding) return;
    this.holding = true;
    this.holdStarted = performance.now();
    this.els.shuffleOrb.classList.add('is-holding');
    this.els.shuffleHint.textContent = 'Keep holding…';
    const tick = (now) => {
      if (!this.holding) return;
      const elapsed = now - this.holdStarted;
      const duration = 1600;
      this.holdProgress = Math.min(1, elapsed / duration);
      this.els.orbProgress.style.setProperty('--progress', (this.holdProgress * 100).toFixed(1) + '%');
      if (this.holdProgress >= 1) {
        this.completeShuffle();
        return;
      }
      this.holdRaf = requestAnimationFrame(tick);
    };
    this.holdRaf = requestAnimationFrame(tick);
  }

  endHold() {
    if (!this.holding) return;
    this.holding = false;
    if (this.holdRaf) cancelAnimationFrame(this.holdRaf);
    this.els.shuffleOrb.classList.remove('is-holding');
    if (this.holdProgress < 1) {
      this.holdProgress = 0;
      this.els.orbProgress.style.setProperty('--progress', '0%');
      this.els.shuffleHint.textContent = 'Hold a little longer';
    }
  }

  completeShuffle() {
    this.holding = false;
    if (this.holdRaf) cancelAnimationFrame(this.holdRaf);
    this.els.shuffleOrb.classList.remove('is-holding');
    this.els.shuffleOrb.classList.add('is-ready');
    this.els.shufflePrompt.textContent = 'The deck is still.';
    this.els.shuffleHint.textContent = 'Opening the fan…';
    this.prepareFan();
    setTimeout(() => this.showScreen('draw'), 550);
  }

  prepareFan() {
    const spread = SPREADS[this.spreadId];
    this.picked = [];
    this.fanDeck = shuffle(TAROT_CARDS).slice(0, FAN_SIZE).map(function (card, i) {
      return {
        uid: 'fan_' + i + '_' + card.id,
        card: card,
        isReversed: Math.random() < 0.28
      };
    });
    this.els.drawTitle.textContent = spread.count === 1
      ? 'Which card calls to you?'
      : 'Choose ' + spread.count + ' cards';
    this.els.drawCopy.textContent = spread.count === 1
      ? 'Tap the face-down card that pulls at you.'
      : 'Pick ' + spread.count + ' cards, in the order they call.';
    this.renderFan();
    this.updateDrawCount();
  }

  renderFan() {
    const fan = this.els.cardFan;
    fan.innerHTML = '';
    const n = this.fanDeck.length;
    const spreadAngle = Math.min(84, 12 * (n - 1));
    const self = this;
    this.fanDeck.forEach(function (item, i) {
      const t = n === 1 ? 0.5 : i / (n - 1);
      const angle = -spreadAngle / 2 + t * spreadAngle;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'fan-card';
      btn.setAttribute('role', 'listitem');
      btn.setAttribute('aria-label', 'Face-down card ' + (i + 1));
      btn.style.setProperty('--angle', angle + 'deg');
      btn.style.setProperty('--x', ((t - 0.5) * 28).toFixed(1) + 'px');
      btn.style.zIndex = String(i + 1);
      btn.style.animationDelay = i * 0.04 + 's';
      btn.innerHTML = '<div class="fan-card-face"><svg class="fan-card-pattern" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="18" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><path d="M40 22a14 14 0 1 0 0 20 11 11 0 0 1 0-20z" fill="currentColor" opacity="0.35"/></svg></div>';
      btn.addEventListener('pointerenter', function () {
        btn.style.zIndex = '30';
      });
      btn.addEventListener('pointerleave', function () {
        if (!btn.classList.contains('is-picked')) btn.style.zIndex = String(i + 1);
      });
      btn.addEventListener('click', function () {
        self.pickFanCard(item.uid, btn);
      });
      fan.appendChild(btn);
    });
  }

  pickFanCard(uid, btn) {
    const spread = SPREADS[this.spreadId];
    if (this.picked.find(function (p) { return p.uid === uid; })) return;
    if (this.picked.length >= spread.count) return;

    const item = this.fanDeck.find(function (f) { return f.uid === uid; });
    if (!item) return;

    btn.classList.add('is-picked');
    this.picked.push({
      uid: item.uid,
      card: item.card,
      isReversed: item.isReversed,
      positionName: spread.positions[this.picked.length]
    });
    this.updateDrawCount();

    if (this.picked.length >= spread.count) {
      const self = this;
      setTimeout(function () { self.openReveal(); }, 420);
    }
  }

  updateDrawCount() {
    const spread = SPREADS[this.spreadId];
    const left = spread.count - this.picked.length;
    this.els.drawCount.textContent = left <= 0
      ? 'Opening your reading…'
      : left === spread.count
        ? ''
        : left + ' remaining';
  }

  openReveal() {
    const spread = SPREADS[this.spreadId];
    this.note = '';
    this.els.readingQuestion.textContent = this.question
      ? '“' + this.question + '”'
      : 'An open reading';
    this.els.revealTitle.textContent = spread.label;
    this.renderReveal();
    this.showScreen('reveal');
  }

  renderReveal() {
    const wrap = this.els.revealCards;
    wrap.innerHTML = '';
    const self = this;
    this.picked.forEach(function (item, index) {
      const meaning = item.isReversed ? item.card.reversedMeaning : item.card.uprightMeaning;
      const el = document.createElement('article');
      el.className = 'revealed';
      el.style.animationDelay = index * 0.18 + 's';
      el.innerHTML =
        '<div class="revealed-position">' + escapeHtml(item.positionName) + '</div>' +
        '<button type="button" class="tarot-card ' + (item.isReversed ? 'is-reversed' : '') + '" data-idx="' + index + '" aria-label="Reveal ' + escapeHtml(displayName(item.card.name)) + '">' +
          '<div class="tarot-card-inner">' +
            '<div class="card-side card-back-side">' +
              '<svg width="48" height="48" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
                '<circle cx="32" cy="32" r="18" stroke="currentColor" stroke-width="1.2" opacity="0.7"/>' +
                '<path d="M40 22a14 14 0 1 0 0 20 11 11 0 0 1 0-20z" fill="currentColor" opacity="0.35"/>' +
              '</svg>' +
            '</div>' +
            '<div class="card-side card-front-side">' +
              '<div class="card-name">' + escapeHtml(displayName(item.card.name)) + '</div>' +
              '<div class="card-art">' + cardSvg(item.card, 56) + '</div>' +
              '<div class="card-orient">' + (item.isReversed ? 'Reversed' : 'Upright') + '</div>' +
            '</div>' +
          '</div>' +
        '</button>' +
        '<div class="revealed-summary">' +
          '<h3>' + escapeHtml(displayName(item.card.name)) + '</h3>' +
          '<p>' + escapeHtml(meaning) + '</p>' +
          '<button type="button" class="btn-details" data-idx="' + index + '">Full reading</button>' +
        '</div>';
      wrap.appendChild(el);

      const cardBtn = el.querySelector('.tarot-card');
      setTimeout(function () { cardBtn.classList.add('is-flipped'); }, 280 + index * 320);

      cardBtn.addEventListener('click', function () { self.openCardSheet(index); });
      el.querySelector('.btn-details').addEventListener('click', function () { self.openCardSheet(index); });
    });
  }

  openCardSheet(index) {
    const item = this.picked[index];
    if (!item) return;
    const meaning = item.isReversed ? item.card.reversedMeaning : item.card.uprightMeaning;
    document.getElementById('sheet-art').innerHTML = cardSvg(item.card, 72);
    document.getElementById('sheet-position').textContent = item.positionName;
    document.getElementById('sheet-title').textContent = displayName(item.card.name);
    document.getElementById('sheet-meta').textContent =
      (item.isReversed ? 'Reversed' : 'Upright') + ' · ' + item.card.element + ' · ' + item.card.arcana + ' arcana';
    document.getElementById('sheet-keywords').innerHTML = item.card.keywords
      .map(function (k) { return '<span>' + escapeHtml(k) + '</span>'; })
      .join('');
    document.getElementById('sheet-meaning').textContent = meaning;
    document.getElementById('sheet-description').textContent = item.card.description;
    document.getElementById('sheet-symbolism').textContent = item.card.symbolism;
    this.els.cardSheet.removeAttribute('hidden');
  }

  closeCardSheet() {
    this.els.cardSheet.setAttribute('hidden', '');
  }

  openNoteSheet() {
    this.els.noteInput.value = this.note;
    this.els.noteSheet.removeAttribute('hidden');
    this.els.noteInput.focus();
  }

  closeNoteSheet() {
    this.els.noteSheet.setAttribute('hidden', '');
  }

  saveNoteFromSheet() {
    this.note = this.els.noteInput.value.trim();
    this.closeNoteSheet();
  }

  keepReading() {
    const spread = SPREADS[this.spreadId];
    const record = {
      id: 'r_' + Date.now(),
      date: new Date().toLocaleString('en-US', {
        month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
      }),
      spread: spread.title,
      question: this.question || 'Open reading',
      note: this.note,
      moon: moonPhaseLabel(),
      cards: this.picked.map(function (p) {
        return {
          name: p.card.name,
          reversed: p.isReversed,
          position: p.positionName
        };
      })
    };
    this.history.unshift(record);
    if (this.history.length > 30) this.history.length = 30;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.history));
    this.renderJournal();
    this.showScreen('journal');
  }

  loadJournal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this.history = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(this.history)) this.history = [];
    } catch (e) {
      this.history = [];
    }
  }

  renderJournal() {
    const list = this.els.journalList;
    if (!this.history.length) {
      list.innerHTML = '<p class="journal-empty">No readings kept yet. Begin when you are ready.</p>';
      return;
    }
    list.innerHTML = this.history.map(function (rec) {
      return (
        '<article class="journal-item">' +
          '<div class="journal-item-head">' +
            '<span>' + escapeHtml(rec.spread) + ' · ' + escapeHtml(rec.moon || '') + '</span>' +
            '<span>' + escapeHtml(rec.date) + '</span>' +
          '</div>' +
          '<q>' + escapeHtml(rec.question) + '</q>' +
          '<div class="journal-tags">' +
            rec.cards.map(function (c) {
              return '<span class="journal-tag">' + escapeHtml(displayName(c.name)) + (c.reversed ? ' (rev)' : '') + '</span>';
            }).join('') +
          '</div>' +
          (rec.note ? '<p class="journal-note">' + escapeHtml(rec.note) + '</p>' : '') +
        '</article>'
      );
    }).join('');
  }

  clearJournal() {
    if (!this.history.length) return;
    if (!confirm('Clear your LUNÉ journal?')) return;
    this.history = [];
    localStorage.removeItem(STORAGE_KEY);
    this.renderJournal();
  }

  resetToIntention() {
    this.picked = [];
    this.note = '';
    this.els.question.value = this.question;
    this.showScreen('intention');
  }

  initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let w = 0;
    let h = 0;
    let raf;

    const resize = function () {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(140, Math.floor((w * h) / 12000));
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h * 0.75,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random() * 0.6 + 0.15,
          s: Math.random() * 0.4 + 0.1,
          p: Math.random() * Math.PI * 2
        });
      }
    };

    const draw = function (t) {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const twinkle = 0.55 + Math.sin(t * 0.001 * star.s + star.p) * 0.45;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(232, 235, 228,' + (star.a * twinkle) + ')';
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new LuneApp();
});
