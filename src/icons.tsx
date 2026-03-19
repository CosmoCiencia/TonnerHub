import type { IconProps } from './types'

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  )
}

export function HardHatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M4 13a8 8 0 1 1 16 0" />
      <path d="M3 13h18v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3Z" />
      <path d="M12 5v8" />
      <path d="M8 13V9.5" />
      <path d="M16 13V9.5" />
    </svg>
  )
}

export function StoreIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M4 8.5 5.5 4h13L20 8.5" />
      <path d="M4 8.5h16V11a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1-6 0 3 3 0 0 1-3 3 3 3 0 0 1-3-3V8.5Z" />
      <path d="M6 14v6h12v-6" />
      <path d="M10 20v-4h4v4" />
    </svg>
  )
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M8 4h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4Z" />
      <path d="M6 5H4v1a4 4 0 0 0 4 4" />
      <path d="M18 5h2v1a4 4 0 0 1-4 4" />
      <path d="M12 11v4" />
      <path d="M9 21h6" />
      <path d="M10 15h4v3h-4z" />
    </svg>
  )
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M12 3a9 9 0 0 0 0 18h1.2a2.8 2.8 0 0 0 0-5.6h-.7a1.5 1.5 0 0 1-1.5-1.5A2.9 2.9 0 0 1 13.9 11H15a6 6 0 0 0 0-12h-3Z" />
      <circle cx="7.5" cy="10" r="1" />
      <circle cx="9.5" cy="7" r="1" />
      <circle cx="6.5" cy="14" r="1" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function SpinnerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.22" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
