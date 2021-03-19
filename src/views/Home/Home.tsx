import React from 'react'
import './home.scss'
import logo from '../../assets/img/logo.svg'
import { useTranslation } from 'react-i18next'
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { t } = useTranslation()
  return (
    <div className="home">
      <div className="logo">
        <img src={logo} alt="logget" />
        <span className="title">{t('logget')}</span>
      </div>

      <div className="desc">{t('motto')}</div>
    </div>
  )
}
