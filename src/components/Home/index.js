import React from 'react';

const Home = () => {
  const refLink = localStorage.getItem('reflink');

  return (
    <div>
      <h1>Welcome</h1>
      <p>Reflink: {refLink ? refLink : 'No reflink in storage'}</p>
    </div>
  );
};

export default Home;
