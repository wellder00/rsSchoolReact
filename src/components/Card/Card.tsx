import Image from 'next/image';
import React from 'react';
import notFound from '../../../public/notFound.png';
import { Pokemons } from '../../types/interfaces';
import styles from './Card.module.scss';
import { useRouter } from 'next/router';

type Props = {
  data: Pokemons;
  pathname?: string;
};

const Card: React.FC<Props> = ({ data, pathname }) => {
  const router = useRouter();

  const inputValue = router.query.pokemon || '';
  const offset = router.query.offset || 0;
  const currentPage = router.query.currentPage || 1;
  const itemsAmount = router.query.limit || 1;

  const getInfoPokemon = (id: number) => {
    const basePath = router.pathname.startsWith('/') ? '' : '/';

    if (router.pathname.split('/')[1] === 'info') {
      router.push(
        `/?pokemon=${inputValue}&page=${currentPage}&limit=${itemsAmount}&offset=${offset}`
      );
      return;
    }

    if (inputValue) {
      router.push(
        `${basePath}/info/${id}/?pokemon=${inputValue}&page=${currentPage}&limit=${itemsAmount}&offset=${offset}`
      );
    } else {
      router.push(
        `${basePath}/info/${id}/?page=${currentPage}&limit=${itemsAmount}&offset=${offset}`
      );
    }
  };

  return (
    <div className={styles.link} onClick={() => getInfoPokemon(data?.id)}>
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
    </div>
  );
};

export default Card;
