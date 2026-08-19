export interface CardTransform {
  x: string[];
  y: number[];
  scale: number[];
  opacity: number[];
  z: number[];
}

export const SCROLL_KEYS = [0, 0.5, 1];

export const DESKTOP_TRANSFORMS: CardTransform[] = [
  {
    x: ["0%", "-20%", "-30%"],
    y: [0, -10, -18],
    scale: [1, 0.88, 0.76],
    opacity: [1, 0.6, 0.4],
    z: [30, 10, 5],
  },
  {
    x: ["16%", "0%", "-20%"],
    y: [14, 0, -10],
    scale: [0.9, 1, 0.88],
    opacity: [0.65, 1, 0.6],
    z: [20, 30, 10],
  },
  {
    x: ["26%", "16%", "0%"],
    y: [24, 14, 0],
    scale: [0.78, 0.9, 1],
    opacity: [0.5, 0.65, 1],
    z: [10, 20, 30],
  },
];

export const MOBILE_TRANSFORMS: CardTransform[] = [
  {
    x: ["0%", "-8%", "-14%"],
    y: [0, -6, -12],
    scale: [1, 0.87, 0.76],
    opacity: [1, 0.55, 0.35],
    z: [30, 10, 5],
  },
  {
    x: ["8%", "0%", "-8%"],
    y: [14, 0, -6],
    scale: [0.89, 1, 0.87],
    opacity: [0.6, 1, 0.55],
    z: [20, 30, 10],
  },
  {
    x: ["14%", "8%", "0%"],
    y: [24, 14, 0],
    scale: [0.78, 0.89, 1],
    opacity: [0.4, 0.6, 1],
    z: [10, 20, 30],
  },
];

export const TRANSFORMS = {
  desktop: DESKTOP_TRANSFORMS,
  mobile: MOBILE_TRANSFORMS,
};
