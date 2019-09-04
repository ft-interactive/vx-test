import { letterFrequency } from '@vx/mock-data';

export const coreDefaults = {
  width: 700,
  height: 500,
  margin: {
    top: 20,
    right: 10,
    bottom: 20,
    left: 10,
  },
};

export const axisDefaults = {};

export const barsDefaults = {
  data: letterFrequency,
  xVariable: 'frequency',
  yVariable: 'letter',
};
