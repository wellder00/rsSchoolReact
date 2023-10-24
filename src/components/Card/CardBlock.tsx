import React, { Component } from 'react';
import styles from './CardBlock.module.scss';
import { Character, Info } from '../../types/interfaces';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

class CardBlock extends Component<Props> {
  renderCharacterCard(data: Character) {
    return (
      <div className={styles.card} key={data.id}>
        <div className={styles.characterInfo}>
          <h4 className={styles.title}>{data.name}</h4>
          <div>Status: {data.status}</div>
          <div>Species: {data.species}</div>
          <div>Gender: {data.gender}</div>
        </div>
        <img className={styles.characterImage} src={data.image} alt={data.name} />
      </div>
    );
  }

  render() {
    const { rickAndMortyData } = this.props;

    if (!rickAndMortyData) {
      return <div>NOT FOUND</div>;
    }

    return (
      <div className={styles.wrapper}>
        {rickAndMortyData.results?.map((data) => this.renderCharacterCard(data))}
      </div>
    );
  }
}

export default CardBlock;
