import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DemoLayout } from '../../shared/ui.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoLayout
      title="Searchable student directory"
      description="Search, filter, and sort a local student dataset."
    >
      <App />
    </DemoLayout>
  </StrictMode>,
);
