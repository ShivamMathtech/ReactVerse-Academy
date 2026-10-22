import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { DemoLayout } from '../../projects/shared/ui.jsx';
createRoot(document.getElementById('root')).render(
  <DemoLayout title="props-demo" description="Pass data and compose children">
    <App />
  </DemoLayout>,
);
