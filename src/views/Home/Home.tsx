import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './Home.module.scss';

import pokemonDataContext from '../../state/ContextPokemonData';
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks';

import { Header } from '@components/Header';
import { Main } from '@components/Main';
import { ErrorBoundary } from '@components/ErrorBoundary';

import { getPokemon } from '../../api/api';
import { MyContextType, Pages } from 'types/interfaces';
import { changeItemsAmount } from '../../store/itemsPerPageSlice';
import { useGetPokemonsQuery } from '../../store/redux/pokemonApi';

const Home = () => {
  const dispatch = useAppDispatch();
  const itemsAmount = useAppSelector((state) => state.itemsAmount.items);
  const { data = [] } = useGetPokemonsQuery({ limit: itemsAmount, offset: '0' });

  console.log(data);

  const [pokemonData, setPokemonData] = useState<MyContextType>(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValueLimit = searchParams.get('limit') || itemsAmount;
  const initialValueOffset = searchParams.get('offset') || 0;
  const initialValuePage = searchParams.get('page') || 1;
  const [pages, setPages] = useState<Pages>({
    offset: +initialValueOffset,
    currentPage: +initialValuePage,
    lastPage: 2,
  });
  const navigate = useNavigate();
  const url = `/?limit=${initialValueLimit}&offset=0&page=1`;

  async function fetchData(pokemon: string, offset: number, limit: number) {
    try {
      const data = await getPokemon(pokemon, offset, limit);
      setPokemonData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    setSearchParams({
      limit: '' + itemsAmount,
      offset: '' + pages.offset,
      page: '' + pages.currentPage,
    });
    fetchData('', pages.offset, +itemsAmount);
  }, [pages]);

  useEffect(() => {
    if (searchParams.get('limit') !== itemsAmount) {
      setSearchParams({ limit: '' + itemsAmount, offset: '0', page: '1' });
      setPages({ ...pages, currentPage: 1, offset: 0 });
    } else {
      setSearchParams({
        limit: '' + itemsAmount,
        offset: '' + pages.offset,
        page: '' + pages.currentPage,
      });
      fetchData('', pages.offset, +itemsAmount);
    }
  }, [itemsAmount]);

  // useEffect(() => {
  //   dispatch(changeItemsAmount(initialValueLimit));
  //   async function fetchData(pokemon: string) {
  //     const data = await getPokemon(pokemon);
  //     setPokemonData(data);
  //   }

  //   const storedData = localStorage.getItem('pokemon');
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     fetchData(parsedData);
  //   } else {
  //     fetchData('');
  //   }
  // }, []);

  const findCharacter = async (character: string) => {
    try {
      const data = await getPokemon(character);
      setPokemonData(data);
      navigate(url);
    } catch (error) {
      console.error(error);
    }
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(changeItemsAmount(event.target.value));

  const onChangePage = (isNext: boolean) => {
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');
    if (pokemonData?.count && limit && offset) {
      const lastPage = Math.ceil(pokemonData.count / +limit);
      const offsetChange = isNext ? +limit : -limit;
      const newOffset = parseInt(offset) + offsetChange;
      const currentPage = Math.floor(newOffset / +limit) + 1;

      setPages({ currentPage, lastPage, offset: newOffset });
    }
  };

  return (
    <pokemonDataContext.Provider value={pokemonData}>
      <div className={styles.wrapper}>
        <ErrorBoundary>
          <Header findCharacter={findCharacter} onSelectChange={onSelectChange} />
        </ErrorBoundary>
        <Main onChangePage={onChangePage} pages={pages} />
      </div>
    </pokemonDataContext.Provider>
  );
};

export default Home;
