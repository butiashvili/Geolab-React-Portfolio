function Hero() {
  return (
    <section className="hero-section page-container" id="home">
      <div className="hero-copy" id="about">
        <p className="eyebrow"><span className="status-dot" /> ღია ვარ საინტერესო შესაძლებლობებისთვის</p>
        <h1>
          ვქმნი ციფრულ
          <br />
          პროდუქტებს <span>მიზნით.</span>
        </h1>
        <p className="hero-description">
          გამარჯობა! ვარ ფრონტენდ დეველოპერი, რომელსაც იდეების სწრაფ, ხელმისაწვდომ
          და სასიამოვნო ვებგამოცდილებად ქცევა უყვარს.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#/projects">
            ჩემი ნამუშევრები <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="mailto:hello@portfolio.dev">
            მომწერე <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-meta">
          <span>დაფუძნებული საქართველოში</span>
          <span className="meta-divider" aria-hidden="true" />
          <span>დისტანციურად ვმუშაობ</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="კოდის ილუსტრაცია" role="img">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="code-window">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <p>developer.js</p>
          </div>
          <div className="code-content" aria-hidden="true">
            <p><span className="code-purple">const</span> developer = {'{'}</p>
            <p className="code-indent"><span className="code-blue">name</span>: <span className="code-green">'კრეატიული'</span>,</p>
            <p className="code-indent"><span className="code-blue">focus</span>: <span className="code-green">'მომხმარებელი'</span>,</p>
            <p className="code-indent"><span className="code-blue">build</span>: () <span className="code-purple">=&gt;</span> <span className="code-green">'საუკეთესო გამოცდილება'</span></p>
            <p>{'}'}</p>
            <p className="code-comment">// იდეიდან პროდუქტამდე ✦</p>
          </div>
        </div>
        <div className="floating-chip chip-react"><span>✳</span> React</div>
        <div className="floating-chip chip-design"><span>✦</span> Design minded</div>
        <div className="hero-sparkle sparkle-one">✳</div>
        <div className="hero-sparkle sparkle-two">✦</div>
      </div>
    </section>
  )
}

export default Hero
