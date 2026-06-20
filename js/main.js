/* ============================================================
   POWER NUTRITION FEED — main.js
   ============================================================ */
"use strict";

/* ── Language state ──────────────────────────────────────── */
let LANG = localStorage.getItem("pnf_lang") || "bn";

function t(node) {
  // node has .en and .bn properties
  return LANG === "en" ? (node.en || node.en) : node.bn;
}

/* ── Render entire page from SITE config ─────────────────── */
function renderAll() {
  renderNav();
  renderHero();
  renderStats();
  renderFeatures();
  renderProducts("all");
  renderProcess();
  renderCertifications();
  renderTestimonials();
  renderBlogs();
  renderDealer();
  renderDownloads();
  renderContact();
  renderFooter();
  renderFloating();
  bindEvents();
  initReveal();
  syncLang();
}

/* ── NAVBAR ──────────────────────────────────────────────── */
function renderNav() {
  const navLinks = [
    { href: "#hero",     en: "Home",        bn: "হোম" },
    { href: "#about",    en: "About",       bn: "আমাদের সম্পর্কে" },
    { href: "#products", en: "Products",    bn: "পণ্যসমূহ" },
    { href: "#process",  en: "Quality",     bn: "মান নিশ্চিতকরণ" },
    { href: "#calc",     en: "Calculator",  bn: "ফিড ক্যালকুলেটর" },
    { href: "#dealers",  en: "Dealers",     bn: "ডিলার" },
    { href: "#blog",     en: "Knowledge",   bn: "জ্ঞানকেন্দ্র" },
    { href: "#contact",  en: "Contact",     bn: "যোগাযোগ" },
  ];

  const ul = document.getElementById("nav-links");
  ul.innerHTML = navLinks.map(l =>
    `<li><a href="${l.href}" data-en="${l.en}" data-bn="${l.bn}">${LANG==="en"?l.en:l.bn}</a></li>`
  ).join("") +
  `<li class="nav-cta-desktop"><a href="#dealers" class="btn btn-gold btn-sm" data-en="Become a Dealer" data-bn="ডিলার হন">${LANG==="en"?"Become a Dealer":"ডিলার হন"}</a></li>`;
}

/* ── HERO ────────────────────────────────────────────────── */
function renderHero() {
  const h = SITE.hero;
  document.getElementById("hero-title").innerHTML =
    LANG === "en"
      ? h.en.headline.replace("Premium", '<span class="hl">Premium</span>')
      : h.bn.headline.replace("প্রিমিয়াম", '<span class="hl">প্রিমিয়াম</span>');
  document.getElementById("hero-sub").textContent = LANG === "en" ? h.en.sub : h.bn.sub;

  const stats = document.getElementById("hero-stats");
  stats.innerHTML = SITE.stats.map(s =>
    `<div class="hstat"><strong>${s.num}</strong><span>${LANG==="en"?s.en:s.bn}</span></div>`
  ).join("");
}

/* ── STATS BAR ───────────────────────────────────────────── */
function renderStats() {
  document.getElementById("stats-grid").innerHTML = SITE.stats.map(s =>
    `<div class="stat-item rev">
      <strong>${s.num}</strong>
      <span data-en="${s.en}" data-bn="${s.bn}">${LANG==="en"?s.en:s.bn}</span>
    </div>`
  ).join("");
}

/* ── FEATURES ────────────────────────────────────────────── */
function renderFeatures() {
  document.getElementById("feat-grid").innerHTML = SITE.features.map(f =>
    `<div class="feat-card rev">
      <span class="feat-icon">${f.icon}</span>
      <h3 data-en="${f.en.t}" data-bn="${f.bn.t}">${LANG==="en"?f.en.t:f.bn.t}</h3>
      <p data-en="${f.en.d}" data-bn="${f.bn.d}">${LANG==="en"?f.en.d:f.bn.d}</p>
    </div>`
  ).join("");
}

/* ── PRODUCTS ────────────────────────────────────────────── */
function renderCategoryTabs() {
  const tabs = document.getElementById("cat-tabs");
  tabs.innerHTML =
    `<button class="tab active" data-cat="all" onclick="renderProducts('all',this)">
      ${LANG==="en"?"All Products":"সব পণ্য"}
    </button>` +
    SITE.products.map(p =>
      `<button class="tab" data-cat="${p.cat}" onclick="renderProducts('${p.cat}',this)">
        ${p.icon} ${LANG==="en"?p.cat:p.catBn}
      </button>`
    ).join("");
}

function renderProducts(cat, btn) {
  renderCategoryTabs();
  // Update active tab
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if (btn) btn.classList.add("active");
  else document.querySelector(".tab[data-cat='all']")?.classList.add("active");

  const categories = cat === "all" ? SITE.products : SITE.products.filter(p => p.cat === cat);
  const grid = document.getElementById("prod-grid");
  grid.innerHTML = categories.map(cat =>
    cat.items.map(item =>
      `<div class="prod-card rev">
        <div class="prod-head" style="background:${cat.color}">
          <div class="prod-head-icon">${cat.icon}</div>
          <h3>${LANG==="en"?item.en:item.bn}</h3>
          <p>${item.d}</p>
        </div>
        <div class="prod-body">
          <div class="nutr">
            <div class="nutr-item"><strong>${item.protein}</strong><span>Protein</span></div>
            <div class="nutr-item"><strong>${item.fat}</strong><span>Fat</span></div>
            <div class="nutr-item"><strong>${item.fiber}</strong><span>Fiber</span></div>
          </div>
          <div class="prod-actions">
            <button class="btn btn-primary btn-sm" onclick="showToast('${LANG==="en"?"Details coming soon!":"বিস্তারিত শীঘ্রই আসছে!"}')">${LANG==="en"?"Details":"বিস্তারিত"}</button>
            <a href="#contact" class="btn btn-outline btn-sm" style="background:var(--g2);color:#fff">${LANG==="en"?"Order Now":"অর্ডার করুন"}</a>
          </div>
        </div>
      </div>`
    ).join("")
  ).join("");

  initReveal();
}

/* ── PROCESS ─────────────────────────────────────────────── */
function renderProcess() {
  document.getElementById("timeline").innerHTML = SITE.process.map((p, i) =>
    `<div class="tl-item rev">
      <div class="tl-dot">
        <span class="sn">0${i+1}</span>
        <span class="si">${p.icon}</span>
      </div>
      <div class="tl-body">
        <h3 data-en="${p.en.t}" data-bn="${p.bn.t}">${LANG==="en"?p.en.t:p.bn.t}</h3>
        <p data-en="${p.en.d}" data-bn="${p.bn.d}">${LANG==="en"?p.en.d:p.bn.d}</p>
      </div>
    </div>`
  ).join("");
}

/* ── CERTIFICATIONS ──────────────────────────────────────── */
function renderCertifications() {
  document.getElementById("cert-grid").innerHTML = SITE.certs.map(c =>
    `<div class="cert-card rev">
      <span class="ci">${c.icon}</span>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </div>`
  ).join("");
}

/* ── TESTIMONIALS ────────────────────────────────────────── */
function renderTestimonials() {
  document.getElementById("test-grid").innerHTML = SITE.testimonials.map(t =>
    `<div class="test-card rev">
      <div class="stars">${"★".repeat(t.stars)}</div>
      <p>${t.text}</p>
      <div class="test-author">
        <div class="t-av">${t.name.charAt(3)}</div>
        <div class="t-info">
          <strong>${t.name}</strong>
          <span>${t.loc} • ${t.type}</span>
        </div>
      </div>
    </div>`
  ).join("");
}

/* ── BLOG ────────────────────────────────────────────────── */
function renderBlogs() {
  document.getElementById("blog-grid").innerHTML = SITE.blogs.map(b =>
    `<div class="blog-card rev">
      <div class="blog-img">${b.emoji}</div>
      <div class="blog-body">
        <div class="blog-meta">
          <span class="blog-cat">${b.cat}</span>
          <span>📅 ${b.date}</span>
          <span>⏱ ${b.read}</span>
        </div>
        <h3>${LANG==="en"?b.en.t:b.bn.t}</h3>
        <p>${b.bn.ex}</p>
        <a href="#" class="btn btn-primary btn-sm" onclick="showToast('${LANG==="en"?"Coming soon!":"শীঘ্রই আসছে!"}')">${LANG==="en"?"Read More →":"আরও পড়ুন →"}</a>
      </div>
    </div>`
  ).join("");
}

/* ── DEALER ──────────────────────────────────────────────── */
function renderDealer() {
  const benefits = [
    { icon:"💰", en:"Attractive profit margins",              bn:"আকর্ষণীয় মুনাফার হার" },
    { icon:"📦", en:"Direct supply from factory",             bn:"কারখানা থেকে সরাসরি সরবরাহ" },
    { icon:"🎯", en:"Dedicated dealer support team",          bn:"ডেডিকেটেড ডিলার সহায়তা টিম" },
    { icon:"📢", en:"Marketing & promotional materials",      bn:"মার্কেটিং ও প্রচারমূলক উপকরণ" },
    { icon:"🏆", en:"Sales incentives & bonuses",             bn:"বিক্রয় প্রণোদনা ও বোনাস" },
    { icon:"📱", en:"Digital dealer portal access",           bn:"ডিজিটাল ডিলার পোর্টাল অ্যাক্সেস" },
  ];

  document.getElementById("dealer-benefits").innerHTML = benefits.map(b =>
    `<li><span>${b.icon}</span><span data-en="${b.en}" data-bn="${b.bn}">${LANG==="en"?b.en:b.bn}</span></li>`
  ).join("");

  document.getElementById("dealer-districts").innerHTML =
    SITE.districts.map(d => `<option value="${d}">${d}</option>`).join("");
}

/* ── DOWNLOADS ───────────────────────────────────────────── */
function renderDownloads() {
  document.getElementById("dl-grid").innerHTML = SITE.downloads.map(d =>
    `<div class="dl-card rev" onclick="showToast('${LANG==="en"?"Download starting soon!":"ডাউনলোড শীঘ্রই শুরু হবে!"}')" >
      <span class="di">${d.icon}</span>
      <h3 data-en="${d.en}" data-bn="${d.bn}">${LANG==="en"?d.en:d.bn}</h3>
      <p>${LANG==="en"?"PDF Download":"PDF ডাউনলোড"}</p>
      <button class="btn btn-primary btn-sm">${LANG==="en"?"Download":"ডাউনলোড"} ↓</button>
    </div>`
  ).join("");
}

/* ── CONTACT ─────────────────────────────────────────────── */
function renderContact() {
  const info = [
    { icon:"📞", en:"Call Us",        bn:"ফোন করুন",    val:`<a href="tel:${SITE.phoneRaw}">${SITE.phone}</a>` },
    { icon:"💬", en:"WhatsApp",       bn:"হোয়াটসঅ্যাপ", val:`<a href="https://wa.me/${SITE.whatsapp}" target="_blank">+${SITE.whatsapp}</a>` },
    { icon:"📧", en:"Email",          bn:"ইমেইল",       val:`<a href="mailto:${SITE.email}">${SITE.email}</a>` },
    { icon:"📍", en:"Location",       bn:"অবস্থান",     val:SITE.address },
  ];
  document.getElementById("contact-info").innerHTML = info.map(i =>
    `<div class="ci-item">
      <div class="ci-icon">${i.icon}</div>
      <div>
        <strong data-en="${i.en}" data-bn="${i.bn}">${LANG==="en"?i.en:i.bn}</strong>
        <span>${i.val}</span>
      </div>
    </div>`
  ).join("");
}

/* ── FOOTER ──────────────────────────────────────────────── */
function renderFooter() {
  document.getElementById("foot-logo").src = "images/logo.png";
  document.getElementById("foot-tagline").textContent = SITE.tagline;
  document.getElementById("foot-fb").href   = SITE.facebook;
  document.getElementById("foot-wa").href   = `https://wa.me/${SITE.whatsapp}`;
  document.getElementById("foot-yt").href   = SITE.youtube;
  document.getElementById("foot-phone").textContent = SITE.phone;
  document.getElementById("foot-email").textContent = SITE.email;
  document.getElementById("foot-copy").innerHTML =
    `&copy; ${new Date().getFullYear()} ${SITE.brand}. All rights reserved. | <a href="#">Privacy Policy</a>`;
}

/* ── FLOATING BUTTONS ────────────────────────────────────── */
function renderFloating() {
  document.getElementById("fb-wa").href   = `https://wa.me/${SITE.whatsapp}`;
  document.getElementById("fb-call").href = `tel:${SITE.phoneRaw}`;
  document.getElementById("fb-msg").href  = SITE.messenger;
}

/* ── FEED CALCULATOR ─────────────────────────────────────── */
function renderCalcAnimals() {
  const sel = document.getElementById("calc-animal");
  sel.innerHTML = `<option value="">-- ${LANG==="en"?"Select Animal":"প্রাণী নির্বাচন করুন"} --</option>` +
    SITE.calculator.animals.map(a =>
      `<option value="${a.v}">${LANG==="en"?a.en:a.bn} (${a.en})</option>`
    ).join("");
}

function calcFeed() {
  const animalVal = document.getElementById("calc-animal").value;
  const weight    = parseFloat(document.getElementById("calc-weight").value) || 0;
  const count     = parseInt(document.getElementById("calc-count").value) || 0;

  if (!animalVal || !weight || !count) {
    showToast(LANG==="en" ? "Please fill all fields!" : "সব তথ্য পূরণ করুন!");
    return;
  }

  const animal = SITE.calculator.animals.find(a => a.v === animalVal);
  const dailyPerAnimal = weight * animal.rate;
  const totalDaily     = dailyPerAnimal * count;
  const monthly        = totalDaily * 30;
  const cost           = monthly * SITE.calculator.feedPricePerKg;

  document.getElementById("cr-daily").textContent  = totalDaily.toFixed(1) + " kg";
  document.getElementById("cr-monthly").textContent = monthly.toFixed(1) + " kg";
  document.getElementById("cr-cost").textContent    = "৳ " + Math.round(cost).toLocaleString("bn-BD");
  document.getElementById("cr-product").textContent = animal.prod;
  document.getElementById("calc-result").classList.add("show");
}

/* ── DEALER FORM ─────────────────────────────────────────── */
function submitDealer(e) {
  e.preventDefault();
  const name = document.getElementById("d-name").value;
  showToast(LANG==="en"
    ? `Thank you ${name}! We will contact you soon.`
    : `ধন্যবাদ ${name}! আমরা শীঘ্রই যোগাযোগ করব।`
  );
  e.target.reset();
}

/* ── CONTACT FORM ────────────────────────────────────────── */
function submitContact(e) {
  e.preventDefault();
  showToast(LANG==="en"
    ? "Message sent! We'll reply within 24 hours."
    : "বার্তা পাঠানো হয়েছে! আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেব।"
  );
  e.target.reset();
}

/* ── LANGUAGE TOGGLE ─────────────────────────────────────── */
function setLang(lang) {
  LANG = lang;
  localStorage.setItem("pnf_lang", lang);
  syncLang();
  renderNav();
  renderHero();
  renderStats();
  renderFeatures();
  renderProducts("all");
  renderProcess();
  renderTestimonials();
  renderBlogs();
  renderDealer();
  renderDownloads();
  renderContact();
  renderCalcAnimals();
  initReveal();
}

function syncLang() {
  document.querySelectorAll(".lbtn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === LANG);
  });
  // update static data-en / data-bn text nodes
  document.querySelectorAll("[data-en][data-bn]").forEach(el => {
    if (!el.classList.contains("tab") && !el.classList.contains("btn")) {
      el.textContent = LANG === "en" ? el.dataset.en : el.dataset.bn;
    }
  });
}

/* ── TOAST ───────────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("vis"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".rev").forEach(el => {
    el.classList.remove("vis");
    obs.observe(el);
  });
}

/* ── BIND EVENTS ─────────────────────────────────────────── */
function bindEvents() {
  // Navbar scroll
  window.addEventListener("scroll", () => {
    document.getElementById("nav").classList.toggle("scrolled", window.scrollY > 60);
    document.getElementById("btt").classList.toggle("vis", window.scrollY > 300);
  });

  // Burger
  document.getElementById("burger").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("open");
  });
  // Close nav on link click
  document.querySelectorAll("#nav-links a").forEach(a => {
    a.addEventListener("click", () => document.getElementById("nav-links").classList.remove("open"));
  });

  // Lang buttons
  document.querySelectorAll(".lbtn").forEach(b => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  // Back to top
  document.getElementById("btt").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Calculator
  document.getElementById("calc-btn").addEventListener("click", calcFeed);

  // Dealer form
  document.getElementById("dealer-form").addEventListener("submit", submitDealer);

  // Contact form
  document.getElementById("contact-form").addEventListener("submit", submitContact);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
  });
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  renderCalcAnimals();
});
