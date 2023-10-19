import { Component } from 'react';

import styles from './Header.module.scss';

import { InputSearch } from '../InputSearch';
import { Button } from '../Button';

class Header extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <InputSearch className={'search'} placeholder={'search'} />
        <Button className={'search'}>SEARCH</Button>
      </div>
    );
  }
}

export default Header;
