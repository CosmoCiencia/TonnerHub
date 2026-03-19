import type { HubModule } from '../types'
import { HomeIcon, PaletteIcon, TrophyIcon } from '../icons'

export const hubModules: HubModule[] = [
  {
    key: 'catalog',
    label: 'Tonner Catalog',
    description: 'Productos y lineas.',
    icon: HomeIcon,
    accent: 'catalog',
    url: 'http://localhost:5174',
  },
  {
    key: 'world',
    label: 'Tonner Cup',
    description: 'Campanas y torneo.',
    icon: TrophyIcon,
    accent: 'world',
    url: 'http://localhost:5177',
  },
  {
    key: 'paint',
    label: 'Tonner Paint',
    description: 'Simulador de color.',
    icon: PaletteIcon,
    accent: 'paint',
    url: 'http://localhost:5178',
  },
]
