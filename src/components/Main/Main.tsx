import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import styles from './Main.module.scss';

import { CardBlock } from '../CardBlock';

import teleportTop from '../../assets/images/teleportTop.png';
import teleportBottom from '../../assets/images/teleportBottom.png';
import { MyContextType, Pages } from 'types/interfaces';
import { Pagination } from '@components/Pagination';

type Props = {
  pokemonData: MyContextType;
  onChangePage: (value: boolean) => void;
  pages: Pages;
};

const Main: React.FC<Props> = ({ pokemonData, pages, onChangePage }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialValueLimit = searchParams.get('limit') || 10;
  const initialValueOffset = searchParams.get('offset') || 0;
  const initialValuePage = searchParams.get('page') || 1;
  const [showPagination, setShowPagination] = useState(false);

  const url = `/?limit=${initialValueLimit}&offset=${initialValueOffset}&page=${initialValuePage}`;

  function handleBack() {
    if (pathname !== '/') {
      navigate(url);
    }
  }

  useEffect(() => {
    setShowPagination(false);

    if (pokemonData && pokemonData.count) {
      setTimeout(() => {
        setShowPagination(true);
      }, 200);
    }
  }, [pokemonData]);

  return (
    <div className={styles.wrapper}>
      <img className={styles.teleportTop} src={teleportTop} alt="teleportTop" />
      {showPagination && <Pagination onChangePage={onChangePage} pages={pages} />}
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
