const services = [
  {
    title: "Health Monitoring",
    icon: "🩺",
    description: "Routine vitals tracking, chronic condition checks, and early risk identification.",
  },
  {
    title: "Nutrition Support",
    icon: "🥗",
    description: "Personalized diet guidance to improve immunity, strength, and energy levels.",
  },
  {
    title: "Exercise & Physiotherapy",
    icon: "🧘",
    description: "Mobility-focused exercise plans and physiotherapy support for safer daily movement.",
  },
  {
    title: "Medical Care at Home",
    icon: "💉",
    description: "Basic nursing assistance including injections, checkups, and medication support.",
  },
  {
    title: "Mental & Spiritual Care",
    icon: "🧠",
    description: "Counseling, emotional companionship, and spiritual comfort for inner wellbeing.",
  },
];

const navItems = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "services.html", label: "Services" },
  { href: "booking.html", label: "Booking" },
  { href: "contact.html", label: "Contact" },
];

function renderHeader() {
  const headerRoot = document.querySelector('[data-component="header"]');
  if (!headerRoot) {
    return;
  }

  const current = window.location.pathname.split("/").pop() || "index.html";
  const links = navItems
    .map(
      (item) =>
        `<a href="${item.href}" class="${current === item.href ? "active" : ""}">${item.label}</a>`
    )
    .join("");

  headerRoot.innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html">HealthSpan Care</a>
        <nav class="nav-links" aria-label="Main navigation">${links}</nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const footerRoot = document.querySelector('[data-component="footer"]');
  if (!footerRoot) {
    return;
  }

  footerRoot.innerHTML = `
    <footer class="site-footer">
      <div class="container">© ${new Date().getFullYear()} HealthSpan Care. Compassion-first elder care.</div>
    </footer>
  `;
}

function renderServiceCards(targetId, limit = services.length) {
  const element = document.getElementById(targetId);
  if (!element) {
    return;
  }

  element.innerHTML = services
    .slice(0, limit)
    .map(
      (service) => `
      <article class="card fade-in">
        <div class="card-icon" aria-hidden="true">${service.icon}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `
    )
    .join("");
}

function setFormHandler(formId, messageId, successText) {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);

  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = successText;
    form.reset();
  });
}

function initFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in").forEach((section) => observer.observe(section));
}

renderHeader();
renderFooter();
renderServiceCards("services-preview", 3);
renderServiceCards("services-list");
setFormHandler("booking-form", "booking-message", "Thanks! Our team will call you within 24 hours.");
setFormHandler("contact-form", "contact-message", "Message sent successfully. We'll get back to you soon.");
initFadeIn();
