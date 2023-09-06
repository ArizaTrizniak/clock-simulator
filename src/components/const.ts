const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;
export const CLOCK_SIZE = Math.min(windowInnerWidth, windowInnerHeight) * 0.8;
export const CLOCK_RADIUS = CLOCK_SIZE / 2;
export const CLOCK_HAND_HOUR_WIDTH = 20;
export const CLOCK_HAND_MINUTE_WIDTH = 10;