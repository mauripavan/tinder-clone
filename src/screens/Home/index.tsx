import React from 'react';
import { TextH1 } from '@components/Typography';
import Check from '@assets/icons/check.svg';
import CheckRound from '@assets/icons/check-round.svg';
import theme from '@theme/index';

import { MainContainer } from './styles';

function HomeScreen() {
  return (
    <MainContainer>
      <TextH1>Home Screen</TextH1>
      <Check width={140} height={140} fill={theme.colors.white} />
      <CheckRound width={140} height={140} fill={theme.colors.white} />
    </MainContainer>
  );
}

export default HomeScreen;
