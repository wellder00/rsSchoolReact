import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import pokemonDataContext from '../../state/ContextPokemonData';

import styles from './Home.module.scss';

import { Header } from '@components/Header';
import { Main } from '@components/Main';
import { ErrorBoundary } from '@components/ErrorBoundary';

import { MyContextType, Pages } from 'types/interfaces';
import { getPokemon } from '../../api/api';

const Home = () => {
  const [pokemonData, setPokemonData] = useState<MyContextType>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValueLimit = searchParams.get('limit') || 10;
  const initialValueOffset = searchParams.get('offset') || 0;
  const initialValuePage = searchParams.get('page') || 1;
  const [selectedValue, setSelectedValue] = useState(initialValueLimit);
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
      limit: '' + selectedValue,
      offset: '' + pages.offset,
      page: '' + pages.currentPage,
    });
    fetchData('', pages.offset, +selectedValue);
  }, [pages]);

  useEffect(() => {
    if (searchParams.get('limit') !== selectedValue) {
      setSearchParams({ limit: '' + selectedValue, offset: '0', page: '1' });
      setPages({ ...pages, currentPage: 1, offset: 0 });
    } else {
      setSearchParams({
        limit: '' + selectedValue,
        offset: '' + pages.offset,
        page: '' + pages.currentPage,
      });
      fetchData('', pages.offset, +selectedValue);
    }
  }, [selectedValue]);

  useEffect(() => {
    async function fetchData(pokemon: string) {
      const data = await getPokemon(pokemon);
      setPokemonData(data);
    }

    const storedData = localStorage.getItem('pokemon');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      fetchData(parsedData);
    } else {
      fetchData('');
    }
  }, []);

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
    setSelectedValue(event.target.value);

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
          <Header
            findCharacter={findCharacter}
            onSelectChange={onSelectChange}
            selectedValue={selectedValue}
          />
        </ErrorBoundary>
        <Main onChangePage={onChangePage} pages={pages} />
      </div>
    </pokemonDataContext.Provider>
  );
};

export default Home;
