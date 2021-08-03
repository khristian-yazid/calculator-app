import React from "react";
import Button from "./components/Button";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

// Función Flecha o Arrow Function
const App = () => {
  // Lo que ejecuta la función
  const clickHandlerFunction = (text) => {
    console.log("button.clickHandler", text);
  };
  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <div className="numbers">
        <Button text="1" clickHandler={clickHandlerFunction} />
        <Button text="2" clickHandler={clickHandlerFunction} />
        <Button text="3" clickHandler={clickHandlerFunction} />
        <Button text="4" clickHandler={clickHandlerFunction} />
        <Button text="5" clickHandler={clickHandlerFunction} />
        <Button text="6" clickHandler={clickHandlerFunction} />
        <Button text="7" clickHandler={clickHandlerFunction} />
        <Button text="8" clickHandler={clickHandlerFunction} />
        <Button text="9" clickHandler={clickHandlerFunction} />
        <Button text="0" clickHandler={clickHandlerFunction} />
      </div>
      <div className="functions">
        <button>clear</button>
        <button>r</button>
      </div>
      <MathOperations
        onClickOperation={(operation) => console.log("operation: ", operation)}
        onClickEqual={(equal) => console.log("Equeal:", equal)}
      />
    </main>
  );
};

export default App;
