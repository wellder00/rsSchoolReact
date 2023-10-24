import { ErrorBoundary } from './components/ErrorBoundary';
import './index.scss';
import { Home } from './views/Home';

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
