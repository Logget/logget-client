import React from 'react'
import { LogoType } from '../../components/shared/LogoType/LogoType'
import './AuthLayout.scss'

interface AuthLayoutProps {}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <LogoType />
      <div className="circle" />
      {children}
    </div>
  )
}
