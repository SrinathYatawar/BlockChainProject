import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Footer from "./components/Footer"
import { TransactionProvider } from './Context/TransactionsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionProvider>
);