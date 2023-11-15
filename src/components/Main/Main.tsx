import React, { useEffect, useState, useContext } from 'react';
import { Outlet, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/reduxHooks';

import styles from './Main.module.scss';

import { CardBlock } from '../CardBlock';

import teleportTop from '../../assets/images/teleportTop.png';
import teleportBottom from '../../assets/images/teleportBottom.png';
import { Pages } from 'types/interfaces';
import { Pagination } from '@components/Pagination';
import pokemonDataContext from '../../state/ContextPokemonData';

type Props = {
  onChangePage: (value: boolean) => void;
  pages: Pages;
};

const Main: React.FC<Props> = ({ pages, onChangePage }) => {
  const inputValue = useAppSelector((state) => state.itemsAmount.items);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialValueLimit = searchParams.get('limit') || inputValue;
  const initialValueOffset = searchParams.get('offset') || 0;
  const initialValuePage = searchParams.get('page') || 1;
  const [showPagination, setShowPagination] = useState(false);

  const PokemonDate = useContext(pokemonDataContext);

  const url = `/?limit=${initialValueLimit}&offset=${initialValueOffset}&page=${initialValuePage}`;

  function handleBack() {
    if (pathname !== '/') {
      navigate(url);
    }
  }

  useEffect(() => {
    setShowPagination(false);

    if (PokemonDate && PokemonDate.count) {
      setTimeout(() => {
        setShowPagination(true);
      }, 200);
    }
  }, [PokemonDate]);

  return (
    <div className={styles.wrapper}>
      <img className={styles.teleportTop} src={teleportTop} alt="teleportTop" />
      {showPagination && <Pagination onChangePage={onChangePage} pages={pages} />}
      <div className={styles.infoAndCardWrap}>
        <div onClick={handleBack} className={styles.wrapCard}>
          <CardBlock />
        </div>
        {PokemonDate && <Outlet />}
      </div>
      <img className={styles.teleportBottom} src={teleportBottom} alt="teleportBottom" />
    </div>
  );
};

export default Main;
