import React, { useState } from "react";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Functions from "./components/Functions";
import Result from "./components/Result";

import "./assets/styles/App.css";

// Función Flecha o Arrow Function
const App = () => {
  // Lo que ejecuta la función
  const [stack, setStack] = useState("");

  return (
    <main className="react-calculator">
      <Result value={stack} />
      <Numbers
        onClickNumber={(number) => {
          console.log("Numbers", number);
          setStack(number);
        }}
      />
      <Functions
        onContentClear={(funcion) => console.log("Funcion", funcion)}
        onDelete={(funcion) => console.log("delete", funcion)}
      />
      <MathOperations
        onClickOperation={(operation) => console.log("operation: ", operation)}
        onClickEqual={(equal) => console.log("Equeal:", equal)}
      />
    </main>
  );
};

export default App;
