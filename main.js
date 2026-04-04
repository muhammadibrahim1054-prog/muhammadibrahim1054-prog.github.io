// =============================================
// MUHAMMAD IBRAHIM — PERSONAL SITE JS
// =============================================

// --- Sample posts data (edit freely) ---
const posts = [
  {
    id: 1,
    title: "Understanding Boolean Algebra Through Set Theory",
    excerpt: "A dive into how (A ∪ B) ∩ (A ∪ B') simplifies to A using the distributive and complement laws...",
    category: "Mathematics",
    date: "2026-03-28",
    file: "blog/post-1.html",
    featured: true,
  },
  {
    id: 2,
    title: "The Art of Writing Clear Technical Prose",
    excerpt: "Most technical writing fails not because the ideas are bad, but because the structure obscures them.",
    category: "Writing",
    date: "2026-03-21",
    file: "blog/post-2.html",
  },
  {
    id: 3,
    title: "Why Discrete Math Matters for Programmers",
    excerpt: "From graph traversal to cryptography, discrete math is hiding in more code than you think.",
    category: "Development",
    date: "2026-03-14",
    file: "blog/post-3.html",
  },
  {
    id: 4,
    title: "Notes on Building Personal Projects",
    excerpt: "The best projects start with a genuine itch to scratch. Here's what I've learned from building mine.",
    category: "Reflection",
    date: "2026-03-07",
    file: "blog/post-4.html",
  },
];

// --- Helpers ---
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric"
  });
}

// --- NAV scroll ---
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

// --- Mobile nav toggle ---
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// --- Reveal on scroll ---
const revealEls = document.querySelectorAll(".reveal, .skill-card, .post-card, .contact-link");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// --- Counter animation ---
function animateCounter(el, target, duration = 1800) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll(".stat-num").forEach(el => {
        animateCounter(el, parseInt(el.dataset.target));
      });
      statObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const statsSection = document.querySelector(".about-stats");
if (statsSection) statObserver.observe(statsSection);

// --- Inject featured post ---
const featured = posts.find(p => p.featured);
if (featured) {
  document.getElementById("featuredTitle").textContent = featured.title;
  document.getElementById("featuredExcerpt").textContent = featured.excerpt;
  document.getElementById("featuredDate").textContent = formatDate(featured.date);
  const featuredLink = document.querySelector(".post-featured .btn");
  if (featuredLink) featuredLink.href = featured.file;
}

// --- Inject post grid (non-featured, max 3) ---
const grid = document.getElementById("postsGrid");
const otherPosts = posts.filter(p => !p.featured).slice(0, 3);
otherPosts.forEach(post => {
  const card = document.createElement("a");
  card.href = post.file;
  card.className = "post-card";
  card.innerHTML = `
    <div class="post-card-meta">
      <span class="post-card-cat">${post.category}</span>
      <span class="post-card-date">${formatDate(post.date)}</span>
    </div>
    <h4>${post.title}</h4>
    <p>${post.excerpt}</p>
  `;
  grid.appendChild(card);
});
