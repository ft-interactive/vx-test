/**
 * @file
 * vv-axis
 */

import React from 'react';
import {
  Axis, AxisTop, AxisRight, AxisBottom, AxisLeft,
} from '@vx/axis';
import { vvAxisPropTypes } from '../vv-prop-types';
import { vvAxisDefaults } from '../vv-default-props';

const VvAxis = (props) => {
  const { orientation } = props;

  switch (orientation) {
    case 'top':
      return <AxisTop {...props} />;
    case 'right':
      return <AxisRight {...props} />;
    case 'bottom':
      return <AxisBottom {...props} />;
    case 'left':
      return <AxisLeft {...props} />;
    default:
      return <Axis {...props} />;
  }
};

VvAxis.propTypes = vvAxisPropTypes;
VvAxis.defaultProps = vvAxisDefaults;

export default VvAxis;
