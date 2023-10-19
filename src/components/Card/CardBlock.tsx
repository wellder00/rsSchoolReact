import { Component } from 'react';

import styles from './CardBlock.module.scss';

import { Character, Episode, Info, Location } from '../../types/interfaces';

type Props = {
  rickAndMortyData: Info<Character | Location | Episode> | null;
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
              {'status' in data && <p>Status: {data.status}</p>}
              {'species' in data && <p>Species: {data.species}</p>}
              {'gender' in data && <p>Gender: {data.gender}</p>}
              {'dimension' in data && <p>Dimension: {data.dimension}</p>}
              {'air_date' in data && <p>Air date: {data.air_date}</p>}
              {'episode' in data && typeof data.episode === 'string' && (
                <p>Episode: {data.episode}</p>
              )}
              {'image' in data && <img src={data.image} alt={data.name}></img>}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default CardBlock;
