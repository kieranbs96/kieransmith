import { ImageResponse } from 'next/og'
import { Monogram } from '@/components/monogram'
import { brandColours } from '@/lib/brand'
import { profile } from '@/lib/content'

export const alt = `${profile.name}, ${profile.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const MONOGRAM_SIZE = 88

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: brandColours.background,
          backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 0%, rgba(240, 135, 74, 0.14), transparent)`,
        }}
      >
        <div style={{ display: 'flex', width: MONOGRAM_SIZE, height: MONOGRAM_SIZE }}>
          <Monogram size={MONOGRAM_SIZE} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -2,
              color: brandColours.foreground,
            }}
          >
            {profile.name}
          </div>
          <div style={{ display: 'flex', fontSize: 36, color: brandColours.muted }}>
            {profile.title}, {profile.location}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            paddingTop: 28,
            borderTop: `1px solid ${brandColours.border}`,
            fontSize: 26,
            color: brandColours.muted,
          }}
        >
          kieransmith.co.uk
        </div>
      </div>
    ),
    { ...size },
  )
}
