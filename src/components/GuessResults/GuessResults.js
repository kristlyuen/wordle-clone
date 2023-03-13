import React from "react";

function GuessResults({ guesses }) {
  return (
    // Map through the array of guesses, assigning each a key and displaying the guess. It's ok to use the index as the key because the array will not be rearranged.
    <div className="guess-results">
      {guesses.map((item, index) => (
        <p className="guess" key={index}>
          {item}
        </p>
      ))}
    </div>
  )
}

export default GuessResults;


// A new component should be created, to render previous guesses.
// When the user submits their guess, that value should be rendered within this new component.
// There should be no key warnings in the console!
