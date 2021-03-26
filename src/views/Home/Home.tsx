import React from 'react'
import './home.scss'
import { useTranslation } from 'react-i18next'
import { LtContainer } from '../../components/layout/LtContainer/LtContainer'
import { LogoType } from '../../components/shared/LogoType/LogoType'
import { LtButton } from '../../components/forms/LtButton'

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation()

  return (
    <div className="page-home">
      <LtContainer>
        <LogoType />
        <div className="motto">{t('motto')}</div>
      </LtContainer>

      <div className="actions">
        <LtButton type="muted">{t('login')}</LtButton>
        <LtButton type="primary">{t('getStarted')}</LtButton>
      </div>
    </div>
  )
}
