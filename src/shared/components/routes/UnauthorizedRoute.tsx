import { Redirect, Route } from 'react-router';
import React from 'react';
import { AppRouts } from '../../route-config';
import { selectUser, selectUserLoaded } from '../../../store/selectors';
import { useSelector } from 'react-redux';

export const UnauthorizedRoute = ({ ...props }): JSX.Element => {
  const user = useSelector(selectUser);
  const userLoaded = useSelector(selectUserLoaded);

  return (
    <Route>
      {
        user ? (
          <Redirect to={AppRouts.HOME} />
        ) : (
          userLoaded ? React.createElement(props.component, {}) : <></>
        )
    }
    </Route>
  );
};
