import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API to signup
    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response
        console.log(data);
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='signup'>
    
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label className='label'>Name:</label>
        <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label className='label'>Email:</label>
        <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label className='label'>Password:</label>
        <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;