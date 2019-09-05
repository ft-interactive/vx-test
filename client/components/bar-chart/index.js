/**
 * @file
 * Bar chart template
 */

import React from 'react';
import { scaleBand, scaleLinear } from '@vx/scale';
import { Group } from '@vx/group';
import VvBars from '../vv-bars';
import VvAxis from '../vv-axis';
import { vvCorePropTypes, vvBarsPropTypes } from '../vv-prop-types';
import { vvCoreDefaultProps, vvBarsDefaultProps } from '../vv-default-props';

const BarChart = (props) => {
  const {
    data, xAxisOrientation, yAxisOrientation, xVariable, yVariable, width, height, margin,
  } = props;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const xScale = scaleLinear({
    rangeRound: [0, innerWidth],
    domain: [0, Math.max(...data.map(d => d[xVariable]))],
  });
  const yScale = scaleBand({
    rangeRound: [0, innerHeight],
    domain: data.map(d => d[yVariable]),
    padding: 0.1,
  });

  return (
    <svg width={width} height={height}>
      <Group transform={`translate(${margin.left}, ${margin.top})`}>
        <VvBars data={data} xVariable={xVariable} yVariable={yVariable} xScale={xScale} yScale={yScale} />

        {/* y-axis */}
        <VvAxis orientation={yAxisOrientation} left={yAxisOrientation === 'left' ? 0 : innerWidth} scale={yScale} />

        {/* x-axis */}
        <VvAxis orientation={xAxisOrientation} top={xAxisOrientation === 'top' ? 0 : innerHeight} scale={xScale} />
      </Group>
    </svg>
  );
};

BarChart.propTypes = { ...vvCorePropTypes, ...vvBarsPropTypes };
BarChart.defaultProps = { ...vvCoreDefaultProps, ...vvBarsDefaultProps };

export default BarChart;
