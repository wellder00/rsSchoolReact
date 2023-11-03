import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { Header } from '../../components/Header';
import { getPokemon } from '../../api/api';
import { Main } from '../../components/Main';
import { Info, Person, PokemonData } from 'types/interfaces';

const Home = () => {
  const [pokemonData, setPokemonData] = useState<Info<Person> | PokemonData | null>(null);
  const [selectedValue, setSelectedValue] = useState('option1');

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

  return (
    <div className={styles.wrapper}>
      <Header
        findCharacter={findCharacter}
        onSelectChange={onSelectChange}
        selectedValue={selectedValue}
      />
      <Main pokemonData={pokemonData} />
    </div>
  );
};

export default Home;
