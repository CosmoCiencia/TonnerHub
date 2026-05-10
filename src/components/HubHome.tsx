import { BellIcon } from '../icons'

type HubCard = {
  key: string
  title: string
  href: string
  image: string
  variant: 'portfolio' | 'paint' | 'stores' | 'cup'
}

const hubCards: HubCard[] = [
  {
    key: 'portfolio',
    title: 'PORTAFOLIO',
    href: 'https://tonner-catalog.vercel.app/',
    image: '/PORTAFOLIO.png',
    variant: 'portfolio',
  },
  {
    key: 'paint',
    title: 'TONNER PAINT',
    href: 'https://tonner-paint.vercel.app/',
    image: '/TONNER PAINT.png',
    variant: 'paint',
  },
  {
    key: 'stores',
    title: 'PUNTOS DE VENTA',
    href: 'https://tonner-catalog.vercel.app/',
    image: '/PUNTOS DE VENTA.png',
    variant: 'stores',
  },
  {
    key: 'cup',
    title: 'POLLAMUNDIALISTA',
    href: 'https://tonner-cup.vercel.app/',
    image: '/FONDO POLLATONNER GRUPOS.png',
    variant: 'cup',
  },
]

const navItems = [
  { label: 'Inicio', icon: '/icons/INICIO.png', active: true },
  { label: 'Trabajo', icon: '/icons/TRABAJO.png' },
  { label: 'Favoritos', icon: '/icons/FAVORITOS.png' },
  { label: 'Calculadora', icon: '/icons/CALCULADORA.png' },
  { label: 'Perfil', icon: '/icons/PERFIL.png' },
]

export function HubHome() {
  return (
    <main className="hub-shell">
      <header className="hub-header">
        <img src="/logo.png" alt="Pinturas Tonner" className="hub-header__logo" />
        <button type="button" className="hub-header__bell" aria-label="Notificaciones">
          <BellIcon className="hub-header__bell-icon" />
        </button>
      </header>

      <section className="hub-content" aria-label="TonnerHub">
        <label className="hub-search">
          <img src="/icons/LUPA.png" alt="" className="hub-search__icon" />
          <input type="search" placeholder="Qué vas a pintar hoy?" />
        </label>

        <div className="hub-cards" aria-label="Secciones principales">
          {hubCards.map((card) => (
            <a
              key={card.key}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hub-card hub-card--${card.variant}`}
            >
              <img src={card.image} alt="" className="hub-card__image" />
              <span className="hub-card__title">{card.title}</span>
            </a>
          ))}
        </div>
      </section>

      <nav className="hub-bottom-nav" aria-label="Navegacion principal">
        {navItems.map((item) => {
          return (
            <button
              key={item.label}
              type="button"
              className={`hub-bottom-nav__item ${item.active ? 'is-active' : ''}`}
              aria-label={item.label}
            >
              <img src={item.icon} alt="" className="hub-bottom-nav__icon" />
            </button>
          )
        })}
      </nav>
    </main>
  )
}
