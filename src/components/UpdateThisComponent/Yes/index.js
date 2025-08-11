import React, { useState } from 'react';

const YesForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    choice: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  const formStyle = {
    width: '80%',
    padding: '40px 10%',
    boxSizing: 'border-box',
    margin: '0 auto'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="name" style={labelStyle}>Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label htmlFor="phone" style={labelStyle}>Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label htmlFor="email" style={labelStyle}>Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label htmlFor="choice" style={labelStyle}>What have you said yes today?</label>
      <select
        name="choice"
        id="choice"
        value={formData.choice}
        onChange={handleChange}
        style={inputStyle}
        required
      >
        <option value="">-- Select an option --</option>
        <option value="talk">Today I said Yes to commit my life to following Jesus for the first time</option>
        <option value="skip">Today I said YES to recomming my life to Jesus</option>
        <option value="cook">I am not sure where I stand with God and would like to talk to someon about my spiritual journey</option>
      </select>

      <label htmlFor="comment" style={labelStyle}>Comment</label>
      <textarea
        name="comment"
        id="comment"
        placeholder="Write your comment here"
        value={formData.comment}
        onChange={handleChange}
        rows="4"
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          ...inputStyle,
          backgroundColor: '#007BFF',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default YesForm;
