import { ErrorBoundary } from 'react-error-boundary';

import './index.scss';
import { Home } from './views/Home';
import { ErrorFallback } from './components/ErrorFallback';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home />;
    </ErrorBoundary>
  );
}

export default App;
