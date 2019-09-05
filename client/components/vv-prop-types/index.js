import PropTypes from 'prop-types';

export const vvCorePropTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.objectOf(PropTypes.number).isRequired,
};

// @vx/axis (https://vx-demo.now.sh/static/docs/vx-axis.html)
export const vvAxisPropTypes = {
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
  orientation: PropTypes.string, // Tick orientation. Only applies to <Axis />
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

export const vvBarsPropTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  xVariable: PropTypes.string.isRequired,
  yVariable: PropTypes.string.isRequired,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
};

export const barChartPropTypes = {
  xAxisOrientation: PropTypes.string.isRequired,
  yAxisOrientation: PropTypes.string.isRequired,
};
