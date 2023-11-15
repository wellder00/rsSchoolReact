import React from 'react';
import styles from './InputSearch.module.scss';
import { useAppSelector } from '../../Hooks/reduxHooks';

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

  const inputValue = useAppSelector((state) => state.inputValue.value);

  return (
    <input
      className={styles[className]}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputSearch;
