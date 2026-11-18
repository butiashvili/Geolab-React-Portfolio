function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-content">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">ერთად ვიმუშაოთ</p>
            <h2>გაქვს საინტერესო იდეა?</h2>
          </div>
          <a className="footer-email" href="mailto:hello@portfolio.dev">
            hello@portfolio.dev <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <a className="brand" href="#/home">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>portfolio<span className="brand-dot">.</span></span>
          </a>
          <p>შექმნილია ყურადღებით და React-ით · © 2026</p>
          <a className="back-to-top" href="#/home">მთავარი ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
