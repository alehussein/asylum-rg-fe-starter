import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev < 3 ? prev + 1 : 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const dotsString = '.'.repeat(dots);

  return (
    <div className="container">
      <h1>Loading{dotsString}</h1>
    </div>
  );
};

export default Loading;
