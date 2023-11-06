import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import './styles.css';
import { AppContextProvider } from './context/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
