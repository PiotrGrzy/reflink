import React from 'react';

const Home = () => {
  const refLink = localStorage.getItem('reflink');

  return (
    <div>
      <h1>Welcome</h1>
      <p>{refLink ? refLink : null}</p>
    </div>
  );
};

export default Home;
