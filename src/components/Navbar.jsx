function Navbar({ page, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <nav className="navbar page-container" aria-label="მთავარი ნავიგაცია">
        <a className="brand" href="#/home" aria-label="მთავარ გვერდზე">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>portfolio<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#/home" aria-current={page === 'home' ? 'page' : undefined}>მთავარი</a>
          <a href="#/about" aria-current={page === 'about' ? 'page' : undefined}>ჩემ შესახებ</a>
          <a href="#/projects" aria-current={page === 'projects' ? 'page' : undefined}>პროექტები</a>
          <a href="#/users" aria-current={page === 'users' ? 'page' : undefined}>რესურსები</a>
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'მუქი რეჟიმის ჩართვა' : 'ღია რეჟიმის ჩართვა'}
            title={theme === 'light' ? 'მუქი რეჟიმი' : 'ღია რეჟიმი'}
          >
            <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
          </button>
          <a className="nav-contact" href="mailto:hello@portfolio.dev">
            კონტაქტი <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
