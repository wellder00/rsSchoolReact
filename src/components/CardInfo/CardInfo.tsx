import { Link, useParams } from 'react-router-dom';

import styles from './CardInfo.module.scss';

import { Button } from '@components/Button';
import { Loader } from '@components/Loader';

import { useAppSelector } from '../../Hooks/reduxHooks';
import notFound from '../../assets/images/notFound.png';
import { useGetPokemonQuery } from '../../store/redux/pokemonApi';

interface stats {
  stat: {
    name: string;
  };
  base_stat: string;
}

const CardInfo = () => {
  const { characterId } = useParams();
  const { data, isLoading } = useGetPokemonQuery(characterId);
  const currentPage = useAppSelector((state) => state.itemsAmount.currentPage);
  const url = `/?page=${currentPage}`;

  return (
    <div data-testid="card-info-wrapper" className={styles.characterInfo}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.infoWrap}>
          <h3 className={styles.title}>{data?.name}</h3>
          <div className={styles?.blockInfo}>
            <div>Weight: {data?.weight}</div>
            <div>Species: {data?.species?.name}</div>
            <div className={styles.listWrap}>
              <ul className={styles.list}>
                {data?.stats?.map((stats: stats) => (
                  <li key={stats?.stat?.name}>{`${stats?.stat?.name}: ${stats?.base_stat}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <img
            className={styles.image}
            src={data?.sprites?.front_shiny || notFound}
            alt="image person"
          />
          <div>
            <Link to={url}>
              <Button className={'backButton'}>Back</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardInfo;
