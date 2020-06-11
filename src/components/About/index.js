import React from 'react';
const About = () => {
  const refLink = localStorage.getItem('reflink');

  return (
    <div>
      <h1>About:</h1>
      <p>Reflink: {refLink ? refLink : 'No reflink in storage'}</p>
    </div>
  );
};

export default About;
