import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if (document.title !== 'Jean Lucas - Portfolio') {
  document.title = 'Jean Lucas - Portfolio';
}

const link = document.createElement('link');
link.rel = 'icon';
link.href = 'https://example.com/icon.png'; // Substituir por URL do ícone desejado
if (!document.querySelector("link[rel='icon']")) {
  document.head.appendChild(link);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
