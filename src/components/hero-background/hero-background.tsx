import React, { useRef, useEffect } from 'react'
import { setupCanvasResize, getContext2D, animateWave } from './utils'
import { cn } from '@/lib/utils'
import { WaveOptions } from './types'

interface HeroBackgroundProps {
  waveOptions: WaveOptions[]
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ waveOptions = [] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = getContext2D(canvas)
    if (!canvas || !ctx) return
    let width = 0,
      height = 0,
      animationId: number
    const cleanupResize = setupCanvasResize(canvas)
    width = canvas.width
    height = canvas.height

    function animate(t: number) {
      if (!canvas || !ctx) return
      width = canvas.width
      height = canvas.height
      ctx.clearRect(0, 0, width, height)
      ctx.save()
      ctx.strokeStyle = 'rgba(120,180,255,0.18)'
      ctx.lineWidth = 2
      for (let i = 0; i < waveOptions.length; i++) {
        animateWave({ ctx, width, height, t, opts: waveOptions[i] })
      }
      ctx.restore()
      animationId = requestAnimationFrame(animate)
    }
    animate(0)
    return () => {
      cleanupResize()
      cancelAnimationFrame(animationId)
    }
  }, [waveOptions])

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full z-0 pointer-events-none dark:opacity-70')}
      aria-hidden="true"
    />
  )
}
