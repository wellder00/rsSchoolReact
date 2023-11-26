import Link from 'next/link';
import styles from './ErrorPage.module.scss';
import React from 'react';

const ErrorPage = () => {
  return (
    <div className={styles.errorWrap}>
      <h1 className={styles.title}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Error</p>
      <Link href={'/'}> Back to home </Link>
    </div>
  );
};

export default ErrorPage;
