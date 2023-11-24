import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import notFound from '../../../public/notFound.png';
import { Pokemons } from '../../types/interfaces';
import styles from './Card.module.scss';

type Props = {
  data: Pokemons;
  pathname?: string;
};

const Card: React.FC<Props> = ({ data, pathname }) => {
  return (
    <Link className={styles.link} href={`/info/${data?.id}`}>
      <div className={`${pathname === '/' ? styles.card : styles.miniCard}`}>
        <div className={styles.characterInfo}>
          <h2 className={`${pathname === '/' ? styles.title : styles.miniTitle}`}>{data?.name}</h2>
          <div className={styles.characteristic}>Weight: {data?.weight}</div>
          <div className={styles.characteristic}>Height: {data?.height}</div>
        </div>
        <Image
          width={100}
          height={100}
          className={styles.characterImage}
          src={data?.sprites || notFound}
          alt={'data?.name'}
        />
      </div>
    </Link>
  );
};

export default Card;
