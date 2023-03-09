import React, { useState } from 'react';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout Form</h2>
      <div className="form-group">
        
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={city} onChange={(event) => setCity(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={state} onChange={(event) => setState(event.target.value)} required />
      </div>
      <button className='form-btn'>Submit</button>
    </form>
  );
}

export default Checkout;
