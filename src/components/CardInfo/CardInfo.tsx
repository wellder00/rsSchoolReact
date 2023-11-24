import styles from './CardInfo.module.scss';

import notFound from '../../../public/notFound.png';

// import { Loader } from '../Loader';
import { Pokemon, stats } from '@/types/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';

type Props = {
  pokemonData: Pokemon;
};

const CardInfo: React.FC<Props> = ({ pokemonData }) => {
  console.log(pokemonData);
  return (
    <div className={styles.characterInfo}>
      <div className={styles.infoWrap}>
        <h3 className={styles.title}>{pokemonData?.name}</h3>
        <div className={styles?.blockInfo}>
          <div>Weight: {pokemonData?.weight}</div>
          <div>Species: {pokemonData?.species?.name}</div>
          <div className={styles.listWrap}>
            <ul className={styles.list}>
              {pokemonData?.stats?.map((stats: stats) => (
                <li key={stats?.stat?.name}>{`${stats?.stat?.name}: ${stats?.base_stat}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <Image
          width={300}
          height={300}
          className={styles.image}
          src={pokemonData?.sprites?.front_shiny || notFound}
          alt="image person"
        />
        <div>
          <Link href={`/`}>
            <Button className={'backButton'}>Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
