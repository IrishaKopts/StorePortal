import React from 'react';
import { Button, ToolBar, Link, OptionalToolbar, LinkContainer} from './styles';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';
import Search from '../../shared/components/search';

const HomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <ToolBar>
        <Button>{t(translations.home.scanPdf)}</Button>
        <Button disabled>{t(translations.home.printPdf)}</Button>
      </ToolBar>
      <OptionalToolbar>
        <Search />
        <LinkContainer>
          <Link>{t(translations.home.printShipping)}<img src={'assets/images/delivery.svg'}/></Link>
          <Link>{t(translations.home.updateStatus)}<img src={'assets/images/edit.svg'}/></Link>
        </LinkContainer>
      </OptionalToolbar>
    </>
  );
};

export default HomePage;
