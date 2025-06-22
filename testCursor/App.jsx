import { useState } from 'react';
import './App.css';

function App() {
  const [currentOperand, setCurrentOperand] = useState('0');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState(undefined);

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Calculator Display */}
        <div className="display">
          <div className="previous-operand" aria-live="polite">
            {previousOperand} {operation}
          </div>
          <div className="current-operand" aria-live="polite">
            {currentOperand}
          </div>
        </div>
        
        {/* Calculator Buttons */}
        <div className="keypad">
          {/* First Row */}
          <button className="clear" onClick={() => {}}>AC</button>
          <button onClick={() => {}}>DEL</button>
          <button onClick={() => {}}>%</button>
          <button onClick={() => {}}>÷</button>

          {/* Second Row */}
          <button onClick={() => {}}>7</button>
          <button onClick={() => {}}>8</button>
          <button onClick={() => {}}>9</button>
          <button onClick={() => {}}>×</button>

          {/* Third Row */}
          <button onClick={() => {}}>4</button>
          <button onClick={() => {}}>5</button>
          <button onClick={() => {}}>6</button>
          <button onClick={() => {}}>-</button>

          {/* Fourth Row */}
          <button onClick={() => {}}>1</button>
          <button onClick={() => {}}>2</button>
          <button onClick={() => {}}>3</button>
          <button onClick={() => {}}>+</button>

          {/* Fifth Row */}
          <button onClick={() => {}}>0</button>
          <button onClick={() => {}}>.</button>
          <button className="equals" onClick={() => {}}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App; 