
import React, { useState } from "react";
import "./App.css";

const products = [
  {
    name: "Párek v rohlíku",
    description: "Rychlá klasika, která nikdy nezklame.",
    price: "38 Kč",
    image:
      "https://images.unsplash.com/photo-1612392061981-9d086fe894ed?auto=format&fit=crop&w=1000&q=85",
    tag: "OBLÍBENÁ KLASIKA",
    emoji: "🌭",
  },
  {
    name: "Zmrzlina v kornoutu",
    description: "Sladké osvěžení do každého dne.",
    price: "Cena na místě",
    image:
      "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?auto=format&fit=crop&w=1000&q=85",
    tag: "SLADKÉ OSVĚŽENÍ",
    emoji: "🍦",
  },
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=eFtéčo+Rudolfov";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`site ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <a className="logo" href="#domu" aria-label="eFtéčo – domů">
          <span className="logo-icon">eF</span>
          <span>téčo<span className="logo-dot">.</span></span>
        </a>

        <nav className="nav">
          <a href="#nabidka">Nabídka</a>
          <a href="#nas-pribeh">O nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Zapnout světlý režim" : "Zapnout tmavý režim"}
          title={darkMode ? "Světlý režim" : "Tmavý režim"}
        >
          {darkMode ? "☀️" : "🌙"}
          <span>{darkMode ? "Světlý režim" : "Tmavý režim"}</span>
        </button>
      </header>

      <main>
        <section className="hero" id="domu">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              MALÉ OBČERSTVENÍ V RUDOLFOVĚ
            </div>

            <h1>
              Malá zastávka.
              <br />
              <span>Velká chuť.</span>
            </h1>

            <p className="hero-description">
              Když tě přepadne chuť na něco dobrého, stav se u nás.
              Čeká tě rychlé občerstvení a sladké osvěžení.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#nabidka">
                Prohlédnout nabídku <span>↘</span>
              </a>
              <a
                className="button button-secondary"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Jak se k nám dostat ↗
              </a>
            </div>

            <div className="hero-note">
              <span className="hero-note-icon">✳</span>
              <span>Dobrá nálada je u nás v ceně.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src={products[0].image}
                alt="Párek v rohlíku"
              />
              <div className="hero-image-label">
                <span>🌭</span>
                <div>
                  <strong>Párek v rohlíku</strong>
                  <small>Poctivá klasika</small>
                </div>
              </div>
            </div>

            <div className="hero-sticker">
              <span>DOBRÁ</span>
              <strong>CHUŤ!</strong>
              <span>KAŽDÝ DEN</span>
            </div>

            <div className="hero-sparkle sparkle-one">✳</div>
            <div className="hero-sparkle sparkle-two">✦</div>
          </div>
        </section>

        <div className="ticker" aria-label="Nabídka eFtéčo">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
                <span>🌭 PÁREK V ROHLÍKU</span>
                <span className="ticker-star">✳</span>
                <span>🍦 ZMRZLINA V KORNOUTU</span>
                <span className="ticker-star">✳</span>
                <span>eFtéčo · RUDOLFOV</span>
                <span className="ticker-star">✳</span>
              </div>
            ))}
          </div>
        </div>

        <section className="section products-section" id="nabidka">
          <div className="section-heading">
            <div>
              <div className="section-kicker">CO SI DÁŠ?</div>
              <h2>Naše nabídka<span>.</span></h2>
            </div>
            <p>
              Jednoduše dobré věci, které ti zpříjemní den.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />
                  <span className="product-tag">{product.tag}</span>
                  <span className="product-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="product-info">
                  <div className="product-title-row">
                    <h3>{product.name}</h3>
                    <span className="product-emoji">{product.emoji}</span>
                  </div>
                  <p>{product.description}</p>
                  <div className="product-bottom">
                    <span className="product-price">{product.price}</span>
                    <span className="product-arrow">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="price-note">
            U ostatních produktů se cenu dozvíš přímo na místě.
          </p>
        </section>

        <section className="about-section" id="nas-pribeh">
          <div className="about-symbol">eF<span>✳</span></div>
          <div className="about-content">
            <div className="section-kicker">MÍSTO, KDE SE ZASTAVÍŠ</div>
            <h2>
              Dobrá chuť
              <br />
              <span>bez zbytečných řečí.</span>
            </h2>
            <p>
              Jsme eFtéčo v Rudolfově. Ať máš chuť na rychlou klasiku,
              nebo na zmrzlinu v kornoutu, zastav se u nás.
            </p>
            <a className="text-link" href="#kontakt">
              Najdeš nás tady <span>→</span>
            </a>
          </div>
          <div className="about-decoration">DOBRÉ<br />JÍDLO<br />DOBRÁ<br />NÁLADA.</div>
        </section>

        <section className="contact-section section" id="kontakt">
          <div className="contact-copy">
            <div className="section-kicker">STAV SE NA NĚCO DOBRÉHO</div>
            <h2>Tak co, dáš si?</h2>
            <p>
              Najdeš nás v Rudolfově. Kliknutím otevřeš místo v Google Maps.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <strong>eFtéčo</strong>
              <span>Poštovní 29, Rudolfov</span>
              <a href={mapUrl} target="_blank" rel="noreferrer">
                Otevřít v Google Maps ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#domu">
          <span className="logo-icon">eF</span>
          <span>téčo<span className="logo-dot">.</span></span>
        </a>
        <span>Malé občerstvení, velká chuť.</span>
        <a href="#domu" className="back-to-top">Zpět nahoru ↑</a>
      </footer>
    </div>
  );
}

export default App;
