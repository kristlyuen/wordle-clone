import React from "react";

function GuessInput() {

  // Set state for guess.
  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    // Prevent default refresh on submit.
    event.preventDefault()
    // Console log guess, as per exercise instructions.
    console.log({ guess })
    // Reset guess to an empty string to clear input.
    setGuess('')
  }
 
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        // Require an entry to submit the form.
        required
        // Set minimum and maximum length for the guess.
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        // Require entries to be alpha characters and only 5 characters long. This was added because minLength breaks with toUpperCase.
        pattern="[a-zA-Z]{5}"
        // Add a title to show if the entered guess doesn't match the pattern.
        title="Please enter a 5 letter word."
        // Set the guess to the entered text and change it to uppercase.
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput;

// Create a new component.
// (Don't forget, you can use an NPM script to generate the scaffolding for you!)
// This component should render a <form> tag, including a label and a text input.
// The text input should be controlled by React state.
// When the form is submitted:
// The entered value should be logged to the console (for now).
// The input should be reset to an empty string.
// The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
// The input should have a minimum and maximum length of 5.
// NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.
