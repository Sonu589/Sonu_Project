import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
  const [data, setData] = useState({
    panCard: '',
    incomeFromSalary: '',
    incomeFromShareMarket: '',
    // Add more tax payer details fields as needed
  });

  const [validation, setValidation] = useState({
    panCard: true,
    incomeFromSalary: true,
    incomeFromShareMarket: true,
    // Add validation fields for other tax payer details
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('panCard', data.panCard);
    formdata.append('incomeFromSalary', data.incomeFromSalary);
    formdata.append('incomeFromShareMarket', data.incomeFromShareMarket);
    // Add more fields to the formdata as needed

    // Perform validation
    const isValid = validateForm();

    if (isValid) {
      axios
        .post('http://localhost:8081/create', formdata)
        .then((res) => {
          navigate('/employee');
          alert('Data inserted successfully!');
        })
        .catch((err) => console.log(err));
    }
  };

  const validateForm = () => {
    const { panCard, incomeFromSalary, incomeFromShareMarket } = data;
    const isValid = {
      panCard: panCard.trim() !== '',
      incomeFromSalary: validateIncome(incomeFromSalary),
      incomeFromShareMarket: validateIncome(incomeFromShareMarket),
      // Add validation fields for other tax payer details
    };

    setValidation(isValid);

    // Check if all fields are valid
    return Object.values(isValid).every((valid) => valid);
  };

  const validateIncome = (income) => {
    // Simple income validation, you can use a more specific validation approach
    return !isNaN(income) && parseFloat(income) >= 0;
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Tax Payer Details</h2>
      <form className="row g-3 w-50 w-md-70 w-lg-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputPanCard" className="form-label">
            PAN Card:
          </label>
          <input
            type="text"
            className={`form-control ${
              !validation.panCard ? 'is-invalid' : validation.panCard ? 'is-valid' : ''
            }`}
            id="inputPanCard"
            placeholder="Enter PAN Card"
            autoComplete="off"
            onChange={(e) => {
              const panCard = e.target.value;
              const isValid = panCard.trim() !== '';
              setValidation({ ...validation, panCard: isValid });
              setData({ ...data, panCard });
            }}
          />
          {!validation.panCard && (
            <div className="invalid-feedback">Please enter a valid PAN Card</div>
          )}
          {validation.panCard && (
            <div className="valid-feedback">PAN Card is correct!</div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="inputIncomeFromSalary" className="form-label">
            Income From Salary:
          </label>
          <input
            type="text"
            className={`form-control ${
              !validation.incomeFromSalary ? 'is-invalid' : validation.incomeFromSalary ? 'is-valid' : ''
            }`}
            id="inputIncomeFromSalary"
            placeholder="Enter Income From Salary"
            autoComplete="off"
            onChange={(e) => {
              const incomeFromSalary = e.target.value;
              const isValid = validateIncome(incomeFromSalary);
              setValidation({ ...validation, incomeFromSalary: isValid });
              setData({ ...data, incomeFromSalary });
            }}
          />
          {!validation.incomeFromSalary && (
            <div className="invalid-feedback">Please enter a valid income</div>
          )}
          {validation.incomeFromSalary && (
            <div className="valid-feedback">Income is correct!</div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="inputIncomeFromShareMarket" className="form-label">
            Income From Share Market:
          </label>
          <input
            type="text"
            className={`form-control ${
              !validation.incomeFromShareMarket ? 'is-invalid' : validation.incomeFromShareMarket ? 'is-valid' : ''
            }`}
            id="inputIncomeFromShareMarket"
            placeholder="Enter Income From Share Market"
            autoComplete="off"
            onChange={(e) => {
              const incomeFromShareMarket = e.target.value;
              const isValid = validateIncome(incomeFromShareMarket);
              setValidation({ ...validation, incomeFromShareMarket: isValid });
              setData({ ...data, incomeFromShareMarket });
            }}
          />
          {!validation.incomeFromShareMarket && (
            <div className="invalid-feedback">Please enter a valid income</div>
          )}
          {validation.incomeFromShareMarket && (
            <div className="valid-feedback">Income is correct!</div>
          )}
        </div>
        {/* Add more fields for other tax payer details */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
