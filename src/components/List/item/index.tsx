import style from './item.module.scss'
import { ITarefa } from '../../../types/ITarefa'

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
  return (
      <li
      onClick={() => !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})}
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={style.concluido}></span>}
      </li>
  )
}