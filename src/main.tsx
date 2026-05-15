import React from 'react';
import ReactDOM from 'react-dom/client';
import '@telekom/scale-components/dist/scale-components/scale-components.css';
import { defineCustomElements } from '@telekom/scale-components/loader';
import './styles/globals.css';
import './styles/telekom-dark.css';
import './styles/layout.css';
import './styles/charts.css';
import App from './App';

void defineCustomElements();
document.documentElement.setAttribute('data-mode', 'dark');
document.body.setAttribute('data-mode', 'dark');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
