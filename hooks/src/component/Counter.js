import ShowCounter from "./ShowCounter";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handlePlusOne = () => {
    setCount(count + 1);
  };
  const handleMenosOne = () => {
    setCount(count - 1);
  };
  const handleTimesFive = () => {
    if (count !== 0) {
      setCount(count * 5);
    } else {
      alert("Anything multiplied by zero is equal to zero");
    }
  };
  const handleDivideByHundred = () => {
    if (count !== 0) {
      setCount(count / 100);
    } else {
      alert("Dividing zero with any number will always give us a zero");
    }
  };

  return (
    <div>
      <ShowCounter count={count} />
      <button onClick={handlePlusOne}>PULSAME PARA SUMAR</button>
      <button onClick={handleMenosOne}>PULSAME PARA RESTAR</button>
      <button onClick={handleTimesFive}>PULSAME PARA MULTIPLICAR POR 5</button>
      <button onClick={handleDivideByHundred}>
        PULSAME PARA DIVIDIR POR 100
      </button>
      {/* <p>Has clicado {count} veces.</p> */}
      {/* <button onClick={() => setCount(count + 1)}>PULSAME</button> */}
    </div>
  );
}

export default Counter;
