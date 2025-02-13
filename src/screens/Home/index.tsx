import React from 'react';
import { Text } from 'react-native';

import { MainContainer } from './styles';

function HomeScreen() {
  return (
    <MainContainer>
      <Text style={{ fontFamily: 'Inter_900Black' }}>Home Screen</Text>
    </MainContainer>
  );
}

export default HomeScreen;
