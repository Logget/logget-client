import React from 'react'
import './LtContainer.scss'

interface LtContainerProps {
  className?: string
}

export const LtContainer: React.FC<LtContainerProps> = ({ children,className }) => {
  return <div className={`lt-container${className ? ` ${className}` : ''}`} >{children}</div>
}
