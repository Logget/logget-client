import React from 'react'
import { Link } from 'react-router-dom'
import './LtButton.scss'
import remCalc from '../../../utils/remCalc'

interface LtButtonProps {
  tag?: keyof JSX.IntrinsicElements
  to?: string
  type?: 'primary' | 'muted' | 'white'
  height?: number
  fontSize?: number
  classes?: string
  block?: boolean
}

export const LtButton: React.FC<
  LtButtonProps & React.HTMLProps<HTMLElement>
> = (props) => {
  const { height = 42, fontSize = 16, classes, block, type } = props

  const ButtonTag = (props.tag || 'button') as keyof JSX.IntrinsicElements

  const className = `lt-btn${type ? ` lt-btn-${type}` : ''}${
    block ? ' lt-btn-block' : ''
  } ${classes}`

  const style = {
    height: remCalc(height),
    fontSize: remCalc(fontSize),
    ...props.style,
  }

  if (props.to) {
    return (
      <Link className={className} style={style} to={props.to} role="button">
        {props.children}
      </Link>
    )
  }

  return (
    <ButtonTag
      className={className}
      style={style}
      role="button"
      {...(props as any)}
    >
      {props.children}
    </ButtonTag>
  )
}
