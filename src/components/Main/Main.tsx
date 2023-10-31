import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import styles from './Main.module.scss';

import { CardBlock } from '../CardBlock';

import { Character, Info } from '../../types/interfaces';
import teleportTop from '../../assets/images/teleportTop.png';
import teleportBottom from '../../assets/images/teleportBottom.png';

type Props = {
  rickAndMortyData: Info<Character> | null;
};

const Main: React.FC<Props> = ({ rickAndMortyData }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const count = rickAndMortyData?.info?.count;
  const nextPage = rickAndMortyData?.info?.next;
  const prevPage = rickAndMortyData?.info?.prev;
  console.log(count, nextPage, prevPage);

  function handleBack() {
    if (pathname !== '/') {
      navigate('/');
    }
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.teleportTop} src={teleportTop} alt="teleportTop" />
      <div className={styles.infoAndCardWrap}>
        <div onClick={handleBack} className={styles.wrapCard}>
          <CardBlock rickAndMortyData={rickAndMortyData} />
        </div>
        {rickAndMortyData && <Outlet />}
      </div>
      <img className={styles.teleportBottom} src={teleportBottom} alt="teleportBottom" />
    </div>
  );
};

export default Main;
