import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputContext";

function MyInput() {
  const inputContext = useContext(LoanInputContext);

  console.log("the context from MyInput.js is ");

  return (
    <>
      <label>{inputContext.labelTitle}</label>
      <input
        value={inputContext.value}
        onChange={(event) => {
          inputContext.handleChange(event.target.value);
        }}
      />
    </>
  );
}

export default MyInput;
