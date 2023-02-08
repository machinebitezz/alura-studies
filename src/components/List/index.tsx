import style from './list.module.scss'
import Item from "./item"
import { ITarefa } from '../../types/ITarefa'

interface Props {
  tarefas: ITarefa[]
  selecionaTarefa: (tarefaSelecionada: ITarefa | undefined) => void
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>

      <ul>
        {
          tarefas.map(item => {
            return (
              <Item
                selecionaTarefa={selecionaTarefa}
                key={item.id}
                {...item} />
            )
          })
        }
      </ul>
    </aside>
  )
}