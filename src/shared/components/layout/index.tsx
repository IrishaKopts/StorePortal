import React, { ReactNode } from 'react';
import { Header, LogoImage, Button } from './styles';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { useLocation } from 'react-router';
import { AppRouts } from '../../route-config';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <Header>
        <LogoImage src='assets/images/boots_logo.svg' alt='logo' />
        {AppRouts.HOME === location?.pathname ? <Button>{t(translations.logOut)}</Button> : <></>}
      </Header>
      {children}
    </>
  );
};

export default Layout;
