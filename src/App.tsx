import type { CSSProperties } from 'react'
import { useState } from 'react'
import './styles/base.css'
import './styles/cards.css'
import './styles/mobile.css'
import { MascotEditor } from './components/MascotEditor'
import { ModuleList } from './components/ModuleList'
import { Login } from './components/Login'
import { UserProfile } from './components/UserProfile'
import { MODULE_STORAGE_KEY } from './config/layout'
import { hubModules } from './data/hubModules'
import { useLayoutControls } from './hooks/useLayoutControls'
import type { HubModule } from './types'

function App() {
  const { layoutControls } = useLayoutControls()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleSelectModule = (module: HubModule) => {
    window.localStorage.setItem(MODULE_STORAGE_KEY, module.key)
    window.location.assign(module.url)
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  return (
    <main
      className="role-screen"
      style={
        {
          '--mascot-size': `${layoutControls.mascotSize}rem`,
          '--mascot-x': `${layoutControls.mascotX}rem`,
          '--mascot-y': `${layoutControls.mascotY}rem`,
          '--stage-padding-right': `${layoutControls.stagePaddingRight}rem`,
          '--stage-min-height': `${layoutControls.stageMinHeight}rem`,
          '--card-scale': layoutControls.cardScale,
        } as CSSProperties
      }
    >
      <div className="role-screen__device">
        <div className="role-screen__orb role-screen__orb--top" />
        <div className="role-screen__orb role-screen__orb--bottom" />

        <section className="role-screen__panel">
          {isAuthenticated && <UserProfile />}
          <div className="role-screen__logo-wrap">
            <img src="/logo.png" alt="Pinturas Tonner" className="role-screen__logo" />
          </div>

          <header className="role-screen__header">
            <h1>{isAuthenticated ? '¿Qué módulo quieres abrir?' : 'Bienvenido a TonnerHub'}</h1>
            <p>
              {isAuthenticated
                ? 'Centralizamos el acceso al ecosistema digital Tonner'
                : 'Accede a tu cuenta para continuar'}
            </p>
          </header>

          <div className="role-stage">
            {isAuthenticated ? (
              <>
                <ModuleList modules={hubModules} onSelect={handleSelectModule} />
                <MascotEditor />
              </>
            ) : (
              <Login onLogin={handleLogin} />
            )}
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
