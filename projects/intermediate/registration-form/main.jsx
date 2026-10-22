import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Registration system"
      description="Complete a two-step locally simulated enrollment with accessible validation."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
