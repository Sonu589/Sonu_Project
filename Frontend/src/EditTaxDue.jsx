import React, { useState, useEffect } from 'react';
import './styles/EditTaxDue.css'; // Import your CSS file
import axios from 'axios';

function EditTaxDue({ taxDueId }) {
  const [formData, setFormData] = useState({
    panCard: '',
    incomeFromSalary: '',
    incomeFromShareMarket: '',
    // Add more tax-related fields as needed
  });

  const [originalData, setOriginalData] = useState({});
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    // Fetch the tax due data from the server based on taxDueId
    axios
      .get(`http://localhost:8081/taxDue/${taxDueId}`)
      .then((response) => {
        const taxDueData = response.data;
        setFormData({ ...taxDueData });
        setOriginalData({ ...taxDueData });
      })
      .catch((error) => {
        console.error('Error fetching tax due data:', error);
      });
  }, [taxDueId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleCancelClick = () => {
    setIsEditable(false);
    setFormData({ ...originalData });
  };

  const handleSaveClick = () => {
    // Perform validation and send updated tax data to the server
    axios
      .put(`http://localhost:8081/taxDue/${taxDueId}`, formData)
      .then((response) => {
        console.log('Tax due updated successfully:', response.data);
        setIsEditable(false);
        setOriginalData({ ...formData });
      })
      .catch((error) => {
        console.error('Error updating tax due:', error);
      });
  };

  return (
    <div className="edit-tax-due-container">
      <h2>Edit Tax Due</h2>
      <form>
        <div className="form-group">
          <label htmlFor="panCard">PAN Card:</label>
          <input
            type="text"
            id="panCard"
            name="panCard"
            value={formData.panCard}
            onChange={handleInputChange}
            readOnly={!isEditable}
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
            readOnly={!isEditable}
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
            readOnly={!isEditable}
          />
        </div>
        {/* Add more tax-related fields here */}
      </form>
      {isEditable ? (
        <div className="edit-buttons">
          <button className="btn save-btn" onClick={handleSaveClick}>
            Save
          </button>
          <button className="btn cancel-btn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="btn edit-btn" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
}

export default EditTaxDue;
