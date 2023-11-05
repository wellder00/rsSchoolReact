import styles from './NotFound.module.scss';
import notFound from '../../assets/images/notFound.png';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={notFound} alt="Not Found" />
      <h2>Not Found</h2>
    </div>
  );
};

export default NotFound;
