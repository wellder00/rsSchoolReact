import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import styles from './Main.module.scss';

import { CardBlock } from '../CardBlock';

import teleportTop from '../../assets/images/teleportTop.png';
import teleportBottom from '../../assets/images/teleportBottom.png';
import { Info, Person, PokemonData } from 'types/interfaces';
import { Pagination } from '@components/Pagination';

type Props = {
  pokemonData: Info<Person> | PokemonData | null;
  onChangePrevPage: () => void;
  onChangeNextPage: () => void;
  currentPage: number;
};

const Main: React.FC<Props> = ({
  pokemonData,
  onChangePrevPage,
  onChangeNextPage,
  currentPage,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleBack() {
    if (pathname !== '/') {
      navigate('/');
    }
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.teleportTop} src={teleportTop} alt="teleportTop" />
      <Pagination
        onChangePrevPage={onChangePrevPage}
        onChangeNextPage={onChangeNextPage}
        currentPage={currentPage}
      />
      <div className={styles.infoAndCardWrap}>
        <div onClick={handleBack} className={styles.wrapCard}>
          <CardBlock pokemonData={pokemonData} />
        </div>
        {pokemonData && <Outlet />}
      </div>
      <img className={styles.teleportBottom} src={teleportBottom} alt="teleportBottom" />
    </div>
  );
};

export default Main;
