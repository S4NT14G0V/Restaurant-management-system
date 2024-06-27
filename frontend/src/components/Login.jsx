import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

export default function LoginComp({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === 'user' && password === '123') {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img src="/images/logo.svg" alt="El Palacio del Vandelero" />
      </div>
      <div className="login-content">
        <h1 className='login-title'>El Palacio del Vandelero</h1>
        <h2 className='login-subtitle'>Ingreso de Empleados</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <p className='input-text'>Usuario</p>
            <input
              type="text"
              placeholder="Ingresar el usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <p className='input-text'>Contraseña</p>
            <input
              type="password"
              placeholder="Ingresar la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className='login-button'>Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}