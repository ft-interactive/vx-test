import PropTypes from 'prop-types';

export const coreTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.objectOf(PropTypes.number).isRequired,
};

// @vx/axis (https://vx-demo.now.sh/static/docs/vx-axis.html)
export const axisTypes = {
  axisClassName: PropTypes.string,
  axisLineClassName: PropTypes.string,
  children: PropTypes.func,
  hideAxisLine: PropTypes.bool,
  hideTicks: PropTypes.bool,
  hideZero: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  labelOffset: PropTypes.number,
  labelProps: PropTypes.func,
  left: PropTypes.number,
  numTicks: PropTypes.number,
  orientation: PropTypes.string, // Only applies to <Axis />
  rangePadding: PropTypes.number,
  scale: PropTypes.func.isRequired,
  stroke: PropTypes.string,
  strokeDasharray: PropTypes.string,
  strokeWidth: PropTypes.number,
  tickClassName: PropTypes.string,
  tickComponent: PropTypes.func,
  tickFormat: PropTypes.func,
  tickLabelProps: PropTypes.func,
  tickLength: PropTypes.number,
  tickStroke: PropTypes.string,
  tickTransform: PropTypes.string,
  tickValues: PropTypes.array,
  top: PropTypes.number,
};

export const barsTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  xVariable: PropTypes.string.isRequired,
  yVariable: PropTypes.string.isRequired,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
};
