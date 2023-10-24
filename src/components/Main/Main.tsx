import { Component } from 'react';

import styles from './Main.module.scss';

import { CardBlock } from '../Card';
import { Character, Info } from '../../types/interfaces';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

class Main extends Component<Props> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapCard}>
          <CardBlock rickAndMortyData={this.props.rickAndMortyData} />
        </div>
      </div>
    );
  }
}

export default Main;
