import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import { Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Password are not same');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      username: form.username,
      email: form.email,
      password: form.password
    });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Succesfully registered');
    setForm({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    navigate('/login');
  };

  return (
    <div className='flex w-screen h-screen absolute items-center cursor-not-allowed glass-container'>
      <form className="form-container cursor-default" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='mb-2'>Register</button>
        <Link to={'/login'} className='text-[#99a0b1] hover:underline'>You Have an Acount?</Link>
      </form>
    </div>
  );
}