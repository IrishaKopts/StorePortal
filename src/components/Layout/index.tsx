import React, { ReactNode } from 'react';
import { Header, LogoImage } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header>
        <LogoImage src="../../images/logo.svg" alt="logo" />
      </Header>
      {children}
    </>
  );
};

export default Layout;
