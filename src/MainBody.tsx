import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Drums from './pictures/drums.png';
import Guitar from './pictures/guitar.png';

const BodyBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  height: '100%',
  display: 'flex',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: '30%',
  display: 'flex',
  alignItems: 'center',

  ' img': {
    width: '100%',
    height: 'max-content',
  },
}));

const MainBody = () => {
  return (
    <BodyBox>
      <ContentBox>
        {/* <img src={Guitar} alt="guitar" /> */}
      </ContentBox>
      <Box display="flex" width="40%" textAlign="center">
        <Typography
          display="flex"
          fontFamily="Bradley Hand, cursive"
          color="primary.main"
          fontSize="45px"
          margin="auto"
          alignItems="center"
        >
          The C
          <Box>
            <img height="30px" src={Drums} alt="guitar" />
          </Box>
          <Box>
            <img height="30px" src={Guitar} alt="guitar" />
          </Box>
          erStar
        </Typography>
      </Box>
      <ContentBox>
        {/* <img src={Drums} alt="drum" /> */}
      </ContentBox>
    </BodyBox>
  );
};

export default MainBody;
