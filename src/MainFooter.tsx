import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.common.black,
  maxHeight: '42px',
  height: '100%',
  justifyContent: 'space-between',
}));

const MainFooter = () => {
  return (
    <FooterBox>
      <Box pl="20px">
        <Typography fontFamily="fantasy" fontSize="15px" fontWeight="400" color="primary.main">
          copyright © 2023 Coverstar, Inc.
        </Typography>
      </Box>
      <Box pr="20px">
        <Link
          href="mailto:merda@tut.by"
          sx={{ textDecoration: 'none', fontFamily: 'fantasy', fontSize: '15px', fontWeight: 400 }}
          color="primary.main"
        >
          contact us
        </Link>
      </Box>
    </FooterBox>
  );
};

export default MainFooter;
