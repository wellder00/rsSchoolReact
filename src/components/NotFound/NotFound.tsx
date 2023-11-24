import styles from './NotFound.module.scss';
import notFound from '../../../public/notFound.png';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.image} src={notFound} alt="Not Found" width={300} height={100} />
      <h2>Not Found</h2>
    </div>
  );
};

export default NotFound;
