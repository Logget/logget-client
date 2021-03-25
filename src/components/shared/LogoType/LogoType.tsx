import React from 'react'
import logo from '../../../assets/img/logo.svg'
import { useTranslation } from 'react-i18next'
import './LogoType.scss'

interface LogoTypeProps {}

export const LogoType: React.FC<LogoTypeProps> = ({}) => {
  const { t } = useTranslation()

  return (
    <div className="logo-type">
      <img src={logo} className="image" alt="logget" />
      <span className="title">{t('logget')}</span>
    </div>
  )
}
