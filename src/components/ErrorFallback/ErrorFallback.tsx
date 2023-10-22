import React from 'react';
import { FallbackProps } from 'react-error-boundary';

class ErrorFallback extends React.Component<FallbackProps> {
  render() {
    const { error, resetErrorBoundary } = this.props;
    return (
      <div role="alert">
        <p>Something went wrong</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }
}

export default ErrorFallback;
