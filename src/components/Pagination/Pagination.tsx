import React from 'react';
import styles from './Pagination.module.scss';
import arrow from '../../assets/images/arrow.png';
import { Pages } from 'types/interfaces';

type Props = {
  onChangePage: (value: boolean) => void;
  pages: Pages;
};

const Pagination: React.FC<Props> = ({ onChangePage, pages }) => {
  const isPrevButtonDisabled = pages.currentPage <= 1;
  const isNextButtonDisabled = pages.currentPage === pages.lastPage;
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

      <span className={styles.currentPage}>{pages.currentPage}</span>

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
