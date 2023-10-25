import { Component } from 'react';

import styles from './Header.module.scss';

import { InputSearch } from '../InputSearch';
import { Button } from '../Button';

import title from '../../../public/title.png';
import logo from '../../../public/logo.png';

type Props = {
  findCharacter: (selectedCategory: string) => void;
};

class Header extends Component<Props> {
  state = {
    inputValue: '',
    hasError: false,
  };

  async componentDidMount() {
    const storedData = localStorage.getItem('character');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.setState({ inputValue: parsedData });
    } else {
      this.setState({ inputValue: '' });
    }
  }

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
        <img className={styles.titleImg} src={title} alt="title" />
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

          <Button className={'error'} onClickFunction={this.handleMakeError}>
            TRY MAKE ERROR
          </Button>
        </div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    );
  }
}

export default Header;
