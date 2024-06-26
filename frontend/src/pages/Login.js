import "../css/login.css";
import React from 'react';
import LoginComp from '../components/Login';

function Login({ setIsAuthenticated }) {
  return (
    <div className="container-login">
      <LoginComp setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default Login;