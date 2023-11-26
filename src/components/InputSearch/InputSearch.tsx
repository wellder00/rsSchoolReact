import React from 'react';
import styles from './InputSearch.module.scss';

type Props = {
  placeholder: string;
  className: string;
  pokemonName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getInputValue: () => void;
};

const InputSearch: React.FC<Props> = (props) => {
  const { placeholder, className, onChange, getInputValue, pokemonName } = props;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getInputValue();
    }
  };

  return (
    <input
      data-testid="input-test-id"
      className={styles[className]}
      type="text"
      placeholder={placeholder}
      value={pokemonName || ''}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputSearch;
