/**
 * @file
 * Bars geometry
 */

import React from 'react';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { barsTypes } from '../vv-prop-types';
import { barsDefaults } from '../vv-default-props';

const Bars = (props) => {
  const {
    data, xVariable, yVariable, xScale, yScale,
  } = props;

  return (
    <Group className="vv-bars">
      {data.map((d) => {
        const xPosition = xScale.range()[0];
        const yPosition = yScale(d[yVariable]);
        const width = xScale(d[xVariable]);
        const height = yScale.bandwidth();

        return <Bar key={`bar-${d[yVariable]}`} x={xPosition} y={yPosition} width={width} height={height} />;
      })}
    </Group>
  );
};

Bars.propTypes = { ...barsTypes };
Bars.defaultProps = { ...barsDefaults };

export default Bars;
