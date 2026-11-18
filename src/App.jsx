import { useEffect, useState } from 'react'
import AboutPage from './components/AboutPage.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import HomePage from './components/HomePage.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import UsersPage from './components/UsersPage.jsx'
import './App.css'

function getPage() {
  const page = window.location.hash.replace('#/', '')
  return ['about', 'projects', 'users'].includes(page) ? page : 'home'
}

function App() {
  const [page, setPage] = useState(getPage)
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem('portfolio-theme') || 'light',
  )

  useEffect(() => {
    const syncPage = () => setPage(getPage())
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Navbar page={page} theme={theme} onToggleTheme={toggleTheme} />
      <main key={page}>
        {page === 'about' && <AboutPage />}
        {page === 'projects' && <Projects />}
        {page === 'users' && <UsersPage />}
        {page === 'home' && <HomePage />}
      </main>
      <Footer />
    </>
  )
}

export default App
