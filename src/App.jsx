import React, { useState } from "react";
import { words } from "lodash";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./assets/styles/App.css";

/*eslint no-eval: 0*/
const App = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length - 1] : "0";

  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers
        onClickNumber={(number) => {
          console.log("Numbers", number);
          setStack(`${stack}${number}`);
        }}
      />

      <Functions
        onContentClear={() => {
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />

      <MathOperations
        onClickOperation={(operation) => {
          console.log("Operation: ", operation);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          console.log("Equeal:", equal);
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};
export default App;
