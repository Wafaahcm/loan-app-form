import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";
import MyComponent from "./MyComponent";

function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format is Incorrect");
    }
    setShowModal(true);
  }

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  function handlePhoneNumberChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }

  function handleNameInputChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }

  function handleAgeInputChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }

  return (
    <div onClick={handleDivClick} className="flex">
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr />

        <MyComponent
          inputName="Name"
          value={loanInputs.name}
          handleChange={handleNameInputChange}
        />

        <MyComponent
          inputName="Phone Number"
          value={loanInputs.phoneNumber}
          handleChange={handlePhoneNumberChange}
        />

        <MyComponent
          inputName="Age:"
          value={loanInputs.age}
          handleChange={handleAgeInputChange}
        />

        <label>Are you an employee?</label>
        <input
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
          type="checkbox"
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000</option>
          <option>above 2000</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>

      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}

export default LoanForm;
