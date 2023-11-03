import styles from './Pagination.module.scss';
import { Button } from '@components/Button';

import arrow from '../../assets/images/arrow.png';

const Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <Button className={'arrow'}>
        <img className={styles.leftArrow} src={arrow} alt="arrowLeft" />
      </Button>
      <span className={styles.currentPage}>1</span>
      <Button className={'arrow'}>
        <img className={styles.rightArrow} src={arrow} alt="arrowLeft" />
      </Button>
    </div>
  );
};

export default Pagination;
