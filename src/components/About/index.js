import React from 'react';
const About = () => {
  const refLink = localStorage.getItem('reflink');

  return (
    <div>
      <h1>About</h1>
      <p>{refLink ? refLink : null}</p>
    </div>
  );
};

export default About;
