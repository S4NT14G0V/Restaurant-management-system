// Footer.js
import React from 'react';
import '../css/footer.css';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="global-footer" ref={ref}>
      <h2>Made by: Names</h2>
    </footer>
  );
});

export default Footer;
