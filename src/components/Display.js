import { PropTypes } from 'prop-types';
import * as styles from '../style.module.css';

const Display = ({ total, next, operation }) => (
  <>
    <div className={styles.display}>
      <h1>
        {total}
        {operation}
        {next}
      </h1>
    </div>
  </>
);

Display.defaultProps = {
  total: '0',
  next: null,
  operation: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,

};

export default Display;
