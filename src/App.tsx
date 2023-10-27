import { Component } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.scss';
import { Home } from './views/Home';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    );
  }
}

export default App;
