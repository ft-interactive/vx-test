/**
 * @file
 * Columns geometry
 */

import React from 'react';
import { scaleBand, scaleLinear } from '@vx/scale';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { letterFrequency } from '@vx/mock-data';
import propTypes from '../vv-prop-types';
import defaultProps from '../vv-default-props';
import Chart from '../vv-chartframe';

const Columns = (props) => {
  const {
    data, x, y, width, height, margin,
  } = props;
  const xBound = width - margin.left - margin.right;
  const yBound = height - margin.top - margin.bottom;
  const xScale = scaleBand({
    rangeRound: [0, xBound],
    domain: data.map(d => d[x]),
    padding: 0.4,
  });
  const yScale = scaleLinear({
    rangeRound: [yBound, 0],
    domain: [0, Math.max(...data.map(d => d[y]))],
  });

  return (
    <Chart type="l">
      {data.map((d) => {
        const xPosition = xScale(d[x]);
        const yPosition = yBound - yScale(d[y]);

        return (
          <Group key={`bar-${d[x]}`}>
            <Bar
              x={xPosition}
              y={yBound - yPosition}
              height={yPosition}
              width={xScale.bandwidth()}
              className="vv-bar"
              fill="#fc2e1c"
            />
          </Group>
        );
      })}
    </Chart>
  );
};

Columns.propTypes = propTypes;
Columns.defaultProps = {
  data: letterFrequency,
  x: 'letter',
  y: 'frequency',
  ...defaultProps,
};

export default Columns;
