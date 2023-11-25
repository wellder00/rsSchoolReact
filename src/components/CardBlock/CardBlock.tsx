import styles from './CardBlock.module.scss';
import Card from '../../components/Card/Card';
import { useAppSelector } from '@/lib/redux/hooks/reduxHooks';

const CardBlock: React.FC = () => {
  const pokemons = useAppSelector((state) => state.savePokemons.pokemons);
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
