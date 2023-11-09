import { Link, useSearchParams } from 'react-router-dom';
import notFound from '../../assets/images/notFound.png';
import React from 'react';
import { Pokemon } from '../../types/interfaces';

import styles from './Card.module.scss';

type Props = {
  data: Pokemon | null | undefined;
  pathname: string;
};

const Card: React.FC<Props> = ({ data, pathname }) => {
  const [searchParams] = useSearchParams();
  const initialValueLimit = searchParams.get('limit');
  const initialValueOffset = searchParams.get('offset');
  const initialValuePage = searchParams.get('page');
  const queryParams = `about_character/${data?.id}?limit=${initialValueLimit}&offset=${initialValueOffset}&page=${initialValuePage}`;
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
