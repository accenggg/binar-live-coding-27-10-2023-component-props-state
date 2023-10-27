import { useState } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Result from "./components/Result";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10,
  });

  const durationIsValid = userInput.duration > 0;

  function handlerUserInput(inputKey, newValue) {
    setUserInput((existingInput) => {
      return {
        ...existingInput,
        [inputKey]: newValue * 1,
      };
    });
  }

  return (
    <>
      <Header />
      <Calculator onChangeProps={handlerUserInput} userInputProps={userInput} />
      {durationIsValid && <Result resultInput={userInput} />}
    </>
  );
}
