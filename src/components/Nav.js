import { Link } from 'react-router-dom';
import * as styles from '../style.module.css';

const Nav = () => (
  <nav>
    <ul className={styles.links}>
      <Link to="./">
        {' '}
        <li>Home</li>
      </Link>
      <Link to="./App"><li>Calculator</li></Link>
      <Link to="./Quote">
        {' '}
        <li>Quote of the day</li>
      </Link>
    </ul>
  </nav>
);
export default Nav;
