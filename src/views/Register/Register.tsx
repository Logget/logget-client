import React from 'react'
import { LtButton } from '../../components/forms/LtButton/LtButton'
import './register.scss'
import Icon from '@mdi/react'
import { mdiEmail } from '@mdi/js'
import googleImg from '../../assets/img/google.svg'
import { LtContainer } from '../../components/layout/LtContainer/LtContainer'
import { useTranslation } from 'react-i18next'
import { AuthLayout } from '../../layouts/AuthLayout/AuthLayout'

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const { t } = useTranslation()
  const Footer = (
    <LtButton type="white" to="/login">
      {t('login')}
    </LtButton>
  )

  return (
    <AuthLayout footer={Footer}>
      <div className="register">
        <LtContainer>
          <h2 className="title">{t('register.createFree')}</h2>
          <LtButton type="white" classes="register-btn" height={56} block>
            <img src={googleImg} className="icon" alt="google" />
            {t('register.googleLabel')}
          </LtButton>
          <LtButton
            type="muted"
            classes="register-btn email-btn"
            height={56}
            block
          >
            <Icon path={mdiEmail} size={1} className="icon" />
            {t('register.emailLabel')}
          </LtButton>
        </LtContainer>
      </div>
    </AuthLayout>
  )
}