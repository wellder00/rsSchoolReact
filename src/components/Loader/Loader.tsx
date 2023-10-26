import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingIcon}>Loading...</div>
      <div className={styles.loader}>
        <div className={styles.loaderCircle}></div>
      </div>
    </div>
  );
};

export default Loader;
