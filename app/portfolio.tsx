"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Background", href: "#background" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("shehryar-theme", next);
    setTheme(next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Mian Shehryar Hassan, back to top" onClick={closeMenu}>
          MSH
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav id="main-navigation" className={menuOpen ? "navigation is-open" : "navigation"}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="mode-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>

      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow hero-load">Computer Science student</p>
          <h1 className="hero-load hero-delay-one">Mian Shehryar Hassan</h1>
          <p className="hero-intro hero-load hero-delay-two">
            Testing real systems, studying networks, and learning how reliable software is built.
          </p>
          <div className="hero-actions hero-load hero-delay-three">
            <a className="button button-primary" href="#work">See contribution</a>
            <a className="button button-outline" href="/Mian_Shehryar_Hassan_CV.pdf" download>Download CV</a>
          </div>
        </div>

        <aside className="identity-block hero-load hero-delay-two" aria-label="Current academic and project focus">
          <div className="initials" aria-hidden="true">SH</div>
          <div className="identity-facts">
            <div>
              <span>Studying</span>
              <strong>BSc Computer Science</strong>
              <p>University of Trento</p>
            </div>
            <div>
              <span>Contributing</span>
              <strong>Quality Engineering</strong>
              <p>Ordanis</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="work-section page-width section-space" id="work" data-reveal>
        <div className="section-title">
          <p className="eyebrow">Selected contribution</p>
          <h2>Ordanis</h2>
          <p>A distributed workflow and execution platform built for dependable orchestration.</p>
        </div>

        <article className="project-feature">
          <div className="project-identity">
            <img src="/assets/ordanis-mark.svg" alt="Ordanis project mark" width={104} height={104} loading="lazy" decoding="async" />
            <p>Quality Engineering and Release Contributor</p>
            <a href="https://nomaanmunshi.github.io/ordanis/" target="_blank" rel="noreferrer">
              Visit live project <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="project-detail">
            <h3>Looking for failures before users find them.</h3>
            <p>
              Shehryar independently validates workflow behaviour and reports execution or interface problems before releases are approved.
            </p>
            <div className="project-methods">
              <div><strong>Validate</strong><span>End-to-end workflow behaviour</span></div>
              <div><strong>Stress</strong><span>Failure, retry, cancellation, and worker-loss paths</span></div>
              <div><strong>Verify</strong><span>Regression results and release readiness</span></div>
            </div>
          </div>
        </article>
      </section>

      <section className="international-section section-space" data-reveal>
        <div className="page-width international-grid">
          <div>
            <h2>Working across disciplines and borders.</h2>
            <p>
              At Lodz University of Technology, Shehryar joined an international ECIU team addressing a real ESG reporting challenge from Grupa Krotoski.
            </p>
          </div>
          <article>
            <span>ECIU Venture Challenge</span>
            <h3>The Air Check</h3>
            <p>
              A concept for real-time industrial air-emissions monitoring, workplace safety, and clearer ESG reporting.
            </p>
            <ul>
              <li>Stakeholder communication</li>
              <li>Scrum validation</li>
              <li>Business modelling</li>
              <li>Pitch preparation</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="background-section page-width section-space" id="background" data-reveal>
        <div className="section-title compact-title">
          <h2>Background</h2>
          <p>Academic progress, practical responsibility, and a growing technical foundation.</p>
        </div>

        <div className="background-grid">
          <article className="background-primary">
            <span>2025 - Present</span>
            <h3>BSc Computer Science</h3>
            <p>University of Trento, Italy</p>
          </article>
          <article>
            <span>2021 - 2022</span>
            <h3>Certificate of Higher Education in ICT</h3>
            <p>University of Bedfordshire, United Kingdom</p>
            <strong>Distinction, EQF Level 5</strong>
          </article>
          <article>
            <span>2018 - 2020</span>
            <h3>Higher Secondary School Certificate</h3>
            <p>Royal National College for Boys and Girls, Kharian</p>
          </article>
          <article className="work-history">
            <span>Jan 2025 - Mar 2025</span>
            <h3>Production Line Worker</h3>
            <p>Galvanove SRL, Novellara</p>
            <strong>Production support, visual quality checks, maintenance procedures, and team logistics.</strong>
          </article>
        </div>
      </section>

      <section className="toolkit-section section-space" id="toolkit" data-reveal>
        <div className="page-width toolkit-layout">
          <div className="toolkit-heading">
            <h2>Current toolkit</h2>
            <p>An honest snapshot of the skills he can support with practical evidence today.</p>
          </div>
          <div className="toolkit-groups">
            <article>
              <h3>Quality engineering</h3>
              <p>End-to-end validation, regression testing, failure-path checks, release verification, and defect reporting</p>
            </article>
            <article>
              <h3>Networking</h3>
              <p>TCP/IP, OSI model, Ethernet, IP addressing, switching, and routing fundamentals</p>
            </article>
            <article>
              <h3>Certification</h3>
              <p>CCNAv7: Introduction to Networks, Cisco Networking Academy</p>
            </article>
            <article>
              <h3>Languages and tools</h3>
              <p>Urdu, English, beginner Italian, Microsoft Office, and Adobe Photoshop</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section page-width" id="contact" data-reveal>
        <div>
          <h2>Start a conversation.</h2>
          <p>Connect about software quality, networking, or collaborative technical work.</p>
        </div>
        <div className="contact-actions">
          <a className="button contact-primary" href="mailto:hassanshehryar38@yahoo.com">Email Shehryar</a>
          <a href="https://github.com/Shehryar08" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/mian-shehryar-hassan-60477a207/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="footer page-width">
        <span>Mian Shehryar Hassan</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
