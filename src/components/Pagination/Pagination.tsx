import styles from './Pagination.module.scss';
import arrow from '../../assets/images/arrow.png';

type Props = {
  onChangePrevPage: () => void;
  onChangeNextPage: () => void;
  currentPage: number;
};

const Pagination: React.FC<Props> = ({ onChangePrevPage, onChangeNextPage, currentPage }) => {
  const buttonClass = currentPage <= 1 ? `${styles.disabled}` : styles.arrow;
  return (
    <div className={styles.wrapper}>
      <button disabled={currentPage <= 1} onClick={onChangePrevPage} className={buttonClass}>
        <img className={styles.leftArrow} src={arrow} alt="arrowLeft" />
      </button>
      <span className={styles.currentPage}>{currentPage}</span>
      <button onClick={onChangeNextPage} className={styles.arrow}>
        <img className={styles.rightArrow} src={arrow} alt="arrowLeft" />
      </button>
    </div>
  );
};

export default Pagination;
