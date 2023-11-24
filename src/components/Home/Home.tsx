import styles from './Home.module.scss';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

import { useAppDispatch } from '@/lib/redux/hooks/reduxHooks';
import { changeItemsAmount } from '@/lib/redux/slices/itemsPerPageSlice';

import React from 'react';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(changeItemsAmount(event.target.value));

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <Header onSelectChange={onSelectChange} />
      </ErrorBoundary>
      <Main />
    </div>
  );
};

export default Home;
