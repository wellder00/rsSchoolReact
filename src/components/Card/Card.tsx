import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notFound.png';
import { Pokemon } from '../../types/interfaces';

import { useAppSelector } from '../../Hooks/reduxHooks';
import styles from './Card.module.scss';

type Props = {
  data: Pokemon | null | undefined;
  pathname?: string;
};

const Card: React.FC<Props> = ({ data, pathname }) => {
  const currentPage = useAppSelector((state) => state.itemsAmount.currentPage);

  const queryParams = `about_character/${data?.id}/?page=${currentPage}`;
  return (
    <Link className={styles.link} to={queryParams}>
      <div className={`${pathname === '/' ? styles.card : styles.miniCard}`}>
        <div className={styles.characterInfo}>
          <h2 className={`${pathname === '/' ? styles.title : styles.miniTitle}`}>{data?.name}</h2>
          <div className={styles.characteristic}>Weight: {data?.weight}</div>
          <div className={styles.characteristic}>Species: {data?.species}</div>
        </div>
        <img className={styles.characterImage} src={data?.sprites || notFound} alt={data?.name} />
      </div>
    </Link>
  );
};

export default Card;
