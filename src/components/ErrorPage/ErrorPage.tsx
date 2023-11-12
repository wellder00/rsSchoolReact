import { useRouteError } from 'react-router-dom';

import styles from './ErrorPage.module.scss';

interface RouteError {
  statusText: string;
  message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className={styles.errorWrap}>
      <h1 className={styles.title}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
