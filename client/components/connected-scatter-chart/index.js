/**
 * @file
 * Scatter chart template
 */

import React from 'react';
import PropTypes from 'prop-types';
import { scaleLinear, scalePower } from '@vx/scale';
import { extent, max } from 'd3-array';
import { Group } from '@vx/group';
import VvLines from '../vv-lines';
import VvDots from '../vv-dots';
import VvAxis from '../vv-axis';
import { vvCorePropTypes } from '../vv-prop-types';
import { vvCoreDefaultProps } from '../vv-default-props';

const ConnectedScatterChart = (props) => {
  const {
    data, width, height, margin, xAxisOrientation, yAxisOrientation, xVariable, yVariable, sizeVariable,
  } = props;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const xScale = scaleLinear({
    domain: extent(data, d => d[xVariable]),
    range: [0, innerWidth],
  });
  const yScale = scaleLinear({
    domain: extent(data, d => d[yVariable]),
    range: [innerHeight, 0],
  });
  const sizeScale = scalePower({
    domain: extent(data, d => d[sizeVariable]),
    range: [5, 10],
    exponent: 0.5,
  });

  return (
    <svg width={width} height={height}>
      <Group transform={`translate(${margin.left}, ${margin.top})`}>
        <VvDots
          data={data}
          xScale={xScale}
          yScale={yScale}
          sizeScale={sizeScale}
          xVariable={xVariable}
          yVariable={yVariable}
          sizeVariable={sizeVariable}
        />

        <VvLines data={[data]} xVariable={xVariable} yVariable={yVariable} xScale={xScale} yScale={yScale} />

        {/* y-axis */}
        <VvAxis orientation={yAxisOrientation} left={yAxisOrientation === 'left' ? 0 : innerWidth} scale={yScale} />

        {/* x-axis */}
        <VvAxis orientation={xAxisOrientation} top={xAxisOrientation === 'top' ? 0 : innerHeight} scale={xScale} />
      </Group>
    </svg>
  );
};

ConnectedScatterChart.propTypes = {
  ...vvCorePropTypes,
  data: PropTypes.arrayOf(PropTypes.any),
  xVariable: PropTypes.string,
  yVariable: PropTypes.string,
  xAxisOrientation: PropTypes.string,
  yAxisOrientation: PropTypes.string,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
};

ConnectedScatterChart.defaultProps = {
  ...vvCoreDefaultProps,
  data: [],
  xVariable: 'date',
  yVariable: 'value',
  xScale: () => {},
  yScale: () => {},
  xAxisOrientation: 'bottom',
  yAxisOrientation: 'left',
};

export default ConnectedScatterChart;
