/**
 * @file
 * Social chartframe
 */

import React from 'react';
import PropTypes from 'prop-types';
import Group from '@vx/group';
import { StyleSheet, css } from 'aphrodite';
import VVProps, { marginProp, xyProp } from '../vv-prop-types';
import styles from '../../styles';
import ChartFrame from './base';

const ChartFrameSocial = () => <ChartFrame type="social" />;

export default ChartFrameSocial;
