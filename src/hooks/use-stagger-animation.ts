import { RefObject, useEffect } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export type StaggerAnimationProps = {
  /** The ref to the container element */
  containerRef: RefObject<HTMLElement | null>
  /** The query selector to find elements to animate */
  selector: string
  /** The animation duration */
  duration?: number
  /** The animation stagger delay */
  delay?: number
  /** The animation easing */
  ease?: string
  /** The starting properties for the animation */
  from?: gsap.TweenVars
  /** The ending properties for the animation */
  to?: gsap.TweenVars
}

export function useStaggerAnimation(options: StaggerAnimationProps, dependencies: unknown[] = []) {
  const {
    containerRef,
    selector,
    duration = 0.25,
    delay = 0.15,
    ease = 'power3.out',
    from = { opacity: 0, y: 10 },
    to = { opacity: 1, y: 0 },
  } = options

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.fromTo(selector, from, {
        ...to,
        duration,
        stagger: delay,
        ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      })
      return () => {
        gsap.killTweensOf(selector)
        gsap.fromTo(selector, to, {
          ...from,
        })
      }
    },
    { scope: containerRef, dependencies: [selector, duration, delay, ease, ...dependencies] },
  )
}
