import React from 'react'
import Botao from '../Button'
import style from './form.module.scss'
import { useState } from 'react'
import { ITarefa } from '../../types/ITarefa'
import { v4 } from 'uuid'

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('00:00:00')

  function addTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTarefas(oldState => {
      return [...oldState, {
        tarefa,
        tempo,
        completado: false,
        selecionado: false,
        id: v4()
      }]
    })
    
    setTarefa('')
    setTempo('00:00:00')
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione uma nova tarefa
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
          placeholder="O que você deseja estudar?"
          required />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          name="tempo"
          id="tempo"
          step="1"
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
          min="00:00"
          max="01:30"
          required />
      </div>

      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  )
}