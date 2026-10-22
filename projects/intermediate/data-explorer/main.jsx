import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Paginated data explorer"
      description="Explore mock async data with search, pagination, and explicit failure controls."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
