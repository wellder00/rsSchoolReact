import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

import { Button } from '../Button';
import { InputSearch } from '../InputSearch';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks/reduxHooks';
import logo from '../../../public/assets/images/logo.png';
import title from '../../../public/assets/images/title.png';
import { saveItemValue } from '@/lib//redux/slices/inputValueSlice';

type Props = {
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: React.FC<Props> = ({ onSelectChange }) => {
  const dispatch = useAppDispatch();
  const itemsAmount = useAppSelector((state) => state.itemsAmount.itemsAmount);

  const inputValue = useAppSelector((state) => state.inputValue.value);
  const [hasError, setHasError] = useState(false);
  const [pokemonName, setPokemonName] = useState(inputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(saveItemValue(pokemonName));
    setPokemonName('');
  };

  const handleMakeError = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('Everything is broken, everything is destroyed');
  }

  return (
    <div className={styles.wrapper}>
      <Image className={styles.titleImg} src={logo} alt="title" width={100} height={100} />

      <div className={styles.searchWrap}>
        <select onChange={onSelectChange} className={styles.select} value={itemsAmount}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>

        <InputSearch
          className={'search'}
          placeholder={'search'}
          onChange={handleInputChange}
          getInputValue={handleSearch}
          pokemonName={pokemonName}
        />
        <Button className={'search'} onClickFunction={handleSearch}>
          SEARCH
        </Button>
        <Button className={'error'} onClickFunction={handleMakeError}>
          TRY MAKE ERROR
        </Button>
      </div>
      <Image className={styles.logo} src={title} alt="title" width={200} height={100} />
    </div>
  );
};

export default Header;
