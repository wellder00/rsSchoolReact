import React, { useState, useEffect } from 'react';

import styles from './CardBlock.module.scss';

import { Loader } from '../Loader';
import { NotFound } from '../NotFound';

import { Character, Info } from '../../types/interfaces';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

const CardBlock: React.FC<Props> = ({ rickAndMortyData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [rickAndMortyData]);

  const renderCharacterCard = (data: Character) => (
    <div className={styles.card} key={data.id}>
      <div className={styles.characterInfo}>
        <h2 className={styles.title}>{data.name}</h2>
        <div>Status: {data.status}</div>
        <div>Species: {data.species}</div>
        <div>Gender: {data.gender}</div>
      </div>
      <img className={styles.characterImage} src={data.image} alt={data.name} />
    </div>
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
