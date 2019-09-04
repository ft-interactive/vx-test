/**
 * @file
 * Bars geometry
 */

import React from 'react';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { vvBarsPropTypes } from '../vv-prop-types';
import { vvBarsDefaults } from '../vv-default-props';

const VvBars = (props) => {
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

VvBars.propTypes = { ...vvBarsPropTypes };
VvBars.defaultProps = { ...vvBarsDefaults };

export default VvBars;
