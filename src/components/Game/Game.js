import React from 'react';

// Import the GuessInput and GuestResult components.
import GuessInput from '../GuessInput'
import GuestResults from '../GuessResults'

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  // Create an array to hold guess history.
  const [guesses, setGuesses] = React.useState([])

  // Create a function to add the new guess to the guess array. Need to use the spread operator to create a new array because arrays in state can't be mutated.
  function handleGuessSubmission(guess) {
    setGuesses([...guesses, guess])
  }

  return (
    // Render the GuestResults component, passing the guesses prop through.
    // Render the GuessInput component, passing the handleGuessSubmission function through.
    <>
      {/* Pass answer down through GuessResults to Guess component. */}
      <GuestResults guesses={guesses} answer={answer}/>
      <GuessInput handleGuessSubmission={handleGuessSubmission}/>
    </>
  )
}

export default Game;
