import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName } = props;
  return (
    buttonName
  );
};

Button.protoTypes = {
  buttonname: PropTypes.string.isRequired,
};

export default Button;
