import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  maxHeight: '42px',
  height: '100%',
  display: 'flex',
  padding: '10px',
  justifyContent: 'space-between',
}));

const IconBox = styled(Box)(({ theme }) => ({
  marginLeft: '10px',
  cursor: 'pointer',

  ' svg': {
    height: '30px',
    width: '30px',
    color: theme.palette.primary.main,
  },
}));

const MainHeader = () => {
  const handleClickByLink = (url: string) => window.open(url);

  return (
    <HeaderBox>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography fontFamily="fantasy" fontWeight="500" color="#ffcc00">
            The COverStar
          </Typography>
        </Box>
        <IconBox onClick={() => handleClickByLink('https://vk.com')}>
          <FacebookIcon fontSize="large" />
        </IconBox>
        <IconBox onClick={() => handleClickByLink('https://vk.com')}>
          <YouTubeIcon fontSize="large" />
        </IconBox>
        <IconBox onClick={() => handleClickByLink('https://vk.com')}>
          <TwitterIcon fontSize="large" />
        </IconBox>
        <IconBox onClick={() => handleClickByLink('https://vk.com')}>
          <InstagramIcon fontSize="large" />
        </IconBox>
        <IconBox onClick={() => handleClickByLink('https://vk.com')}>
          <TelegramIcon fontSize="large" />
        </IconBox>
      </Box>
      <Box>fgf</Box>
    </HeaderBox>
  );
};

export default MainHeader;
