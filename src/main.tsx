import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { App } from './components/app/app';
import { AppContextProvider } from './context/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
