import { Component } from 'react';
import styles from './NotFound.module.scss';
import notFound from '../../assets/images/notFound.png';

class NotFound extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src={notFound} alt="Not Found" />
        <h2>Not Found</h2>
      </div>
    );
  }
}

export default NotFound;
