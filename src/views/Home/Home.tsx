import { Component } from 'react';
import styles from './Home.module.scss';
import { Header } from '../../components/Header';
import { getRickAndMortyData } from '../../api/api';
import { Main } from '../../components/Main';

export default class Home extends Component {
  state = {
    rickAndMortyData: null,
  };

  handleCategoryChange = async (selectedCategory: string) => {
    try {
      const data = await getRickAndMortyData(selectedCategory);
      this.setState({ rickAndMortyData: data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Header onCategoryChange={this.handleCategoryChange} />
        <Main rickAndMortyData={this.state.rickAndMortyData} />
      </div>
    );
  }
}
