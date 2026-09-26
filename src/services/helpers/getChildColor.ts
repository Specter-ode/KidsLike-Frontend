const CHILD_COLORS = ['#FFBC33', '#3E7ADC', '#8EC63F', '#FF4965', '#9B6DD6', '#20B2AA'];
const UNKNOWN_CHILD_COLOR = '#A6ABB9';

export const getChildColor = (childIndex: number): string =>
  childIndex < 0 ? UNKNOWN_CHILD_COLOR : CHILD_COLORS[childIndex % CHILD_COLORS.length];
