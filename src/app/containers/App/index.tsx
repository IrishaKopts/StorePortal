import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { actions } from 'app/actions';
// @ts-ignore
import { RootState } from 'app/reducers';
// @ts-ignore
import { AppModel } from 'app/models';
import { Header } from 'app/components';


export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {

  return (
    <div className={style.normal}>
      <Header />
    </div>
  );
};
