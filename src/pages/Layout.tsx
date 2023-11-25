import { Home } from '@/components/Home';
import { useAppDispatch } from '@/lib/redux/hooks/reduxHooks';
import { changeCount } from '@/lib/redux/slices/itemsPerPageSlice';
import { savePokemons } from '@/lib/redux/slices/savePokemons';
import { Pokemons } from '@/types/interfaces';
import Image from 'next/image';
import teleportBottom from '../../public/assets/images/teleportBottom.png';
import teleportTop from '../../public/assets/images/teleportTop.png';
import styles from '../styles/Layout.module.scss';
import { useEffect } from 'react';

type Props = {
  children?: React.ReactNode;
  count: number;
  pokemons: Pokemons[];
};

const Layout: React.FC<Props> = ({ children, pokemons, count }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(savePokemons(pokemons));
    dispatch(changeCount('' + count));
  }, [dispatch, pokemons, count]);

  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.teleportTop}
        src={teleportTop}
        alt="teleportTop"
        width={300}
        height={100}
      />
      <Home />
      {children}
      <Image
        className={styles.teleportBottom}
        src={teleportBottom}
        alt="teleportBottom"
        width={300}
        height={100}
      />
    </div>
  );
};

export default Layout;
