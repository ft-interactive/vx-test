import { letterFrequency } from '@vx/mock-data';

export const vvCoreDefaultProps = {
  width: 700,
  height: 500,
  margin: {
    top: 20,
    right: 20,
    bottom: 23,
    left: 20,
  },
};

export const vvAxisDefaultProps = {};

export const vvBarsDefaultProps = {
  data: letterFrequency,
  xVariable: 'frequency',
  yVariable: 'letter',
};

export const barChartDefaultProps = {
  xAxisOrientation: 'bottom',
  yAxisOrientation: 'left',
};
