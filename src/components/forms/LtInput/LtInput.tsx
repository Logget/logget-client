import React from 'react'
import './LtInput.scss'

interface LtInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const LtInput: React.FC<LtInputProps> = (props) => {
  const { className } = props
  return (
    <div>
      <input
        className={`lt-input${className ? ' ' + className : ''}`}
        {...props}
      />
    </div>
  )
}
