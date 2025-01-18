import React, { useState, useEffect } from 'react';
import "./Home.css";


const Home = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Get token from local storage
    const token = localStorage.getItem('token');
    // Call backend API to get invoices
    fetch('/api/invoices', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set invoices state
        setInvoices(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='invoice-list'>
      <h1>Invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            Invoice Number: {invoice.invoiceNumber} <br />
            Client Name: {invoice.clientName} <br />
            Date: {invoice.date} <br />
            Amount: {invoice.amount} <br />
            Status: {invoice.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;