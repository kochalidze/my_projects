import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // გამოიყენე იგივე სტილი რაც Register-ს

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      u => u.username === form.username && u.password === form.password
    );

    if (user) {
      alert('Successfully Autorized');
      navigate('/center'); 
    } else {
      alert('Username or Password is wrong');
    }
  };

  return (
    <div className='flex w-screen h-screen absolute items-center cursor-not-allowed glass-container'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Autorisatoion</h2>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}