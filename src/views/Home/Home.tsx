import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Routes from '../../utils/constants/routes';
import { Cards } from '@components/Cards';

const Home = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapBtn}>
        <Link to={Routes.CONTROLLED}>
          <button className={styles.button}>Controlled</button>
        </Link>
        <Link to={Routes.UNCONTROLLED}>
          <button className={styles.button}>Uncontrolled</button>
        </Link>
      </div>
      <Cards />
    </div>
  );
};

export default Home;
