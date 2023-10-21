import React from "react";

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
      {buttonValues.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((button) => (
            <input
              key={button}
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

export default Buttons;
