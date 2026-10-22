import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Admin analytics dashboard"
      description="Filter sample learning activity, calculate metrics, and export the visible data."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
