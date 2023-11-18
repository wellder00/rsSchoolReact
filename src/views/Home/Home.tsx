import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './Home.module.scss';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { Header } from '@components/Header';
import { Main } from '@components/Main';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks';
import { changeItemsAmount } from '../../store/itemsPerPageSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPage = useAppSelector((state) => state.itemsAmount.currentPage);

  const [, setParams] = useSearchParams();
  useEffect(() => {
    setParams({
      page: currentPage,
    });
  }, [currentPage]);

  const findCharacter = async () => {
    try {
      navigate('');
    } catch (error) {
      console.error(error);
    }
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(changeItemsAmount(event.target.value));

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <Header findCharacter={findCharacter} onSelectChange={onSelectChange} />
      </ErrorBoundary>
      <Main />
    </div>
  );
};

export default Home;
