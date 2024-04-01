import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductStore from './store/ProductStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Context = createContext(null);

root.render(
  <React.StrictMode>
    <Context.Provider value={{products: new ProductStore()}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);