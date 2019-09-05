/**
 * @file
 * Line chart template
 */

import React from 'react';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max } from 'd3-array';
import { Group } from '@vx/group';
import VvLines from '../vv-lines';
import VvAxis from '../vv-axis';
import { vvCorePropTypes, lineChartPropTypes, vvLinesPropTypes } from '../vv-prop-types';
import { vvCoreDefaultProps, lineChartDefaultProps, vvLinesDefaultProps } from '../vv-default-props';

const LineChart = (props) => {
  const {
    data, xAxisOrientation, yAxisOrientation, xVariable, yVariable, width, height, margin,
  } = props;
  const dataAllSeries = data.reduce((acc, d) => acc.concat(d));
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const xScale = scaleTime({
    domain: extent(dataAllSeries, d => d[xVariable]),
    range: [0, innerWidth],
  });
  const yScale = scaleLinear({
    domain: [0, max(dataAllSeries, d => d[yVariable])],
    range: [innerHeight, 0],
  });

  return (
    <svg width={width} height={height}>
      <Group transform={`translate(${margin.left}, ${margin.top})`}>
        <VvLines data={data} xVariable={xVariable} yVariable={yVariable} xScale={xScale} yScale={yScale} />

        {/* y-axis */}
        <VvAxis orientation={yAxisOrientation} left={yAxisOrientation === 'left' ? 0 : innerWidth} scale={yScale} />

        {/* x-axis */}
        <VvAxis orientation={xAxisOrientation} top={xAxisOrientation === 'top' ? 0 : innerHeight} scale={xScale} />
      </Group>
    </svg>
  );
};

LineChart.propTypes = { ...vvCorePropTypes, ...lineChartPropTypes, ...vvLinesPropTypes };
LineChart.defaultProps = { ...vvCoreDefaultProps, ...lineChartDefaultProps, ...vvLinesDefaultProps };

export default LineChart;
