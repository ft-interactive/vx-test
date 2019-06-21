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

const Columns = (props) => {
  const {
    data, xVariable, yVariable, width, height, margin,
  } = props;
  const xBound = width - margin.left - margin.right;
  const yBound = height - margin.top - margin.bottom;
  const xScale = scaleBand({
    rangeRound: [0, xBound],
    domain: data.map(d => d[xVariable]),
    padding: 0.4,
  });
  const yScale = scaleLinear({
    rangeRound: [yBound, 0],
    domain: [0, Math.max(...data.map(d => d[yVariable]))],
  });

  return (
    <svg width={width} height={height}>
      {data.map((d) => {
        const xPosition = xScale(d[xVariable]);
        const yPosition = yBound - yScale(d[yVariable]);

        return (
          <Group key={`bar-${d[xVariable]}`}>
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
    </svg>
  );
};

Columns.propTypes = propTypes;
Columns.defaultProps = {
  data: letterFrequency,
  xVariable: 'letter',
  yVariable: 'frequency',
  ...defaultProps,
};

export default Columns;
