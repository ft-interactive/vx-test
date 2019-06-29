/**
 * @file
 * Base frame that everything extends.
 * @nb You probably don't want to use this by itself.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Group from '@vx/group';
import { css } from 'aphrodite';
import VVProps, { marginProp, xyProp } from '../vv-prop-types';
import styles from '../../styles';

const ChartFrame = ({
  width,
  height,
  background,
  type,
  title,
  description,
  subtitle,
  margin,
  children,
  accentBar,
  titlePosition,
  titleLineHeight,
  subtitlePosition,
  subtitleLineHeight,
  source,
  sourcePosition,
  sourceLineHeight,
  sourcePlotYOffset,
}) => (
  <svg
    className={css(styles[`ft-webgraphic-${type}`], styles.svg)}
    fontFamily="MetricWeb,sans-serif"
    role="img"
    width="1180"
    height="700"
    viewBox="0 0 1180 700"
    ariaLabelledby={`ft-webgraphic-${type}__chart-a11y-title ft-webgraphic-${type}__chart-a11y-desc`}
  >
    <title dataId={`ft-webgraphic-${type}__chart-a11y-title`}>
      {title}
    </title>
    <desc dataId={`ft-webgraphic-${type}__chart-a11y-desc`}>
      {description}
    </desc>
    {background && (
      <rect role="presentation" dataId="chart-background" x="0" y="0" width={width} height={height} fill={background} />
    )}
    {accentBar && <rect dataId="black-bar" width="60" height="4" fill={accentBar} />}
    <text dataId={`ft-webgraphic-${type}title`}>
      {title
        ? title.split('|').map((line, idx) => (
          <tspan
            y={titlePosition.y + idx * titleLineHeight}
            x={titlePosition.x}
            fontSize="28"
            fontFamily="MetricWeb,sans-serif"
            fontWeight="400"
            fill="#000"
          >
            {line}
          </tspan>
        ))
        : null}
    </text>
    <text dataId={`ft-webgraphic-${type}subtitle`} className="chart-subtitle">
      {subtitle
        ? subtitle.split('|').map((line, idx) => (
          <tspan
            dataId={`ft-webgraphic-${type}subtitle`}
            y={
                title && title.split('|').length > 1
                  ? titlePosition.y + title.split('|').length * titleLineHeight + subtitleLineHeight * idx
                  : subtitlePosition.y + idx * subtitleLineHeight
              }
            x={subtitlePosition.x}
            fontSize="18"
            fontFamily="MetricWeb,sans-serif"
            fill="#66605C"
          >
            {line}
          </tspan>
        ))
        : null}
    </text>
    <text className="chart-source" dataId={`ft-webgraphic-${type}source`}>
      {source
        ? source.split('|').map((line, idx) => (
          <tspan
            dataId={`ft-webgraphic-${type}source`}
            y={
                sourcePosition.y
                  ? sourcePosition.y + idx * sourceLineHeight
                  : height - (margin.bottom - sourcePlotYOffset) + sourceLineHeight * 1.5 + idx * sourceLineHeight
              }
            x={sourcePosition.x}
            fontSize="16px"
            fontFamily="MetricWeb,sans-serif"
            fill="#66605C"
          >
            {line}
          </tspan>
        ))
        : null}
    </text>
    <text dataId="chart-copyright">
      <tspan
        x={sourcePosition.x}
        y={
          source && source.split('|').length > 1
            ? height
              - (margin.bottom - sourcePlotYOffset)
              + sourceLineHeight * 1.125
              + source.split('|').length * sourceLineHeight * 1.2
            : height - (margin.bottom - sourcePlotYOffset) + sourceLineHeight * 2.5
        }
        fontSize="16px"
        fontStyle="italic"
        fontFamily="MetricWeb,sans-serif"
        fill="#66605C"
      >
        © FT
      </tspan>
    </text>
    <Group className="chart-plot" transform={`translate(${margin.left},${margin.top})`} role="presentation">
      {children}
    </Group>
  </svg>
);

ChartFrame.propTypes = {
  accentBar: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  height: PropTypes.number,
  margin: marginProp,
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  sourceLineHeight: PropTypes.number,
  sourcePlotYOffset: PropTypes.number,
  sourcePosition: xyProp,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  subtitleLineHeight: PropTypes.number,
  subtitlePosition: xyProp,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  titleLineHeight: PropTypes.number,
  titlePosition: xyProp,
  type: PropTypes.oneOf(['print', 'social', 'video', 's', 'm', 'l', 'webS', 'webM', 'webL']),
  width: PropTypes.number,
};

ChartFrame.defaultProps = {
  accentBar: '#000000',
  background: '#FFF1E0',
  height: 400,
  margin: {
    bottom: 20,
    left: 1,
    right: 20,
    top: 100,
  },
  source: 'Source: research',
  sourceLineHeight: 16,
  sourcePlotYOffset: 46,
  sourcePosition: {
    x: 1,
  },
  subtitle: 'some supporting information, units perhaps',
  subtitleLineHeight: 20,
  subtitlePosition: {
    x: 1,
    y: 67,
  },
  title: 'Title: A description of the charts purpose',
  titleLineHeight: 32,
  titlePosition: {
    x: 1,
    y: 30,
  },
  type: 'm',
  width: 500,
};

export default ChartFrame;
