import React from "react";
import Guess from "../Guess"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"

function GuessResults({ guesses, answer }) {

  return (
    
    <div className="guess-results">
      {/* Use the range function to create an array with the number of allowed guesses for the game. Using a constant here makes it easy to update the number of guesses in the future. Map through that array.*/}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        // Render the Guess component, assigning each a value from the guesses array and a key.
        // Pass 'answer' and 'status' down through to Guess component.
        <Guess 
          key={num} 
          value={guesses[num]} 
          guesses={guesses}
          answer={answer}
          />
      ))}
    </div>
  )
}

export default GuessResults;


// A new component should be created, to render previous guesses.
// When the user submits their guess, that value should be rendered within this new component.
// There should be no key warnings in the console!
