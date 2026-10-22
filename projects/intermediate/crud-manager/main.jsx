import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="CRUD management interface"
      description="Maintain a small local inventory with validated create and edit workflows."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
