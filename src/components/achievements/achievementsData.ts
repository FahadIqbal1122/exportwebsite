export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  duration: number;
}

export const achievements: Achievement[] = [
  {
    value: 1,
    suffix: 'B USD',
    label: 'Value of Exports since inception',
    duration: 2000,
  },
  {
    value: 50,
    suffix: '+',
    label: 'International and local partnerships',
    duration: 1500,
  },
  {
    value: 98,
    suffix: '+',
    label: 'Accessed Markets',
    duration: 1500,
  },
  {
    value: 20,
    suffix: '+',
    label: 'Local and international Awards',
    duration: 1000,
  },
];