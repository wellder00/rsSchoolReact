import styles from './Main.module.scss';

import { CardBlock } from '../Card';

import { Character, Info } from '../../types/interfaces';
import teleportTop from '../../assets/images/teleportTop.png';
import teleportBottom from '../../assets/images/teleportBottom.png';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

const Main: React.FC<Props> = ({ rickAndMortyData }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.teleportTop} src={teleportTop} alt="teleportTop" />
      <div className={styles.wrapCard}>
        <CardBlock rickAndMortyData={rickAndMortyData} />
      </div>
      <img className={styles.teleportBottom} src={teleportBottom} alt="teleportBottom" />
    </div>
  );
};

export default Main;
