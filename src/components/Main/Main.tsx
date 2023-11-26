import React from 'react';
import styles from './Main.module.scss';
import { CardBlock } from '../CardBlock';
import { Pagination } from '../../components/Pagination';
import { useAppSelector } from '@/lib/redux/hooks/reduxHooks';
import { NotFound } from '../NotFound';

const Main: React.FC = () => {
  const count = useAppSelector((state) => state.itemsAmount.count);
  const pokemons = useAppSelector((state) => state.savePokemons.pokemons);
  return (
    <div className={styles.wrapper}>
      {pokemons.length === 0 && <NotFound />}
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
