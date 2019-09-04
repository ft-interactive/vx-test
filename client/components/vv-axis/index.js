/**
 * @file
 * vv-axis
 */

import React from 'react';
import { Axis } from '@vx/axis';
import { axisTypes } from '../vv-prop-types';
import { axisDefaults } from '../vv-default-props';

const VvAxis = (props) => {
  const { scale } = props;

  return <Axis scale={scale} {...props} />;
};

VvAxis.propTypes = axisTypes;
VvAxis.defaultProps = axisDefaults;

export default VvAxis;
