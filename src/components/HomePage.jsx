import Hero from './Hero.jsx'

const destinations = [
  { number: '01', title: 'ჩემ შესახებ', text: 'ჩემი მიდგომა და ტექნოლოგიები', href: '#/about' },
  { number: '02', title: 'პროექტები', text: 'შერჩეული ნამუშევრები', href: '#/projects' },
  { number: '03', title: 'API რესურსი', text: 'მომხმარებლების ცოცხალი სია', href: '#/users' },
]

function HomePage() {
  return (
    <>
      <Hero />
      <section className="home-discover page-container" aria-labelledby="discover-title">
        <div className="discover-heading">
          <div>
            <p className="eyebrow">დაათვალიერე</p>
            <h2 id="discover-title">პორტფოლიო, მოკლედ.</h2>
          </div>
        </div>
        <div className="discover-grid">
          {destinations.map((destination) => (
            <a className="discover-card" href={destination.href} key={destination.number}>
              <span>{destination.number} / 03</span>
              <strong>{destination.title}</strong>
              <span>{destination.text} <b aria-hidden="true">↗</b></span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
