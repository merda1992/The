import { Palette } from "@mui/material";

export default {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: {
    light: '#1E90FF',
    main: "#ffcc00",
    dark: 'linear-gradient(90deg, #F16152 0%, #F99746 40.1%, #BBC9DF 59.9%)',
    contrastText: 'rgba(66, 92, 116, 0.5)',
  },
  secondary: {
    main: '#FFB472',
    dark: '#FEA351',
    light: '#F38D32',
    contrastText: '#F2994A',
  },
  warning: {
    main: '#FCD14F',
    light: '#FFF8E5',
  },
  info: {
    main: '#F2994A',
    dark: 'linear-gradient(270deg, #F89048 0%, #F26651 100%)',
    light: 'linear-gradient(90deg, #F16152 0%, #F99746 100%)',
    contrastText: '#f89048',
  },
  success: {
    main: '#50C594',
    light: '#E5F6EF',
    contrastText: '#F16152',
  },
  error: {
    main: '#DA4848',
    light: '#FDE7E7',
    dark: 'rgba(46, 96, 170, 0.25)',
    contrastText: '#f6f7fa',
  },
  text: {
    primary: '#10102D',
    secondary: '#425C74',
    disabled: '#BBC9DF',
  },
  background: {
    default: '#F1F5F9',
  },
  action: {
    hover: 'rgba(16, 16, 45, .8)',
    disabled: '#BBC9DF',
    disabledBackground: '#BBC9DF',
    disabledOpacity: 1,
  },
} as Palette;
