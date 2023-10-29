import { Component } from 'react';

import styles from './CardBlock.module.scss';

import { Loader } from '../Loader';
import { NotFound } from '../NotFound';

import { Character, Info } from '../../types/interfaces';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

class CardBlock extends Component<Props> {
  state = {
    loading: true,
  };
  componentDidUpdate(prevProps: Props) {
    if (prevProps.rickAndMortyData !== this.props.rickAndMortyData) {
      this.setState({ loading: false });
    }
  }

  renderCharacterCard(data: Character) {
    return (
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
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    const { rickAndMortyData } = this.props;

    if (!rickAndMortyData) {
      return <NotFound />;
    }

    return (
      <div className={styles.wrapper}>
        {rickAndMortyData.results?.map((data) => this.renderCharacterCard(data))}
      </div>
    );
  }
}

export default CardBlock;
