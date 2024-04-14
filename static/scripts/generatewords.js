// List of random words
const words = ["counsel", "small", "creature", "feasible", "dark", "movie", "tractor", "establish", "satisfying", "cohesive", "change", "repeatedly", "whisper", "enforced", "ourselves", "marriage", "mare", "build", "plant", "stiff", "magnetic", "loud", "logic", "bride", "bought", "airport", "fundamental", "control", "autonomy", "fly", "told", "sleeve", "acid", "begun", "awake", "horn", "instance", "stop", "plowing", "grimly", "directed", "existence", "range", "cooler", "blockade", "advantage", "tomb", "basket", "conception", "movie", "pronounced", "onset", "press", "legend", "sit", "tired", "laughing", "momentum", "frequent", "property", "tract", "amid", "smooth", "print", "farewell", "state", "chlorine", "immense", "instruction", "drawing", "profound", "suspended", "skirt", "secure", "industrial", "sand", "explaining", "forced", "adventure", "chemical", "span", "behalf", "silk", "view", "happy", "company", "differential", "vertex", "assignment", "much", "persistent", "simultaneously", "drift", "essentially", "exclusive", "greatly", "ratio", "sang", "memory", "thousand", "bullet", "power", "mother", "domestic", "professor", "myth", "base", "namely", "collar", "kiss", "bar", "rough", "awkward", "historic", "debut", "affected", "probable", "genuine", "threat", "worse", "passage", "manage", "sure", "dangerous", "quality", "regardless", "acceptance", "simultaneously", "doubtless", "bunk", "doctor", "crash", "rush", "cab", "hide", "fur", "talk", "hurry", "mile", "stomach", "cockpit", "failing", "net", "mountain", "gifted", "flying", "barn", "fury", "rancher", "list", "if", "chin", "spectrum", "good", "information", "convinced", "hardly", "reduce", "framework", "us", "blade", "after", "plane", "spend", "season", "belonging", "experienced", "attract", "about", "taste", "sat", "glorious", "may", "picture", "desire", "shear", "office", "atom", "bottom", "image", "exclusively", "reality", "dressing", "mate", "realism", "critic", "bitter", "responsibility", "bright", "sick", "control", "resident", "resting", "dream", "special", "will", "acknowledge", "coach", "midst", "glance", "million", "exchange", "widespread", "municipal", "submarine", "remedy", "stirring", "sixteen", "raise", "apartment", "competitive", "passionate", "promptly", "nose", "garden", "odds", "idea", "travel", "spring", "blow", "fiber", "found", "stem", "exclusively", "communism", "transmission", "heater", "traffic", "root", "give", "violation", "labor", "activity", "poor", "heavy", "urgency", "over", "need", "refund", "via", "risk", "downward", "paper", "touched", "use", "cup", "store", "riding", "roll", "urge", "demonstration", "revealing", "year", "song", "compete", "possession", "cultural", "god", "regarding", "across", "with", "season", "ambiguous", "tray", "demonstrate", "younger", "sigh", "suppose", "hall", "excluding", "lip", "pocket", "curled", "eliminate", "authority", "photographic", "extremely", "start", "permission", "gear", "peace", "direction", "thin", "shock", "much", "travel", "already", "choosing", "version", "till", "grasp", "dependent", "remark", "oxidation", "forget", "roof", "frankly", "different", "lagoon", "shorter", "recall", "line", "high", "participate", "the", "body", "driver", "cereal", "composition", "towards", "surprise", "or", "faded", "ethics", "entirely", "over", "taste", "anticipation", "interference", "mix", "mobile", "tetrachloride", "rank", "room", "debut", "cat", "normal", "partner", "gave", "commitment", "state", "vitality", "liberalism", "watch", "incentive", "employee", "funny", "television", "cylinder", "science", "otherwise", "rotating", "proved", "reasoning", "stood", "stable", "doctor", "commerce", "gone", "stop", "different", "error", "need", "gave", "fence", "threatening", "outdoor", "watching", "extraordinary", "representative", "successfully", "arbitrary", "grateful", "hurried", "dying", "love", "towering", "substantial", "curve", "wounded", "socialism", "outcome", "dancing", "shed", "closer", "he", "cluster", "shower", "insurance", "age", "servant", "principle", "plug", "deduct", "fruit", "east", "driving", "costly", "insurance", "love", "heavily", "improve", "addition", "procedure", "different", "real", "urban", "or", "manage", "he", "dramatic", "furnish", "prevention", "loyal", "winter", "noon", "host", "touched", "foolish", "beyond", "height", "incorporated", "wood", "include", "weekly", "brooding", "democratic", "snap", "unable", "abandoned", "make", "worthy", "conventional", "allow", "chemical", "paint", "marked", "decent", "secant", "civil", "colonial", "plain", "young", "farther", "attract", "immortality", "phone", "cylindrical", "departure", "origin", "strain", "lit", "angles", "danger", "formation", "intersection", "action", "bomb", "police", "greatly", "lady", "additional", "role", "star", "maximum", "did", "aged", "shore", "store", "radar", "rough", "dying", "suffering", "gossip", "because", "turn", "clergy", "chance", "metropolitan", "onset", "wax", "separately", "shipping", "rhythm", "exhausted", "note", "ominous", "which", "transition", "pain", "sought", "promising", "volume", "cope", "distributed", "public", "faded", "merchant", "personality", "independently", "mode", "fully", "unfair", "license", "discover", "employment", "unnecessary", "back", "deaf", "direction", "entertain", "strong", "honestly", "hearing", "sort", "broad", "commonly", "insistence", "doubled", "dangerous", "compatible", "patient", "hidden", "rise", "healthy", "blues", "track", "corps", "swollen", "have", "control", "come", "staining", "worthy", "ice", "phenomenon", "listed", "bear", "moon", "balance", "shelf", "sharply", "flavor", "point", "undue", "silk", "architecture", "lean", "receive", "read", "part", "politician", "classification", "analytic", "select", "wrong", "interesting", "national", "speed", "magnitude", "chance", "planetary", "applicable", "church", "retention", "combined", "significantly", "inch", "flight", "mind", "evidently", "throat", "mode", "decomposition", "leads", "statement", "authority", "sustained", "fresh", "a", "of", "ring", "showing", "diverse", "warmth", "cat", "approximately", "death", "alliance", "department", "coffee", "discussion", "operator", "let", "ribbon", "dim", "smoke", "silly", "emphasis", "focus", "nights", "living", "bench", "singular", "bathing", "meanwhile", "future", "flung", "denial", "determine", "sue", "belonging", "us", "assert", "value", "bound", "politician", "safe", "liberal", "bill", "altogether", "preparation", "pottery", "posture", "sinister", "manners", "assignment", "kick", "ballot", "remain", "verdict", "trucks", "beneath", "continuous", "backed", "power", "word", "bread", "pen", "match", "ambition", "cat", "method", "sample", "radio", "a", "control", "education", "tangible", "proclaim", "downward", "loud", "eager", "locking", "synthesis", "ecumenical", "miracle", "divine", "orange", "shall", "rapid", "response", "alongside", "belief", "beam", "dressed", "introduction", "street", "genuine", "lung", "text", "aspect", "death", "paint", "works", "court", "creative", "fix", "biggest", "immortality", "reason", "trap", "grip", "dramatic", "affected", "burning", "laboratory", "slender", "inserted", "solitary", "crisis", "state", "mine", "fame", "origin", "continent", "pride", "strategic", "interest", "fan", "star", "frontier", "thin", "centered", "congregation", "understanding", "quickly", "known", "act", "suggest", "vigorously", "screwed", "took", "returned", "box", "touch", "food", "beautiful", "string", "panel", "gown", "academic", "shadow", "recover", "onion", "dirty", "station", "take", "beaten", "difficult", "mouth", "role", "star", "line", "compact", "induced", "traffic", "plate", "urge", "magical", "strange", "knock", "stomach", "represent", "discuss", "plastic", "involved", "lived", "shame", "pen", "rice", "yard", "ballot", "commission", "milling", "scarcely", "belief", "throat", "potential", "forest", "vertex", "customer", "hole", "studied", "instance", "rice", "mess", "library", "mercy", "greatly", "medicine", "admired", "era", "gentle", "artificial", "item", "climb", "procurement", "sacred", "quit", "brother", "tall", "noise", "perfection", "filling", "silver", "tight", "impossible", "evaluation", "there", "account", "ate", "racing", "tense", "historic", "weapon", "sex", "star", "dollar", "regiment", "than", "food", "important", "devotion", "positive", "assurance", "here", "magic", "bay", "praise", "dare", "fresh", "loss", "passenger", "neon", "examine", "strip", "opportunity", "dressing", "solid", "philosophical", "pole", "acid", "residence", "odds", "fired", "hardly", "education", "gin", "denial", "proportional", "hard", "scenery", "sink", "stayed", "undoubtedly", "clock", "sorry", "trigger", "precision", "probable", "than", "superior", "bastard", "rug", "premium", "open", "attain", "eager", "member", "suggestion", "pencil", "meadow", "instance", "screaming", "ashamed", "community", "showing", "watch", "happen", "soldier", "violent", "early", "meet", "run", "optical", "detail", "wax", "interested", "metaphysics", "helpless", "separate", "extreme", "interval", "therapy", "candle", "rocking", "defined", "stated", "marketing", "element", "white", "up", "medieval", "politician", "signal", "sending", "scheme", "least", "mathematics", "poorly", "marginal", "muscle", "language", "accomplished", "safely", "false", "net", "leaf", "senior", "admitted", "stepped", "pursuit", "ambitious", "attack", "sigh", "percentage", "vitality", "page", "almost", "neighboring", "best", "proved", "comparison", "special", "method", "operation", "meat", "big", "induced", "unto", "statutory", "pull", "circular", "petition", "autonomic", "inspection", "index", "pituitary", "gesture", "actively", "humorous", "heat", "equally", "p", "constitution", "finite", "think", "personality", "mechanism", "shame", "linguist", "shaft", "strong", "alliance", "western", "certain", "ask", "ourselves", "generation", "apply", "lift", "debt", "striking", "dressing", "gyro", "utility", "outset", "honor", "thereafter", "weak", "sharply", "destructive", "smile", "burned", "factory", "routine", "rise", "circulation", "musical", "chiefly", "partly", "structured", "bride", "vehicle", "break", "law", "definite", "seeing", "wrinkled", "steady", "must", "specifically", "ideological", "wish", "institution", "butter", "sea", "collect", "accommodate", "grace", "net", "face", "devotion", "log", "scientist", "accustomed", "python", "instantly", "evident", "scholarship", "immense", "education", "palm", "discount", "sense", "onion", "golf", "standing", "inquiry"];
// Function to generate a random word
function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Populate the word container with random words
const wordContainer = document.querySelector('.wordcontainer .word');
for (let i = 0; i < 3; i++) { // Populate 3 words
    const word = generateRandomWord();
    const spans = Array.from(word).map(letter => `<span>${letter}</span>`).join('');
    wordContainer.innerHTML += `<div>${spans}</div>`;
}

const helpImage = document.querySelector('.flip-card-back img');
const wordSpans = document.querySelectorAll('.word span');
helpImage.src = `../images/green_asl_abc/${wordSpans[0].textContent}.png`;
