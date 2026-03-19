import { ArrowRightIcon } from '../icons'
import type { HubModule } from '../types'

type Props = {
  modules: HubModule[]
  onSelect: (module: HubModule) => void
}

export function ModuleList({ modules, onSelect }: Props) {
  return (
    <div className="role-cards" aria-label="Modulos disponibles">
      {modules.map((module) => {
        const Icon = module.icon
        const hasHeroImage =
          module.key === 'catalog' || module.key === 'world' || module.key === 'paint'
        const heroImageSrc =
          module.key === 'catalog'
            ? '/portafoliologo.png'
            : module.key === 'world'
              ? '/tonnercuplogo.png'
              : '/tonnerpaintlogo.png'
        const heroImageAlt =
          module.key === 'catalog'
            ? 'Tonner Catalog'
            : module.key === 'world'
              ? 'Tonner Cup'
              : 'Tonner Paint'

        return (
          <button
            key={module.key}
            type="button"
            className={`role-card role-card--${module.accent} ${
              hasHeroImage ? 'role-card--with-hero' : ''
            }`}
            onClick={() => onSelect(module)}
          >
            {hasHeroImage ? null : (
              <div className="role-card__icon-wrap">
                <Icon className="role-card__icon" />
              </div>
            )}

            <div className="role-card__copy">
              <h2>{module.label}</h2>
              <p>{module.description}</p>
            </div>

            <ArrowRightIcon className="role-card__arrow" />

            {hasHeroImage ? (
              <img
                src={heroImageSrc}
                alt={heroImageAlt}
                className="role-card__hero-image"
              />
            ) : null}
          </button>
        )
      })}
    </div>
  )
}
