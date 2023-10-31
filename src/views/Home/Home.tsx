import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { Header } from '../../components/Header';
import { getRickAndMortyData } from '../../api/api';
import { Main } from '../../components/Main';
import { Character, Info } from 'types/interfaces';
const Home = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState<Info<Character> | null>(null);

  useEffect(() => {
    async function fetchData(character: string) {
      try {
        const data = await getRickAndMortyData(character);
        setRickAndMortyData(data);
      } catch (error) {
        console.error(error);
      }
    }
    const storedData = localStorage.getItem('character');
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
      const data = await getRickAndMortyData(character);
      setRickAndMortyData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Header findCharacter={findCharacter} />
      <Main rickAndMortyData={rickAndMortyData} />
    </div>
  );
};

export default Home;
