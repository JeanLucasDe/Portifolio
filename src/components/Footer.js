import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <p>Entre em contato:</p>
      <div className="contact_options">
        <a href="mailto:jean__lucas2013@hotmail.com" className="contact_link">Email</a>
        <a href="https://wa.me/5571981298548" target="_blank" rel="noopener noreferrer" className="contact_link">WhatsApp</a>
        <a href="https://github.com/JeanLucasDe" target="_blank" rel="noopener noreferrer" className="contact_link">GitHub</a>
      </div>
      <p>© 2025 Jean Lucas. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;