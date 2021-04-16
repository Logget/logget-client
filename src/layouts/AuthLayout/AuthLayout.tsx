import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LogoType } from '../../components/shared/LogoType/LogoType'

import './AuthLayout.scss'

interface AuthLayoutProps {
  footer?: ReactNode
  className?: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  footer,
  className,
}) => {
  return (
    <div className={`auth-layout ${className ? className : ''}`}>
      <Link to="/" className="logo-link">
        <LogoType />
      </Link>

      <div className="circle" />

      <main className="content">{children}</main>

      <footer className="footer">{footer}</footer>
    </div>
  )
}
