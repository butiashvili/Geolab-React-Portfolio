function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar page-container" aria-label="მთავარი ნავიგაცია">
        <a className="brand" href="#home" aria-label="მთავარ გვერდზე">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>portfolio<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#about">ჩემ შესახებ</a>
          <a href="#skills">უნარები</a>
          <a href="#projects">პროექტები</a>
        </div>
        <a className="nav-contact" href="#contact">
          დამიკავშირდი <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export default Navbar
