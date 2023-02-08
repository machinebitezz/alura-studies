import style from './relogio.module.scss'


export default function Relogio({ tempo = 0 }: { tempo: number | undefined }) {
  const minutos = Math.floor(tempo/60)
  const segundos = tempo % 60
  const minString = minutos.toString().padStart(2, '0')
  const segString = segundos.toString().padStart(2, '0')

  return (
    <>
      <span className={style.relogioNumero}>{minString.charAt(0)}</span>
      <span className={style.relogioNumero}>{minString.charAt(1)}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segString.charAt(0)}</span>
      <span className={style.relogioNumero}>{segString.charAt(1)}</span>
    </>
  )
}