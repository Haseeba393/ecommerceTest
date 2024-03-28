import {T_APP_COLORS} from './types';

export const lightTheme: T_APP_COLORS = {
  dark: false,
  colors: {
    primary: '#428af5',
    background: '#fff',
    card: '#e9eff2',
    text: '#222',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const darkTheme: T_APP_COLORS = {
  dark: true,
  colors: {
    primary: '#428af5',
    background: '#000',
    card: '#e9eff2',
    text: '#fff',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
