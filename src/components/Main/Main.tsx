import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks';

import styles from './Main.module.scss';

import { CardBlock } from '../CardBlock';

import { Pagination } from '@components/Pagination';
import teleportBottom from '../../assets/images/teleportBottom.png';
import teleportTop from '../../assets/images/teleportTop.png';
import {
  changeCurrentPage,
  changeLastPage,
  changeOffsetAmount,
} from '../../store/itemsPerPageSlice';
import { useGetPokemonsQuery } from '../../store/redux/pokemonApi';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const itemsAmount = useAppSelector((state) => state.itemsAmount.itemsAmount);
  const currentPage = useAppSelector((state) => state.itemsAmount.currentPage);
  const inputValue = useAppSelector((state) => state.inputValue.value);
  const offset = useAppSelector((state) => state.itemsAmount.offset);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    data = [],
    isLoading,
    isError,
  } = useGetPokemonsQuery({
    pokemon: inputValue,
    limit: itemsAmount,
    offset: offset,
  });

  const url = `/?page=${currentPage}`;

  function handleBack() {
    if (pathname !== '/') {
      navigate(url);
    }
  }

  const onChangePage = (isNext: boolean) => {
    const limit = itemsAmount;
    if (data?.count && limit && offset) {
      const lastPage = Math.ceil(data.count / +limit);
      const offsetChange = isNext ? +limit : -limit;
      const newOffset = parseInt(offset) + offsetChange;
      const currentPage = Math.floor(newOffset / +limit) + 1;
      dispatch(changeOffsetAmount('' + newOffset));
      dispatch(changeLastPage('' + lastPage));
      dispatch(changeCurrentPage('' + currentPage));
    }
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.teleportTop} src={teleportTop} alt="teleportTop" />
      {data?.count && <Pagination onChangePage={onChangePage} />}
      <div className={styles.infoAndCardWrap}>
        <div onClick={handleBack} className={styles.wrapCard}>
          <CardBlock pokemonData={data} isLoading={isLoading} isError={isError} />
        </div>
        {data && <Outlet />}
      </div>
      <img className={styles.teleportBottom} src={teleportBottom} alt="teleportBottom" />
    </div>
  );
};

export default Main;
