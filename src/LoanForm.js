import "./FormStyles.css";
import Modal from "./Modal";

function LoanForm() {
  return (
    <div className="flex">
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr />

        <label>Name:</label>
        <input />

        <label>Phone Number:</label>
        <input />

        <label>Age</label>
        <input />

        <label>Are you an employee?</label>
        <input type="checkbox" />

        <label>Salary:</label>
        <select>
          <option>less than 500$</option>
          <option>between 500$ and 2000</option>
          <option>above 2000</option>
        </select>

        <button id="submit-loan-btn" type="submit">
          Submit
        </button>
      </form>

      <Modal />
    </div>
  );
}

export default LoanForm;
