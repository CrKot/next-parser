import React, {
  ReactNode
} from "react"
import style from './Button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit',
  children: ReactNode,
  cancelType?: boolean
  onChange: () => void
}

export const Button = ({
  type = 'button',
  children = <></>,
  cancelType = false,
  onChange = () => {}
}: ButtonProps) => {
  return (
    <button
      type={type}
      onChange={onChange}
      className={`
        ${style.button}
        ${cancelType ? style._cancel : style._select}
      `}
    >
      { children }
    </button>
  )
}
