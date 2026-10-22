import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Real-time UI simulation"
      description="Inspect a local event stream with pause, filtering, and cleanup."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
