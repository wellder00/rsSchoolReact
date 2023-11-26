import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Header.module.scss';

import { Button } from '../Button';
import { InputSearch } from '../InputSearch';

import { saveItemValue } from '@/lib//redux/slices/inputValueSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks/reduxHooks';
import { changeItemsAmount } from '@/lib/redux/slices/itemsPerPageSlice';
import { useRouter } from 'next/router';
import logo from '../../../public/assets/images/logo.png';
import title from '../../../public/assets/images/title.png';

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const itemsAmount = useAppSelector((state) => state.itemsAmount.itemsAmount);
  const inputValue = useAppSelector((state) => state.inputValue.value);

  const [hasError, setHasError] = useState(false);
  const [pokemonName, setPokemonName] = useState(inputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItemsAmount = event.target.value;
    dispatch(changeItemsAmount(selectedItemsAmount));

    router.push(`/?page=1&limit=${selectedItemsAmount}&offset=0`);
  };

  const handleSearch = () => {
    dispatch(saveItemValue(pokemonName));

    if (pokemonName) {
      router.push(`/?pokemon=${pokemonName}&page=1&limit=4&offset=0`);
    } else {
      router.push(`/?page=1&limit=4&offset=0`);
    }
  };

  const handleMakeError = () => {
    setHasError(true);
  };

  if (hasError) {
    router.push('/error');
  }

  return (
    <div className={styles.wrapper}>
      <Image className={styles.titleImg} src={logo} alt="title" width={100} height={100} />

      <div className={styles.searchWrap}>
        <select onChange={onSelectChange} className={styles.select} value={itemsAmount}>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="12">12</option>
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
