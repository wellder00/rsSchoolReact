import React, { Component, ReactNode } from 'react';

import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  reloadPage = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Error Message: {this.state.error?.message}</h3>
          <div className={styles.wrapperPoem}>
            <p>In the realm of code, where errors roam,</p>
            <p>A guardian stands, it&apos;s ErrorBoundary&apos;s home.</p>
            <p>With watchful eyes, it scans the land,</p>
            <p>To catch the bugs, with a helping hand.</p>
          </div>

          <div className={styles.wrapperPoem}>
            <p>When errors arise, like a shadow they loom,</p>
            <p>ErrorBoundary steps in, dispelling the gloom.</p>
            <p>With grace and poise, it takes the lead,</p>
            <p>Catching those bugs, it&apos;s just what we need.</p>
          </div>
          <div className={styles.wrapperPoem}>
            <p>In verses of JavaScript, it scripts the play,</p>
            <p>Ensuring our apps run smoothly each day.</p>
            <p>So fear not the bugs, let ErrorBoundary be,</p>
            <p>The hero of code, setting errors free.</p>
          </div>
          <div className={styles.wrapperPoem}>
            <p>In React&apos;s embrace, it finds its place,</p>
            <p>A protector of code, with style and grace.</p>
            <p>When errors strike, it&apos;s ErrorBoundary&apos;s song,</p>
            <p>To keep our apps robust and strong.</p>
          </div>

          <button className={styles.button} onClick={this.reloadPage}>
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
