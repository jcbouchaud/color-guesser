import React, { ComponentType, FC } from 'react';
import { Navigate } from 'react-router-dom';

const withAuthentication = <P extends object>(Component: ComponentType<P>,
): FC<P> => (props) => {
    const isAuthenticated = true
    if (isAuthenticated) {
      return <Component {...props as P} />;
    }
    return (
      <Navigate
        to={{
          pathname: '/login',
        }}
      />
    );
  };

export default withAuthentication;