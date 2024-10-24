import "./App.css";
// // import { useState } from "react";
// import Person from "./component/Person";

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Person />
//       {/* <p>Has clicado {count} veces.</p> */}
//       {/* <button onClick={() => setCount(count + 1)}>PULSAME</button> */}
//     </div>
//   );
// }

// export default App;

//-----------------------------------------------------------------------------
//Exercise
//-----------------------------------------------------------------------------
import Counter from "./component/Counter";
import { useState } from "react";

function App() {
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
      alert("Anything multiplied by 0 is equal to 0");
    }
  };
  const handleDivideByHundred = () => {
    if (count !== 0) {
      setCount(count / 100);
    } else {
      alert("Division of 0 not allowed");
    }
  };

  return (
    <div>
      <Counter count={count} />
      <button onClick={handlePlusOne}>PULSAME PARA SUMAR</button>
      <button onClick={handleMenosOne}>PULSAME PARA RESTAR</button>
      <button onClick={handleTimesFive}>PULSAME PARA MULTIPLICAR POR 5</button>
      <button onClick={handleDivideByHundred}>
        PULSAME PARA DIVIDIR POR 100
      </button>
    </div>
  );
}

export default App;

//------------------------------------------------------------------------------
