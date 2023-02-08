export function tempoParaSegundos(tempo: string): number {
  const [h = 0, m = 0, s = 0] = tempo.split(':').map(item => Number(item))

  return (h * 60 * 60) + (m * 60) + s
}