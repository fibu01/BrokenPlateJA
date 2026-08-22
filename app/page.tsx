const reservationUrl = "https://sevn.ly/x7oGHGqd";
const instagramUrl = "https://www.instagram.com/brokenplateja/";
const mapUrl = "https://maps.google.com/?q=Broken+Plate+24+Barbican+Road+Progressive+Shopping+Center+Kingston+Jamaica";
const phoneHref = "tel:+18766676891";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const menuSections = [
  {
    title: "Small plates",
    note: "Pass them around. Or don’t.",
    items: [
      { name: "Oxtail Wonton", detail: "Slow-braised oxtail · feta · hoisin sesame oxtail jus", price: "1,950" },
      { name: "Charred Octopus", detail: "Callaloo roasted pepper romesco · pickled red onion · crispy capers", price: "2,250" },
      { name: "Berbere Wings", detail: "Ethiopian spice blend · honey tamarind glaze · coconut yoghurt dip", price: "2,150" },
      { name: "Rock Lobster Bites", detail: "Tempura lobster · miso gochujang · sesame · warm sweet corn salad", price: "2,250" },
      { name: "Jerk Shrimp Flatbread", detail: "Jerk shrimp · marinara · roasted pepper · red onion · house cheese", price: "2,450" },
      { name: "Pumpkin & Basil Spring Roll", detail: "Jamaican pumpkin · fresh basil · callaloo romesco", price: "1,950" },
      { name: "Salmon Tostones", detail: "Panko salmon · caramelised onion · feta · roasted garlic aioli", price: "1,950" },
      { name: "Calamari", detail: "Southern-fried calamari · pimento sweet chilli sauce", price: "2,550" },
    ],
  },
  {
    title: "Pasta & rice",
    note: "Comfort food with passport stamps.",
    items: [
      { name: "Curried Goat Pasta", detail: "Boneless curried goat · rigatoni · béchamel · parmesan · crostini", price: "4,350" },
      { name: "Seafood Scampi", detail: "Linguine · shrimp · mussels · clams · scotch bonnet rosemary broth", price: "4,150" },
      { name: "Lobster Fettuccine", detail: "Lobster · house lobster sauce · tomato · herbs · toasted panko", price: "4,850" },
      { name: "Wok Duck Fried Rice", detail: "Confit duck · mirepoix · scallion · house fry · sunny-side egg", price: "4,550" },
      { name: "Creamy Pesto Pasta", detail: "Rigatoni · house béchamel · basil pesto · grilled crostini", price: "3,650" },
    ],
  },
  {
    title: "Big plates",
    note: "Main-character energy.",
    items: [
      { name: "Braised Oxtail Saffron Risotto", detail: "Slow-braised oxtail · saffron arborio · scotch bonnet butter · parmesan", price: "5,450" },
      { name: "Mango Chilli Shrimp", detail: "Jumbo shrimp · mango purée · scotch bonnet · ginger · crispy shallot · rice pilaf", price: "5,250" },
      { name: "Smoked Pork Chops", detail: "Smoked in-house · passion fruit plum hoisin · mash · vegetables", price: "4,950" },
      { name: "Catch of the Day", detail: "Flash-fried fish · roasted corn salsa · parmesan quinoa risotto", price: "3,950" },
      { name: "Lamb Shank", detail: "Red-wine braised · roasted sweet potato · caramelised onion · vegetables", price: "5,950" },
      { name: "Ribeye", detail: "Creamy truffle pimento jus · mashed potato · sautéed vegetables", price: "12,550" },
    ],
  },
  {
    title: "Fresh & handheld",
    note: "Greens, stacks and serious sandwiches.",
    items: [
      { name: "The BP", detail: "House slaw · beetroot · pumpkin · pineapple · parmesan · tamarind dressing", price: "2,150" },
      { name: "Mediterranean Salad", detail: "Lettuce · cucumber · tomato · feta · olives · almond · lime vinaigrette", price: "2,250" },
      { name: "Oxtail Birria Sandwich", detail: "Slow-braised oxtail · brioche · salsa verde · mozzarella · consommé", price: "4,150" },
      { name: "Honey Sriracha Fish Sandwich", detail: "Beer-battered fish · avocado · bacon · slaw · honey sriracha", price: "3,550" },
      { name: "The Smashed Burger", detail: "Double pesto beef patty · cheddar · sweet onion · pickles · fries", price: "3,950" },
    ],
  },
  {
    title: "Sweet endings",
    note: "You definitely have room.",
    items: [
      { name: "Mango Tres Leches", detail: "Mango sponge · tres leches soak · coconut flakes", price: "1,450" },
      { name: "Chocolate Mousse Cake", detail: "Chocolate cake · dark chocolate mousse · chocolate frosting", price: "1,350" },
      { name: "Carrot Cake Toffee Pudding", detail: "Warm toffee pudding · coffee-whipped topping", price: "1,450" },
      { name: "Rum & Raisin Cheesecake", detail: "Rum-soaked raisins · butter biscuit base", price: "1,450" },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <div className="contact-bar" aria-label="Restaurant contact details">
        <a href={mapUrl} target="_blank" rel="noreferrer"><span>Find us</span> 24 Barbican Road · Progressive Shopping Center</a>
        <a href={phoneHref}><span>Call us</span> (876) 667-6891</a>
        <p>Mon—Sat 12PM—10PM · Sun 12PM—8PM</p>
      </div>
      <header className="site-header">
        <a className="brand official-brand" href="#top" aria-label="Broken Plate home">
          <img src={assetPath("/images/broken-plate-logo.png")} alt="Broken Plate" />
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
          <h1>Jamaican soul.<br /><em>Global appetite.</em></h1>
          <p className="hero-lede">Seasonal Jamaican ingredients, unexpected global technique and plates made to share—served above the city in Barbican.</p>
          <div className="hero-actions">
            <a className="solid-button" href="#menu">Explore the menu <span>↓</span></a>
            <a className="text-link" href={reservationUrl} target="_blank" rel="noreferrer">Reserve a table <span>↗</span></a>
          </div>
          <div className="hero-proof">
            <img src={assetPath("/images/hero-social.jpg")} alt="A guest enjoying Broken Plate" />
            <p><strong>Food first. Good energy always.</strong><br />Dinner dates, celebrations and rooftop nights.</p>
          </div>
        </div>
        <div className="hero-visual">
          <img src={assetPath("/images/rooftop.jpg")} alt="Crisp golden small plates with vibrant dipping sauces at Broken Plate" />
          <div className="hero-badge">
            <span>PASS</span>
            <strong>THE</strong>
            <small>PLATES</small>
          </div>
          <div className="hero-image-note"><span>CHEF-DRIVEN</span><strong>Local flavour.<br />Worldly moves.</strong></div>
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
            <img src={assetPath("/images/rooftop.jpg")} alt="Broken Plate's rooftop terrace at night" />
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
            <img src={assetPath("/images/dish-goat-pasta.jpg")} alt="Broken Plate's curried goat pasta" />
            <div className="food-card-copy"><span>Most talked about</span><h3>Curried Goat<br />Pasta</h3></div>
          </article>
          <article className="food-card">
            <img src={assetPath("/images/dish-tofu.jpg")} alt="Glazed tofu with rice and vegetables" />
            <div className="food-card-copy"><span>Plant-powered</span><h3>Tofu Stir Fry</h3></div>
          </article>
          <article className="food-card bright-card">
            <p>LOCAL<br />FLAVOUR.<br /><em>WORLDLY</em><br />MOVES.</p>
            <span className="scribble">go wild ↗</span>
          </article>
        </div>

        <div className="menu-list">
          {menuSections.map((section) => (
            <section className="menu-category" key={section.title}>
              <header className="menu-category-heading">
                <h3>{section.title}</h3>
                <p>{section.note}</p>
              </header>
              <div className="menu-category-items">
                {section.items.map((item) => (
                  <article key={item.name}>
                    <div><h4>{item.name}</h4><p>{item.detail}</p></div>
                    <strong><small>J$</small>{item.price}</strong>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="menu-note">Menu and prices are seasonal and may change. Ask your server what the kitchen is excited about today.</p>
      </section>

      <section className="sip-section">
        <div className="sip-image">
          <img src={assetPath("/images/interior.jpg")} alt="Broken Plate's rooftop terrace overlooking Kingston" />
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
            <img src={assetPath("/images/dish-salmon.jpg")} alt="A colourful Broken Plate dinner spread" />
            <span>DATE NIGHT, SORTED ↗</span>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-tile social-tile-copy">
            <p>Good food.<br />Better company.<br /><em>Best stories.</em></p>
            <span>JOIN 32K+ FOOD LOVERS</span>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-tile">
            <img src={assetPath("/images/dish-dim-sum.jpg")} alt="Small plates at Broken Plate" />
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
            <a href={mapUrl} target="_blank" rel="noreferrer">Get directions ↗</a>
          </div>
          <div>
            <span className="detail-label">Opening hours</span>
            <p>Mon—Sat <strong>12PM—10PM</strong><br />Sunday <strong>12PM—8PM</strong></p>
            <a href={phoneHref}>(876) 667-6891 ↗</a>
          </div>
          <div>
            <span className="detail-label">Dress note</span>
            <p>Elegant casual.<br />Bring your people.<br />Bring the energy.</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-logo" href="#top" aria-label="Broken Plate home"><img src={assetPath("/images/broken-plate-logo.png")} alt="Broken Plate" /></a>
        <p>Jamaican soul. Global appetite.</p>
        <div><a href={mapUrl} target="_blank" rel="noreferrer">24 Barbican Road ↗</a><a href={phoneHref}>(876) 667-6891</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a></div>
        <span>© 2026 BROKEN PLATE</span>
      </footer>
    </main>
  );
}
