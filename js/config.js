/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║        POWER NUTRITION FEED — SITE CONFIGURATION        ║
 * ║   এই ফাইলে সব তথ্য পরিবর্তন করুন, পুরো সাইট আপডেট হবে ║
 * ╚══════════════════════════════════════════════════════════╝
 */
const SITE = {

  /* ── Brand ─────────────────────────────────────────────── */
  brand:      "Power Nutrition Feed",
  tagline:    "Premium Feed, Proven Growth",
  taglineBn:  "প্রিমিয়াম ফিড, প্রমাণিত বৃদ্ধি",
  website:    "power.exariste.com",
  phone:      "01713-366224",
  phoneRaw:   "+8801713366224",
  whatsapp:   "8801713366224",
  email:      "info@power.exariste.com",
  address:    "বাংলাদেশ",
  facebook:   "https://facebook.com/powernutritionfeed",
  messenger:  "https://m.me/powernutritionfeed",
  youtube:    "#",

  /* ── Hero ───────────────────────────────────────────────── */
  hero: {
    en: {
      headline: "Premium Feed for Healthy & Productive Livestock",
      sub: "Scientifically formulated nutrition for cattle, goat, duck, chicken, quail and pigeon."
    },
    bn: {
      headline: "সুস্থ ও উৎপাদনশীল পশুপাখির জন্য প্রিমিয়াম ফিড",
      sub: "গরু, ছাগল, হাঁস, মুরগি, কোয়েল ও পায়রার জন্য বৈজ্ঞানিকভাবে প্রস্তুত পুষ্টিকর খাদ্য।"
    }
  },

  /* ── Stats ──────────────────────────────────────────────── */
  stats: [
    { num: "৫০,০০০+", en: "Farmers Served",       bn: "কৃষক সেবাপ্রাপ্ত" },
    { num: "২০০+",    en: "Dealers Nationwide",    bn: "সারাদেশে ডিলার" },
    { num: "১৫+",     en: "Product Varieties",     bn: "পণ্যের বৈচিত্র্য" },
    { num: "৯৮%",     en: "Customer Satisfaction", bn: "গ্রাহক সন্তুষ্টি" },
  ],

  /* ── Why Choose Us ──────────────────────────────────────── */
  features: [
    { icon: "🌾", en: { t: "High Quality Raw Materials",       d: "Only the finest ingredients from verified suppliers." },
                  bn: { t: "উচ্চমানের কাঁচামাল",               d: "যাচাইকৃত সরবরাহকারীদের থেকে সর্বোচ্চ মানের উপাদান।" } },
    { icon: "🔬", en: { t: "Balanced Nutrition Formula",        d: "Scientifically designed for optimal animal health." },
                  bn: { t: "সুষম পুষ্টি ফর্মুলা",              d: "পশুপাখির সর্বোত্তম স্বাস্থ্যের জন্য বৈজ্ঞানিকভাবে ডিজাইন।" } },
    { icon: "📊", en: { t: "Better Feed Conversion Ratio (FCR)",d: "More output per kilogram of feed consumed." },
                  bn: { t: "উন্নত ফিড কনভার্সন রেশিও (FCR)",   d: "প্রতি কেজি খাদ্যে বেশি উৎপাদন নিশ্চিত।" } },
    { icon: "⚡", en: { t: "Faster Growth Performance",         d: "Proven results in shorter production cycles." },
                  bn: { t: "দ্রুত বৃদ্ধির কার্যক্ষমতা",        d: "স্বল্প সময়ে প্রমাণিত উৎপাদন ফলাফল।" } },
    { icon: "🏆", en: { t: "Quality Assurance Lab",             d: "Every batch tested before leaving the factory." },
                  bn: { t: "মান নিশ্চিতকরণ ল্যাব",              d: "কারখানা ছাড়ার আগেই প্রতিটি ব্যাচ পরীক্ষিত।" } },
    { icon: "🤝", en: { t: "Farmer Support Team",               d: "Expert advice available 7 days a week." },
                  bn: { t: "কৃষক সহায়তা টিম",                  d: "সপ্তাহের ৭ দিন বিশেষজ্ঞ পরামর্শ পাওয়া যায়।" } },
  ],

  /* ── Products ───────────────────────────────────────────── */
  products: [
    {
      cat: "Cattle Feed", catBn: "গরুর খাদ্য", icon: "🐄", color: "#0d4a1f",
      items: [
        { en: "Dairy Feed",      bn: "দুগ্ধ ফিড",           d: "Maximum milk yield formula.",  protein:"18%", fat:"4%", fiber:"12%" },
        { en: "Fattening Feed",  bn: "মোটাতাজাকরণ ফিড",     d: "Rapid weight gain formula.",   protein:"20%", fat:"5%", fiber:"10%" },
        { en: "Calf Starter",    bn: "বাছুর স্টার্টার",      d: "Gentle nutrition for calves.", protein:"22%", fat:"3%", fiber:"8%"  },
      ]
    },
    {
      cat: "Goat Feed", catBn: "ছাগলের খাদ্য", icon: "🐐", color: "#7a4f1a",
      items: [
        { en: "Growth Formula",   bn: "গ্রোথ ফর্মুলা",   d: "Balanced growth for meat goats.",    protein:"16%", fat:"3.5%", fiber:"14%" },
        { en: "Breeding Formula", bn: "ব্রিডিং ফর্মুলা", d: "Supports healthy reproduction.",     protein:"17%", fat:"4%",   fiber:"13%" },
      ]
    },
    {
      cat: "Poultry Feed", catBn: "মুরগির খাদ্য", icon: "🐔", color: "#b85c00",
      items: [
        { en: "Broiler Starter",  bn: "ব্রয়লার স্টার্টার",  d: "High protein for early growth.",      protein:"23%", fat:"5%", fiber:"5%" },
        { en: "Broiler Grower",   bn: "ব্রয়লার গ্রোয়ার",   d: "Sustained muscle development.",       protein:"21%", fat:"5%", fiber:"5%" },
        { en: "Broiler Finisher", bn: "ব্রয়লার ফিনিশার",    d: "Optimal finish weight & FCR.",        protein:"19%", fat:"6%", fiber:"6%" },
        { en: "Layer Feed",       bn: "লেয়ার ফিড",          d: "Consistent egg production support.",  protein:"17%", fat:"3%", fiber:"7%" },
      ]
    },
    {
      cat: "Duck Feed", catBn: "হাঁসের খাদ্য", icon: "🦆", color: "#1a6080",
      items: [
        { en: "Duck Complete Feed", bn: "হাঁস কমপ্লিট ফিড", d: "All-in-one nutrition for ducks.", protein:"18%", fat:"4%", fiber:"8%" },
      ]
    },
    {
      cat: "Quail Feed", catBn: "কোয়েলের খাদ্য", icon: "🐦", color: "#5a1a80",
      items: [
        { en: "Quail Complete Feed", bn: "কোয়েল কমপ্লিট ফিড", d: "High-density quail nutrition.", protein:"24%", fat:"5%", fiber:"4%" },
      ]
    },
    {
      cat: "Pigeon Feed", catBn: "পায়রার খাদ্য", icon: "🕊️", color: "#4a4a4a",
      items: [
        { en: "Pigeon Premium Mix", bn: "পায়রা প্রিমিয়াম মিক্স", d: "Grain blend for healthy pigeons.", protein:"15%", fat:"4%", fiber:"6%" },
      ]
    },
  ],

  /* ── Production Process ─────────────────────────────────── */
  process: [
    { icon:"🌱", en:{ t:"Raw Material Collection", d:"Premium ingredients from certified suppliers." },       bn:{ t:"কাঁচামাল সংগ্রহ",       d:"সার্টিফাইড সরবরাহকারীদের থেকে প্রিমিয়াম উপাদান সংগ্রহ।" } },
    { icon:"🔬", en:{ t:"Laboratory Testing",       d:"Every raw material tested for purity & nutrition." },  bn:{ t:"ল্যাবরেটরি পরীক্ষা",    d:"প্রতিটি কাঁচামাল বিশুদ্ধতা ও পুষ্টির জন্য পরীক্ষিত।" } },
    { icon:"📐", en:{ t:"Scientific Formulation",   d:"Expert nutritionists design the perfect blend." },     bn:{ t:"বৈজ্ঞানিক ফর্মুলেশন",  d:"বিশেষজ্ঞ পুষ্টিবিদরা নিখুঁত মিশ্রণ তৈরি করেন।" } },
    { icon:"⚙️", en:{ t:"Automated Mixing",          d:"Precision machines ensure consistent quality." },     bn:{ t:"স্বয়ংক্রিয় মিশ্রণ",    d:"নির্ভুল মেশিন ধারাবাহিক মান নিশ্চিত করে।" } },
    { icon:"✅", en:{ t:"Quality Inspection",        d:"Final batch tested before packaging." },               bn:{ t:"মান পরিদর্শন",          d:"প্যাকেজিংয়ের আগে চূড়ান্ত ব্যাচ পরীক্ষা।" } },
    { icon:"📦", en:{ t:"Packaging",                 d:"Sealed for freshness and easy identification." },      bn:{ t:"প্যাকেজিং",            d:"তাজা রাখতে ও সহজ পরিচয়ের জন্য সিলড প্যাকেজিং।" } },
    { icon:"🚚", en:{ t:"Distribution",              d:"Fast delivery to dealers nationwide." },               bn:{ t:"বিতরণ",               d:"সারাদেশে ডিলারদের কাছে দ্রুত ডেলিভারি।" } },
  ],

  /* ── Feed Calculator ────────────────────────────────────── */
  calculator: {
    feedPricePerKg: 45,   // ← এখানে প্রতি কেজি মূল্য পরিবর্তন করুন (টাকা)
    animals: [
      { v:"cattle_dairy",     bn:"গরু (দুগ্ধ)",        en:"Dairy Cattle",     rate:0.025, prod:"Dairy Feed" },
      { v:"cattle_fatten",    bn:"গরু (মোটাতাজা)",     en:"Fattening Cattle", rate:0.030, prod:"Fattening Feed" },
      { v:"calf",             bn:"বাছুর",              en:"Calf",             rate:0.040, prod:"Calf Starter" },
      { v:"goat",             bn:"ছাগল",               en:"Goat",             rate:0.035, prod:"Goat Feed" },
      { v:"broiler",          bn:"ব্রয়লার মুরগি",      en:"Broiler",          rate:0.080, prod:"Broiler Feed" },
      { v:"layer",            bn:"লেয়ার মুরগি",        en:"Layer Hen",        rate:0.120, prod:"Layer Feed" },
      { v:"duck",             bn:"হাঁস",               en:"Duck",             rate:0.100, prod:"Duck Feed" },
      { v:"quail",            bn:"কোয়েল",              en:"Quail",            rate:0.150, prod:"Quail Feed" },
      { v:"pigeon",           bn:"পায়রা",              en:"Pigeon",           rate:0.060, prod:"Pigeon Feed" },
    ]
  },

  /* ── Certifications ─────────────────────────────────────── */
  certs: [
    { icon:"🏅", name:"BSTI Certified",  desc:"Bangladesh Standards and Testing Institution" },
    { icon:"🎖️", name:"ISO 9001:2015",   desc:"International Quality Management Standard" },
    { icon:"✅", name:"GMP Compliant",   desc:"Good Manufacturing Practice" },
    { icon:"🔒", name:"HACCP",           desc:"Hazard Analysis Critical Control Points" },
  ],

  /* ── Testimonials ───────────────────────────────────────── */
  testimonials: [
    { name:"মো. রফিকুল ইসলাম", loc:"ময়মনসিংহ", type:"গরু খামার",  stars:5, text:"Power Nutrition Feed ব্যবহার করার পর আমার গরুর দুধ উৎপাদন ৩০% বেড়েছে। অসাধারণ ফলাফল!" },
    { name:"আব্দুল করিম",       loc:"রাজশাহী",   type:"ব্রয়লার ফার্ম", stars:5, text:"মাত্র ৩৫ দিনে আমার ব্রয়লার মুরগি ২ কেজির বেশি হয়েছে। FCR অনেক ভালো।" },
    { name:"সুমাইয়া বেগম",      loc:"কুমিল্লা",  type:"ছাগল খামার", stars:5, text:"ছাগলের বৃদ্ধি খুব দ্রুত হয়েছে এবং স্বাস্থ্য অনেক ভালো। দাম সাশ্রয়ী।" },
  ],

  /* ── Blog ───────────────────────────────────────────────── */
  blogs: [
    { emoji:"🐄", cat:"Cattle", date:"জুন ২০২৫", read:"৫ মিনিট",
      en:{ t:"Modern Cattle Fattening Techniques" },
      bn:{ t:"গরু মোটাতাজাকরণের আধুনিক পদ্ধতি", ex:"সঠিক ফিড ব্যবস্থাপনার মাধ্যমে কীভাবে কম সময়ে গরু মোটাতাজা করবেন তার বিস্তারিত গাইড।" } },
    { emoji:"🥛", cat:"Dairy",  date:"মে ২০২৫",  read:"৪ মিনিট",
      en:{ t:"Milk Production Enhancement Tips" },
      bn:{ t:"দুধ উৎপাদন বৃদ্ধির কৌশল",           ex:"পুষ্টিকর খাদ্য ও সঠিক পরিচর্যার মাধ্যমে দুধ উৎপাদন ২ গুণ বাড়ানোর উপায়।" } },
    { emoji:"🐔", cat:"Poultry",date:"এপ্রিল ২০২৫",read:"৬ মিনিট",
      en:{ t:"Broiler Management Complete Guide" },
      bn:{ t:"ব্রয়লার ম্যানেজমেন্ট গাইড",          ex:"ব্রয়লার মুরগির যত্ন, খাদ্য ব্যবস্থাপনা এবং রোগ প্রতিরোধের সম্পূর্ণ গাইড।" } },
  ],

  /* ── Downloads ──────────────────────────────────────────── */
  downloads: [
    { icon:"📋", en:"Product Catalog",  bn:"পণ্য ক্যাটালগ",      file:"#" },
    { icon:"📖", en:"Feed Guide",        bn:"ফিড গাইড",           file:"#" },
    { icon:"🤝", en:"Dealer Brochure",   bn:"ডিলার ব্রোশার",      file:"#" },
    { icon:"💰", en:"Price List",        bn:"মূল্য তালিকা",       file:"#" },
  ],

  /* ── Districts (Dealer Locator) ─────────────────────────── */
  districts: [
    "ঢাকা","চট্টগ্রাম","রাজশাহী","খুলনা","বরিশাল","সিলেট","রংপুর","ময়মনসিংহ",
    "কুমিল্লা","গাজীপুর","নারায়ণগঞ্জ","টাঙ্গাইল","জামালপুর","কিশোরগঞ্জ","ফরিদপুর"
  ],

};
