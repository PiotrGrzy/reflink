import React from 'react';
import { useLocation, Route, Redirect } from 'react-router-dom';

const RefLinkRoute = (props) => {
  let location = useLocation();
  //console.log(location);
  const refLink = location.search.replace('?ref=', '');

  if (refLink) {
    const [first, last] = location.search.split('?');
    const reFilterRef = /&ref(\=[^&]*)?(?=&|$)|^ref(\=[^&]*)?(&|$)/;
    const paramsWithoutRef = last.replace(reFilterRef, '');
    console.log(location.search);

    localStorage.setItem('reflink', JSON.stringify(refLink));
    return <Redirect to={location.pathname + '?' + paramsWithoutRef} />;
  }

  return <Route {...props} />;
};

export default RefLinkRoute;
