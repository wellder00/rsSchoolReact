import React, { useState, useEffect } from 'react';

import styles from './CardBlock.module.scss';

import { Loader } from '../Loader';
import { NotFound } from '../NotFound';

import { Character, Info } from '../../types/interfaces';
import { Link } from 'react-router-dom';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

const CardBlock: React.FC<Props> = ({ rickAndMortyData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [rickAndMortyData]);

  const renderCharacterCard = (data: Character) => (
    <Link key={data.id} to={'about_character/:characterId'}>
      <div className={styles.card}>
        <div className={styles.characterInfo}>
          <h2 className={styles.title}>{data.name}</h2>
          <div>Status: {data.status}</div>
          <div>Species: {data.species}</div>
          <div>Gender: {data.gender}</div>
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
