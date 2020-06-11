import React from 'react';

import RefLinkRoute from './components/RefLinkRoute';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <RefLinkRoute exact path="/" component={Home} />
      <RefLinkRoute path="/about" component={About} />
    </div>
  );
}

export default App;
