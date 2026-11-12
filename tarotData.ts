export interface TarotCard {
  id: string;
  name: string;
  number: number;
  arcana: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  element: string;
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  description: string;
  symbolism: string;
}

export const TAROT_CARDS: TarotCard[] = [
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
