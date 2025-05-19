export interface WaveOptions {
  amplitude: number
  frequency: number
  speed: number
  phase: number
  xOffset: number
}
export type AnimateOptions = {
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  t: number
  opts: WaveOptions
}
