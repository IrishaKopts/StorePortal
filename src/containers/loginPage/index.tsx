import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import RegistrationsPagesLayout from 'shared/components/registrationsPagesLayout';
import LoginForm from './loginForm';
import { StyledLink } from './styles';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <RegistrationsPagesLayout title={t(translations.login.mainTitle)}>
        <LoginForm />
        <StyledLink to="/">{t(translations.login.forgotPasswordLink)}</StyledLink>
      </RegistrationsPagesLayout>
    </>
  );
};

export default LoginPage;
