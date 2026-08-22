const reservationUrl = "https://sevn.ly/x7oGHGqd";
const instagramUrl = "https://www.instagram.com/brokenplateja/";

const menuItems = [
  { name: "Oxtail Wonton", detail: "Slow-braised oxtail · feta · hoisin sesame jus", price: "1,950" },
  { name: "Charred Octopus", detail: "Callaloo romesco · pickled red onion · crispy capers", price: "2,250" },
  { name: "Curried Goat Pasta", detail: "Boneless curried goat · rigatoni · béchamel · parmesan", price: "4,350" },
  { name: "Braised Oxtail Risotto", detail: "Saffron arborio · scotch bonnet butter · scallion oil", price: "5,450" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Broken Plate home">
          <span className="brand-mark">B</span>
          <span>BROKEN<br />PLATE</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#experience">Experience</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-cta" href={reservationUrl} target="_blank" rel="noreferrer">
          Book a table <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Kingston, Jamaica</p>
          <h1>Taste life<br />outside<br /><em>the lines.</em></h1>
          <div className="hero-bottom">
            <p>Bold Jamaican flavour. Global curiosity. One rooftop made for golden hours that turn into great nights.</p>
            <a className="circle-link" href="#menu" aria-label="Explore the menu">↓</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/hero-social.jpg" alt="A guest enjoying golden hour at Broken Plate" />
          <div className="hero-badge">
            <span>OPEN TODAY</span>
            <strong>12—10</strong>
            <small>BARBICAN RD.</small>
          </div>
          <p className="image-credit">ROOFTOP ENERGY · KINGSTON</p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>JAMAICAN SOUL <span>✦</span> GLOBAL PLATES <span>✦</span> GOLDEN HOUR <span>✦</span> GOOD ENERGY <span>✦</span> JAMAICAN SOUL <span>✦</span> GLOBAL PLATES <span>✦</span></div>
      </div>

      <section className="manifesto" id="experience">
        <div className="manifesto-top">
          <p className="section-label">01 · Our thing</p>
          <p className="manifesto-kicker">Creativity runs the kitchen.<br />Good energy runs the room.</p>
        </div>
        <h2>We break the rules,<br /><em>not the vibe.</em></h2>
        <div className="manifesto-grid">
          <div className="manifesto-image">
            <img src="/images/rooftop.jpg" alt="Broken Plate's rooftop terrace at night" />
            <span>THE ROOFTOP · AFTER DARK</span>
          </div>
          <div className="manifesto-copy">
            <p>Broken Plate is Kingston’s indoor-outdoor dining escape: a seasonal menu where Jamaican ingredients meet flavours from everywhere, served with skyline views and a little mischief.</p>
            <div className="stat-row">
              <div><strong>32K+</strong><span>social community</span></div>
              <div><strong>1</strong><span>unmissable rooftop</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div>
            <p className="section-label">02 · On the table</p>
            <h2>Come curious.<br /><em>Leave obsessed.</em></h2>
          </div>
          <a className="text-link" href="https://brokenplatejamaica.com/menu/" target="_blank" rel="noreferrer">View full menu <span>↗</span></a>
        </div>

        <div className="feature-cards">
          <article className="food-card food-card-wide">
            <img src="/images/dish-goat-pasta.jpg" alt="Broken Plate's curried goat pasta" />
            <div className="food-card-copy"><span>Most talked about</span><h3>Curried Goat<br />Pasta</h3></div>
          </article>
          <article className="food-card">
            <img src="/images/dish-tofu.jpg" alt="Glazed tofu with rice and vegetables" />
            <div className="food-card-copy"><span>Plant-powered</span><h3>Tofu Stir Fry</h3></div>
          </article>
          <article className="food-card bright-card">
            <p>LOCAL<br />FLAVOUR.<br /><em>WORLDLY</em><br />MOVES.</p>
            <span className="scribble">go wild ↗</span>
          </article>
        </div>

        <div className="menu-list">
          {menuItems.map((item, index) => (
            <article key={item.name}>
              <span className="menu-number">0{index + 1}</span>
              <div><h3>{item.name}</h3><p>{item.detail}</p></div>
              <strong>J${item.price}</strong>
            </article>
          ))}
        </div>
        <p className="menu-note">Menu and prices are seasonal and may change. Ask your server what the kitchen is excited about today.</p>
      </section>

      <section className="sip-section">
        <div className="sip-image">
          <img src="/images/interior.jpg" alt="Broken Plate's rooftop terrace overlooking Kingston" />
        </div>
        <div className="sip-copy">
          <p className="section-label">Every Thursday · 5PM till late</p>
          <h2>Sip<br /><em>happens.</em></h2>
          <p>Girls’ night on the rooftop. Curated margaritas, pop-up DJs, great friend energy and conversations hotter than the pepper sauce.</p>
          <div className="sip-actions">
            <a className="solid-button" href={reservationUrl} target="_blank" rel="noreferrer">Save your table <span>↗</span></a>
            <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">See what’s on <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="social-heading">
          <div>
            <p className="section-label">Fresh from the feed</p>
            <h2>@brokenplateja</h2>
          </div>
          <a className="social-follow" href={instagramUrl} target="_blank" rel="noreferrer">Follow along <span>↗</span></a>
        </div>
        <div className="social-grid">
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-tile social-tile-tall">
            <img src="/images/dish-salmon.jpg" alt="A colourful Broken Plate dinner spread" />
            <span>DATE NIGHT, SORTED ↗</span>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-tile social-tile-copy">
            <p>Good food.<br />Better company.<br /><em>Best stories.</em></p>
            <span>JOIN 32K+ FOOD LOVERS</span>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-tile">
            <img src="/images/dish-dim-sum.jpg" alt="Small plates at Broken Plate" />
            <span>PASS THE PLATES ↗</span>
          </a>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-title">
          <p className="section-label light">03 · Your table is waiting</p>
          <h2>Meet us<br /><em>up top.</em></h2>
          <a className="solid-button lime-button" href={reservationUrl} target="_blank" rel="noreferrer">Book your table <span>↗</span></a>
        </div>
        <div className="visit-details">
          <div>
            <span className="detail-label">Find us</span>
            <p>24–28 Barbican Road<br />Progressive Shopping Center<br />Kingston, Jamaica</p>
            <a href="https://maps.google.com/?q=Broken+Plate+24-28+Barbican+Road+Kingston+Jamaica" target="_blank" rel="noreferrer">Get directions ↗</a>
          </div>
          <div>
            <span className="detail-label">Opening hours</span>
            <p>Mon—Sat <strong>12PM—10PM</strong><br />Sunday <strong>12PM—8PM</strong></p>
            <a href="tel:+18766676891">(876) 667-6891 ↗</a>
          </div>
          <div>
            <span className="detail-label">Dress note</span>
            <p>Elegant casual.<br />Bring your people.<br />Bring the energy.</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark inverse">B</span><span>BROKEN<br />PLATE</span></a>
        <p>Jamaican soul. Global appetite.</p>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://brokenplatejamaica.com/menu/" target="_blank" rel="noreferrer">Menu ↗</a></div>
        <span>© 2026 BROKEN PLATE</span>
      </footer>
    </main>
  );
}
