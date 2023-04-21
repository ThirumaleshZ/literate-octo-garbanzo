import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { MyButton } from '../../atoms/Button';
import BannerImg from '../../../../public/assets/icons/bannerImg.svg';
import styled from 'styled-components';
import Banner from '.';

const Cardstyle = styled.div`
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 259px;
  width: 700px;
`;

interface BannerProps {
  heading: string;
  subHeading: string;
  buttonLabel: string;
}

const BannerTemplate: Story<BannerProps> = (args) => (
  <Cardstyle>
    <Stack direction="row" paddingX="25px" paddingY="25px">
      <Stack direction="column" width="55%" height="20vh" spacing={2} >
        <Typography variant="h4" color="white">
          {args.heading}
        </Typography>
        <Typography variant="body1" color="white">
          {args.subHeading}
        </Typography>
        <MyButton
          name={args.buttonLabel}
          variant="outlined"
          width={140}
          height={40}
          color="white"
          border="1px solid white"
          
        />
      </Stack>
    </Stack>
  </Cardstyle>
);

export const BannerStory = BannerTemplate.bind({});
BannerStory.args = {
  heading: 'Congratulations you are ready to start!',
  subHeading: 'You are approved for funding. We are ready to advance you upto $8.8M',
  buttonLabel: 'Learn more',
};

export default {
  title: 'molecules/Banner',
  component: Banner,
} as Meta;
