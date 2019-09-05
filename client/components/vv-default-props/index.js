import { letterFrequency, genDateValue } from '@vx/mock-data';

const genLines = num => new Array(num).fill(1).map(() => genDateValue(25));

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

export const vvLinesDefaultProps = {
  data: genLines(3), // Generates 3 x date-value series
  xVariable: 'date',
  yVariable: 'value',
};

export const barChartDefaultProps = {
  xAxisOrientation: 'bottom',
  yAxisOrientation: 'left',
};

export const lineChartDefaultProps = {
  xAxisOrientation: 'bottom',
  yAxisOrientation: 'left',
};
