import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Drums from './pictures/drums.png';
import Guitar from './pictures/guitar.png';

interface LogoProps {
  width?: string;
  imgHeight?: string;
  fontSize?: string;
  fontFamily?: string;
  marginRight?: string;
  openSiteButton?: boolean;
}

const Logo = ({
  imgHeight = '30px',
  fontSize = '45px',
  width = '40%',
  fontFamily = 'Bradley Hand, cursive',
  marginRight,
  openSiteButton,
}: LogoProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width={width}
      textAlign="center"
      mr={marginRight}
    >
      <Typography
        display="flex"
        fontFamily={fontFamily}
        color="primary.main"
        fontSize={fontSize}
        margin="0 auto"
        alignItems="center"
      >
        The C
        <Box>
          <img height={imgHeight} src={Drums} alt="guitar" />
        </Box>
        <Box>
          <img height={imgHeight} src={Guitar} alt="guitar" />
        </Box>
        erStar
      </Typography>
      {openSiteButton && (
        <Box mt="30px">
          <Button sx={{ backgroundColor: 'red', color: 'white', fontWeight: 600 }}>Welcome to The CoverStar</Button>
        </Box>
      )}
    </Box>
  );
};

export default Logo;
