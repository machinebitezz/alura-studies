import Botao from '../Button'
import Relogio from './Relogio'
import style from './cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/ITarefa'
import { useState, useEffect } from 'react'

interface Props {
  selecionado: ITarefa | undefined
  onComplete: (tarefaSelecionada: ITarefa) => void
}

export function Cronometro({ selecionado, onComplete }: Props) {
  const [tempo, setTempo] = useState<number>()

  useEffect(()=> {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  function regressiva(contador = 0) {
    return new Promise<void>(resolve => {
      const interval = setInterval(() => {
        if (contador === 0) {
          resolve()
          clearInterval(interval)
          return
        }

        contador -= 1
        setTempo(contador)
      }, 1000)
    })
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro </p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>

      <Botao onClick={() => {
        regressiva(tempo)
          .then(() => {
            onComplete(selecionado)
          })
      }}>
        Iniciar
      </Botao>
    </div>
  )
}