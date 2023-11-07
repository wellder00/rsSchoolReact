import React, { useContext } from 'react';
import styles from './InputSearch.module.scss';

import inputValuePokemon from '../../state/ContextInputValue';

type Props = {
  placeholder: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getInputValue: () => void;
};

const InputSearch: React.FC<Props> = ({ placeholder, className, onChange, getInputValue }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getInputValue();
    }
  };

  const inputData = useContext(inputValuePokemon);

  return (
    <input
      className={styles[className]}
      type="text"
      placeholder={placeholder}
      value={inputData}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputSearch;
