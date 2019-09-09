import React from 'react';
import PropTypes from 'prop-types';
import { Group } from '@vx/group';
import { Circle } from '@vx/shape';

const VvDots = (props) => {
  const {
    data, xVariable, yVariable, sizeVariable, xScale, yScale, sizeScale,
  } = props;
  return (
    <Group>
      {data.map((point, i) => {
        const cx = xScale(point[xVariable]);
        const cy = yScale(point[yVariable]);
        const r = sizeScale(point[sizeVariable]);
        const fill = '#ffcc00';

        return (
          <Circle
            key={`point-${i}`} // eslint-disable-line react/no-array-index-key
            className="dot"
            cx={cx}
            cy={cy}
            r={r}
            fill={fill}
          />
        );
      })}
    </Group>
  );
};

VvDots.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  xVariable: PropTypes.string.isRequired,
  yVariable: PropTypes.string.isRequired,
  sizeVariable: PropTypes.string.isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  sizeScale: PropTypes.func.isRequired,
};

export default VvDots;
