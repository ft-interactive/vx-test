import { letterFrequency } from '@vx/mock-data';

export const vvCoreDefaults = {
  width: 700,
  height: 500,
  margin: {
    top: 20,
    right: 20,
    bottom: 23,
    left: 20,
  },
};

export const vvAxisDefaults = {};

export const vvBarsDefaults = {
  data: letterFrequency,
  xVariable: 'frequency',
  yVariable: 'letter',
};
