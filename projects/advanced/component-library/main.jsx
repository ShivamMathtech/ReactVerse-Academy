import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Accessible component library"
      description="Explore keyboard-operated tabs, a native modal, and disclosure patterns."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
