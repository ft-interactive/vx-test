import PropTypes from 'prop-types';

export default {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  x: PropTypes.string,
  y: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.objectOf(PropTypes.number).isRequired,
};
