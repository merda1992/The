import React from 'react';

import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainBody from './MainBody';

import { Box } from '@mui/material';

function App() {
  return (
    <Box display="flex" height="100vh" flexDirection="column" justifyContent="space-between">
      <MainHeader />
      <MainBody />
      <MainFooter />
    </Box>
  );
}

export default App;
