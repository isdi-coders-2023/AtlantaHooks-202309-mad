import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import { App } from './components/app/app';
import { AppContextProvider } from './context/provider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
