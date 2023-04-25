import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      fontSize: '15px',
      lineHeight: '18px',
      color: palette.text.disabled,
      left: '6px',
      '&[data-shrink="false"]': {
        marginTop: '-4px',
      },
      '&.Mui-focused': {
        color: palette.secondary.main,
      },
      '&.Mui-disabled': {
        color: palette.text.disabled,
      },
    },
    outlined: {
      '&[data-shrink="true"]': {
        marginTop: '4px',
      },
    },
  },
};
