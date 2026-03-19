import type { PointerEvent as ReactPointerEvent } from 'react'

type Props = {
  onDragStart: (event: ReactPointerEvent<HTMLDivElement>) => void
  onResizeStart: (event: ReactPointerEvent<HTMLButtonElement>) => void
}

export function MascotEditorInteractive({ onDragStart, onResizeStart }: Props) {
  return (
    <div className="role-stage__mascot-wrap" onPointerDown={onDragStart}>
      <img src="/mascotatonner.png?v=2" alt="Mascota Tonner" className="role-stage__mascot" draggable={false} />
      <button
        type="button"
        className="role-stage__handle"
        aria-label="Cambiar tamano de mascota"
        onPointerDown={onResizeStart}
      />
    </div>
  )
}
