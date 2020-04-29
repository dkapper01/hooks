import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';

const SECONDS = 1000;

function Gallery() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    console.log('delay', delay);
    const interval = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + 1) % PICTURES.length;
      });
    }, 3 * SECONDS);
    return () => {
      clearInterval(interval);
    };
  }, [delay]);

  const updateDelay = (event) => {
    setDelay(Number(event.target.value) * SECONDS);
  };

  return (
    <div className='Gallery'>
      <img src={PICTURES[index].image} />
      <div className='multiform'>
        <div>
          Gallery transition delay (seconds)
          <input type='number' onChange={updateDelay} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
