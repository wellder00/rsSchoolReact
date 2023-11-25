import { useAppSelector } from '@/lib/redux/hooks/reduxHooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import arrow from '../../../public/assets/images/arrow.png';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const router = useRouter();

  const lastPage = useAppSelector((state) => state.itemsAmount.lastPage);
  const offset = parseInt(router.query.offset as string) || 0;
  const currentPage = parseInt(router.query.page as string) || 1;
  const itemsAmount = parseInt(router.query.limit as string) || 1;

  const isPrevButtonDisabled = currentPage <= 1;
  const isNextButtonDisabled = currentPage === +lastPage;
  const prevButtonClass = isPrevButtonDisabled ? styles.disabled : styles.arrow;
  const nextButtonClass = isNextButtonDisabled ? styles.disabled : styles.arrow;

  const onChangePage = (isNext: boolean) => {
    const offsetChange = isNext ? +itemsAmount : -+itemsAmount;
    const newOffset = offset + offsetChange;
    const newPage = Math.floor(newOffset / +itemsAmount) + 1;
    router.push(`/?page=${newPage}&limit=${itemsAmount}&offset=${newOffset}`);
  };

  return (
    <div className={styles.wrapper}>
      <button
        disabled={isPrevButtonDisabled}
        onClick={() => onChangePage(false)}
        className={prevButtonClass}
      >
        <Image width={50} height={50} className={styles.leftArrow} src={arrow} alt="leftArrow" />
      </button>

      <span className={styles.currentPage}>{currentPage}</span>

      <button
        disabled={isNextButtonDisabled}
        onClick={() => onChangePage(true)}
        className={nextButtonClass}
      >
        <Image width={50} height={50} className={styles.rightArrow} src={arrow} alt="rightArrow" />
      </button>
    </div>
  );
};

export default Pagination;
