import React from 'react';
import {
  TextRegular,
  TextBold,
  TextH1,
  TextH2,
  TextH3,
  TextH4,
} from '@components/Typography';

import { MainContainer } from './styles';

function HomeScreen() {
  return (
    <MainContainer>
      <TextH1>Home Screen</TextH1>
      <TextH2>Home Screen</TextH2>
      <TextH3>Home Screen</TextH3>
      <TextH4>Home Screen</TextH4>
      <TextBold>Home Screen</TextBold>
      <TextRegular>Home Screen</TextRegular>
    </MainContainer>
  );
}

export default HomeScreen;
