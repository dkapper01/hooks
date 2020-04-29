import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';

function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + 1) % PICTURES.length;
      });
    }, 3000);
    return () => {
      clearInterval(interval)
    }
  }, []);

  // console.log('index', index);

  return (
    <div className='gallery'>
      <img src={PICTURES[index].image} />
    </div>
  );
}

export default Gallery;