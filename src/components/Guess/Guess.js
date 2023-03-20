import React from "react";
import { range } from '../../utils'

function Guess({ value }) {
  return (
    <>
      <div className="guess-results">
        <p className="guess">
          <span className="cell">F</span>
          <span className="cell">I</span>
          <span className="cell">R</span>
          <span className="cell">S</span>
          <span className="cell">T</span>
        </p>
      </div>
      
    </>
  )
}

export default Guess;

