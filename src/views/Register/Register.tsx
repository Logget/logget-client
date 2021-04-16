import React from 'react'
import { AuthLayout } from '../../layouts/AuthLayout/AuthLayout'
import { LtInput } from '../../components/forms/LtInput/LtInput'
import { useTranslation } from 'react-i18next'
import { LtButton } from '../../components/forms/LtButton/LtButton'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'
import './register.scss'

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const { t } = useTranslation()

  const Footer = (
    <div className="register-footer">
      <LtButton type="white" to="/login">
        {t('login')}
      </LtButton>
      <LtButton type="primary">
        {t('signUp')} <Icon className="icon" size={0.8} path={mdiArrowRight} />
      </LtButton>
    </div>
  )

  return (
    <AuthLayout className="register-email" footer={Footer}>
      <div className="input-group">
        <label className="label" htmlFor="name">
          {t('register.name')}
        </label>
        <LtInput placeholder={t('register.yourName')} id="name" />
      </div>

      <div className="input-group">
        <label className="label" htmlFor="email">
          {t('register.email')}
        </label>
        <LtInput
          placeholder={t('register.yourEmail')}
          id="email"
          type="email"
        />
      </div>

      <div className="input-group">
        <label className="label" htmlFor="password">
          {t('register.password')}
        </label>
        <LtInput
          placeholder={t('register.yourPassword')}
          id="password"
          type="password"
          name="password"
        />
      </div>
    </AuthLayout>
  )
}
