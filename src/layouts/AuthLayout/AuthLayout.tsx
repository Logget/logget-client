import React, { ReactNode } from 'react'
import { LogoType } from '../../components/shared/LogoType/LogoType'
import './AuthLayout.scss'

interface AuthLayoutProps {
  footer?: ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, footer }) => {
  return (
    <div className="auth-layout">
      <LogoType />
      <div className="circle" />

      <main className="content">{children}</main>
      <footer className="footer">{footer}</footer>
    </div>
  )
}
