import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Learning management interface"
      description="Enroll in sample courses and track individual lesson completion."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
