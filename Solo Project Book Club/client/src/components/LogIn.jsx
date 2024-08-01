import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate('/add-new-book');
    } catch (err) {
      setErrors({ msg: err.response.data.msg });
    }
  };

  return (
    <div className="login-container container">
      <div className="login-content">
        <div className="card mt-5">
          <div className="card-header text-center">
            <h2>Book Community</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.msg && <div className="alert alert-danger" role="alert">{errors.msg}</div>}
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
