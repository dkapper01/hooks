import React, { useState, useEffect } from 'react';
import { useFetch } from './hooks';


function Joke() {
  const { punchline, setup } = useFetch(
    'https://official-joke-api.appspot.com/jokes/random',
    {}
  );

  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
}

export default Joke;
