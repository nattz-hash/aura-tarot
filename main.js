const TAROT_CARDS = [
  {
    "id": "fool",
    "name": "0. The Fool",
    "number": 0,
    "arcana": "major",
    "element": "Air",
    "keywords": [
      "New beginnings",
      "Innocence",
      "Spontaneity",
      "Free spirit"
    ],
    "uprightMeaning": "Embarking on a new journey, taking a leap of faith, embracing innocence and infinite potential.",
    "reversedMeaning": "Recklessness, risk-taking, hesitation, foolishness, naivety.",
    "description": "A youth in a floral tunic steps to the cliff edge with a white rose, a small dog at his heels, and the sun at his back.",
    "symbolism": "The white rose is purity of motive; the dog is loyalty and instinct trying to keep him attentive as he steps out.",
    "image": "cards/fool.webp"
  },
  {
    "id": "magician",
    "name": "1. The Magician",
    "number": 1,
    "arcana": "major",
    "element": "Mercury",
    "keywords": [
      "Manifestation",
      "Resourcefulness",
      "Power",
      "Inspired action"
    ],
    "uprightMeaning": "You have all the tools and resources you need to manifest your desires into reality.",
    "reversedMeaning": "Manipulation, poor planning, untapped talents, illusion, trickery.",
    "description": "The Magician stands before a table of the four suit signs, one hand raised to the sky and one pointing to the earth.",
    "symbolism": "The lemniscate above him is endless skill; the four tools mean the means are already on the table. As above, so below.",
    "image": "cards/magician.webp"
  },
  {
    "id": "high_priestess",
    "name": "2. The High Priestess",
    "number": 2,
    "arcana": "major",
    "element": "Moon",
    "keywords": [
      "Intuition",
      "Sacred knowledge",
      "Divine feminine",
      "Subconscious"
    ],
    "uprightMeaning": "Listen to your inner voice and intuition. Secrets are being revealed; look beneath the surface.",
    "reversedMeaning": "Secrets, disconnected intuition, superficiality, hidden agendas.",
    "description": "She sits between a black pillar and a white one, a scroll in her lap, a pomegranate veil and a crescent moon behind her.",
    "symbolism": "The pillars mark the threshold of what is known; the partly hidden scroll is knowledge that is not yet meant to be spoken.",
    "image": "cards/high-priestess.webp"
  },
  {
    "id": "empress",
    "name": "3. The Empress",
    "number": 3,
    "arcana": "major",
    "element": "Venus",
    "keywords": [
      "Fertility",
      "Abundance",
      "Nurturing",
      "Nature",
      "Creativity"
    ],
    "uprightMeaning": "A period of great abundance, comfort, creativity, and deep connection with the natural world.",
    "reversedMeaning": "Creative block, dependence on others, emptiness, smothering attention.",
    "description": "The Empress reclines in a wheat field in a starry crown, a heart-shaped shield of Venus resting beside a flowing stream.",
    "symbolism": "The wheat is ripeness; the shield of Venus is love as a creative power, not only a feeling.",
    "image": "cards/empress.webp"
  },
  {
    "id": "emperor",
    "name": "4. The Emperor",
    "number": 4,
    "arcana": "major",
    "element": "Aries",
    "keywords": [
      "Authority",
      "Structure",
      "Control",
      "Establishment",
      "Leadership"
    ],
    "uprightMeaning": "Taking charge with discipline, establishing order, setting clear boundaries, and leading with wisdom.",
    "reversedMeaning": "Tyranny, rigidity, abuse of power, lack of discipline, inflexibility.",
    "description": "The Emperor sits on a stone throne carved with rams, armor beneath his robe, mountains hard and bare behind him.",
    "symbolism": "The ram heads are Aries and will; the stone throne is order that does not move when feelings do.",
    "image": "cards/emperor.webp"
  },
  {
    "id": "hierophant",
    "name": "5. The Hierophant",
    "number": 5,
    "arcana": "major",
    "element": "Taurus",
    "keywords": [
      "Spiritual wisdom",
      "Tradition",
      "Institutions",
      "Guidance"
    ],
    "uprightMeaning": "Following spiritual traditions, seeking mentorship, conforming to established social structures.",
    "reversedMeaning": "Rebellion, unconventional beliefs, challenging the status quo, dogma.",
    "description": "The Hierophant sits between temple pillars, hand raised in blessing, two acolytes kneeling and crossed keys at his feet.",
    "symbolism": "The triple crown is authority over body, mind, and spirit; the keys are the teaching that unlocks a tradition.",
    "image": "cards/hierophant.webp"
  },
  {
    "id": "lovers",
    "name": "6. The Lovers",
    "number": 6,
    "arcana": "major",
    "element": "Gemini",
    "keywords": [
      "Love",
      "Harmony",
      "Vulnerability",
      "Aligning values",
      "Choices"
    ],
    "uprightMeaning": "Deep emotional connections, soulmate relationships, and crucial choices aligned with your core values.",
    "reversedMeaning": "Disharmony, misaligned values, broken trust, difficult choices avoided.",
    "description": "An angel blesses a naked man and woman in a garden, the Tree of Knowledge and a mountain of fire behind them.",
    "symbolism": "The angel is a choice witnessed from above; the two trees are desire and consequence standing on either side.",
    "image": "cards/lovers.webp"
  },
  {
    "id": "chariot",
    "name": "7. The Chariot",
    "number": 7,
    "arcana": "major",
    "element": "Cancer",
    "keywords": [
      "Willpower",
      "Determination",
      "Success",
      "Control",
      "Momentum"
    ],
    "uprightMeaning": "Overcoming obstacles through sheer focus, discipline, and unwavering determination.",
    "reversedMeaning": "Lack of control, lack of direction, opposition, scattered energy.",
    "description": "An armored figure rides a chariot under a starry canopy, drawn by a black sphinx and a white one.",
    "symbolism": "The sphinxes pull in different tempers; the charioteer has no reins, only the will to hold them to one road.",
    "image": "cards/chariot.webp"
  },
  {
    "id": "strength",
    "name": "8. Strength",
    "number": 8,
    "arcana": "major",
    "element": "Leo",
    "keywords": [
      "Courage",
      "Patience",
      "Compassion",
      "Inner power",
      "Tame ego"
    ],
    "uprightMeaning": "Mastering strong emotions and challenges with gentle compassion, inner fortitude, and calm confidence.",
    "reversedMeaning": "Self-doubt, weakness, raw emotion, insecurity, lack of self-control.",
    "description": "A calm woman in white closes a lion's mouth with her hands, an infinity sign hovering over her head.",
    "symbolism": "The infinity sign is spirit that does not tire; the lion yields to gentleness, not to force.",
    "image": "cards/strength.webp"
  },
  {
    "id": "hermit",
    "name": "9. The Hermit",
    "number": 9,
    "arcana": "major",
    "element": "Virgo",
    "keywords": [
      "Soul-searching",
      "Introspection",
      "Solitude",
      "Inner guidance"
    ],
    "uprightMeaning": "Stepping back from the noise of the world to seek inner wisdom, truth, and spiritual clarity.",
    "reversedMeaning": "Isolation, loneliness, withdrawal, losing your way, paranoia.",
    "description": "An old man in a grey cloak stands on a mountain peak, lantern raised, staff in his other hand.",
    "symbolism": "The six-pointed star in the lantern is a light he carries for the path, and for anyone following behind.",
    "image": "cards/hermit.webp"
  },
  {
    "id": "wheel_of_fortune",
    "name": "10. Wheel of Fortune",
    "number": 10,
    "arcana": "major",
    "element": "Jupiter",
    "keywords": [
      "Good luck",
      "Karma",
      "Life cycles",
      "Destiny",
      "Turning point"
    ],
    "uprightMeaning": "Favorable changes in destiny, sudden good fortune, and understanding the cyclical nature of life.",
    "reversedMeaning": "Bad luck, negative cycles, unexpected setbacks, resisting change.",
    "description": "A great wheel turns in the clouds, marked with letters and symbols, a sphinx at the top, a serpent descending, and a jackal-headed figure rising.",
    "symbolism": "The four living creatures in the corners read the wheel but do not stop it; fortune turns whether or not you consent.",
    "image": "cards/wheel-of-fortune.webp"
  },
  {
    "id": "justice",
    "name": "11. Justice",
    "number": 11,
    "arcana": "major",
    "element": "Libra",
    "keywords": [
      "Fairness",
      "Truth",
      "Cause and effect",
      "Law",
      "Accountability"
    ],
    "uprightMeaning": "Fair decisions, objective truth, balance, accountability, and karmic justice prevailing.",
    "reversedMeaning": "Dishonesty, unfairness, bias, avoiding accountability, corruption.",
    "description": "A crowned figure sits between pillars, sword upright in one hand and scales balanced in the other.",
    "symbolism": "The sword is a clear decision; the scales are the facts, weighed without favoring the hand that holds them.",
    "image": "cards/justice.webp"
  },
  {
    "id": "hanged_man",
    "name": "12. The Hanged Man",
    "number": 12,
    "arcana": "major",
    "element": "Neptune",
    "keywords": [
      "Surrender",
      "New perspective",
      "Letting go",
      "Pause",
      "Sacrifice"
    ],
    "uprightMeaning": "Viewing situations from a completely different angle by surrendering control and pausing.",
    "reversedMeaning": "Stalling, needless sacrifice, stubbornness, martyrdom without purpose.",
    "description": "A man hangs by one ankle from a living tau of wood, the free leg crossed, a halo of light around his head.",
    "symbolism": "The halo is insight that arrives only when he stops struggling; the living wood means the pause itself is still alive.",
    "image": "cards/hanged-man.webp"
  },
  {
    "id": "death",
    "name": "13. Death",
    "number": 13,
    "arcana": "major",
    "element": "Scorpio",
    "keywords": [
      "Transformation",
      "End of cycle",
      "Transition",
      "Rebirth",
      "Change"
    ],
    "uprightMeaning": "Profound personal transformation, shedding old skin, and welcoming new beginnings.",
    "reversedMeaning": "Resisting change, stagnation, fear of moving on, holding onto the past.",
    "description": "A skeleton in armor rides a white horse with a black banner and a white rose, while a sun rises between two towers.",
    "symbolism": "The rose on the black flag is life inside the ending; the rising sun is the day that belongs to what comes after.",
    "image": "cards/death.webp"
  },
  {
    "id": "temperance",
    "name": "14. Temperance",
    "number": 14,
    "arcana": "major",
    "element": "Sagittarius",
    "keywords": [
      "Balance",
      "Moderation",
      "Patience",
      "Purpose",
      "Harmony"
    ],
    "uprightMeaning": "Finding inner peace through moderation, blending contrasting elements, and maintaining calm patience.",
    "reversedMeaning": "Imbalance, excess, clashing energies, lack of patience, hasty choices.",
    "description": "An angel with one foot in water and one on land pours liquid between two cups, irises at the water's edge and a path leading to a crown of light.",
    "symbolism": "The mixed waters are two natures made one; the path says the blending is going somewhere, not only staying calm.",
    "image": "cards/temperance.webp"
  },
  {
    "id": "devil",
    "name": "15. The Devil",
    "number": 15,
    "arcana": "major",
    "element": "Capricorn",
    "keywords": [
      "Shadow self",
      "Attachment",
      "Addiction",
      "Restriction",
      "Materialism"
    ],
    "uprightMeaning": "Recognizing self-imposed limiting beliefs, toxic attachments, and breaking free from inner chains.",
    "reversedMeaning": "Reclaiming personal power, breaking addiction, freedom, release from bondage.",
    "description": "A horned figure perches on a block, inverted torch in hand, while a chained man and woman stand beneath an inverted pentagram.",
    "symbolism": "The chains are loose enough to lift off. The bondage in this picture is maintained, not locked.",
    "image": "cards/devil.webp"
  },
  {
    "id": "tower",
    "name": "16. The Tower",
    "number": 16,
    "arcana": "major",
    "element": "Mars",
    "keywords": [
      "Sudden upheaval",
      "Revelation",
      "Awakening",
      "Chaos",
      "Breakdown"
    ],
    "uprightMeaning": "A sudden, shocking disruption that shatters false foundations to reveal ultimate truth.",
    "reversedMeaning": "Disaster avoided narrowly, delaying inevitable collapse, fear of suffering.",
    "description": "Lightning strikes a crown from a stone tower and two figures fall through a rain of fire.",
    "symbolism": "The crown is a false top knocked loose; the lightning is truth that does not negotiate with the structure.",
    "image": "cards/tower.webp"
  },
  {
    "id": "star",
    "name": "17. The Star",
    "number": 17,
    "arcana": "major",
    "element": "Aquarius",
    "keywords": [
      "Hope",
      "Faith",
      "Inspiration",
      "Healing",
      "Serenity"
    ],
    "uprightMeaning": "Renewed hope, spiritual blessings, profound healing, and deep trust in the universe.",
    "reversedMeaning": "Loss of faith, despair, discouragement, feeling disconnected from hope.",
    "description": "A kneeling woman pours one jug into a pool and one onto the land, under a great star and seven smaller ones, a bird in a tree behind her.",
    "symbolism": "One stream returns to the unconscious and one waters the world; hope here is a practice, not a mood.",
    "image": "cards/star.webp"
  },
  {
    "id": "moon",
    "name": "18. The Moon",
    "number": 18,
    "arcana": "major",
    "element": "Pisces",
    "keywords": [
      "Illusion",
      "Fear",
      "Anxiety",
      "Subconscious",
      "Intuition"
    ],
    "uprightMeaning": "Navigating uncertainty, decoding dreams, facing deep-seated fears, and trusting your intuition.",
    "reversedMeaning": "Overcoming fear, releasing anxiety, clarity emerging, truths revealed.",
    "description": "A moon with a face looks down on a path that runs between two towers, a dog and a wolf howling, a crayfish climbing from the water.",
    "symbolism": "The crayfish is a fear emerging from the deep; the path continues between the towers even when the light is uncertain.",
    "image": "cards/moon.webp"
  },
  {
    "id": "sun",
    "name": "19. The Sun",
    "number": 19,
    "arcana": "major",
    "element": "Sun",
    "keywords": [
      "Joy",
      "Success",
      "Vitality",
      "Celebration",
      "Positivity"
    ],
    "uprightMeaning": "Radiant happiness, unbridled success, abundant vitality, warmth, and brilliant clarity.",
    "reversedMeaning": "Temporary sadness, overly optimistic outlook, dimmed joy, minor delays.",
    "description": "A naked child rides a white horse beneath a sun with a face, sunflowers tall behind a garden wall.",
    "symbolism": "The wall is a limit already passed; the sunflowers turn toward a joy that does not need to be explained.",
    "image": "cards/sun.webp"
  },
  {
    "id": "judgement",
    "name": "20. Judgement",
    "number": 20,
    "arcana": "major",
    "element": "Pluto",
    "keywords": [
      "Rebirth",
      "Inner calling",
      "Absolution",
      "Awakening",
      "Forgiveness"
    ],
    "uprightMeaning": "Hearing a higher calling, evaluating your life path with honesty, and stepping into your true purpose.",
    "reversedMeaning": "Self-doubt, harsh self-criticism, ignoring the call, regret, hesitation.",
    "description": "An angel blows a trumpet with a flag of a cross, and figures rise from open coffins with their arms lifted.",
    "symbolism": "The trumpet is a call you recognize as yours; rising is answering it, not being dragged.",
    "image": "cards/judgement.webp"
  },
  {
    "id": "world",
    "name": "21. The World",
    "number": 21,
    "arcana": "major",
    "element": "Saturn",
    "keywords": [
      "Completion",
      "Achievement",
      "Wholeness",
      "Travel",
      "Fulfillment"
    ],
    "uprightMeaning": "Successful completion of a major life cycle, achieving mastery, celebration, and integration.",
    "reversedMeaning": "Lack of closure, feeling incomplete, delayed success, shortcuts.",
    "description": "A dancer wrapped in a violet sash moves inside a green wreath, a wand in each hand, an angel, eagle, lion, and bull in the four corners.",
    "symbolism": "The wreath is a cycle closed; the four creatures are the whole of life included, not one part left outside.",
    "image": "cards/world.webp"
  },
  {
    "id": "ace_of_wands",
    "name": "Ace of Wands",
    "number": 1,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Inspiration",
      "Spark",
      "New venture",
      "Creative will"
    ],
    "uprightMeaning": "A living spark of will. A project, passion, or idea is being handed to you to grow.",
    "reversedMeaning": "The spark stalls. Delay, false starts, or energy with nowhere to go.",
    "description": "A hand from a cloud offers a sprouting wand over a river and a distant castle.",
    "symbolism": "Leaves breaking from the wand are raw creative fire; the castle is the life this spark could build.",
    "image": "cards/ace-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "two_of_wands",
    "name": "Two of Wands",
    "number": 2,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Planning",
      "Future",
      "Discovery",
      "Ambition"
    ],
    "uprightMeaning": "You hold a wider world in your hands. The choice is between the ground you have and the horizon.",
    "reversedMeaning": "Fear of leaving, plans that stay on the balcony, or reluctance to risk what is already yours.",
    "description": "A man on a battlement holds a small globe, one wand in hand and another fixed beside him, sea and hills beyond.",
    "symbolism": "The globe is the unclaimed world; the second wand is the home he would have to leave in order to meet it.",
    "image": "cards/two-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "three_of_wands",
    "name": "Three of Wands",
    "number": 3,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Expansion",
      "Foresight",
      "Enterprise",
      "Horizon"
    ],
    "uprightMeaning": "Ships you sent are on the water. Look to the horizon; the venture is already underway.",
    "reversedMeaning": "Delays, short sight, or growth that has not yet left the harbor.",
    "description": "A figure stands on a cliff with three wands, watching ships cross a golden sea.",
    "symbolism": "The planted wands are a stake in the future; the ships are effort already in motion.",
    "image": "cards/three-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "four_of_wands",
    "name": "Four of Wands",
    "number": 4,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Celebration",
      "Homecoming",
      "Milestone",
      "Welcome"
    ],
    "uprightMeaning": "A pause for joy. A milestone, a gathering, a welcome home.",
    "reversedMeaning": "The celebration is delayed, the foundation feels unsteady, or the joy stays incomplete.",
    "description": "Two figures raise bouquets under a garland strung between four flowering wands, a castle behind them.",
    "symbolism": "The flowered canopy is a threshold of welcome; the castle is the home being celebrated.",
    "image": "cards/four-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "five_of_wands",
    "name": "Five of Wands",
    "number": 5,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Conflict",
      "Competition",
      "Struggle",
      "Testing"
    ],
    "uprightMeaning": "Five wills clash. Competition, disagreement, or the rough play of many ideas at once.",
    "reversedMeaning": "The fight winds down, conflict is avoided, or the struggle turns inward.",
    "description": "Five youths swing wands at one another in a field, none of them clearly winning.",
    "symbolism": "The staves cross in contest, not in slaughter. Friction here is a test of spirit.",
    "image": "cards/five-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "six_of_wands",
    "name": "Six of Wands",
    "number": 6,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Victory",
      "Recognition",
      "Progress",
      "Confidence"
    ],
    "uprightMeaning": "Public success. You come through seen, supported, and wearing the laurel.",
    "reversedMeaning": "A hollow victory, recognition delayed, or pride that has outrun the achievement.",
    "description": "A rider crowned with laurel moves through a crowd, a wand with a wreath held high.",
    "symbolism": "The laurel is earned recognition; the people on foot are the public that carries the win.",
    "image": "cards/six-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "seven_of_wands",
    "name": "Seven of Wands",
    "number": 7,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Defense",
      "Courage",
      "Standing ground",
      "Challenge"
    ],
    "uprightMeaning": "You hold the high ground. Defend what you have built against the pressure below.",
    "reversedMeaning": "Exhaustion, giving up the advantage, or feeling too outnumbered to continue.",
    "description": "A man on a hill brandishes one wand against six more rising from below.",
    "symbolism": "The uneven ground is the advantage of conviction; the six wands are competing claims.",
    "image": "cards/seven-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "eight_of_wands",
    "name": "Eight of Wands",
    "number": 8,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Speed",
      "Movement",
      "Messages",
      "Momentum"
    ],
    "uprightMeaning": "Things move quickly now. News, travel, and swift progress arrive almost together.",
    "reversedMeaning": "Scattered haste, delays, miscommunication, or an arrow that misses.",
    "description": "Eight wands fly through open sky above a green river landscape, none of them held.",
    "symbolism": "Flight without a hand is momentum already released; the clear air is an open path.",
    "image": "cards/eight-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "nine_of_wands",
    "name": "Nine of Wands",
    "number": 9,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Resilience",
      "Persistence",
      "Boundaries",
      "Last effort"
    ],
    "uprightMeaning": "Wounded and still standing. One more guarded effort will carry you through.",
    "reversedMeaning": "Defensiveness, fatigue, or walls built so high that help cannot enter.",
    "description": "A bandaged man leans on a wand and watches, eight more wands planted like a fence behind him.",
    "symbolism": "The bandage is the cost already paid; the row of wands is the line he will not abandon.",
    "image": "cards/nine-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "ten_of_wands",
    "name": "Ten of Wands",
    "number": 10,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Burden",
      "Responsibility",
      "Hard work",
      "Overload"
    ],
    "uprightMeaning": "Success has weight. You carry too much toward the town, and the load is yours to finish or to set down.",
    "reversedMeaning": "Dropping what is not yours, or collapsing under a burden carried too long.",
    "description": "A figure bows under a bundle of ten wands, walking toward a distant town.",
    "symbolism": "The wands hide the path from his eyes; the town is the goal that makes the weight feel necessary.",
    "image": "cards/ten-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "page_of_wands",
    "name": "Page of Wands",
    "number": 11,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Curiosity",
      "Enthusiasm",
      "Messenger",
      "Exploration"
    ],
    "uprightMeaning": "A young, eager spark. News of a venture, a creative impulse, the courage to try.",
    "reversedMeaning": "Scattered ideas, impatient starts, or news that disappoints.",
    "description": "A youth in a feathered cap stands in a desert, studying a sprouting wand.",
    "symbolism": "The desert is untamed fire; the gaze on the wand is a first fascination, not yet a plan.",
    "image": "cards/page-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "knight_of_wands",
    "name": "Knight of Wands",
    "number": 12,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Action",
      "Adventure",
      "Passion",
      "Departure"
    ],
    "uprightMeaning": "Bold movement. Charge toward what excites you, and do not linger.",
    "reversedMeaning": "Reckless haste, scattered passion, or a pursuit abandoned mid-gallop.",
    "description": "An armored rider on a rearing horse lifts a flowering wand, pyramids in the desert behind him.",
    "symbolism": "The rearing horse is fire barely reined; the plumes are speed and display together.",
    "image": "cards/knight-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "queen_of_wands",
    "name": "Queen of Wands",
    "number": 13,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Confidence",
      "Warmth",
      "Charisma",
      "Independence"
    ],
    "uprightMeaning": "Steady fire. Warm authority, creative confidence, and a presence people move toward.",
    "reversedMeaning": "Jealousy, demanding warmth, or confidence turned inward until it cools.",
    "description": "A queen sits on a lion-carved throne with a sunflower and a wand, a black cat at her feet.",
    "symbolism": "The sunflower turns toward her fire; the cat is independence that stays near without being owned.",
    "image": "cards/queen-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "king_of_wands",
    "name": "King of Wands",
    "number": 14,
    "arcana": "minor",
    "element": "Fire",
    "keywords": [
      "Leadership",
      "Vision",
      "Enterprise",
      "Bold direction"
    ],
    "uprightMeaning": "A leader of vision. Direct the fire of others with courage, honesty, and a long view.",
    "reversedMeaning": "Impatient rule, arrogance, or a vision that burns the people meant to carry it.",
    "description": "A king in a salamander-patterned robe sits with a sprouting wand, a lion beside the throne.",
    "symbolism": "The salamander lives in the flame; this is will that can endure the heat it creates.",
    "image": "cards/king-of-wands.webp",
    "suit": "wands"
  },
  {
    "id": "ace_of_cups",
    "name": "Ace of Cups",
    "number": 1,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "New love",
      "Emotional opening",
      "Compassion",
      "Intuition"
    ],
    "uprightMeaning": "A cup overflows. New feeling, love, or spiritual openness is being offered.",
    "reversedMeaning": "Emotion held back, a love that cannot pour, or a heart closed after being too full.",
    "description": "A hand from a cloud holds a cup overflowing in five streams, a dove descending with a marked wafer.",
    "symbolism": "The five streams are the senses waking into feeling; the dove is grace entering the heart.",
    "image": "cards/ace-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "two_of_cups",
    "name": "Two of Cups",
    "number": 2,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Partnership",
      "Mutual attraction",
      "Union",
      "Reciprocity"
    ],
    "uprightMeaning": "A meeting of equals. Partnership, reconciliation, or love offered and returned.",
    "reversedMeaning": "Imbalance, a broken accord, or attraction that is not mutual.",
    "description": "A man and a woman pledge their cups while a caduceus and a winged lion rise between them.",
    "symbolism": "The lion-headed caduceus is passion held inside a bond; the exchanged cups are equal feeling.",
    "image": "cards/two-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "three_of_cups",
    "name": "Three of Cups",
    "number": 3,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Friendship",
      "Celebration",
      "Community",
      "Joy"
    ],
    "uprightMeaning": "Raise a cup with the people who know you. Friendship, shared joy, a harvest of company.",
    "reversedMeaning": "Gossip, overindulgence, or a circle that leaves someone outside.",
    "description": "Three women dance in a garden, cups lifted, fruit and flowers at their feet.",
    "symbolism": "The cups meet in the middle. Joy in this card is something made together.",
    "image": "cards/three-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "four_of_cups",
    "name": "Four of Cups",
    "number": 4,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Apathy",
      "Contemplation",
      "Discontent",
      "Refusal"
    ],
    "uprightMeaning": "A gift is offered and you are not looking. Weariness, withdrawal, or the need to ask what you actually want.",
    "reversedMeaning": "You lift your eyes again. A new interest, or the end of a sulk.",
    "description": "A young man sits under a tree, arms crossed before three cups, ignoring a fourth offered from a cloud.",
    "symbolism": "The three cups are what he already has; the fourth is the chance he is too inward to see.",
    "image": "cards/four-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "five_of_cups",
    "name": "Five of Cups",
    "number": 5,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Loss",
      "Grief",
      "Regret",
      "What remains"
    ],
    "uprightMeaning": "Three cups have spilled. Mourn them, then notice the two still standing behind you.",
    "reversedMeaning": "Grief begins to move. Acceptance, forgiveness, or a turn back toward what remains.",
    "description": "A cloaked figure stares at three spilled cups while two stand upright behind, a bridge in the distance.",
    "symbolism": "The black cloak is absorption in the loss; the bridge is a way onward once the gaze can turn.",
    "image": "cards/five-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "six_of_cups",
    "name": "Six of Cups",
    "number": 6,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Nostalgia",
      "Childhood",
      "Kindness",
      "Memory"
    ],
    "uprightMeaning": "A kindness from the past returns. Memory, childhood, a simple gift given freely.",
    "reversedMeaning": "Living too long in the past, or a sweetness you have outgrown.",
    "description": "In a courtyard of old houses, a child offers a cup of white flowers to a smaller child.",
    "symbolism": "Flowers kept in the cups are memory still alive; the courtyard is the home you came from.",
    "image": "cards/six-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "seven_of_cups",
    "name": "Seven of Cups",
    "number": 7,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Illusion",
      "Choices",
      "Fantasy",
      "Temptation"
    ],
    "uprightMeaning": "Many glittering options, not all of them real. Imagination is rich; discernment is required.",
    "reversedMeaning": "The fog clears. A choice is made, or a fantasy is set down.",
    "description": "A silhouette faces seven cups in cloud, holding a face, a veiled figure, a snake, a castle, jewels, a wreath, and a dragon.",
    "symbolism": "Each cup is a wish. The cloud means none of them has touched the ground yet.",
    "image": "cards/seven-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "eight_of_cups",
    "name": "Eight of Cups",
    "number": 8,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Walking away",
      "Seeking more",
      "Withdrawal",
      "Quest"
    ],
    "uprightMeaning": "You leave cups that no longer satisfy and walk toward the mountains under the moon.",
    "reversedMeaning": "Fear of leaving, a return to the same cups, or drifting without a true quest.",
    "description": "A cloaked figure walks away from eight stacked cups toward bare mountains, the moon above.",
    "symbolism": "The cups are orderly and still abandoned. The moon is the feeling that calls the figure on.",
    "image": "cards/eight-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "nine_of_cups",
    "name": "Nine of Cups",
    "number": 9,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Contentment",
      "Satisfaction",
      "Wish fulfilled",
      "Pleasure"
    ],
    "uprightMeaning": "The wish card. Sensual contentment, a desire granted, satisfaction you can sit inside.",
    "reversedMeaning": "Smugness, empty pleasure, or a wish that did not feed you as you hoped.",
    "description": "A pleased man sits with folded arms before a curved shelf of nine cups.",
    "symbolism": "The cups are displayed like a wish already won; his seat is the comfort of having enough.",
    "image": "cards/nine-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "ten_of_cups",
    "name": "Ten of Cups",
    "number": 10,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Harmony",
      "Family",
      "Belonging",
      "Home"
    ],
    "uprightMeaning": "A rainbow of cups over a home. Lasting happiness, kinship, emotional completion.",
    "reversedMeaning": "Discord at home, or a picture of happiness that does not match the life underneath.",
    "description": "A couple lifts their arms as two children dance, a rainbow of ten cups arching over a cottage.",
    "symbolism": "The rainbow is a promise kept; the cottage is joy made into a place to live.",
    "image": "cards/ten-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "page_of_cups",
    "name": "Page of Cups",
    "number": 11,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Sensitive news",
      "Imagination",
      "Wonder",
      "Tender message"
    ],
    "uprightMeaning": "A gentle, surprising message. Creative feeling, a crush, an invitation to listen inward.",
    "reversedMeaning": "Emotional immaturity, a message ignored, or fantasy mistaken for feeling.",
    "description": "A youth in a floral tunic stands by the sea, surprised by a fish rising from the cup.",
    "symbolism": "The fish is an unexpected feeling surfacing; the sea is the unconscious at his feet.",
    "image": "cards/page-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "knight_of_cups",
    "name": "Knight of Cups",
    "number": 12,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Romance",
      "Invitation",
      "Idealism",
      "Proposal"
    ],
    "uprightMeaning": "An offer carried with feeling. Romance, an invitation, art, or a proposal made in earnest.",
    "reversedMeaning": "Moodiness, an empty gesture, or idealism that will not cross the water.",
    "description": "A knight rides slowly, winged helmet above a cup, a river moving behind the horse.",
    "symbolism": "The calm horse is feeling under control; the wings are imagination leading the way.",
    "image": "cards/knight-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "queen_of_cups",
    "name": "Queen of Cups",
    "number": 13,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Compassion",
      "Intuition",
      "Emotional depth",
      "Empathy"
    ],
    "uprightMeaning": "Deep, quiet feeling. Empathy and dream life, the ability to hold others without losing yourself.",
    "reversedMeaning": "Overwhelmed emotion, entanglement, or intuition clouded by mood.",
    "description": "A queen sits at the edge of the sea holding a closed, ornate cup, water reaching her robes.",
    "symbolism": "The closed cup is an inner life she does not spill; the sea is feeling she can face and still remain seated.",
    "image": "cards/queen-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "king_of_cups",
    "name": "King of Cups",
    "number": 14,
    "arcana": "minor",
    "element": "Water",
    "keywords": [
      "Emotional balance",
      "Diplomacy",
      "Calm authority",
      "Compassion"
    ],
    "uprightMeaning": "Feeling held with steadiness. Wise counsel, calm in rough water, kindness with a spine.",
    "reversedMeaning": "Mood ruling the throne, manipulation, or withdrawal behind a calm face.",
    "description": "A king sits on a stone throne in the sea, cup in hand, a ship and a fish moving around him.",
    "symbolism": "The throne in the waves is mastery of feeling; he lets the ship and the fish pass without being thrown.",
    "image": "cards/king-of-cups.webp",
    "suit": "cups"
  },
  {
    "id": "ace_of_swords",
    "name": "Ace of Swords",
    "number": 1,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Clarity",
      "Breakthrough",
      "Truth",
      "New idea"
    ],
    "uprightMeaning": "A clean cut through confusion. A true idea, a necessary decision, mental clarity.",
    "reversedMeaning": "Confused thinking, a truth used as a weapon, or an idea that cannot leave the cloud.",
    "description": "A hand from a cloud holds an upright sword crowned with a wreath, mountains far below.",
    "symbolism": "The crown and palm are the victory of a clear mind; the mountains are truth without ornament.",
    "image": "cards/ace-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "two_of_swords",
    "name": "Two of Swords",
    "number": 2,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Stalemate",
      "Difficult choice",
      "Avoidance",
      "Truce"
    ],
    "uprightMeaning": "A refusal to look. Two options held in balance, a decision postponed.",
    "reversedMeaning": "The blindfold comes off. News arrives, or the stalemate breaks.",
    "description": "A blindfolded woman sits before the sea with two swords crossed, a crescent moon above her.",
    "symbolism": "The blindfold is chosen not-knowing; the crossed swords are a truce that cannot last.",
    "image": "cards/two-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "three_of_swords",
    "name": "Three of Swords",
    "number": 3,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Heartbreak",
      "Sorrow",
      "Separation",
      "Painful truth"
    ],
    "uprightMeaning": "A truth that hurts. Heartbreak, separation, or words that pierce.",
    "reversedMeaning": "Recovery begins. The sorrow is spoken, and the worst of it loosens.",
    "description": "Three swords pierce a heart against a sky of rain and cloud.",
    "symbolism": "The heart is the feeling; the swords are thoughts or words that would not stay outside it.",
    "image": "cards/three-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "four_of_swords",
    "name": "Four of Swords",
    "number": 4,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Rest",
      "Recovery",
      "Retreat",
      "Stillness"
    ],
    "uprightMeaning": "Lie down. Rest, retreat, and a truce with your own mind after strain.",
    "reversedMeaning": "Restlessness, returning too soon, or a withdrawal that has become avoidance.",
    "description": "A knight lies in effigy on a tomb in a stained-glass chapel, three swords on the wall and one beneath him.",
    "symbolism": "The still body is recovery; the sword set below is the mind laid down, not thrown away.",
    "image": "cards/four-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "five_of_swords",
    "name": "Five of Swords",
    "number": 5,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Conflict",
      "Hollow victory",
      "Defeat",
      "Winning at a cost"
    ],
    "uprightMeaning": "Someone has won and it does not feel clean. Scorn, loss, or a victory that isolates.",
    "reversedMeaning": "The fight is released. Amends, or walking away from a contest that was never worth it.",
    "description": "A smirking figure gathers abandoned swords while two others walk away under a torn sky.",
    "symbolism": "The collected swords are a win counted in other people's losses; the turned backs are the cost.",
    "image": "cards/five-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "six_of_swords",
    "name": "Six of Swords",
    "number": 6,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Transition",
      "Moving on",
      "Passage",
      "Leaving trouble"
    ],
    "uprightMeaning": "A quiet passage out of rough water. You are not finished healing, but you are leaving.",
    "reversedMeaning": "The crossing is delayed, baggage unfinished, or a return to the water you meant to leave.",
    "description": "A ferryman poles a boat carrying a huddled adult and child, six swords standing in the hull, toward calmer shore.",
    "symbolism": "The swords travel with them. This is passage, not the pretense that nothing is being carried.",
    "image": "cards/six-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "seven_of_swords",
    "name": "Seven of Swords",
    "number": 7,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Strategy",
      "Deception",
      "Stealth",
      "Cunning"
    ],
    "uprightMeaning": "Someone moves quietly with what they can carry. Cunning, a partial truth, or a plan made alone.",
    "reversedMeaning": "The sneak is exposed, or you choose a direct word over a clever exit.",
    "description": "A man tiptoes from an encampment with five swords, looking back, two swords left stuck in the ground.",
    "symbolism": "What he leaves behind is the part of the truth he could not take; the glance back is the risk of being seen.",
    "image": "cards/seven-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "eight_of_swords",
    "name": "Eight of Swords",
    "number": 8,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Restriction",
      "Self-limitation",
      "Helplessness",
      "Trapped thinking"
    ],
    "uprightMeaning": "Bound and blindfolded, yet the binds are loose and the way is not sealed. The trap is largely of the mind.",
    "reversedMeaning": "A new perspective. The blindfold loosens and a way out becomes thinkable.",
    "description": "A bound, blindfolded woman stands among eight swords in wet ground, a castle on a hill behind her.",
    "symbolism": "The swords do not close into a cage. The difficulty is real, and it is not as sealed as it feels.",
    "image": "cards/eight-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "nine_of_swords",
    "name": "Nine of Swords",
    "number": 9,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Anxiety",
      "Worry",
      "Night thoughts",
      "Guilt"
    ],
    "uprightMeaning": "The mind at night. Anxiety, regret, and fears that grow larger in the dark.",
    "reversedMeaning": "Dawn after the worst thoughts. Asking for help, or a fear that does not survive the morning.",
    "description": "A figure sits up in bed, face in their hands, nine swords ranked on the black wall.",
    "symbolism": "The quilt of roses and signs is the life still covering them; the swords are thoughts, not yet events.",
    "image": "cards/nine-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "ten_of_swords",
    "name": "Ten of Swords",
    "number": 10,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Ending",
      "Rock bottom",
      "Betrayal",
      "Release"
    ],
    "uprightMeaning": "An ending that cannot be argued with. Ruin, a final blow, and the strange relief of being done.",
    "reversedMeaning": "You have survived the worst. The ending has already happened, and recovery can begin.",
    "description": "A figure lies face down with ten swords in the back, a dark sky breaking to dawn over the water.",
    "symbolism": "Ten is more than enough. The gold at the horizon is the day that follows even this.",
    "image": "cards/ten-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "page_of_swords",
    "name": "Page of Swords",
    "number": 11,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Curiosity",
      "Vigilance",
      "Candor",
      "New ideas"
    ],
    "uprightMeaning": "A quick, restless mind. News, questions, a truth spoken before it is polished.",
    "reversedMeaning": "Gossip, hasty words, or watching that serves no one.",
    "description": "A youth on a windy height holds a sword and looks back, clouds and bent trees around.",
    "symbolism": "The wind is thought in motion; the backward glance is vigilance.",
    "image": "cards/page-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "knight_of_swords",
    "name": "Knight of Swords",
    "number": 12,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Ambition",
      "Speed",
      "Directness",
      "Charge"
    ],
    "uprightMeaning": "A swift, cutting advance. Speak and move quickly in the name of a clear idea.",
    "reversedMeaning": "Recklessness, a verbal attack, or speed with no aim.",
    "description": "An armored knight charges through wind-bent trees, sword raised, clouds racing with the horse.",
    "symbolism": "Nothing in the picture is waiting. The storm and the charge are the same weather.",
    "image": "cards/knight-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "queen_of_swords",
    "name": "Queen of Swords",
    "number": 13,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Honesty",
      "Clear boundaries",
      "Perception",
      "Direct speech"
    ],
    "uprightMeaning": "Clear sight and a clean boundary. Honest counsel, wit, and judgment without cruelty.",
    "reversedMeaning": "Coldness, biting judgment, or grief that has hardened into isolation.",
    "description": "A queen sits in profile on a high throne, sword upright, one hand raised, a clouded sky and a bird beside her.",
    "symbolism": "The raised hand is a boundary; the sword is speech that stays straight. She does not perform a warmth she does not feel.",
    "image": "cards/queen-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "king_of_swords",
    "name": "King of Swords",
    "number": 14,
    "arcana": "minor",
    "element": "Air",
    "keywords": [
      "Intellect",
      "Authority",
      "Truth",
      "Ethics"
    ],
    "uprightMeaning": "Mental authority. Fair judgment, clear principles, decisions made with the head and held to.",
    "reversedMeaning": "Tyranny of logic, manipulation, or a verdict used to dominate.",
    "description": "A king sits with a sword held upright, butterflies and clouds behind the throne.",
    "symbolism": "The upright sword is impartial judgment; the butterflies are thoughts he has ordered rather than crushed.",
    "image": "cards/king-of-swords.webp",
    "suit": "swords"
  },
  {
    "id": "ace_of_pentacles",
    "name": "Ace of Pentacles",
    "number": 1,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Opportunity",
      "Prosperity",
      "New resources",
      "Seed"
    ],
    "uprightMeaning": "A tangible beginning. Money, work, health, or a seed you can actually plant.",
    "reversedMeaning": "A missed opening, poor ground, or a gift that does not become real.",
    "description": "A hand from a cloud offers a gold pentacle over a lily garden and a flowering arch.",
    "symbolism": "The garden is wealth as something grown; the arch is a gate into a material life.",
    "image": "cards/ace-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "two_of_pentacles",
    "name": "Two of Pentacles",
    "number": 2,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Balance",
      "Adaptability",
      "Juggling",
      "Priorities"
    ],
    "uprightMeaning": "Two demands, one pair of hands. Adapt, and keep the rhythm while the sea moves.",
    "reversedMeaning": "Overcommitted, dropping one of the pieces, or a balance that has become strain.",
    "description": "A young man dances while juggling two pentacles bound by an infinity ribbon, ships rising and falling behind him.",
    "symbolism": "The ribbon is the endless exchange; the ships show that the ground itself is not still.",
    "image": "cards/two-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "three_of_pentacles",
    "name": "Three of Pentacles",
    "number": 3,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Craft",
      "Collaboration",
      "Skill",
      "Teamwork"
    ],
    "uprightMeaning": "Work made with others. Skill recognized, a plan agreed, craft taken seriously.",
    "reversedMeaning": "Poor teamwork, slack standards, or effort that is not yet good enough to show.",
    "description": "A craftsman on a bench consults a monk and an architect holding plans, inside a church of carved pentacles.",
    "symbolism": "The three pentacles in the arch are the work itself; the plans are intention held in common.",
    "image": "cards/three-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "four_of_pentacles",
    "name": "Four of Pentacles",
    "number": 4,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Security",
      "Control",
      "Conservation",
      "Possessiveness"
    ],
    "uprightMeaning": "Holding tight. Security, savings, and the fear of letting any of it go.",
    "reversedMeaning": "Loosening the grip. Generosity, or spending that risks the stability you built.",
    "description": "A crowned man clutches a pentacle to his chest, one under each foot and one on his crown, a city behind him.",
    "symbolism": "The coin on the head is identity fused with possession; the city is the life he will not spend.",
    "image": "cards/four-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "five_of_pentacles",
    "name": "Five of Pentacles",
    "number": 5,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Hardship",
      "Exclusion",
      "Poverty",
      "Seeking help"
    ],
    "uprightMeaning": "Left out in the cold. Material or bodily hardship, and a lit window you have not yet entered.",
    "reversedMeaning": "The hard season eases. Help is asked for, or resources begin to return.",
    "description": "Two ragged figures pass through snow beneath a church window glowing with five pentacles.",
    "symbolism": "The light is aid already nearby. Their downcast faces are the hardship of not going in.",
    "image": "cards/five-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "six_of_pentacles",
    "name": "Six of Pentacles",
    "number": 6,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Generosity",
      "Charity",
      "Sharing",
      "Fairness"
    ],
    "uprightMeaning": "Giving and receiving with measure. Charity, a fair wage, help offered from a surplus.",
    "reversedMeaning": "Strings attached, unequal giving, debt, or generosity used as power.",
    "description": "A merchant weighs coins and gives them to figures who kneel, while others wait their turn.",
    "symbolism": "The scales ask whether the gift is fair; the kneeling shows the power sitting in the giver's hands.",
    "image": "cards/six-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "seven_of_pentacles",
    "name": "Seven of Pentacles",
    "number": 7,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Patience",
      "Assessment",
      "Long-term growth",
      "Investment"
    ],
    "uprightMeaning": "Pause and look at what you have grown. The harvest is not today; the work is real.",
    "reversedMeaning": "Impatience, sunk cost, or effort poured into a vine that will not fruit.",
    "description": "A gardener leans on a tool and studies a bush heavy with seven pentacles.",
    "symbolism": "The coins are fruit of labor, not coins found. The pause is how he decides whether to continue.",
    "image": "cards/seven-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "eight_of_pentacles",
    "name": "Eight of Pentacles",
    "number": 8,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Apprenticeship",
      "Diligence",
      "Craft",
      "Practice"
    ],
    "uprightMeaning": "The bench and the next piece. Patient practice, skill built one repetition at a time.",
    "reversedMeaning": "Perfectionism, dull work without heart, or corners cut.",
    "description": "A craftsman chisels a pentacle at his bench, finished pieces hung in the tree beside him.",
    "symbolism": "The hung coins are proof of repetition; the one in his hands is the only one that matters now.",
    "image": "cards/eight-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "nine_of_pentacles",
    "name": "Nine of Pentacles",
    "number": 9,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Self-sufficiency",
      "Abundance",
      "Refinement",
      "Independence"
    ],
    "uprightMeaning": "A garden of your own. Comfort earned, and solitude that is rich rather than lonely.",
    "reversedMeaning": "Dependence, overwork that stole the garden, or luxury that feels empty.",
    "description": "A finely dressed woman stands among grapevines of pentacles, a hooded falcon on her glove.",
    "symbolism": "The falcon is disciplined wildness; the ripe vines are abundance that took its own time.",
    "image": "cards/nine-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "ten_of_pentacles",
    "name": "Ten of Pentacles",
    "number": 10,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Legacy",
      "Wealth",
      "Family",
      "Establishment"
    ],
    "uprightMeaning": "Lasting material security. Family, lineage, a household that holds more than one generation.",
    "reversedMeaning": "Family money in dispute, a legacy that excludes, or instability under a wealthy surface.",
    "description": "An elder sits with dogs in a courtyard of pentacles while a couple and a child pass under an arch.",
    "symbolism": "The pentacles on the arch trace a tree of life. Wealth here is continuity, not a single purse.",
    "image": "cards/ten-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "page_of_pentacles",
    "name": "Page of Pentacles",
    "number": 11,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Study",
      "Ambition",
      "New skill",
      "Practical plan"
    ],
    "uprightMeaning": "A student of the real world. A new job, a course of study, a plan you can hold.",
    "reversedMeaning": "Daydreaming without practice, or a goal that stays theoretical.",
    "description": "A youth stands in a flowering field, gazing up at a single pentacle as if it were a book.",
    "symbolism": "The coin is a tangible aim; the plowed ground is where study has to land.",
    "image": "cards/page-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "knight_of_pentacles",
    "name": "Knight of Pentacles",
    "number": 12,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Reliability",
      "Routine",
      "Patience",
      "Method"
    ],
    "uprightMeaning": "Slow, faithful progress. Method, duty, and a plan that is kept.",
    "reversedMeaning": "Stagnation, stubborn routine, or care so heavy the work never leaves the field.",
    "description": "A knight sits still on a heavy horse, studying the pentacle in his hand, furrows behind him.",
    "symbolism": "The unmoving horse is patience; the plowed field is labor already underway.",
    "image": "cards/knight-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "queen_of_pentacles",
    "name": "Queen of Pentacles",
    "number": 13,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Nurture",
      "Practicality",
      "Comfort",
      "Resourcefulness"
    ],
    "uprightMeaning": "Warm, capable care. A home well kept, generosity that is practical, the body looked after.",
    "reversedMeaning": "Smothering care, or neglecting your own ground while tending everyone else.",
    "description": "A queen sits in a flowering bower with a pentacle in her lap, a rabbit in the grass and mountains beyond.",
    "symbolism": "The rabbit is fertility close to the ground; she provides without having to abandon her seat.",
    "image": "cards/queen-of-pentacles.webp",
    "suit": "pentacles"
  },
  {
    "id": "king_of_pentacles",
    "name": "King of Pentacles",
    "number": 14,
    "arcana": "minor",
    "element": "Earth",
    "keywords": [
      "Abundance",
      "Stability",
      "Provider",
      "Mastery"
    ],
    "uprightMeaning": "Material mastery. A provider, a work well run, wealth used to make life solid.",
    "reversedMeaning": "Greed, stubborn materialism, or status without stewardship.",
    "description": "A king sits among vines, a pentacle on his knee, a bull carved on the throne and a castle behind him.",
    "symbolism": "The vines are wealth that grows because it is tended; the castle is security already built.",
    "image": "cards/king-of-pentacles.webp",
    "suit": "pentacles"
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

function normCardName(name) {
  const numbers = {
    '1': 'ace', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten'
  };
  return String(name || '')
    .replace(/^\d+\.\s*/, '')
    .replace(/\b(\d+)\b/g, function (n) { return numbers[n] || n; })
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function suitName(suit) {
  return { wands: 'Wands', cups: 'Cups', swords: 'Swords', pentacles: 'Pentacles' }[suit] || '';
}

function groupLabel(card) {
  if (card.arcana === 'major') return 'Major Arcana';
  return suitName(card.suit);
}

function cardImageHtml(card, className, lazy) {
  if (!card.image) return cardSvg(card, 72);
  return '<img class="' + className + '" src="' + escapeHtml(card.image) + '" alt="" width="440" height="758" draggable="false"' +
    (lazy ? ' loading="lazy" decoding="async"' : ' decoding="async"') + '>';
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
    this.libraryFilter = 'all';
    this.libraryQuery = '';
    this.lastFocus = null;

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
      journal: document.getElementById('screen-journal'),
      library: document.getElementById('screen-library')
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
      noteInput: document.getElementById('note-input'),
      librarySearch: document.getElementById('library-search'),
      libraryFilters: document.getElementById('library-filters'),
      libraryGrid: document.getElementById('library-grid'),
      libraryEmpty: document.getElementById('library-empty'),
      libraryCount: document.getElementById('library-count')
    };
  }

  bindEvents() {
    document.getElementById('btn-begin').addEventListener('click', () => this.showScreen('intention'));
    document.getElementById('btn-open-journal').addEventListener('click', () => {
      this.renderJournal();
      this.showScreen('journal');
    });
    document.querySelectorAll('.js-open-library').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.renderLibrary();
        this.showScreen('library');
      });
    });
    this.els.librarySearch.addEventListener('input', () => {
      this.libraryQuery = this.els.librarySearch.value;
      this.renderLibrary();
    });
    this.els.libraryFilters.addEventListener('click', (e) => {
      const chip = e.target.closest('[data-filter]');
      if (!chip) return;
      this.libraryFilter = chip.dataset.filter;
      this.els.libraryFilters.querySelectorAll('[data-filter]').forEach((el) => {
        const on = el === chip;
        el.classList.toggle('is-selected', on);
        el.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      this.renderLibrary();
    });
    this.els.libraryGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-card-id]');
      if (!btn) return;
      const card = TAROT_CARDS.find(function (c) { return c.id === btn.dataset.cardId; });
      if (card) this.openLibraryCard(card);
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
            '<div class="card-side card-front-side card-front-photo">' +
              cardImageHtml(item.card, 'card-photo' + (item.isReversed ? ' is-reversed' : ''), false) +
            '</div>' +
          '</div>' +
        '</button>' +
        '<div class="revealed-summary">' +
          '<h3>' + escapeHtml(displayName(item.card.name)) + '</h3>' +
          '<p class="revealed-orient' + (item.isReversed ? ' is-reversed' : '') + '">' + (item.isReversed ? 'Reversed' : 'Upright') + '</p>' +
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
    this.showCardSheet(item.card, {
      mode: 'reading',
      isReversed: item.isReversed,
      position: item.positionName || ''
    });
  }

  openLibraryCard(card) {
    this.showCardSheet(card, { mode: 'library' });
  }

  showCardSheet(card, opts) {
    opts = opts || {};
    const reversed = !!opts.isReversed;
    const art = document.getElementById('sheet-art');
    art.innerHTML = cardImageHtml(card, 'sheet-card' + (reversed ? ' is-reversed' : ''), false);
    document.getElementById('sheet-position').textContent = opts.position || groupLabel(card);
    document.getElementById('sheet-title').textContent = displayName(card.name);
    const arcanaLabel = card.arcana === 'major' ? 'Major arcana' : 'Minor arcana';
    const suitLabel = card.suit ? suitName(card.suit) + ' · ' : '';
    document.getElementById('sheet-meta').textContent = opts.mode === 'library'
      ? suitLabel + card.element + ' · ' + arcanaLabel
      : (reversed ? 'Reversed' : 'Upright') + ' · ' + card.element + ' · ' + card.arcana + ' arcana';
    document.getElementById('sheet-keywords').innerHTML = card.keywords
      .map(function (k) { return '<span>' + escapeHtml(k) + '</span>'; })
      .join('');
    const meaningEl = document.getElementById('sheet-meaning');
    if (opts.mode === 'library') {
      meaningEl.innerHTML =
        '<p><span class="meaning-label">Upright</span>' + escapeHtml(card.uprightMeaning) + '</p>' +
        '<p><span class="meaning-label">Reversed</span>' + escapeHtml(card.reversedMeaning) + '</p>';
    } else {
      meaningEl.innerHTML = '<p>' + escapeHtml(reversed ? card.reversedMeaning : card.uprightMeaning) + '</p>';
    }
    document.getElementById('sheet-description').textContent = card.description;
    document.getElementById('sheet-symbolism').textContent = card.symbolism;
    this.lastFocus = document.activeElement;
    this.els.cardSheet.removeAttribute('hidden');
    const closeBtn = document.getElementById('sheet-close');
    if (closeBtn) closeBtn.focus();
  }

  closeCardSheet() {
    if (this.els.cardSheet.hasAttribute('hidden')) return;
    this.els.cardSheet.setAttribute('hidden', '');
    if (this.lastFocus && typeof this.lastFocus.focus === 'function') {
      this.lastFocus.focus();
    }
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
          id: p.card.id,
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

  keptCardKeys() {
    const keys = new Set();
    this.history.forEach(function (rec) {
      (rec.cards || []).forEach(function (c) {
        if (c.id) keys.add('id:' + c.id);
        if (c.name) keys.add('name:' + normCardName(c.name));
      });
    });
    return keys;
  }

  cardWasKept(card, keys) {
    return keys.has('id:' + card.id) || keys.has('name:' + normCardName(card.name));
  }

  filteredLibraryCards() {
    const tokens = this.libraryQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filter = this.libraryFilter;
    return TAROT_CARDS.filter(function (card) {
      if (filter === 'major' && card.arcana !== 'major') return false;
      if (filter !== 'all' && filter !== 'major' && card.suit !== filter) return false;
      if (!tokens.length) return true;
      const hay = (displayName(card.name) + ' ' + card.name + ' ' + card.keywords.join(' ')).toLowerCase();
      return tokens.every(function (token) { return hay.indexOf(token) !== -1; });
    });
  }

  renderLibrary() {
    const cards = this.filteredLibraryCards();
    const kept = this.keptCardKeys();
    const self = this;
    this.els.libraryCount.textContent = cards.length === 0
      ? 'No cards'
      : cards.length === 1
        ? '1 card'
        : cards.length + ' cards';
    this.els.libraryEmpty.hidden = cards.length !== 0;
    this.els.libraryGrid.innerHTML = cards.map(function (card, index) {
      const mark = self.cardWasKept(card, kept) ? '<span class="lib-kept">Kept</span>' : '';
      return (
        '<button type="button" class="lib-card" data-card-id="' + escapeHtml(card.id) + '">' +
          '<span class="lib-card-frame">' +
            cardImageHtml(card, 'lib-card-img', index > 3) +
            mark +
          '</span>' +
          '<span class="lib-card-name">' + escapeHtml(displayName(card.name)) + '</span>' +
        '</button>'
      );
    }).join('');
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
