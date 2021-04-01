import React from 'react'
import { Link } from 'react-router-dom'
import './LtButton.scss'
interface LtButtonProps {
  tag?: keyof JSX.IntrinsicElements
  to?: string
  type?: 'primary' | 'muted'
}

export const LtButton: React.FC<
  LtButtonProps & React.HTMLProps<HTMLElement>
> = (props) => {
  const ButtonTag = (props.tag || 'button') as keyof JSX.IntrinsicElements

  const className = `lt-btn${props.type ? ` lt-btn-${props.type}` : ''}`

  if (props.to) {
    return (
      <Link className={className} to={props.to} role="button">
        {props.children}
      </Link>
    )
  }

  return (
    <ButtonTag className={className} role="button" {...(props as any)}>
      {props.children}
    </ButtonTag>
  )
}
