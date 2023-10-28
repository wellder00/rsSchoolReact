import { useEffect, useState } from 'react';

import styles from './Home.module.scss';

import { Header } from '@components/Header';
import { Main } from '@components/Main';
import { ErrorBoundary } from '@components/ErrorBoundary';

import { Character, Info } from '../../types/interfaces';
import { getRickAndMortyData } from '../../api/api';

function Home() {
  const [rickAndMortyData, setRickAndMortyData] = useState<Info<Character> | null>(null);

  useEffect(() => {
    async function fetchData() {
      const storedData = localStorage.getItem('character');
      try {
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const data = await getRickAndMortyData(parsedData);
          setRickAndMortyData(data);
        } else {
          const data = await getRickAndMortyData('');
          setRickAndMortyData(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
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
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <Header findCharacter={findCharacter} />
        <Main rickAndMortyData={rickAndMortyData} />
      </div>
    </ErrorBoundary>
  );
}

export default Home;
