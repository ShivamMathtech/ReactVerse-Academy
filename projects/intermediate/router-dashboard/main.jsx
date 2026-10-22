import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="React Router dashboard"
      description="Navigate nested dashboard views with shareable search parameters."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
