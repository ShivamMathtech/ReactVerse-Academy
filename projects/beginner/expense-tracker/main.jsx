import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Expense tracker"
      description="Track expenses in integer cents and inspect category totals."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
