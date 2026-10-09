'use client'

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'
import { useEffect, useState } from 'react'

const GLOW_COLOUR = 'color-mix(in oklch, var(--primary) 9%, transparent)'
const SPRING = { stiffness: 550, damping: 45, mass: 0.3 }

export function GlowBackground() {
  const prefersReducedMotion = useReducedMotion()
  const [hasPointer, setHasPointer] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useSpring(mouseX, SPRING)
  const y = useSpring(mouseY, SPRING)

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        return
      }
      if (!hasPointer || prefersReducedMotion) {
        mouseX.jump(event.clientX)
        mouseY.jump(event.clientY)
        if (!hasPointer) {
          setHasPointer(true)
        }
        return
      }
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [hasPointer, mouseX, mouseY, prefersReducedMotion])

  const background = useMotionTemplate`radial-gradient(600px at ${x}px ${y}px, ${GLOW_COLOUR}, transparent 80%)`

  if (!hasPointer) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,color-mix(in_oklch,var(--primary)_9%,transparent),transparent)]"
      />
    )
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ background }}
    />
  )
}
