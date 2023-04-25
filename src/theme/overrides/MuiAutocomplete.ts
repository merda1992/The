import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      '& .MuiAutocomplete-inputRoot.MuiOutlinedInput-root': {
        padding: 0,
        '& .MuiAutocomplete-input': {
          padding: '12px 20px',
        },
      },
    },
    clearIndicator: {
      color: palette.secondary.main,
    },
  },
};
