import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useState } from 'react';

const Calculator = () => {

  /** TODO: Here is where you are going to keep track of calculator state */
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  var operator;

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (value) => {
    if (operator === "+") {
      setCount(parseInt(count) + value);
      setDisplayCount(value);
    } else if (operator === "-") {
      setCount(parseInt(count) - value);
      setDisplayCount(value);
    } else if (operator === "x") {
      setCount(parseInt(count) * value);
      setDisplayCount(value);
    } else if (operator === "/") {
      setCount(parseInt(count) / value);
      setDisplayCount(value);
    } else {
      if (parseInt(count) === 0) {
        setCount(value);
        setDisplayCount(value);
      } else {
        setCount(parseInt('' + count + value));
        setDisplayCount(parseInt('' + count + value));
      }
    }
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (value) => {
    if (value === "clear") {
      setCount(0);
      setDisplayCount(0);
    } else if (value === "=") {
      setDisplayCount(count);
    } else {
      operator = value;
    }
  };

  return (
    <div style={{ border: "5px solid #02040F", borderRadius: "10px", padding: "0.7rem", backgroundColor: "#f2f2f2",}}>
      <Screen value={displayCount} />
      <div style={{ display: "flex", gap: "0.6rem" }}>
        <div style={{ flexBasis: "33%", flexGrow: "1" }}>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
        </div>
        <div style={{ flexBasis: "33%", flexGrow: "1" }}>
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ flexBasis: "33%", flexGrow: "1" }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
        </div>
      </div>
      <div>
          <Operation value="clear" onClick={handleOperationClick} />
      </div>
    </div>
  );
};

export default Calculator;
