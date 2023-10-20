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
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSearch = () => {
    this.props.findCharacter(this.state.inputValue);
  };

  render() {
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
          <Button className={'search'} getInputValue={this.handleSearch}>
            SEARCH
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
