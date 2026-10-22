import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Production-style SaaS dashboard"
      description="Manage a fictional workspace, seats, and sample invoices locally."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
