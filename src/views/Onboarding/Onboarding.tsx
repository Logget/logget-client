import React from 'react'
import './onboarding.scss'
import { useTranslation } from 'react-i18next'
import { LtContainer } from '../../components/layout/LtContainer/LtContainer'
import { LogoType } from '../../components/shared/LogoType/LogoType'
import { LtButton } from '../../components/forms/LtButton/LtButton'

interface OnboardingProps {}

export const Onboarding: React.FC<OnboardingProps> = () => {
  const { t } = useTranslation()

  return (
    <div className="page-onboarding">
      <LtContainer className="main-content">
        <LogoType />
        <div className="motto">{t('motto')}</div>
      </LtContainer>

      <div className="actions">
        <LtContainer>
          <LtButton type="muted" to="/login">
            {t('login')}
          </LtButton>
          <LtButton type="primary" to="/start">
            {t('getStarted')}
          </LtButton>
        </LtContainer>
      </div>
    </div>
  )
}
