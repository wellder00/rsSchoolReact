import { Component } from 'react';

import styles from './Header.module.scss';
import { InputSearch } from '../InputSearch';
import { Button } from '../Button';

type Props = {
  findCharacter: (selectedCategory: string) => void;
};

class Header extends Component<Props> {
  state = {
    inputValue: '',
    hasError: false,
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSearch = () => {
    this.props.findCharacter(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  handleMakeError = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Everything is broken, everything is destroyed');
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.searchWrap}>
          <InputSearch
            className={'search'}
            placeholder={'search'}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            getInputValue={this.handleSearch}
          />

          <Button className={'search'} onClickFunction={this.handleSearch}>
            SEARCH
          </Button>

          <Button className={'search'} onClickFunction={this.handleMakeError}>
            TRY MAKE ERROR
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
