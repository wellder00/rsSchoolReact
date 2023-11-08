import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingIcon} data-testid="loading-icon">
        Loading...
      </div>
      <div className={styles.loader}>
        <div className={styles.loaderCircle}></div>
      </div>
    </div>
  );
};

export default Loader;
