import React from 'react';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import Logo from './Logo';
import Category from './Category';

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

const TypographyBox = styled(Box)(() => ({
  marginLeft: '20px',
  cursor: 'pointer',
}));

const IconsSoc = [FacebookIcon, YouTubeIcon, TwitterIcon, InstagramIcon, TelegramIcon];

const MainHeader = () => {
  const handleClickByLink = (url: string) => window.open(url);

  return (
    <HeaderBox>
      <Box display="flex" alignItems="center">
        <Logo fontSize="18px" imgHeight="16px" fontFamily="fantasy" marginRight="5px" otherColorText />
        {IconsSoc.map((Icon, idx) => (
          <IconBox key={idx} onClick={() => handleClickByLink('https://vk.com')}>
            <Icon fontSize="large" />
          </IconBox>
        ))}
      </Box>
      <Box display="flex" alignItems="center">
        {['Search', 'Rating', 'Category', 'Sign up'].map((item, idx) =>
          item !== 'Category' ? (
            <TypographyBox key={idx}>
              <Typography fontFamily="fantasy" whiteSpace="nowrap" fontWeight="600" color="primary.main">
                {item}
              </Typography>
            </TypographyBox>
          ) : (
            <Category key={idx} />
          ),
        )}
      </Box>
    </HeaderBox>
  );
};

export default MainHeader;
