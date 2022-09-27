import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useRef, useState } from 'react';

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */

  const [count, setCount] = useState(1);

  /** TODO: what happens when I click a number? */
  const handleNumberClick = () => {
    console.log('You clicked');
    setCount(count + 1);
    console.log('Current Value:', count);
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = () => {};

  return (
    <div>
      <Screen value="123" />
      <div style={{ display: "flex", gap: "0.5rem" }}>
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
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
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
