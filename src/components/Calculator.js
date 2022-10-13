import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useState } from 'react';

const Calculator = () => {

  /** TODO: Here is where you are going to keep track of calculator state */
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [operator, setOperator] = useState('');

  /** TODO: what happens when I click a number? */
  const handleNumberClick = value => {
    if (operator) {
      // eslint-disable-next-line no-eval
      setCount(eval(`parseInt(count) ${operator} value`));
      setDisplayCount(value);
    } else {
      if (parseInt(count) === 0) {
        setCount(value);
        setDisplayCount(value);
      } else {
        setCount(parseInt(count.toString().concat(value.toString())));
        setDisplayCount(parseInt(count.toString().concat(value.toString())));
      }
    }
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = value => {
    if (value === "clear") {
      setCount(0);
      setDisplayCount(0);
      setOperator('');
    } else if (value === "=") {
      setDisplayCount(count);
    } else {
      setOperator(value);
    }
  };

  const makeKeys = (type,[a,b,c,d,e]) => {
    let keys;
    if (type === "number") {
      keys = [a,b,c,d,e].map(n => <Number key={n} value={n} onClick={handleNumberClick} />);
    } else {
      keys = [a,b,c,d,e].map(n => <Operation key={n} value={n} onClick={handleOperationClick} />);
    };
    return <div style={{ flexBasis: "33%", flexGrow: "1" }}>{keys}</div>
  };
  
  return (
    <div style={{ border: "5px solid #02040F", borderRadius: "10px", padding: "0.7rem", backgroundColor: "#f2f2f2",}}>
      <Screen value={displayCount} />
      <div style={{ display: "flex", gap: "0.6rem" }}>
        {makeKeys("number", [8,6,4,2,0])}
        {makeKeys("number", [9,7,5,3,1])}
        {makeKeys("operation", ['+','-','*','/','='])}
      </div>
      <div>
        {makeKeys("operation", ['clear'])}
      </div>
    </div>
  );
};

export default Calculator;
