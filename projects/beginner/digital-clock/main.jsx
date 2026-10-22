import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Digital clock"
      description="Display real browser time with timezone and clock-format controls."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
