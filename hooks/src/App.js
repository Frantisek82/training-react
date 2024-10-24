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
  const handleMultipleOne = () => {
    setCount(count * 5);
  };

  return (
    <div>
      <Counter count={count} />
      <button onClick={handlePlusOne}>PULSAME PARA SUMAR</button>
      <button onClick={handleMenosOne}>PULSAME PARA RESTAR</button>
      <button onClick={handleMultipleOne}>
        PULSAME PARA MULTIPLICAR POR 5
      </button>
    </div>
  );
}

export default App;

//------------------------------------------------------------------------------
