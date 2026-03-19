import type { ReactElement } from 'react'

export type ModuleKey = 'catalog' | 'manager' | 'viewer' | 'world' | 'paint'

export type ModuleAccent = 'catalog' | 'manager' | 'viewer' | 'world' | 'paint'

export type IconProps = {
  className?: string
}

export type HubModule = {
  key: ModuleKey
  label: string
  description: string
  icon: (props: IconProps) => ReactElement
  accent: ModuleAccent
  url: string
}

export type LayoutControls = {
  mascotSize: number
  mascotX: number
  mascotY: number
  stagePaddingRight: number
  stageMinHeight: number
  cardScale: number
}

export type InteractionState =
  | {
      mode: 'drag'
      startX: number
      startY: number
      startMascotX: number
      startMascotY: number
    }
  | {
      mode: 'resize'
      startX: number
      startSize: number
    }
  | null
