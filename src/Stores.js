import React, { useState, useEffect } from 'react';
import { useFetch } from './hooks';

function Stores() {
  const stories = useFetch(
    'https://news-proxy-server.appspot.com/topstories',
    []
  );

  return (
    <div className='Stories'>
      <h3>Stories</h3>
      {stories.map((story) => {
        const { id, by, time, title, url } = story;
        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stores;

// const [stories, setStories] = useState([]);

// useEffect(() => {
//   fetch('https://news-proxy-server.appspot.com/topstories')
//     .then((response) => response.json())
//     .then((json) => setStories(json));
// }, []);
// console.log(stories);
