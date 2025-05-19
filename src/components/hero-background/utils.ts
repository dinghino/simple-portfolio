// src/components/hero-backgrounds/utils.ts
// Utility functions for hero background canvas effects

import { AnimateOptions } from './types'

export function setupCanvasResize(canvas: HTMLCanvasElement | null, getHeight?: () => number) {
  if (!canvas) return () => {}
  function resize() {
    if (!canvas) return
    const width = window.innerWidth
    const height = getHeight
      ? getHeight()
      : canvas.parentElement?.offsetHeight || window.innerHeight
    canvas.width = width
    canvas.height = height
  }
  resize()
  window.addEventListener('resize', resize)
  return () => window.removeEventListener('resize', resize)
}

export function getContext2D(canvas: HTMLCanvasElement | null) {
  if (!canvas) return null
  return canvas.getContext('2d')
}

export function getWebGLContext(canvas: HTMLCanvasElement | null) {
  if (!canvas) return null
  return canvas.getContext('webgl')
}

export function getAmplitude(base: number, t: number, speed: number, phase: number) {
  return base * (0.7 + 0.3 * Math.sin(t / speed + phase))
}

export function getY(
  baseY: number,
  x: number,
  width: number,
  frequency: number,
  amplitude: number,
) {
  return baseY + Math.sin((x / width) * Math.PI * 2 * frequency) * amplitude
}

export function animateWave({ ctx, width, height, t, opts }: AnimateOptions) {
  ctx.beginPath()
  const amplitude = getAmplitude(opts.amplitude, t, opts.speed, opts.phase)
  let isFirst = true
  for (let x = opts.xOffset; x <= width; x += 8) {
    const y =
      (height / 4) * 3 +
      Math.sin((x / width) * Math.PI * 2 * opts.frequency + opts.phase) * amplitude
    if (isFirst) {
      ctx.moveTo(x, y)
      isFirst = false
    } else {
      ctx.lineTo(x, y)
    }
  }
  ctx.stroke()
}
