import styles from './Home.module.scss';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

import React from 'react';

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Main />
    </div>
  );
};

export default Home;
