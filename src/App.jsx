import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, Award, BadgeCheck, Building2, CheckCircle2,
  ChevronRight, Globe2, HeartHandshake, Mail, MapPin, Menu, Package,
  Phone, ShieldCheck, Sparkles, Truck, X
} from 'lucide-react'
import SectionHeading from './components/SectionHeading'
import { company, partners, productGroups, services } from './data/company'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: .65, ease: 'easeOut' } }
}

const nav = [
  ['Home', 'home'], ['About', 'about'], ['Products', 'products'],
  ['Services', 'services'], ['Gallery', 'gallery'], ['Partners', 'partners'], ['Contact', 'contact']
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMenuOpen(false)
  }

  return <div className="min-h-screen overflow-hidden bg-white text-slate-800">
    <div className="top-strip">
      <div className="container-shell flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
        {/* <span className="flex items-center gap-2"><MapPin size={13}/> Kabul, Afghanistan</span> */}
        {/* <div className="flex flex-wrap items-center gap-5"> */}
          {/* <a href={`tel:${company.phone.replaceAll(' ', '')}`} className="flex items-center gap-2"><Phone size={13}/> {company.phone}</a> */}
          {/* <a href={`mailto:${company.email}`} className="flex items-center gap-2"><Mail size={13}/> {company.email}</a> */}
        {/* </div> */}
      </div>
    </div>

    <header className="site-header">
      <div className="container-shell flex h-[82px] items-center justify-between">
        {/* <button onClick={() => goTo('home')} className="flex items-center gap-3 text-left"> */}
          <img src="/logos/nabi-dental.jpg" alt="Nabi Dental logo" className="h-20 w-20 rounded-lg object-contain"/>
          <span className="hidden sm:block">
            <span className="block font-extrabold tracking-tight text-slate-900">NABI <span className="text-blue-700">DENTAL</span></span>
            <span className="block text-[10px] font-semibold uppercase tracking-[.16em] text-slate-500">Dental Supply · Afghanistan</span>
          </span>
        {/* </button> */}
        {/* <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(([label, id]) => <button key={id} onClick={() => goTo(id)} className={`nav-link ${active === id ? 'nav-active' : ''}`}>{label}</button>)}
        </nav> */}
        {/* <button onClick={() => goTo('contact')} className="hidden rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-800 lg:block">Get in touch <ArrowRight className="ml-2 inline" size={15}/></button> */}
        <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-slate-200 p-2 lg:hidden">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <div className="mobile-menu">
        {nav.map(([label, id]) => <button key={id} onClick={() => goTo(id)}>{label}<ChevronRight size={16}/></button>)}
      </div>}
    </header>

    <main>
      <section id="home" className="hero-section">
        <div className="hero-grid"></div>
        <div className="container-shell relative z-10 grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial="hidden" animate="show" variants={reveal}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-cyan-200 backdrop-blur"><Sparkles size={14}/> Dental supply you can rely on</div>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-[-.045em] text-white sm:text-6xl xl:text-[4.5rem]">Supporting better <span className="hero-highlight">dental care</span> across Afghanistan.</h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Importing and distributing dental products, materials and equipment for clinics, hospitals and dental professionals.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => goTo('products')} className="primary-button">Explore our products <ArrowRight size={17}/></button>
              <button onClick={() => goTo('about')} className="secondary-button">Discover our company</button>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-9 gap-y-4 border-t border-white/15 pt-7">
              <div><strong className="block text-2xl text-white">2011</strong><span className="text-xs text-slate-400">Established</span></div>
              <div><strong className="block text-2xl text-white">4</strong><span className="text-xs text-slate-400">Product categories</span></div>
              <div><strong className="block text-2xl text-white">Nationwide</strong><span className="text-xs text-slate-400">Market focus</span></div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:.94, x:25}} animate={{opacity:1, scale:1, x:0}} transition={{duration:.8, delay:.15}} className="hero-photo-wrap">
            <img src="/images/shop-main.jpg" alt="Nabi Dental showroom in Kabul" className="hero-photo"/>
            <div className="photo-caption"><span className="caption-icon"><Building2 size={22}/></span><span><b>Our showroom</b><small>Kabul, Afghanistan</small></span><span className="ml-auto text-cyan-300"><ArrowDown size={20}/></span></div>
            <div className="floating-badge"><BadgeCheck size={20}/><span><b>Quality-focused</b><small>Trusted supply partner</small></span></div>
          </motion.div>
        </div>
        <div className="hero-bottom-wave"></div>
      </section>

      <section id="about" className="section-pad">
        <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.2}} variants={reveal} className="relative">
            <div className="about-image-grid">
              <img src="/images/shop-2.jpg" alt="Dental products displayed in our store" className="about-img-main"/>
              <img src="/images/shop-3.jpg" alt="Dental supply showroom" className="about-img-small"/>
              <div className="since-card"><span>EST.</span><strong>2011</strong><small>Serving the dental market</small></div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true, amount:.2}} variants={reveal}>
            <SectionHeading eyebrow="Who we are" title="A dependable partner for dental professionals."/>
            <p className="leading-8 text-slate-600">Mohammad Nabi Rezai Trading Company is an Afghanistan-based trading company specializing in the importation and distribution of dental products and equipment. Established in 2011, we serve dental clinics, hospitals, dentists and healthcare professionals with a broad range of dental solutions.</p>
            <p className="mt-4 leading-8 text-slate-600">We aim to build long-term relationships with reputable international manufacturers and suppliers, bringing reliable products to the Afghan market through professional cooperation, competitive pricing and customer-focused service.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Product quality & reliability','Professional cooperation','Competitive pricing','Long-term partnerships'].map(x=><div key={x} className="flex items-center gap-3 text-sm font-bold text-slate-700"><CheckCircle2 className="shrink-0 text-teal-500" size={19}/>{x}</div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mission-band">
        <div className="container-shell grid gap-8 py-14 md:grid-cols-2">
          <div className="mission-card"><div className="mission-icon"><Globe2/></div><div><span className="eyebrow text-cyan-300">Our vision</span><h3>Growing trust in dental supply.</h3><p>To become one of Afghanistan's leading and most trusted suppliers of dental products and equipment, recognized for quality, reliability and strong international partnerships.</p></div></div>
          <div className="mission-card"><div className="mission-icon"><HeartHandshake/></div><div><span className="eyebrow text-cyan-300">Our mission</span><h3>Connecting makers with care.</h3><p>To connect international dental manufacturers with the Afghan market through quality products, dependable distribution, competitive prices and professional customer service.</p></div></div>
        </div>
      </section>

      <section id="products" className="section-pad bg-slate-50">
        <div className="container-shell">
          <SectionHeading eyebrow="What we supply" title="Dental products for every practice." text="Explore our main product categories, selected to support dental professionals with essential materials, instruments and equipment." center/>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productGroups.map((p,i)=><motion.article key={p.number} initial="hidden" whileInView="show" viewport={{once:true}} variants={reveal} transition={{delay:i*.08}} className="product-card">
              <div className="flex items-center justify-between"><span className="product-number">{p.number}</span><span className="product-icon"><Package size={22}/></span></div>
              <h3>{p.title}</h3><p>{p.description}</p>
              <ul>{p.items.map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><SectionHeading eyebrow="How we help" title="More than products. A complete supply partner." text="From sourcing to distribution, we work to make dependable dental supplies more accessible to the Afghan market."/></div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {services.map(([title,desc],i)=><motion.div key={title} initial="hidden" whileInView="show" viewport={{once:true}} variants={reveal} className="service-row"><span className="service-index">0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div></motion.div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="coverage-section">
        <div className="container-shell grid items-center gap-12 py-16 lg:grid-cols-[1fr_1fr]">
          <div><div className="eyebrow text-cyan-300">Our market</div><h2 className="section-title text-white">Focused on Afghanistan. Connected to the world.</h2><p className="mt-5 max-w-xl leading-8 text-slate-300">Our business activities focus on the Afghan dental market. We serve customers in Kabul, Kunduz, Helmand and other provinces, with a commitment to building a dependable distribution network.</p>
            <div className="mt-8 flex flex-wrap gap-3">{['Kabul','Kunduz','Helmand','Other provinces'].map(city=><span className="location-pill" key={city}><MapPin size={14}/>{city}</span>)}</div>
          </div>
          <div className="coverage-points">
            <div><Truck/><span><b>Distribution-focused</b><small>Serving dental professionals and suppliers.</small></span></div>
            <div><ShieldCheck/><span><b>Quality commitment</b><small>Careful product sourcing and dependable supply.</small></span></div>
            <div><Award/><span><b>Long-term relationships</b><small>Building trust with customers and manufacturers.</small></span></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Inside Nabi Dental" title="A closer look at our showroom." text="A selection of photographs from our store and product displays in Kabul."/>
          <div className="gallery-grid">
            <img src="/images/shop-main.jpg" alt="Nabi Dental showroom" className="gallery-large"/>
            <img src="/images/shop-2.jpg" alt="Dental supplies and display shelves"/>
            <img src="/images/shop-3.jpg" alt="Dental equipment and products"/>
            <img src="/images/shop-4.jpg" alt="Our dental products showroom"/>
          </div>
        </div>
      </section>

      <section id="partners" className="section-pad partner-section">
        <div className="container-shell">
          <SectionHeading eyebrow="International connections" title="Our international brand network." text="We value relationships with recognized dental brands and suppliers. The logos below represent brands shared with us for this company profile." center/>
          <div className="partner-grid">
            {partners.map((p,i)=><motion.div key={p.name} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="partner-logo"><img src={p.image} alt={`${p.name} logo`}/></motion.div>)}
          </div>
          <div className="partner-note"><Globe2 size={18}/> We welcome new distribution and supply partnerships with reputable international manufacturers.</div>
        </div>
      </section>

      <section className="values-section">
        <div className="container-shell py-16">
          <SectionHeading eyebrow="What guides us" title="Our core values" light center/>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Quality and Reliability','Professionalism','Customer Satisfaction','Transparency and Trust','Long-Term Partnerships','Continuous Improvement'].map((v,i)=><div className="value-card" key={v}><span>0{i+1}</span><h3>{v}</h3></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad contact-section">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div><SectionHeading eyebrow="Let's work together" title="Let's build a healthier future, together." text="Contact us for product inquiries, wholesale supply, sourcing requests or international business cooperation."/>
            <div className="contact-list">
              <a href={`tel:${company.phone.replaceAll(' ','')}`}><span><Phone/></span><div><small>Phone / WhatsApp</small><b>{company.phone}</b></div></a>
              <a href={`mailto:${company.email}`}><span><Mail/></span><div><small>Email address</small><b>{company.email}</b></div></a>
              <div><span><MapPin/></span><div><small>Our office</small><b>{company.address}</b></div></div>
            </div>
          </div>
          <div className="contact-panel">
            <div className="eyebrow text-cyan-300">Business cooperation</div><h3>Looking for a reliable dental supply partner in Afghanistan?</h3><p>We are interested in authorized distribution, direct importation, long-term supply contracts and other mutually beneficial partnerships.</p>
            <a className="primary-button mt-8 w-fit" href={`https://wa.me/${company.phone.replaceAll(/\\D/g,'')}`} target="_blank" rel="noreferrer">Contact us on WhatsApp <ArrowRight size={17}/></a>
            <div className="contact-panel-foot"><span><CheckCircle2 size={16}/> Professional communication</span><span><CheckCircle2 size={16}/> Long-term cooperation</span></div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container-shell py-9">
        <div className="flex flex-col justify-between gap-7 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3"><img src="/logos/nabi-dental.jpg" alt="Nabi Dental" className="h-14 w-16 rounded-lg bg-white object-contain p-1"/><div><b className="text-white">MOHAMMAD NABI REZAI</b><small className="mt-1 block text-xs text-slate-400">TRADING COMPANY · DENTAL SUPPLY</small></div></div>
          {/* <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">{nav.map(([label,id])=><button key={id} onClick={()=>goTo(id)} className="transition hover:text-cyan-300">{label}</button>)}</div> */}
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-slate-500 sm:flex-row"><span>© {new Date().getFullYear()} Mohammad Nabi Rezai Trading Company. All rights reserved.</span><span>Your Trusted Partner in Dental Products and Equipment.</span></div>
      </div>
    </footer>
    {/* <button onClick={()=>goTo('home')} aria-label="Back to top" className="back-top"><ArrowDown size={18}/></button> */}
  </div>
}

export default App