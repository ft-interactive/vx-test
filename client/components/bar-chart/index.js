/**
 * @file
 * Bar chart template
 */

import React from 'react';
import { scaleBand, scaleLinear } from '@vx/scale';
import { Group } from '@vx/group';
import Bars from '../bars';
import VvAxis from '../vv-axis';
import { coreTypes, barsTypes } from '../vv-prop-types';
import { coreDefaults, barsDefaults } from '../vv-default-props';

const BarChart = (props) => {
  const {
    data, xVariable, yVariable, width, height, margin,
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
        <Bars data={data} xVariable={xVariable} yVariable={yVariable} xScale={xScale} yScale={yScale} />

        <VvAxis scale={xScale} top={innerHeight} />
      </Group>
    </svg>
  );
};

BarChart.propTypes = { ...coreTypes, ...barsTypes };
BarChart.defaultProps = { ...coreDefaults, ...barsDefaults };

export default BarChart;
