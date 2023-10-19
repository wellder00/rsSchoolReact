import { Component } from 'react';

import styles from './Header.module.scss';

import { InputSearch } from '../InputSearch';
import { Button } from '../Button';
import { Category } from '../Category';

type Props = {
  onCategoryChange: (selectedCategory: string) => void;
};

class Header extends Component<Props> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.searchWrap}>
          <InputSearch className={'search'} placeholder={'search'} />
          <Button className={'search'}>SEARCH</Button>
        </div>
        <div>
          <Category onCategoryChange={this.props.onCategoryChange} />
        </div>
      </div>
    );
  }
}

export default Header;
