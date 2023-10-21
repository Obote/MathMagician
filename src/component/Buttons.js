import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Buttons() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const renderButtons = () => {
    const buttonValues = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      'x',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];

    return buttonValues.map((value) => (
      <input
        type="button"
        value={value}
        className={`button ${value === '0' ? 'double' : ''} ${
          ['+', '-', 'x', '÷', '='].includes(value) ? 'orange' : ''
        }`}
        key={value}
        onClick={() => handleButtonClick(value)}
      />
    ));
  };

  return (
    <div className="calc">
      <input
        type="text"
        placeholder="0"
        id="answer"
        value={calculatorData.next || calculatorData.total || '0'}
        readOnly
      />
      {renderButtons()}
    </div>
  );
}

export default Buttons;
