import { useState } from 'react'
import { DEFAULT_LAYOUT_CONTROLS } from '../config/layout'
import type { LayoutControls } from '../types'

export function useLayoutControls() {
  const [layoutControls] = useState<LayoutControls>(DEFAULT_LAYOUT_CONTROLS)

  return {
    layoutControls,
  }
}
