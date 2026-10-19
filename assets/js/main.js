/* Shared header, footer and small interactions for every page.
   Edit SITE below to change contact details everywhere at once. */
const SITE = {
  phone: "+6012-751 6585",
  phoneRaw: "60127516585",
  email: "stealthmedventures@gmail.com",
  address: "7-01 (Suite 5), Jalan Kencana Mas 1/1, Kawasan Perindustrian Tebrau 3, 81100 Johor Bahru, Johor, Malaysia.",
  company: "Stealthmed Ventures",
  ssm: "202403286971 (003662769-H)",
};

// Logos shown directly under the Medsooth logo (client request).
const CERTS = [
  { src: "sirim.png", alt: "SIRIM QAS International" },
  { src: "ssm.png", alt: "Suruhanjaya Syarikat Malaysia (SSM)" },
  { src: "mof.png", alt: "Ministry of Finance Malaysia (MOF)" },
  { src: "myipo.png", alt: "Perbadanan Harta Intelek Malaysia (MyIPO)" },
  { src: "stride.png", alt: "STRIDE" },
];

// Government agencies / clients. `src: null` renders a placeholder until the logo file is supplied.
const AGENCIES = [
  { src: "johor.png", name: "Kerajaan Negeri Johor" },
  { src: null, name: "JMF", short: "JMF" },
  { src: null, name: "JPJ", short: "JPJ" },
  { src: "agency/kkm.png", name: "Kementerian Kesihatan Malaysia" },
  { src: "agency/atm.png", name: "Angkatan Tentera Malaysia" },
  { src: "agency/tldm.png", name: "Tentera Laut Diraja Malaysia" },
  { src: "agency/tudm.png", name: "Tentera Udara Diraja Malaysia" },
  { src: "agency/pdrm.png", name: "Polis Diraja Malaysia" },
  { src: "agency/penjara.png", name: "Jabatan Penjara Malaysia" },
  { src: "agency/imigresen.png", name: "Jabatan Imigresen Malaysia" },
  { src: "agency/aadk.png", name: "Agensi Antidadah Kebangsaan" },
  { src: "agency/rela.png", name: "RELA" },
  { src: "agency/aksem.png", name: "AKSEM" },
  { src: "agency/maritim.png", name: "Maritim Malaysia" },
  { src: "agency/apm.png", name: "Angkatan Pertahanan Awam" },
  { src: "agency/bomba.png", name: "Bomba dan Penyelamat" },
  { src: "agency/kastam.png", name: "Kastam Diraja Malaysia" },
];

const NAV = [
  ["index.html", "Home"],
  ["about.html", "About Us"],
  ["products.html", "Products"],
  ["medsooth.html", "Medsooth™ Shoes"],
  ["certifications.html", "Certifications"],
];

const LOGO_DIR = "assets/logos/";

function wordmark() {
  return `<span class="wordmark">med<span>sooth</span><sup>TM</sup></span>`;
}

function certRow(cls = "") {
  return `<div class="cert-row ${cls}">${CERTS.map(
    (c) => `<img src="${LOGO_DIR}${c.src}" alt="${c.alt}" title="${c.alt}">`
  ).join("")}</div>`;
}

function agencyLogo(a) {
  return a.src
    ? `<img src="${LOGO_DIR}${a.src}" alt="${a.name}" title="${a.name}">`
    : `<span class="logo-ph" title="${a.name} (logo coming soon)">${a.short}</span>`;
}

function renderHeader() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(
    ([href, label]) => `<a href="${href}"${href === here ? ' class="active"' : ""}>${label}</a>`
  ).join("");
  return `
  <div class="topbar"><div class="container">
    <span>Step Into Relief — Medical health footwear, uniforms &amp; equipment</span>
    <span class="hide-sm"><a href="tel:+${SITE.phoneRaw}">${SITE.phone}</a> &nbsp;·&nbsp; <a href="mailto:${SITE.email}">${SITE.email}</a></span>
  </div></div>
  <header class="site-header"><div class="container">
    <div class="brand-block">
      <a class="brand" href="index.html" aria-label="Medsooth home">
        ${wordmark()}
        <span class="wordmark-sub">MEDICAL HEALTH FOOTWEAR</span>
      </a>
      ${certRow()}
    </div>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav">${links}<a class="btn" href="contact.html">Contact Us</a></nav>
  </div></header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        ${wordmark()}
        <p style="margin-top:12px">Step Into Relief. Medsooth™ is a brand of ${SITE.company}, a Bumiputera-status company and Malaysia government registered supplier of medical health footwear, uniforms and enforcement equipment.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}<li><a href="contact.html">Contact Us</a></li></ul>
      </div>
      <div>
        <h4>Products</h4>
        <ul>
          <li><a href="products.html#kasut">Footwear &amp; Health Shoes</a></li>
          <li><a href="products.html#tudung-topi">Nurse Tudung &amp; Caps</a></li>
          <li><a href="products.html#linen">Hospital Linen</a></li>
          <li><a href="products.html#pakaian-seragam">Uniformed Services Apparel</a></li>
          <li><a href="products.html#aksesori">Accessories</a></li>
        </ul>
      </div>
      <div>
        <h4>Get In Touch</h4>
        <ul>
          <li><a href="tel:+${SITE.phoneRaw}">${SITE.phone}</a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>${SITE.address}</li>
        </ul>
      </div>
    </div>
    <div class="footer-agencies"><div class="container row">${AGENCIES.map(agencyLogo).join("")}</div></div>
    <div class="container footer-bottom">
      <span>© ${year} ${SITE.company} (${SITE.ssm}). All rights reserved.</span>
      <span>Medsooth™ — Step Into Relief</span>
    </div>
  </footer>
  <a class="wa-float" href="https://wa.me/${SITE.phoneRaw}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zM20.4 3.6C18.2 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.6-8.3z"/></svg>
  </a>
  <div class="lightbox" role="dialog" aria-modal="true"><div><img alt=""><p></p></div></div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader();
  if (f) f.outerHTML = renderFooter();

  document.querySelectorAll("[data-certs]").forEach((el) => (el.outerHTML = certRow()));
  document.querySelectorAll("[data-agencies]").forEach((el) => {
    el.innerHTML = AGENCIES.map(
      (a) => `<figure>${agencyLogo(a)}<figcaption>${a.name}</figcaption></figure>`
    ).join("");
  });
  document.querySelectorAll("[data-site]").forEach((el) => {
    const v = SITE[el.dataset.site];
    if (v) el.textContent = v;
  });

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // Lightbox for product photos
  const lb = document.querySelector(".lightbox");
  if (lb) {
    document.querySelectorAll(".prod, .prod-wide").forEach((fig) => {
      fig.addEventListener("click", () => {
        const img = fig.querySelector("img");
        lb.querySelector("img").src = img.src;
        lb.querySelector("img").alt = img.alt;
        lb.querySelector("p").textContent = fig.querySelector("figcaption")?.innerText || "";
        lb.classList.add("open");
      });
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.addEventListener("keydown", (e) => e.key === "Escape" && lb.classList.remove("open"));
  }

  // Highlight the category in the products side menu while scrolling
  const links = document.querySelectorAll(".prod-nav a");
  if (links.length && "IntersectionObserver" in window) {
    const map = new Map([...links].map((a) => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          map.get(en.target.id)?.classList.add("active");
        }
      }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll(".prod-cat").forEach((s) => io.observe(s));
  }

  // Enquiry form -> WhatsApp message
  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const msg =
        `Hi Medsooth / ${SITE.company},\n\n` +
        `Name: ${d.get("name")}\nOrganisation: ${d.get("org") || "-"}\nPhone: ${d.get("phone")}\n` +
        `Interested in: ${d.get("category")}\n\n${d.get("message")}`;
      window.open(`https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`, "_blank");
    });
  }
});
