import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

const Buttons = ({ buttonName, color, clickHandler }) => (
  <Button className={`btn rounded-0 keys btn-${color}`} onClick={() => clickHandler({ buttonName })}>{buttonName}</Button>
);

Buttons.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Buttons;
