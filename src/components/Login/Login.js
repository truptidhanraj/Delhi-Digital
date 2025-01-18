import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API to login
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Get token from response
        const token = data.token;
        // Store token in local storage
        localStorage.setItem('token', token);
        // Redirect to home page
        window.location.href = '/';
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className='label'>Email:</label>
        <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label className='label'>Password:</label>
        <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;