import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      width: 'auto',
      minWidth: '210px',

      svg: {
        color: palette.primary.main,
      },

      input: {
        fontFamily: 'fantasy',
      },

      '& .MuiAutocomplete-popper': {
        backgroundColor: 'red',
      },

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
