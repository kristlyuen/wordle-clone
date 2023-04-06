import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers"

// Create new component to set the className of each span. Creating a new component will help make the code easier to understand. Pass the letter and status through as props.
function Cell({ letter, status }) {
  // Create a new variable to hold what the class name should be. Set the variable to a conditional that will add the status to the class name only if the status exists. 
  const className = status ? `cell ${status}` : 'cell'

  return (
    <span className={className}>
      {/* Because we're rendering the boxes regardless of if a guess has been entered, we need to set a conditional. If a letter exists, show it. Otherwise, set it to undefined. This is to avoid an error when rendering if a value hasn't been entered. */}
      {letter ? letter : undefined}
    </span>   
  )
}

// Pass the value and answer in as props. This is why we passed the answer down through the different components. 
function Guess({ value, answer }) {
  // Set a variable equal to the results of the checkGuess function.
  const result = checkGuess(value, answer)

  return (
    <p className="guess">
      {/* Create an array with a length of 5. Map through that array.*/}
      {range(5).map((num) => (
        // Render the Cell component.
        <Cell 
          key={num} 
          // Use conditionals that will only assign letter and status if they exist in the results from the checkGuess function.
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}  
        />
      ))}
    </p>
  )
}

export default Guess;

// Part 4
// Inside /src/game-helpers.js, you'll find a helper function, checkGuess. As parameters, it takes a single guess, as well as the correct answer. It returns an array that contains the status for each letter.

// For example:
// checkGuess('WHALE', 'LEARN');
// /*
//   Returns:

//   [
//     { letter: 'W', status: 'incorrect' },
//     { letter: 'H', status: 'incorrect' },
//     { letter: 'A', status: 'correct' },
//     { letter: 'L', status: 'misplaced' },
//     { letter: 'E', status: 'misplaced' },
//   ]
// */

// There are 3 possible statuses:

// correct — this slot is perfect. It's the right letter in the right place.
// misplaced — this letter does exist in the word, but in a different slot.
// incorrect — this letter is not found in the word at all.
// In the example above, W and H aren't found in the word LEARN, and so they're marked as “incorrect”. A is correct, since it's in the 3rd slot in each word. The other two letters, L and E, are meant to be in other slots.

// These statuses correspond with CSS classes. The correct status has a correct class name, which will apply the green background when applied to a cell. Same thing for misplaced and incorrect.

// Your task is to use this function to validate the user's guesses, and apply the correct CSS classes. The final output for a given guess should look like this:

// <p class="guess">
//   <span class="cell incorrect">W</span>
//   <span class="cell incorrect">H</span>
//   <span class="cell correct">A</span>
//   <span class="cell misplaced">L</span>
//   <span class="cell misplaced">E</span>
// </p>

// Acceptance Criteria:

// Import the checkGuess function from /src/game-helpers.js, and use it to validate each of the user's guesses
// When rendering the letters in the Guess component, apply the letter's status to the cell element.
// "Empty" guess slots should have the same markup as before: <span class="cell"></span>.


// Part 3
// Things to know:

// There are two things that should help you tackle this exercise:

// You can use the range utility to create arrays of a specified length to map over. It's provided in /src/utils.js. Check out the “Range Utility” lesson in the course for more info on how to use it.
// Inside /src/constants.js, you'll find a constant, NUM_OF_GUESSES_ALLOWED. You should import and use this constant when generating the set of guesses. This would make it easy for us to change the difficulty of the game later on, by increasing/decreasing the # of guesses.

// Acceptance Criteria:

// Create a new Guess component. 6 instances should be rendered at all times, no matter how many guesses have been submitted.
// The Guess component should render 5 spans, each with the class of cell.
// Each cell should contain a letter, if the Guess instance has been given a value. If not, the cell should be blank.
// Use the NUM_OF_GUESSES_ALLOWED constant, when needed.
// No key warnings in the console.

