import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    result
  );
};

Display.protoTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
