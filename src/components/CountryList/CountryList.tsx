import React, { useState, useMemo, useCallback, forwardRef } from 'react';
import { useGetCountriesQuery } from '../../store/counterApi';
import styles from './CountryList.module.scss';

interface CustomCountryInputProps extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
  error?: string;
}

const CountryList = forwardRef<HTMLInputElement, CustomCountryInputProps>(
  ({ error, ...props }, ref) => {
    const { data: countriesData = [] } = useGetCountriesQuery({});
    const [state, setState] = useState({
      inputValue: '',
      isDropdownVisible: false,
    });

    const countryFilter = useMemo(
      () =>
        countriesData.filter((country) =>
          country.name.toLowerCase().includes(state.inputValue.toLowerCase())
        ),
      [countriesData, state.inputValue]
    );

    const handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      if (value !== state.inputValue) {
        setState((prevState) => ({ ...prevState, inputValue: value, isDropdownVisible: true }));
      }
    };

    const handleSelectCountry: React.MouseEventHandler<HTMLLIElement> = useCallback(
      ({ currentTarget }) => {
        setState((prevState) => ({
          ...prevState,
          inputValue: currentTarget.innerText,
          isDropdownVisible: false,
        }));
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
          value={state.inputValue}
          onChange={handleInputChange}
          placeholder="Enter your country"
          autoComplete="nope"
          id="countryInput"
        />
        {state.isDropdownVisible && (
          <ul
            className={styles.countryDropdown}
            role="listbox"
            aria-labelledby="countryInput"
            aria-expanded={state.isDropdownVisible}
          >
            {countryFilter.map((country, index) => (
              <li
                className={styles.countryDropdownItem}
                key={country.name + index}
                onMouseDown={handleSelectCountry}
                role="option"
                aria-selected={state.inputValue === country.name}
              >
                {country.name}
              </li>
            ))}
          </ul>
        )}
        {error && <p className="country-error">{error}</p>}
      </div>
    );
  }
);

export default CountryList;
