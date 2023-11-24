import styles from './CardBlock.module.scss';
import Card from '../../components/Card/Card';
import { useAppSelector } from '@/lib/redux/hooks/reduxHooks';

const CardBlock: React.FC = () => {
  const pokemons = useAppSelector((state) => state.savePokemons.pokemons);
  // const cou = useAppSelector((state) => state.itemsAmount.count);
  // console.log(pokemons)
  // const [pokemons, setPokemons] = useState<(Pokemon | null | undefined)[]>([]);
  // const pathname = '1';

  // async function getPokemon(): Promise<void> {
  //   if (pokemonData === null) {
  //     return;
  //   }
  //   if ('results' in pokemonData) {
  //     const requests = pokemonData.results.map(async (person: Person) => {
  //       try {
  //         if (person.url) {
  //           const response = await axios.get(person.url);
  //           return {
  //             id: response?.data.id,
  //             name: response?.data.name,
  //             weight: response?.data?.weight,
  //             species: response?.data?.species?.name,
  //             sprites: response?.data?.sprites?.front_shiny,
  //           };
  //         }
  //       } catch (error) {
  //         console.error('Request ERROR:', error);
  //         return null;
  //       }
  //     });
  //     const responses = await Promise.all(requests);
  //     setPokemons(responses);
  //   } else if ('id' in pokemonData) {
  //     const data: Pokemon = {
  //       id: pokemonData?.id as number,
  //       name: pokemonData?.name,
  //       weight: pokemonData?.weight,
  //       species: pokemonData?.species?.name,
  //       sprites: pokemonData?.sprites?.front_shiny,
  //     };
  //     setPokemons([data]);
  //   }
  // }

  // useEffect(() => {
  //   getPokemon();
  // }, [pokemonData]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (isError) {
  //   return <NotFound />;
  // }

  return (
    <div data-testid="card-wrapper" className={styles.wrapper}>
      {pokemons?.map((data) => (
        <div key={data?.id}>
          <Card data={data} />
        </div>
      ))}
    </div>
  );
};

export default CardBlock;
