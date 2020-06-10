import React from 'react';
import { useLocation, Route, Redirect } from 'react-router-dom';

const RefLinkRoute = (props) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  if (params.has('ref')) {
    const refLink = params.get('ref');
    localStorage.setItem('reflink', JSON.stringify(refLink));
    const [first, last] = location.search.split('?');
    const reFilterRef = /&ref(\=[^&]*)?(?=&|$)|^ref(\=[^&]*)?(&|$)/;

    const paramsWithoutRef = last.replace(reFilterRef, '');
    return <Redirect to={location.pathname + '?' + paramsWithoutRef} />;
  }
  return <Route {...props} />;
};

export default RefLinkRoute;
