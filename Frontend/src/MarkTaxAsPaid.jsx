import React, { useState } from 'react';
import './styles/MarkTaxAsPaid.css'; // Import your CSS file

function MarkTaxAsPaid({ taxDueId }) {
  const [isPaid, setIsPaid] = useState(false);

  const handleMarkAsPaid = () => {
    // Simulate marking tax as paid
    setIsPaid(true);
  };

  return (
    <div className="mark-tax-paid-container">
      <h2>Mark Tax as Paid</h2>
      <button
        className={`btn mark-paid-btn ${isPaid ? 'disabled' : ''}`}
        onClick={handleMarkAsPaid}
        disabled={isPaid}
      >
        {isPaid ? 'Paid' : 'Mark as Paid'}
      </button>
    </div>
  );
}

export default MarkTaxAsPaid;
