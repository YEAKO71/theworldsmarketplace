import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // optional, but your App.js expects it
import TheWorldsMarketplace from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TheWorldsMarketplace />
  </React.StrictMode>
);
