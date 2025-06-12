import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyles';
// Importante: Usar HashRouter para compatibilidade com GitHub Pages
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Use HashRouter aqui */}
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>
);