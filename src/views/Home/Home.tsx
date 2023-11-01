import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { Header } from '../../components/Header';
import { getPokemon } from '../../api/api';
import { Main } from '../../components/Main';
// import { Pokemon } from 'types/interfaces';

const Home = () => {
  const [pokemonData, setPokemonData] = useState(null);

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
      if (character === '') {
        setPokemonData(data);
      } else {
        const pokemonInfo = {
          results: [data],
        };
        setPokemonData(pokemonInfo);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Header findCharacter={findCharacter} />
      <Main pokemonData={pokemonData} />
    </div>
  );
};

export default Home;
