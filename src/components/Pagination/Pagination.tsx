import styles from './Pagination.module.scss';
import arrow from '../../../public/assets/images/arrow.png';
import { useAppSelector } from '@/lib/redux/hooks/reduxHooks';
import Image from 'next/image';

const Pagination = () => {
  const currentPage = useAppSelector((state) => state.itemsAmount.currentPage);
  const lastPage = useAppSelector((state) => state.itemsAmount.lastPage);

  const isPrevButtonDisabled = +currentPage <= 1;

  const isNextButtonDisabled = +currentPage === +lastPage;
  const prevButtonClass = isPrevButtonDisabled ? styles.disabled : styles.arrow;
  const nextButtonClass = isNextButtonDisabled ? styles.disabled : styles.arrow;

  return (
    <div className={styles.wrapper}>
      <button
        disabled={isPrevButtonDisabled}
        // onClick={() => onChangePage(false)}
        className={prevButtonClass}
      >
        <Image width={50} height={50} className={styles.leftArrow} src={arrow} alt="leftArrow" />
      </button>

      <span className={styles.currentPage}>{currentPage}</span>

      <button
        disabled={isNextButtonDisabled}
        // onClick={() => onChangePage(true)}
        className={nextButtonClass}
      >
        <Image width={50} height={50} className={styles.rightArrow} src={arrow} alt="rightArrow" />
      </button>
    </div>
  );
};

export default Pagination;
