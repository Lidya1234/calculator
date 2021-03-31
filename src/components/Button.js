import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

const Buttons = ({ buttonName }) => (
  <Button className="btn rounded-0 keys">{buttonName}</Button>
);

Buttons.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Buttons;
