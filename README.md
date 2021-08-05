# Calculator App

this project is created using react, and has these components

`Button`, `Functions`, `MathOperations`, `Number`, `Result`

![](https://i.imgur.com/GigLTeh.jpg)

## Button

The Button component is in charge of receiving the type of the button, the type of function from (text) and the click event
``` bash
const Button = ({ type, text, clickHandler }) => (
  <button className={type} onClick={() => clickHandler(text)}>
    <span>{text}</span>
  </button>
);
```
## Result
The Result component shows the value of the number that the user presses
``` bash
const Result = ({ value }) => <div className="result">{value}</div>;
);
```
## Numbers
The Number component is responsible for displaying the numbers from 1-9
using the button component
``` bash
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = (onClickNumber) => {
  const renderButton = (number) => (
    <Button
      key={number}
      text={number.toString()}
      clickHandler={onClickNumber}
    />
  );
  return numbers.map(renderButton);
};

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">{renderButtons(onClickNumber)}</section>
);
);
```
## Functions
The Functions component consists of two buttons. The "CE" button will delete the entire content of the result and the "& larr" button will delete the last element of the result.
``` bash
const Functions = ({ onContentClear, onDelete }) => (
  <section className="functions">
    <Button type="button-long-text" text="CE" clickHandler={onContentClear} />
    <Button type="button-long-text" text="&larr;" clickHandler={onDelete} />
  </section>
);
```
## MathOperations
The MathOperations component receives the type of mathematical operation to be performed when pressing the "=" button
``` bash
const MathOperations = ({ onClickOperation, onClickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={onClickOperation} />
    <Button text="-" clickHandler={onClickOperation} />
    <Button text="*" clickHandler={onClickOperation} />
    <Button text="/" clickHandler={onClickOperation} />
    <Button text="=" clickHandler={onClickEqual} />
  </section>
);
```
## App
the app manages the operation of the application by firing the props and executing functions depending on the events where the user clicks
```bash
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
```
## Installation
clone the repository then run `npm install` and `npm run start`

## Author
Khristian Yazid ALi

Twitter: [@khr_yazid](https://twitter.com/khr_yazid)

Website: [khyazid.codes](https://khyazid.codes/)

