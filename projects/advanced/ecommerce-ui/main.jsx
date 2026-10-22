import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="E-commerce frontend"
      description="Browse products and complete a validated simulated checkout."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
