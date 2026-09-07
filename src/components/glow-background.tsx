'use client'

import { useEffect, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'

const GLOW_COLOUR = 'rgba(56, 189, 248, 0.12)'
const SPRING = { stiffness: 120, damping: 25, mass: 0.5 }

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
      // Jump (no spring) on the first move so the glow doesn't fly in
      // from the corner, and on every move for reduced-motion users so
      // the glow still follows the cursor, just without the trailing
      // animation
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

  // Static top glow for touch devices, reduced motion, and before the
  // first mouse move — matches the old fixed background
  if (!hasPointer) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(56,189,248,0.12),transparent)]"
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
