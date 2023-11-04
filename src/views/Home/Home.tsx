import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './Home.module.scss';

import { Header } from '../../components/Header';
import { getPokemon } from '../../api/api';
import { Main } from '../../components/Main';
import { Info, Person, PokemonData } from 'types/interfaces';

interface Pages {
  offset: number;
  currentPage: number;
  lastPage: number;
}

const Home = () => {
  const [pokemonData, setPokemonData] = useState<Info<Person> | PokemonData | null>(null);
  const [selectedValue, setSelectedValue] = useState('10');
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState<Pages>({ offset: 0, currentPage: 1, lastPage: 1 });

  useEffect(() => {
    async function fetchData(pokemon: string, offset: number, limit: number) {
      try {
        const data = await getPokemon(pokemon, offset, limit);
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (!searchParams.has('limit') && !searchParams.has('offset')) {
      setSearchParams({ limit: selectedValue, offset: '' + pages.offset });
    }

    setSearchParams({ limit: selectedValue, offset: '' + pages.offset });
    fetchData('', pages.offset, +selectedValue);
  }, [selectedValue, pages]);

  useEffect(() => {
    async function fetchData(pokemon: string) {
      try {
        const data = await getPokemon(pokemon);
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    }
    const storedData = localStorage.getItem('pokemon');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        fetchData(parsedData);
      } catch (error) {
        console.error(error);
      }
    } else {
      fetchData('');
    }
  }, []);

  const findCharacter = async (character: string) => {
    try {
      const data = await getPokemon(character);
      setPokemonData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedValue(event.target.value);

  const onChangePrevPage = () => {
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');
    if (pokemonData?.count && limit && offset) {
      const lastPage = Math.ceil(pokemonData.count / +limit);
      const newOffset = parseInt(offset) - parseInt(limit);
      const currentPage = Math.floor(newOffset / +limit) + 1;
      // if (currentPage < 1) return
      setPages({ currentPage, lastPage, offset: newOffset });
    }
  };

  const onChangeNextPage = () => {
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');
    if (pokemonData?.count && limit && offset) {
      const lastPage = Math.ceil(pokemonData.count / +limit);
      const newOffset = parseInt(offset) + parseInt(limit);
      const currentPage = Math.floor(newOffset / +limit) + 1;
      // if (currentPage === lastPage) return
      setPages({ currentPage, lastPage, offset: newOffset });
    }
  };

  console.log(pages);

  return (
    <div className={styles.wrapper}>
      <Header
        findCharacter={findCharacter}
        onSelectChange={onSelectChange}
        selectedValue={selectedValue}
      />
      <Main
        pokemonData={pokemonData}
        onChangePrevPage={onChangePrevPage}
        onChangeNextPage={onChangeNextPage}
        currentPage={pages.currentPage}
      />
    </div>
  );
};

export default Home;
