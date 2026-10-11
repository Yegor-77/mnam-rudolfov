
import { useState } from "react";
import "./App.css";

const products = [
  {
    name: "Párek v rohlíku",
    description: "Klasika, která nikdy nezklame.",
    label: "NEJOBLÍBENĚJŠÍ",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
    alt: "Hot dog s pečivem",
  },
  {
    name: "Zmrzlina",
    description: "Sladké osvěžení pro každý den.",
    label: "NĚCO SLADKÉHO",
    image:
      "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=900&q=85",
    alt: "Zmrzlina",
  },
  {
    name: "Párek v těstíčku",
    description: "Křupavá dobrota na cestu.",
    label: "NĚCO DOBRÉHO",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=85",
    alt: "Čerstvé občerstvení",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="topbar">
        ✳ MALÁ ZASTÁVKA PRO VELKOU CHUŤ ✳
      </div>

      <header className="header">
        <a className="logo" href="#domu" onClick={closeMenu}>
          <span className="logo-icon">M<span>!</span></span>
          <span className="logo-text">
            MŇAM
            <small>RUDOLFOV</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#nabidka" onClick={closeMenu}>Naše nabídka</a>
          <a href="#onas" onClick={closeMenu}>O nás</a>
          <a href="#kontakt" onClick={closeMenu}>Kde nás najdete</a>
          <a className="nav-button" href="#nabidka" onClick={closeMenu}>
            Na něco dobrého ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="domu">
          <div className="hero-content">
            <div className="eyebrow">
              <span>✳</span> DOBRÉ JÍDLO. DOBRÁ NÁLADA.
            </div>

            <h1>
              Malá pauza.
              <br />
              <em>Velká chuť.</em>
            </h1>

            <p className="hero-description">
              Dostali jste chuť na něco dobrého?
              Zastavte se u nás v Rudolfově na párek v rohlíku
              nebo sladkou zmrzlinu.
            </p>

            <div className="hero-buttons">
              <a className="button button-dark" href="#nabidka">
                Prohlédnout nabídku <span>↗</span>
              </a>
              <a className="simple-link" href="#kontakt">
                Kde nás najdete ↓
              </a>
            </div>

            <div className="hero-note">
              <span className="smile">☺</span>
              <p>
                <strong>Malá radost na každý den.</strong>
                <br />
                Zastavte se, až půjdete kolem.
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src={products[0].image}
                alt={products[0].alt}
              />
            </div>
            <div className="sticker">
              <span>Dobrá</span>
              <strong>chuť!</strong>
              <span>✳</span>
            </div>
            <div className="small-photo">
              <img src={products[1].image} alt={products[1].alt} />
            </div>
            <div className="photo-caption">
              <span /> NĚCO DOBRÉHO JE VŽDY DOBRÝ NÁPAD
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="ticker-group" key={i}>
                <span>PÁREK V ROHLÍKU</span><b>✳</b>
                <span>ZMRZLINA</span><b>✳</b>
                <span>SLADKÁ PAUZA</span><b>✳</b>
                <span>MŇAM RUDOLFOV</span><b>✳</b>
              </div>
            ))}
          </div>
        </div>

        <section className="menu-section section" id="nabidka">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span>✳</span> CO SI DÁTE?</div>
              <h2>
                Naše malé dobroty.
                <br />
                <em>Vaše velká radost.</em>
              </h2>
            </div>
            <p>
              Na rychlou zastávku, na cestu nebo jen tak.
              Vyberte si něco, na co máte právě chuť.
            </p>
          </div>

          <div className="products">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                  />
                  <span className="product-label">{product.label}</span>
                  <span className="product-number">0{index + 1}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-bottom">
                    <span>Cena bude doplněna</span>
                    <span className="round-arrow">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="demo-note">
            Ukázková nabídka. Ceny a sortiment doplníme později.
          </p>
        </section>

        <section className="about" id="onas">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1100&q=85"
              alt="Dobré jídlo připravené k podávání"
              loading="lazy"
            />
          </div>
          <div className="about-content">
            <div className="eyebrow"><span>✳</span> MŇAM, TO JE ONO</div>
            <h2>
              Někdy stačí
              <br />
              jen <em>něco dobrého.</em>
            </h2>
            <p>
              Cestou domů, po procházce nebo jen tak.
              Dopřejte si malou pauzu a něco dobrého na zub.
            </p>
            <a className="button button-yellow" href="#kontakt">
              Najít nás <span>↗</span>
            </a>
          </div>
          <span className="about-star">✳</span>
        </section>

        <section className="visit section" id="kontakt">
          <div className="visit-content">
            <div className="eyebrow"><span>✳</span> ZASTAVTE SE</div>
            <h2>
              Najdete nás
              <br />
              <em>v Rudolfově.</em>
            </h2>
            <p>
              Až budete mít chuť na něco dobrého,
              budeme se těšit na vaši návštěvu.
            </p>
            <a
              className="button button-dark"
              href="https://www.google.com/maps/search/?api=1&query=Po%C5%A1tovn%C3%AD+29%2C+Rudolfov%2C+Czechia"
              target="_blank"
              rel="noreferrer"
            >
              Otevřít mapu <span>↗</span>
            </a>
          </div>

          <div className="details">
            <div className="detail">
              <span className="detail-icon">⌖</span>
              <div>
                <small>ADRESA</small>
                <strong>Poštovní 29</strong>
                <p>Rudolfov, Jihočeský kraj</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Po%C5%A1tovn%C3%AD+29%2C+Rudolfov%2C+Czechia"
                target="_blank"
                rel="noreferrer"
                aria-label="Otevřít mapu"
              >↗</a>
            </div>
            <div className="detail">
              <span className="detail-icon">◷</span>
              <div>
                <small>OTEVÍRACÍ DOBA</small>
                <strong>Brzy doplníme</strong>
                <p>Časy zatím nejsou potvrzené.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#domu">
          <span className="logo-icon">M<span>!</span></span>
          <span className="logo-text">
            MŇAM
            <small>RUDOLFOV</small>
          </span>
        </a>
        <p>Malá zastávka pro velkou chuť.</p>
        <a className="back-top" href="#domu">Zpět nahoru ↑</a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mňam Rudolfov</span>
          <span>Ukázkový webový projekt</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
