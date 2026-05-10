import { useEffect, useState } from 'react'
import './styles/base.css'
import './styles/cards.css'
import './styles/mobile.css'
import { HubHome } from './components/HubHome'
import { Login } from './components/Login'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => window.clearTimeout(loadingTimer)
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  if (isLoading) {
    return (
      <main className="loading-screen" aria-label="Cargando TonnerHub">
        <img src="/PORTADA CARGA.png" alt="Pinturas Tonner" className="loading-screen__image" />
      </main>
    )
  }

  if (isAuthenticated) {
    return <HubHome />
  }

  return (
    <main className="role-screen">
      <div className="role-screen__device">
        <div className="role-screen__orb role-screen__orb--top" />
        <div className="role-screen__orb role-screen__orb--bottom" />

        <section className="role-screen__panel">
          <div className="role-screen__logo-wrap">
            <img src="/logo.png" alt="Pinturas Tonner" className="role-screen__logo" />
          </div>

          <header className="role-screen__header">
            <h1>Bienvenido a TonnerHub</h1>
            <p>Accede con usuario demo y contraseña demo</p>
          </header>

          <div className="role-stage">
            <Login onLogin={handleLogin} />
          </div>

          <footer className="role-screen__footer">
            <span>Arquitectónica</span>
            <span className="role-screen__dot" />
            <span>Industrial</span>
            <span className="role-screen__dot" />
            <span>Automotriz</span>
          </footer>
        </section>
      </div>
    </main>
  )
}

export default App
