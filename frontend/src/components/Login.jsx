import React from 'react'

export default function Login() {
  return (
    <div className="login">
      <div className="login-logo">
        <img src="/images" alt="Logo" />
      </div>
      <h1 className="login-title">El Palacio del Vandelero</h1>
      <h2 className="login-subtitle">Ingreso de Empleados</h2>
      <div className="form-group">
        <input type="text" placeholder="Ingresar el usuario" required />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Ingresar la contraseña" required />
      </div>
      <div className="form-group">
        <button className="login-button" type="submit">Ingresar</button>
      </div>
    </div>
  )
}
