import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Routes from '../../utils/constants/routes';

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Link to={Routes.CONTROLLED}>
        <button className={styles.button}>Controlled</button>
      </Link>
      <Link to={Routes.UNCONTROLLED}>
        <button className={styles.button}>Uncontrolled</button>
      </Link>
    </div>
  );
};

export default Home;
