import { Component } from 'react';

import styles from './CardBlock.module.scss';

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

  render() {
    const { rickAndMortyData } = this.props;
    const { loading } = this.state;

    if (loading) {
      return (
        <div className={styles.loading}>
          <div className={styles.loadingIcon}>Loading...</div>
        </div>
      );
    }

    if (rickAndMortyData && rickAndMortyData.results) {
      return (
        <div className={styles.wrapper}>
          {rickAndMortyData.results.map((data) => (
            <div className={styles.wrapCard} key={data.id}>
              <div className={styles.infoCharacter}>
                <h4 className={styles.title}>{data.name}</h4>
                <div>Status: {data.status}</div>
                <div>Species: {data.species}</div>
                <div>Gender: {data.gender}</div>
              </div>
              <img
                width="300"
                height="300"
                className={styles.img}
                src={data.image}
                alt={data.name}
              ></img>
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
