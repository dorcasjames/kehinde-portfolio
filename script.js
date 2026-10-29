/* ===== ARTWORK DATA (edit here to add / change works) ===== */
const WORKS = [
  { id:"flourish", title:"Flourish", cat:"Painting", medium:"Acrylic on canvas", theme:"Vibrance, inner growth & the architecture of becoming",
    desc:["Flourish explores vibrance, inner growth and the beauty carried within us. Growth can develop quietly through thought, ancestral memory, culture and lived experience before it becomes visible in the person we are becoming.","Layered abstract gestures and West African aesthetic configurations transform the figure into a mirror of internal transformation. The work considers becoming not as a single event, but as an unfolding architecture built from memory, experience and possibility."] },
  { id:"beauty-of-becoming", title:"The Beauty of Becoming", cat:"Mixed media", medium:"Mixed media / painting", theme:"Transformation, vulnerability & renewal",
    desc:["Part of a three-work cycle exploring the jellyfish and the contradictions within its existence, this work uses the organism as a metaphor for transformation, strategic return and survival.","The immortal jellyfish, Turritopsis dohrnii, becomes a poetic symbol of renewal: a reminder that transformation can include retreat, adaptation and the courage to begin again."] },
  { id:"nubian-beauty", title:"The Nubian Beauty", cat:"Painting", medium:"Oil on canvas", theme:"Identity, dignity & African beauty",
    desc:["A visual celebration of identity, created to honour the beauty, strength and elegance of the African woman. The subject merges with continuous texture that echoes the tonal language of her skin, suggesting an enduring relationship between heritage, earth and identity.","The work positions beauty not as decoration alone, but as presence, dignity and cultural affirmation."] },
  { id:"elysian-bloom", title:"Elysian Bloom", cat:"Painting", medium:"Acrylic", theme:"Femininity, nature & the cosmos",
    desc:["Elysian Bloom explores the meeting point between femininity, nature and the cosmos. The woman exists between earthly and celestial realms; the flower signals renewal, beauty and impermanence, while the celestial form suggests a world beyond ordinary perception.","The composition creates an atmosphere of quiet transcendence, where identity is imagined as both rooted and expansive."] },
  { id:"echoes-in-the-abyss", title:"Echoes in the Abyss", cat:"Painting", medium:"Oil on canvas · 2024", theme:"The hidden dimensions of the human condition",
    desc:["A reflection on emotions, memories and questions beneath what we allow others to see. The abyss represents deeper spaces of existence that resist easy understanding, while its echoes are fragments of experience that continue to shape us.","The work asks the viewer to consider the unseen interior: the emotional and psychological terrain that remains active even when it cannot be spoken."] },
  { id:"where-light-remains", title:"Where Light Remains", cat:"Painting", medium:"Oil on canvas", theme:"Hope surviving within gravity",
    desc:["An exploration of difficult intervals in which density, uncertainty, structural beauty and ongoing hope coexist. Muted and darker fields denote hardship, while deliberate traces of vibrant colour survive within that gravity.","The work does not deny darkness; instead, it searches for the evidence of light that remains within it."] },
  { id:"enikoh", title:"Enikoh", cat:"Painting", medium:"Collected work · Created in the 1990s", theme:"Landscape, memory, continuity & the dignity of everyday life",
    desc:["Enikoh is a landscape of remembered life. The work centres on a solitary woman moving along a village path, carrying her burden with quiet familiarity. Around her, water, homes, trees and distant figures form more than a setting: they become a visual archive of community, labour, belonging and continuity.","The inspiration behind Enikoh lies in the quiet poetry of everyday existence and the relationship between people and the environments that shape them. The dramatic red foliage, golden earth, blue water and softened village architecture create a chromatic rhythm between vitality and nostalgia. Nature is not passive scenery here; it appears as a witness to human passage.","The central figure can be understood as a carrier of memory, moving forward while remaining connected to a world built by those who came before her. Her bowed movement introduces humility and purpose, while the path suggests continuity between generations.","Within this portfolio, Enikoh expands the conversation around cultural memory. It reminds us that heritage does not survive only in monuments or ceremonies; it also lives in paths, gestures, landscapes, work and the repeated rituals of everyday people."] },
  { id:"ubuntu-we-remain", title:"Ubuntu: We Remain", cat:"Mixed media", medium:"Mixed media assemblage", theme:"Interconnectedness, fracture & resilience",
    desc:["Rooted in interconnectedness, the work explores Africa as a space of beauty, complexity, historical fracture and resilience. Fragmented materials map historic ruptures, while their proximity visualises continuity, a refusal to fall entirely apart.","Ubuntu becomes both a philosophy and a visual structure: the recognition that survival and identity are shaped through relationship."] },
  { id:"sankofa", title:"Sankofa (The Return to Roots)", cat:"Mixed media", medium:"Acrylic / mixed media on canvas", theme:"Looking back to move forward",
    desc:["Drawn from the Ghanaian Adinkra proverb, the work treats the retrieval of what risks being forgotten as wisdom rather than regression. The bird moves forward while turning back toward a golden egg representing ancestral knowledge and identity.","Sankofa proposes that progress becomes stronger when it remains capable of remembering."] },
  { id:"watcher", title:"Watcher", cat:"Mixed media", medium:"Mixed media / painting", theme:"The intelligence of the gaze",
    desc:["Watcher explores the quiet intelligence of nature through the direct gaze of a ram. Its horns suggest strength and resilience, while its calm expression suggests vulnerability and awareness.","The animal becomes a silent witness, reminding us that human existence is not separate from nature, but embedded within it."] },
  { id:"unseen-horizon", title:"The Unseen Horizon", cat:"Drawing", medium:"Ink on paper", theme:"A profile study in cross-hatching",
    desc:["A profile study built from dense, deliberate cross-hatching, where sharp ink and heavy saturation carve a figure with the permanence of ancient stone.","The eye remains fiercely alive, fixed on an unseen horizon and carrying the suggestion of hard-won wisdom, endurance and unspoken stories."] },
  { id:"unblinking-eye", title:"The Unblinking Eye", cat:"Painting", medium:"Oil on paper", theme:"A study in colour, memory & stillness",
    desc:["The bird is placed within an intense field of yellow, while one wide, unblinking eye holds the composition in a state of stillness. Layered bands of red, blue, cream, ochre and black become a visual timeline of memory.","The work is about the watcher within every person: the private witness that observes before it reacts."] },
  { id:"premodia-mind", title:"The Premodia Mind", cat:"Sculpture", medium:"Sculpture · 2026", theme:"Contemporary sculpture / conceptual art",
    desc:["The Premodia Mind explores consciousness before it becomes fully defined by society, language, culture, experience and constructed identity. The elongated human form becomes a vessel for thought.","Its narrowed eyes suggest an inward gaze, while the golden line through the centre connects consciousness and unconsciousness, past and present, fragmentation and wholeness. The sculpture is ultimately about the mind before the world finishes defining it."] }
];

const CHRONICLE = [
  { id:"baba-igbo", title:"Baba Igbó", role:"The Elder of the Grove", tag:"The grove that remembers",
    desc:["Baba Igbó is the oldest of the grove-keepers and the keeper of memory. He holds the Ọ̀run-Ọmọ, the moon-fruit of memory, said to carry the remembrance of those who came before.","His presence establishes the central philosophy of the kingdom: a community is strengthened by what it refuses to lose. Through Baba Igbó, memory becomes an active form of guardianship rather than a passive attachment to the past."] },
  { id:"oba-ade", title:"Ọba Adé", role:"The Crowned One", tag:"The weight of the crown",
    desc:["Ọba Adé embodies patience, stillness and responsibility. His crown is more than ornament; it represents a debt to the ancestors and a promise to serve the grove.","The portrait asks what responsibility looks like when the noise dies down and only the weight remains. Kingship is presented not as spectacle, but as the discipline of carrying collective expectation."] },
  { id:"jagun", title:"Jagun", role:"Captain of the Ọ̀pá Guard", tag:"Keeper of the staff",
    desc:["Jagun represents the resolve of Igbó Ọba. He carries the Ọ̀pá-Ìṣẹ́gun, the Staff of Victory, whose symbolism records the threats the kingdom has survived.","His readiness is measured not by conquest, but by the restraint required to protect what is remembered. Jagun therefore embodies disciplined strength: power in service of preservation."] },
  { id:"alarinka", title:"Alárìnká", role:"The One Who Walks Between", tag:"The one who walks between",
    desc:["Alárìnká is trader, scout and teller of half-truths, the link between Igbó Ọba and the world beyond its borders.","He represents the present moment and the necessity for even an old and wise kingdom to remain connected to what lies beyond itself. Through him, the project acknowledges that tradition cannot survive by isolation alone; it must negotiate, travel and encounter change."] }
];

/* ===== HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s);
const pad = n => String(n).padStart(2, "0");
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

/* ===== BUILD GALLERY ===== */
const grid = $("#grid");
WORKS.forEach((w, i) => {
  const el = document.createElement("article");
  el.className = "work";
  el.tabIndex = 0;
  el.dataset.cat = w.cat;
  el.dataset.index = i;
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", `View ${w.title}`);
  el.innerHTML = `<img src="images/thumbs/${w.id}.jpg" alt="${esc(w.title)}, ${esc(w.medium)}" loading="lazy">
    <div class="cap"><span class="num">${pad(i + 1)}</span><h3>${esc(w.title)}</h3><span class="med">${esc(w.medium)}</span></div>`;
  grid.appendChild(el);
});

/* ===== BUILD IGBO OBA CHRONICLE ===== */
const chron = $("#chronicle");
CHRONICLE.forEach((c, i) => {
  const el = document.createElement("div");
  el.className = "chap reveal";
  el.innerHTML = `<div class="chap-img" data-index="${i}" tabindex="0" role="button" aria-label="View ${esc(c.title)}">
      <img src="images/${c.id}.jpg" alt="${esc(c.title)}, ${esc(c.role)}" loading="lazy"></div>
    <div class="chap-text"><div class="chap-no">${pad(i + 1)}</div>
      <h3>${esc(c.title)}</h3><p class="tag">${esc(c.role)}</p>
      ${c.desc.map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
  chron.appendChild(el);
});

/* ===== FILTERS ===== */
$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".chip");
  if (!b) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === b));
  const f = b.dataset.filter;
  document.querySelectorAll(".work").forEach(w => w.classList.toggle("hide", f !== "all" && w.dataset.cat !== f));
});

/* ===== LIGHTBOX ===== */
const lb = $("#lightbox");
let list = [], idx = 0, lastFocus = null;

function visibleWorks() {
  // follow the current filter so next/prev stays inside what the visitor sees
  const shown = [...document.querySelectorAll(".work:not(.hide)")].map(el => +el.dataset.index);
  return shown.map(i => WORKS[i]);
}

function render() {
  const w = list[idx];
  const img = $("#lbImg");
  const isChron = list === CHRONICLE;
  img.src = `images/${w.id}.jpg`;
  img.alt = w.title;
  $("#lbCount").textContent = `${isChron ? "Igbó Ọba" : "Work"} ${pad(idx + 1)} / ${pad(list.length)}`;
  $("#lbTitle").textContent = w.title;
  $("#lbMeta").textContent = isChron ? w.role : w.medium;
  $("#lbTheme").textContent = isChron ? w.tag : w.theme;
  $("#lbDesc").innerHTML = w.desc.map(p => `<p>${esc(p)}</p>`).join("");
  $(".lb-info").scrollTop = 0;
}

function openLB(arr, i) {
  list = arr; idx = i;
  lastFocus = document.activeElement;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  render();
  $("#lbClose").focus();
}
function closeLB() {
  lb.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
const step = d => { idx = (idx + d + list.length) % list.length; render(); };

grid.addEventListener("click", e => {
  const w = e.target.closest(".work");
  if (!w) return;
  const arr = visibleWorks();
  openLB(arr, arr.indexOf(WORKS[+w.dataset.index]));
});
chron.addEventListener("click", e => {
  const c = e.target.closest(".chap-img");
  if (c) openLB(CHRONICLE, +c.dataset.index);
});
document.addEventListener("keydown", e => {
  if (!lb.hidden) {
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  } else if (e.key === "Enter" || e.key === " ") {
    const t = e.target;
    if (t.classList && (t.classList.contains("work") || t.classList.contains("chap-img"))) { e.preventDefault(); t.click(); }
  }
});
$("#lbClose").onclick = closeLB;
$("#lbPrev").onclick = () => step(-1);
$("#lbNext").onclick = () => step(1);
lb.addEventListener("click", e => { if (e.target === lb) closeLB(); });

// swipe on phones
let sx = null;
lb.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", e => {
  if (sx === null) return;
  const dx = e.changedTouches[0].clientX - sx;
  if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
  sx = null;
});

/* ===== NAV ===== */
const nav = $("#nav"), menu = $("#menu"), btn = $("#menuBtn");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open"); btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false"); document.body.style.overflow = "";
  }
});

/* ===== SCROLL REVEAL ===== */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 })
  : null;
document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));

$("#yr").textContent = new Date().getFullYear();
