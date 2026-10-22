import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Project management board"
      description="Manage tasks through a keyboard-friendly three-column workflow."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
