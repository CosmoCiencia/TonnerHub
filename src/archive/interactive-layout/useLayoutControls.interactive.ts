import { useEffect, useRef, useState } from 'react'
import { DEFAULT_LAYOUT_CONTROLS } from '../../config/layout'
import type { InteractionState, LayoutControls } from '../../types'

export function useLayoutControlsInteractive() {
  const [layoutControls, setLayoutControls] = useState<LayoutControls>(DEFAULT_LAYOUT_CONTROLS)
  const [saveStatus, setSaveStatus] = useState('Guardado')
  const interactionRef = useRef<InteractionState>(null)

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      const interaction = interactionRef.current
      if (!interaction) return

      const remSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 16

      if (interaction.mode === 'drag') {
        const deltaX = (event.clientX - interaction.startX) / remSize
        const deltaY = (event.clientY - interaction.startY) / remSize

        setLayoutControls((current) => ({
          ...current,
          mascotX: interaction.startMascotX + deltaX,
          mascotY: interaction.startMascotY - deltaY,
        }))
      }

      if (interaction.mode === 'resize') {
        const deltaX = (event.clientX - interaction.startX) / remSize

        setLayoutControls((current) => ({
          ...current,
          mascotSize: Math.max(8, Math.min(40, interaction.startSize + deltaX * 1.6)),
        }))
      }

      setSaveStatus('Sin guardar')
    }

    function handlePointerUp() {
      interactionRef.current = null
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  const saveControls = async () => {
    const response = await fetch('/__save-layout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(layoutControls),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(errorText || 'No se pudo guardar en el codigo')
    }

    setSaveStatus('Guardado')
  }

  const startDrag = (startX: number, startY: number) => {
    interactionRef.current = {
      mode: 'drag',
      startX,
      startY,
      startMascotX: layoutControls.mascotX,
      startMascotY: layoutControls.mascotY,
    }
  }

  const startResize = (startX: number) => {
    interactionRef.current = {
      mode: 'resize',
      startX,
      startSize: layoutControls.mascotSize,
    }
  }

  return {
    layoutControls,
    saveControls,
    saveStatus,
    startDrag,
    startResize,
  }
}
