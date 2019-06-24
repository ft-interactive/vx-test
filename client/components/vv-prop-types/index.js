import PropTypes from 'prop-types';

export const marginProp = PropTypes.shape({
  left: PropTypes.number,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
});

export const xyProp = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
});

export default {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  x: PropTypes.string,
  y: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: marginProp.isRequired,
};
