import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.errorWrap}>
      <h1 className={styles.title}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Error</p>
    </div>
  );
};

export default ErrorPage;
