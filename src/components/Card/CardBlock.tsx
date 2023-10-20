import { Component } from 'react';

import styles from './CardBlock.module.scss';

import { Character, Info } from '../../types/interfaces';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

class CardBlock extends Component<Props> {
  render() {
    const { rickAndMortyData } = this.props;

    if (rickAndMortyData && rickAndMortyData.results) {
      return (
        <div className={styles.wrapper}>
          {rickAndMortyData.results.map((data) => (
            <div className={styles.wrapCard} key={data.id}>
              <h4>Name: {data.name}</h4>
              <p>Status: {data.status}</p>
              <p>Species: {data.species}</p>
              <p>Gender: {data.gender}</p>
              <img src={data.image} alt={data.name}></img>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>NOT FOUND</div>;
    }
  }
}

export default CardBlock;
