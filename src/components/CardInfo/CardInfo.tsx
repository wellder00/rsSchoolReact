import { useLoaderData } from 'react-router-dom';

import { getRickAndMortyData } from '../../api/api';
import { Character } from '../../types/interfaces';

export async function loader() {
  const data = await getRickAndMortyData('');
  const character = data?.results;
  return { character };
}

interface CharacterData {
  character: Character[];
}

const CardInfo = () => {
  const { character } = useLoaderData() as CharacterData;
  console.log(character);

  return <div>CardInfo</div>;
};

export default CardInfo;
