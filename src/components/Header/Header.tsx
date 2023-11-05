import React, { useState, useEffect } from 'react';

import styles from './Header.module.scss';

import { InputSearch } from '../InputSearch';
import { Button } from '../Button';

import title from '../../assets/images/title.png';
import logo from '../../assets/images/logo.png';
import { Info, Person, PokemonData } from 'types/interfaces';

type Props = {
  findCharacter: (selectedCategory: string) => void;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedValue: number | string;
  pokemonData: Info<Person> | PokemonData | null;
};

const Header: React.FC<Props> = ({ findCharacter, onSelectChange, selectedValue, pokemonData }) => {
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('character');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setInputValue(parsedData);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    findCharacter(inputValue);
    setInputValue('');
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
        {pokemonData?.count && (
          <select onChange={onSelectChange} className={styles.select} value={selectedValue}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        )}
        <InputSearch
          className={'search'}
          placeholder={'search'}
          value={inputValue}
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
