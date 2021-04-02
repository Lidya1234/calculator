import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

const Buttons = ({ buttonName, clickHandler }) => (
  <Button className="btn rounded-0 keys" onClick={() => clickHandler({ buttonName })}>{buttonName}</Button>
);

Buttons.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Buttons;
