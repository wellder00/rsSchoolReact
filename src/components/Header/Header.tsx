import React, { useState, useEffect, useContext } from 'react';

import styles from './Header.module.scss';

import { InputSearch } from '../InputSearch';
import { Button } from '../Button';

import title from '../../assets/images/title.png';
import logo from '../../assets/images/logo.png';
import pokemonDataContext from '../../state/ContextPokemonData';
import { saveItemValue } from '../../store/inputValueSlice';
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks';

type Props = {
  findCharacter: (selectedCategory: string) => void;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: React.FC<Props> = ({ findCharacter, onSelectChange }) => {
  const dispatch = useAppDispatch();
  const itemsAmount = useAppSelector((state) => state.itemsAmount.items);
  const inputValue = useAppSelector((state) => state.inputValue.value);
  const [hasError, setHasError] = useState(false);
  const PokemonDate = useContext(pokemonDataContext);

  //!!! Проверить эту функцию
  useEffect(() => {
    const storedData = localStorage.getItem('character');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(saveItemValue(parsedData));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveItemValue(event.target.value));
  };

  const handleSearch = () => {
    findCharacter(inputValue);
    dispatch(saveItemValue(''));
  };

  const handleMakeError = () => {
    setHasError(true);
  };
  if (hasError) {
    throw new Error('Everything is broken, everything is destroyed');
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.titleImg} src={title} alt="title" />
      <div className={styles.searchWrap}>
        {PokemonDate?.count && (
          <select onChange={onSelectChange} className={styles.select} value={itemsAmount}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        )}

        <InputSearch
          className={'search'}
          placeholder={'search'}
          onChange={handleInputChange}
          getInputValue={handleSearch}
        />

        <Button className={'search'} onClickFunction={handleSearch}>
          SEARCH
        </Button>

        <Button className={'error'} onClickFunction={handleMakeError}>
          TRY MAKE ERROR
        </Button>
      </div>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
};

export default Header;
