import { Cronometro } from './components/Cronometro'
import Formulario from './components/Form'
import Lista from './components/List'
import './styles/reset.css'
import style from './styles/style.module.scss'
import { useState } from 'react'
import { ITarefa } from './types/ITarefa'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(state => {
      return state.map(tarefa => {
        return {
          ...tarefa,
          selecionado: tarefa.id === tarefaSelecionada.id && !tarefaSelecionada.completado
        }
      })
    })
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        selecionaTarefa={selecionaTarefa}
        tarefas={tarefas} />
      <Cronometro
        selecionado={selecionado}
        onComplete={(tarefaCompletada) => {
          setTarefas(state => {
            return state.map(tarefa => {
              return {
                ...tarefa,
                completado: tarefa.id === tarefaCompletada.id ? true : tarefa.completado,
                selecionado: false
              }
            })
          })
        }} />
    </div>
  )
}

export default App
