import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { actions } from 'actions';
// @ts-ignore
import { RootState } from 'reducers';
// @ts-ignore
import { AppModel } from 'models';
import { Header } from 'components';


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
