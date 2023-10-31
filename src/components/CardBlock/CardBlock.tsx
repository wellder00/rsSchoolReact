import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import styles from './CardBlock.module.scss';

import { Loader } from '../Loader';
import { NotFound } from '../NotFound';

import { Character, Info } from '../../types/interfaces';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

const CardBlock: React.FC<Props> = ({ rickAndMortyData }) => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(false);
  }, [rickAndMortyData]);

  const renderCharacterCard = (data: Character) => (
    <Link className={styles.link} key={data.id} to={`about_character/${data.id}`}>
      <div className={`${pathname === '/' ? styles.card : styles.miniCard}`}>
        <div className={styles.characterInfo}>
          <h2 className={`${pathname === '/' ? styles.title : styles.miniTitle}`}>{data.name}</h2>
          <div className={styles.characteristic}>Status: {data.status}</div>
          <div className={styles.characteristic}>Species: {data.species}</div>
          <div className={styles.characteristic}>Gender: {data.gender}</div>
        </div>
        <img className={styles.characterImage} src={data.image} alt={data.name} />
      </div>
    </Link>
  );

  if (loading) {
    return <Loader />;
  }

  if (!rickAndMortyData) {
    return <NotFound />;
  }

  return (
    <div className={styles.wrapper}>
      {rickAndMortyData.results?.map((data) => renderCharacterCard(data))}
    </div>
  );
};

export default CardBlock;
