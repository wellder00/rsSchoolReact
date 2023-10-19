import { Component } from 'react';

import styles from './Home.module.scss';

import { Header } from '../../components/Header';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
      </div>
    );
  }
}
