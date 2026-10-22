import AppRoutes from './router';
import { ProgressProvider } from '../hooks/useProgress';
import ErrorBoundary from '../components/ui/ErrorBoundary';
export default function App() {
  return (
    <ErrorBoundary>
      <ProgressProvider>
        <AppRoutes />
      </ProgressProvider>
    </ErrorBoundary>
  );
}
