import React from 'react';
import { useLocation, Route, Redirect } from 'react-router-dom';

const RefLinkRoute = (props) => {
  let location = useLocation();
  const refLink = location.search.replace('?ref=', '');

  if (refLink) {
    localStorage.setItem('reflink', JSON.stringify(refLink));
    return <Redirect to={location.pathname} />;
  }

  return <Route {...props} />;
};

export default RefLinkRoute;
