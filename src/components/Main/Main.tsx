import React from 'react';
import styles from './Main.module.scss';
import { CardBlock } from '../CardBlock';
import { Pagination } from '../../components/Pagination';
import { useAppSelector } from '@/lib/redux/hooks/reduxHooks';

const Main: React.FC = () => {
  const count = useAppSelector((state) => state.itemsAmount.count);
  return (
    <div className={styles.wrapper}>
      {+count !== 0 && <Pagination />}
      <div className={styles.infoAndCardWrap}>
        <div className={styles.wrapCard}>
          <CardBlock />
        </div>
      </div>
    </div>
  );
};

export default Main;
