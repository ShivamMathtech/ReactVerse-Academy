import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Weather dashboard"
      description="Explore deterministic weather fixtures with realistic async states."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
