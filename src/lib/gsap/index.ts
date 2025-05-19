// src/lib/gsap/index.ts
// Central GSAP setup: registers core and plugins, runs once

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'

// Register plugins only once
if (typeof window !== 'undefined' && !(gsap as any)._gsapRegistered) {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrambleTextPlugin)
  ;(gsap as any)._gsapRegistered = true
}

export { gsap, useGSAP, ScrollTrigger, SplitText, ScrambleTextPlugin }
