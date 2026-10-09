import { brandColours } from '@/lib/brand'
import { profile } from '@/lib/content'

interface MonogramProps {
  size: number
  isRounded?: boolean
}

export function Monogram({ size, isRounded = true }: MonogramProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: brandColours.foreground,
        color: brandColours.background,
        borderRadius: isRounded ? size * 0.22 : 0,
        fontSize: size * 0.48,
        fontWeight: 700,
        letterSpacing: size * -0.02,
      }}
    >
      {profile.initials}
    </div>
  )
}
