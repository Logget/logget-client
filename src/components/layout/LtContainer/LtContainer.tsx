import React from 'react'
import './LtContainer.scss'
interface LtContainerProps {}

export const LtContainer: React.FC<LtContainerProps> = ({ children }) => {
  return <div className="lt-container">{children}</div>
}
