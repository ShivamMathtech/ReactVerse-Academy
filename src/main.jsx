import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router';
import App from './App';
import './styles/global.css';
const Router = import.meta.env.VITE_ROUTER_MODE === 'browser' ? BrowserRouter : HashRouter;
const routerProps =
  import.meta.env.VITE_ROUTER_MODE === 'browser'
    ? { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' }
    : {};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router {...routerProps}>
      <App />
    </Router>
  </StrictMode>,
);
