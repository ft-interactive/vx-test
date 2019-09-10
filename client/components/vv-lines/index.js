/**
 * @file
 * Lines geometry
 */

import React from 'react';
import { Group } from '@vx/group';
import { LinePath } from '@vx/shape';
import { vvLinesPropTypes } from '../vv-prop-types';
import { vvLinesDefaultProps } from '../vv-default-props';

const VvLines = (props) => {
  const {
    data, xVariable, yVariable, xScale, yScale,
  } = props;

  return (
    <Group className="vv-lines">
      {data.map((d, i) => {
        const xPosition = datum => xScale(datum[xVariable]);
        const yPosition = datum => yScale(datum[yVariable]);

        return (
          <LinePath
            key={`line-${i}`} // eslint-disable-line react/no-array-index-key
            data={d}
            x={d => xPosition(d)}
            y={d => yPosition(d)}
            stroke="#000000"
            strokeWidth={3}
          />
        );
      })}
    </Group>
  );
};

VvLines.propTypes = { ...vvLinesPropTypes };
VvLines.defaultProps = { ...vvLinesDefaultProps };

export default VvLines;
