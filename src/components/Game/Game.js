import React from 'react';

// Import the GuessInput and GuestResult components.
import GuessInput from '../GuessInput'
import GuestResults from '../GuessResults'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  // Create a new state variable to hold the game status - running, won, lost. 
  const [gameStatus, setGameStatus] = React.useState('running')
  // Create an array to hold guess history.
  const [guesses, setGuesses] = React.useState([])

  // Create a function to add the new guess to the guess array. Need to use the spread operator to create a new array because arrays in state can't be mutated.
  function handleGuessSubmission(guess) {

    const nextGuesses = [...guesses, guess]

    setGuesses(nextGuesses)
    
    // If the guess equals the answer, the status is updated to 'won'.
    if (guess.toUpperCase() === answer) {
      setGameStatus('won')
    }
    // If the number of guesses is greater than the number of guesses allowed, the status is updated to 'lost'.
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    } 
  }
  
  return (
    // Render the GuestResults component, passing the guesses prop through.
    // Render the GuessInput component, passing the handleGuessSubmission function through.
    <>
      {/* If the game status is 'won', render the happy banner. (Should probably separate the banners out into components, but it works ok like this.) */}
      {gameStatus === 'won' && (
        <div className="happy banner">
          <p>
            {/* Need to hardcode a space*/}
            <strong>Congratulations!</strong> Got it in {' '}
            {/* Use a conditional to render with correct grammar. */}
            <strong>{guesses.length === 1 ? '1 guess' : `${guesses.length} guesses`}</strong>.
          </p>
        </div>
      )}
      {/* If the game status is 'lost', render the lost banner. */}
      {gameStatus === 'lost' && (
        <div className="sad banner">
          {/* Dynamically render the answer.  */}
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
      {/* Pass the 'answer' prop and 'status' variable down through GuessResults to Guess component. */}
      <GuestResults guesses={guesses} answer={answer}/>
      {gameStatus === 'running' && (
        <GuessInput handleGuessSubmission={handleGuessSubmission}/>
      )}
    </>
  )
}

export default Game;
