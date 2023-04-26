import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  maxHeight: '42px',
  height: '100%',
}));

const MainFooter = () => {
  return <FooterBox>FOOTER</FooterBox>;
};

export default MainFooter;
