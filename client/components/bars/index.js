/**
 * @file
 * Bars geometry
 */

import React, { Fragment } from 'react';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { coreTypes, barsTypes } from '../vv-prop-types';
import { coreDefaults, barsDefaults } from '../vv-default-props';

const Bars = (props) => {
  const {
    data, xVariable, yVariable, xScale, yScale,
  } = props;

  return (
    <Fragment>
      {data.map((d) => {
        const xPosition = xScale.range()[0];
        const yPosition = yScale(d[yVariable]);
        const width = xScale(d[xVariable]);
        const height = yScale.bandwidth();

        return (
          <Group key={`bar-${d[yVariable]}`}>
            <Bar x={xPosition} y={yPosition} width={width} height={height} className="vv-bar" fill="#ff1a66" />
          </Group>
        );
      })}
    </Fragment>
  );
};

Bars.propTypes = { ...barsTypes };
Bars.defaultProps = { ...barsDefaults };

export default Bars;
