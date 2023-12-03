import { Cards } from '@components/Cards';
import { Link } from 'react-router-dom';
import Routes from '../../utils/constants/routes';
import styles from './Home.module.scss';

const Home = () => (
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

export default Home;
