import React, { useState } from 'react';
import './styles/CreateTaxDue.css'; // Import your CSS file

function CreateTaxDue() {
  const [formData, setFormData] = useState({
    panCard: '',
    incomeFromSalary: '',
    incomeFromShareMarket: '',
    // Add more tax-related fields as needed
  });

  const [status, setStatus] = useState('NEW'); // Default status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTaxDue = () => {
    // Implement your tax calculation logic here based on the input data
    // You can calculate total tax, set the status (NEW or DELAYED), etc.
    // For this example, let's assume a simple calculation based on income.

    const { incomeFromSalary, incomeFromShareMarket } = formData;
    const totalIncome = parseFloat(incomeFromSalary) + parseFloat(incomeFromShareMarket);

    // Example: If total income is greater than 100,000, set status to DELAYED
    if (totalIncome > 100000) {
      setStatus('DELAYED');
    } else {
      setStatus('NEW');
    }

    // Implement your tax calculation logic here
    // You can calculate tax based on more complex rules
    // Update the status as needed

    // For now, let's assume a fixed tax amount
    const taxAmount = 5000;

    // Return the calculated tax amount
    return taxAmount;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taxAmount = calculateTaxDue();

    // Send the tax data to the backend for storage
    // You will need to implement this part to connect to your backend

    console.log('Tax Data:', formData);
    console.log('Tax Amount:', taxAmount);
    console.log('Status:', status);

    // Clear the form after submission (optional)
    setFormData({
      panCard: '',
      incomeFromSalary: '',
      incomeFromShareMarket: '',
    });
  };

  return (
    <div className="create-tax-due-container">
      <h2>Create Tax Due</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="panCard">PAN Card:</label>
          <input
            type="text"
            id="panCard"
            name="panCard"
            value={formData.panCard}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="incomeFromSalary">Income From Salary:</label>
          <input
            type="number"
            id="incomeFromSalary"
            name="incomeFromSalary"
            value={formData.incomeFromSalary}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="incomeFromShareMarket">Income From Share Market:</label>
          <input
            type="number"
            id="incomeFromShareMarket"
            name="incomeFromShareMarket"
            value={formData.incomeFromShareMarket}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Calculate Tax Due
        </button>
      </form>
      <div className="status">
        <strong>Status:</strong> {status}
      </div>
    </div>
  );
}

export default CreateTaxDue;
