import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";

function LoanForm() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  return (
    <div className="flex">
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr />

        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />

        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />

        <label>Age</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
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

        <button id="submit-loan-btn" type="submit">
          Submit
        </button>
      </form>

      {/* <Modal /> */}
    </div>
  );
}

export default LoanForm;
