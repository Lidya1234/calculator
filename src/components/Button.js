import { PropTypes } from 'prop-types';
// import Button from 'react-bootstrap/Button';
import * as styles from '../style.module.css';

const Buttons = ({
  buttonName, color, wide, clickHandler,
}) => (
  <button
    type="button"
    className={`${styles.button}
                                    ${color ? styles.white : styles.color1}
                                    ${wide === 'true' ? styles.wide : styles.button}`}
    onClick={() => clickHandler({ buttonName })}
  >
    {buttonName}
  </button>
);

Buttons.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
};

export default Buttons;
