import PropTypes from 'prop-types';

const Buttons = (buttonName) => (

  <button type="button"> {buttonName} </button>

);

Buttons.protoTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Buttons;
