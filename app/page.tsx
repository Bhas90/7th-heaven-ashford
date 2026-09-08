

import { ArrowRight, CakeSlice, Clock3, MapPin, Menu, MessageCircle, Phone, ShoppingBag, Sparkles, Truck, UsersRound } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const phoneDisplay = "+44 7359 778589";
const whatsappNumber = "447359778589";
const navItems = [
  { label: "Catering", href: "#catering" }, { label: "Delivery", href: "#delivery" },
  { label: "Location", href: "#location" }, { label: "About", href: "#about" },
];
const menuLinks = [
  { label: "Corporate", href: "#corporate" }, { label: "Celebrations", href: "#celebrations" },
  { label: "Desserts", href: "#desserts" }, { label: "Wedding Cakes", href: "#wedding-cakes" },
];
const corporate = [
  { name: "Working Lunch - Curry Bowl", price: "£9.95 pp", detail: "Choice of vegetarian or non-vegetarian curry meal bowl with basmati rice, salad and a mini dessert." },
  { name: "Working Lunch - Biryani Bowl", price: "£12.95 pp", detail: "Choice of vegetarian or non-vegetarian biryani bowl with salad, yoghurt and a mini dessert." },
  { name: "Executive Lunch", price: "£18.95 pp", detail: "Choice of starter and curry, served with rice, mini breads, salad, a soft drink and two mini desserts." },
  { name: "Breakfast Meet", price: "£9.95 pp", detail: "Sandwich or wrap, or two stuffed pastry puffs, with masala chai, coffee, fruit and two mini pastries." },
  { name: "Custom Platters", price: "Price on request", detail: "Vegetarian, non-vegetarian, fruit and cheese, cold meat with bread, or dessert platters." },
];
const celebrations = [
  { name: "Birthdays & Team Sessions", price: "£30 per cake", detail: "One 6-inch classic flavour cake, or eight chocolate or strawberry jam-filled cupcakes." },
  { name: "Bronze Package", price: "£120 pm", detail: "Two 8-inch classic celebration cakes each serving 12, or six stuffed cupcakes supplied four times per month." },
  { name: "Silver Package", price: "£250 pm", detail: "Three 8-inch premium celebration cakes each serving 12, or designer stuffed cupcakes supplied five times per month." },
  { name: "Gold Package", price: "£500 pm", detail: "Monthly executive lunch for 10, one 8-inch premium designer cake, designer cupcakes and 12 mini desserts." },
];
const desserts = [
  { name: "Dessert Shots", prices: ["100 - £2 each", "250 - £1.50 each", "500 - £1.25 each"], flavours: "Chocoholic, Biscoff Bites, salted caramel cream, cookies & cream, fruity flavours, Nutty Bites or Blueberry Burst." },
  { name: "Dessert Cups", prices: ["100 - £3.25 each", "250 - £3 each", "500 - £2.50 each"], flavours: "Strawberry Cream, Oreo Cream, Black Forest, Mango Delight, Brownie & Cream or Triple Chocolate." },
  { name: "Tub of Joy", prices: ["100 - £4 each", "250 - £3.50 each", "500 - £3 each"], flavours: "Red velvet cream cheese, mango sunshine, chocolate ganache, salted caramel & chocolate, fusion flavours and more." },
  { name: "Fusion Plates", prices: ["Price on request"], flavours: "A custom-made mix of desserts arranged on a sharing plate." },
  { name: "Slice of Ice Cream Cake", prices: ["100 - £3.50 each", "250 - £3 each", "500 - £2.50 each"], flavours: "Vanilla jammed, chocolate strawberry, raspberry love, fresh fruit slice, Pista Fresh or nutty chocolate." },
];
const weddingPrices = [
  ["4 kg", "£250", "£325"], ["5 kg", "£300", "£375"], ["6 kg", "£360", "£435"],
  ["7 kg", "£420", "£495"], ["8 kg", "£500", "£575"], ["9 kg", "£520", "£595"],
  ["10 kg", "£600", "£675"], ["11 kg", "£670", "£745"], ["12 kg", "£750", "£825"],
];

function whatsappUrl(item: string, price?: string) {
  const details = price ? `${item} (${price})` : item;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello 7th Heaven, I would like to enquire about: ${details}. Please share availability and ordering details.`)}`;
}
function OrderLink({ item, price, label = "Enquire on WhatsApp" }: { item: string; price?: string; label?: string }) {
  return <a className="order-link" href={whatsappUrl(item, price)} target="_blank" rel="noreferrer" aria-label={`${label} for ${item}`}><MessageCircle size={18}/><span>{label}</span><ArrowRight size={17}/></a>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="insta-dot" cx="17.4" cy="6.7" r="1"/></svg>;
}

export default function Home() {
  return <main>
    <header className="site-header"><div className="header-inner">
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</nav>
      <a className="brand" href="#top" aria-label="7th Heaven Bakery home"><img src="/7th-heaven-logo.png" alt="7th Heaven - a slice of happiness"/></a>
      <div className="header-actions">
        <a className="menu-button desktop-menu" href="#menu">View menu</a>
        <div className="socials" aria-label="Social media"><a href="https://www.instagram.com/7thheavenashford/" target="_blank" rel="noreferrer" aria-label="Follow 7th Heaven Ashford on Instagram"><InstagramIcon/></a></div>
        <Sheet><SheetTrigger className="drawer-trigger" aria-label="Open menu"><Menu size={24}/></SheetTrigger>
          <SheetContent className="drawer-panel"><SheetHeader><SheetTitle className="drawer-title">Explore 7th Heaven</SheetTitle><SheetDescription>Menu, services and store information.</SheetDescription></SheetHeader>
            <nav className="drawer-nav" aria-label="Mobile navigation">{[...navItems, ...menuLinks].map(i => <SheetClose key={i.label} asChild><a href={i.href}><span>{i.label}</span><ArrowRight size={17}/></a></SheetClose>)}</nav>
            <a className="drawer-whatsapp" href={whatsappUrl("a bakery order")} target="_blank" rel="noreferrer"><MessageCircle size={20}/> WhatsApp us</a>
          </SheetContent>
        </Sheet>
      </div>
    </div></header>

    <section className="hero" id="top"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="hero-copy"><span className="eyebrow"><Sparkles size={15}/> Made for every celebration</span><h1>A little slice of<br/><em>happiness.</em></h1>
        <p>Cakes, desserts, celebration packages and freshly prepared catering from 7th Heaven Bakery in Ashford.</p>
        <div className="hero-actions"><a className="primary-button" href="#menu">Explore our menu <ArrowRight size={18}/></a><a className="text-button" href={whatsappUrl("a bakery order")} target="_blank" rel="noreferrer">Order on WhatsApp</a></div>
      </div>
      <div className="hero-stamp" aria-hidden="true"><CakeSlice size={40}/><strong>Freshly made</strong><span>for Ashford</span></div>
    </section>

    <section className="quick-links" id="delivery" aria-label="Ordering options">
      <a href="#catering"><UsersRound/><span><small>Planning an event?</small>Catering packages</span><ArrowRight/></a>
      <a href={whatsappUrl("a collection order")} target="_blank" rel="noreferrer"><ShoppingBag/><span><small>Order ahead</small>Collection</span><ArrowRight/></a>
      <a href={whatsappUrl("a delivery order")} target="_blank" rel="noreferrer"><Truck/><span><small>Ask us about</small>Local delivery</span><ArrowRight/></a>
    </section>

    <section className="intro" id="about"><span className="section-kicker">Welcome to 7th Heaven</span><h2>Sweet moments, thoughtfully made.</h2><p>From working lunches and office celebrations to dessert tables and bespoke wedding cakes, choose what suits your occasion and send the details straight to us on WhatsApp.</p></section>

    <section className="menu-section" id="menu">
      <div className="menu-heading"><div><span className="section-kicker">Browse & enquire</span><h2>Our menus</h2></div><p>Select an item and we’ll prepare your enquiry with its name, quantity and price.</p></div>
      <nav className="category-nav" aria-label="Menu categories">{menuLinks.map((i,n) => <a key={i.label} href={i.href}><span>0{n+1}</span>{i.label}</a>)}</nav>

      <div className="menu-block" id="corporate"><div className="block-intro"><span>01</span><div><h3>Corporate packages</h3><p>Made for meetings, working lunches and team gatherings.</p></div></div>
        <div className="item-grid">{corporate.map(i => <article className="menu-card" key={i.name}><div className="card-top"><h4>{i.name}</h4><strong>{i.price}</strong></div><p>{i.detail}</p><OrderLink item={i.name} price={i.price}/></article>)}</div>
        <p className="fine-print">Minimum quantities apply. VAT, service charges and customisation charges may apply.</p>
      </div>

      <div className="menu-block accent-block" id="celebrations"><div className="block-intro"><span>02</span><div><h3>Celebrate packages</h3><p>Easy monthly options for birthdays and team milestones.</p></div></div>
        <div className="item-grid two-col">{celebrations.map(i => <article className="menu-card dark-card" key={i.name}><div className="card-top"><h4>{i.name}</h4><strong>{i.price}</strong></div><p>{i.detail}</p><OrderLink item={i.name} price={i.price}/></article>)}</div>
      </div>

      <div className="menu-block" id="desserts"><div className="block-intro"><span>03</span><div><h3>Dessert menu</h3><p>Pick your format, quantity and favourite flavours.</p></div></div>
        <div className="dessert-list">{desserts.map(i => <article className="dessert-row" key={i.name}><div className="dessert-number"><CakeSlice/></div><div className="dessert-copy"><h4>{i.name}</h4><p>{i.flavours}</p></div><div className="price-list">{i.prices.map(p => <span key={p}>{p}</span>)}</div><OrderLink item={i.name} price={i.prices.join(", ")} label="Select"/></article>)}</div>
      </div>

      <div className="menu-block wedding-block" id="wedding-cakes"><div className="block-intro light"><span>04</span><div><h3>Customised wedding cakes</h3><p>A guide for standard plain cakes. Custom flavours, designs, fondant finishes and bespoke details are quoted separately.</p></div></div>
        <div className="pricing-table-wrap"><table className="pricing-table"><thead><tr><th>Cake size</th><th>Vanilla</th><th>Red velvet</th><th><span className="sr-only">Enquire</span></th></tr></thead>
          <tbody>{weddingPrices.map(([size,vanilla,red]) => <tr key={size}><td>{size}</td><td>{vanilla}</td><td>{red}</td><td><OrderLink item={`Wedding cake - ${size}`} price={`Vanilla ${vanilla} / Red velvet ${red}`} label="Enquire"/></td></tr>)}</tbody>
        </table></div>
      </div>
    </section>

    <section className="catering-banner" id="catering"><span className="section-kicker">Catering made simple</span><h2>Tell us the occasion.<br/>We’ll help with the menu.</h2><p>Share your date, guest count and preferences. We’ll recommend a suitable package and confirm the details personally.</p><OrderLink item="a custom catering package" label="Plan my catering"/></section>

    <section className="location" id="location"><div className="location-details"><span className="section-kicker">Visit our bakery</span><h2>Find your slice<br/>of happiness.</h2>
      <div className="detail-row"><MapPin/><div><small>Address</small><strong>16 Church Road, Ashford<br/>TW15 2UY, United Kingdom</strong></div></div>
      <div className="detail-row"><Phone/><div><small>Call or WhatsApp</small><a href="tel:+447359778589">{phoneDisplay}</a></div></div>
      <div className="detail-row"><Clock3/><div><small>Opening hours</small><strong>Monday-Saturday: 09:00-18:00<br/>Sunday: 09:00-14:00</strong></div></div>
      <div className="location-actions"><a className="primary-button" href="https://www.google.com/maps/search/?api=1&query=7th+Heaven+16+Church+Road+Ashford+TW15+2UY" target="_blank" rel="noreferrer">Get directions <ArrowRight size={18}/></a><a className="text-button" href={whatsappUrl("an order")} target="_blank" rel="noreferrer">Message the bakery</a></div>
    </div><div className="map-wrap"><iframe title="Map showing 7th Heaven Bakery in Ashford" src="https://www.google.com/maps?q=7th%20Heaven%2C%2016%20Church%20Road%2C%20Ashford%20TW15%202UY&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><div className="map-label"><MapPin size={18}/><span><strong>7th Heaven</strong>16 Church Road, Ashford</span></div></div></section>

    <footer><p className="footer-brand">7th Heaven Ashford</p><p>Cakes, desserts, beverages & food in Ashford.</p><div className="footer-links">{navItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}<a href="https://www.instagram.com/7thheavenashford/" target="_blank" rel="noreferrer">Instagram</a></div><a className="footer-phone" href="tel:+447359778589">{phoneDisplay}</a><small>© {new Date().getFullYear()} 7th Heaven Ashford. All rights reserved.</small></footer>
    <a className="floating-whatsapp" href={whatsappUrl("an order")} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp"><MessageCircle/></a>
  </main>;
}
