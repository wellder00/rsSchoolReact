import styles from './Pagination.module.scss';
import arrow from '../../assets/images/arrow.png';
import { useAppSelector } from '../../Hooks/reduxHooks';

type Props = {
  onChangePage: (value: boolean) => void;
};

const Pagination: React.FC<Props> = ({ onChangePage }) => {
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
        onClick={() => onChangePage(false)}
        className={prevButtonClass}
      >
        <img className={styles.leftArrow} src={arrow} alt="leftArrow" />
      </button>

      <span className={styles.currentPage}>{currentPage}</span>

      <button
        disabled={isNextButtonDisabled}
        onClick={() => onChangePage(true)}
        className={nextButtonClass}
      >
        <img className={styles.rightArrow} src={arrow} alt="rightArrow" />
      </button>
    </div>
  );
};

export default Pagination;
