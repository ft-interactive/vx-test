/**
 * @file
 * Attempt to replicate g-chartframe using vx
 */

import React from 'react';
import PropTypes from 'prop-types';
import Group from '@vx/group';
import { StyleSheet, css } from 'aphrodite';
import VVProps, { marginProp, xyProp } from '../vv-prop-types';
import styles from '../../styles';
import ChartFrameL from './l';
import ChartFrameM from './m';
import ChartFrameS from './s';
import ChartFramePrint from './print';
import ChartFrameSocial from './social';
import ChartFrameVideo from './video';

const Chart = ({ type, ...props }) => {
  switch (type.toLowerCase()) {
    case 'webs':
    case 's':
      return <ChartFrameS {...props} />;
    case 'webm':
    case 'm':
    default:
      return <ChartFrameM {...props} />;
    case 'webl':
    case 'l':
      return <ChartFrameL {...props} />;
    case 'print':
      return <ChartFramePrint {...props} />;
    case 'social':
      return <ChartFrameSocial {...props} />;
    case 'video':
      return <ChartFrameVideo {...props} />;
  }
};

Chart.propTypes = {
  type: PropTypes.oneOf(['print', 'social', 'video', 'webL', 'webM', 'webS', 's', 'm', 'l']),
};

Chart.defaultProps = {
  type: 'm',
};

export default Chart;
