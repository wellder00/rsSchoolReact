import React, { Component } from 'react';
import styles from './Home.module.scss';
import { Header } from '../../components/Header';
import { getRickAndMortyData } from '../../api/api';
import { Main } from '../../components/Main';

class Home extends Component {
  state = {
    rickAndMortyData: null,
  };

  async componentDidMount() {
    const storedData = localStorage.getItem('character');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        const data = await getRickAndMortyData(parsedData);
        this.setState({ rickAndMortyData: data });
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const data = await getRickAndMortyData('');
        this.setState({ rickAndMortyData: data });
      } catch (error) {
        console.error(error);
      }
    }
  }

  findCharacter = async (character: string) => {
    try {
      const data = await getRickAndMortyData(character);
      this.setState({ rickAndMortyData: data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Header findCharacter={this.findCharacter} />
        <Main rickAndMortyData={this.state.rickAndMortyData} />
      </div>
    );
  }
}

export default Home;
