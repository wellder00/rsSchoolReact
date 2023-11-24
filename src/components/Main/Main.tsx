import React from 'react';
import styles from './Main.module.scss';
import { CardBlock } from '../CardBlock';
import { Pagination } from '../../components/Pagination';

const Main: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Pagination />
      <div className={styles.infoAndCardWrap}>
        <div className={styles.wrapCard}>
          <CardBlock />
        </div>
      </div>
    </div>
  );
};

export default Main;
