import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './/css/index.css';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


