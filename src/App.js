import React, { useState } from 'react';
import Joke from './joke';
import Stories from './Stores';
import Task from './Task';
import './App.css';
import Gallery from './Gallery';

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const updateUserQuery = (event) => {
    // console.log('user', userQuery);
    setUserQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };
  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };
  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  };
  return (
    <div className='App'>
      <h1>Hello Daniel</h1>
      <div className='form'>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Task />
      <hr />
      <div>
        {showGallery ? <Gallery /> : null}
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
      <hr />
      <Joke />
      <hr />

      <Stories />
    </div>
  );
}

export default App;
