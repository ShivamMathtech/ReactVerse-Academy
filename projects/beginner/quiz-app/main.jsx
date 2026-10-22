import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Quiz application"
      description="Practice state and JavaScript with immediate explanations."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
