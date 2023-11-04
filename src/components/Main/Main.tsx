import { Outlet, useNavigate, useLocation, useSearchParams } from 'react-router-dom';

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
  const [searchParams] = useSearchParams();
  const initialValueLimit = searchParams.get('limit');
  const initialValueOffset = searchParams.get('offset');
  const initialValuePage = searchParams.get('page');

  function handleBack() {
    if (pathname !== '/') {
      navigate(
        `/?limit=${initialValueLimit}&offset=${initialValueOffset}&page=${initialValuePage}`
      );
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
