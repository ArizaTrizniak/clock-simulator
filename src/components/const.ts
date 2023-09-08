const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;
export const CLOCK_SIZE = Math.min(windowInnerWidth, windowInnerHeight) * 0.7;
export const CLOCK_RADIUS = CLOCK_SIZE / 2;