import React, { useState, useMemo, useCallback, forwardRef } from 'react';
import { useGetCountriesQuery } from '../../store/counterApi';
import styles from './CountryList.module.scss';

interface CustomCountryInputProps extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {}

const CountryList = forwardRef<HTMLInputElement, CustomCountryInputProps>(({ ...props }, ref) => {
  const { data: countriesData = [] } = useGetCountriesQuery({});
  const [inputValue, setInputValue] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const countryFilter = useMemo(
    () =>
      countriesData.filter((country) =>
        country.name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [countriesData, inputValue]
  );

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    if (value !== inputValue) {
      setInputValue(value);
      setDropdownVisible(true);
    }
  };

  const handleSelectCountry: React.MouseEventHandler<HTMLLIElement> = useCallback(
    ({ currentTarget }) => {
      setInputValue(currentTarget.innerText);
      setDropdownVisible(false);
    },
    []
  );

  return (
    <div className={styles.customCountryInputWrapper}>
      <input
        {...props}
        ref={ref}
        className={styles.customCountryInput}
        type="text"
        name="country"
        id="customCountryId"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your country"
        autoComplete="nope"
      />
      {isDropdownVisible && (
        <ul className={styles.countryDropdown}>
          {countryFilter.map((country) => (
            <li
              className={styles.countryDropdownItem}
              key={country.name}
              onMouseDown={handleSelectCountry}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default CountryList;
