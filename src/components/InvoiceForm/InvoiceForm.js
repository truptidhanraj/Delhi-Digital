import React, { useState } from 'react';
import "./InvoiceForm.css";


const InvoiceForm = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get token from local storage
    const token = localStorage.getItem('token');
    // Call backend API to create invoice
    fetch('/api/invoices', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        invoiceNumber,
        clientName,
        date,
        amount,
        status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response
        console.log(data);
        // Clear form fields
        setInvoiceNumber('');
        setClientName('');
        setDate('');
        setAmount('');
        setStatus('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='invoice-form'>
      <h1>Create Invoice</h1>
      <form onSubmit={handleSubmit}>
        <label className='label'>Invoice Number:</label>
        <input className='input'
          type="text"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
        <br />
        <label className='label'>Client Name:</label>
        <input className='input'
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <br />
        <label className='label'>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        <label className='label'>Amount:</label>
        <input className='input'
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <label className='label'>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
          <option value="Pending">Pending</option>
        </select>
        <br />
        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
};

export default InvoiceForm;