import React from 'react'
import style from './button.module.scss'

interface Props {
  children: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

export default function Botao({ children, type, onClick}: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  )
}