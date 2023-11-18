import React from 'react';
import styles from './InputSearch.module.scss';

type Props = {
  placeholder: string;
  className: string;
  pokemonName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getInputValue: () => void;
};

const InputSearch: React.FC<Props> = ({
  placeholder,
  className,
  onChange,
  getInputValue,
  pokemonName,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getInputValue();
    }
  };

  return (
    <input
      className={styles[className]}
      type="text"
      placeholder={placeholder}
      value={pokemonName}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputSearch;
