import { Component } from 'react';

import styles from './Main.module.scss';

import { CardBlock } from '../Card';
import { Character, Info } from '../../types/interfaces';
import teleportTop from '../../../public/teleportTop.png';
import teleportBottom from '../../../public/teleportBottom.png';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

class Main extends Component<Props> {
  render() {
    return (
      <div className={styles.wrapper}>
        <img className={styles.teleportTop} src={teleportTop} alt="teleportTop" />
        <div className={styles.wrapCard}>
          <CardBlock rickAndMortyData={this.props.rickAndMortyData} />
        </div>
        <img className={styles.teleportBottom} src={teleportBottom} alt="teleportBottom" />
      </div>
    );
  }
}

export default Main;
