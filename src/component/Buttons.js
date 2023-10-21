import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function Buttons({ clickHandler }) {
  const buttonValues = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className="buttons">
      {buttonValues.map((row) => (
        <div key={uuidv4()} className="button-row">
          {row.map((button) => (
            <input
              key={uuidv4()}
              type="button"
              value={button}
              className={`button ${
                ["+", "-", "*", "÷"].includes(button) && "orange"
              }`}
              onClick={() => clickHandler(button)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Buttons;
