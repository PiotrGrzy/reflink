import React from 'react';
import { useLocation, Route, Redirect } from 'react-router-dom';

const RefLinkRoute = (props) => {
  const { pathname, search } = useLocation();
  const allURLParams = new URLSearchParams(search);

  if (allURLParams.has('ref')) {
    const refLink = allURLParams.get('ref');

    localStorage.setItem('reflink', JSON.stringify(refLink));

    const reFilterRef = /&ref(\=[^&]*)?(?=&|$)|^ref(\=[^&]*)?(&|$)/; // finds ref=* param in string

    const paramsWithoutRef = search.substring(1).replace(reFilterRef, '');

    return <Redirect to={pathname + '?' + paramsWithoutRef} />;
  }
  return <Route {...props} />;
};

export default RefLinkRoute;
