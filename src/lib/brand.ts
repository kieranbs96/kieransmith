// Hex approximations of the dark-mode tokens in globals.css. ImageResponse
// (icons, OG image) can't read CSS variables or parse oklch, so keep these
// in sync if the palette changes.
export const brandColours = {
  background: '#10100f',
  foreground: '#ebebe9',
  muted: '#a5a5a2',
  border: 'rgba(255, 255, 255, 0.09)',
  accent: '#f0874a',
} as const
