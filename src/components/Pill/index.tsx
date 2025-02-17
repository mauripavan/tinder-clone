import React from 'react';
import { TextBold } from '@components/Typography';
import theme from '@theme/index';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import { IPill } from './types';
import { GradientBackground, MainContainer } from './styles';

const Pill: React.FC<IPill> = ({ text }) => {
  const backgroundGradient = useSelector(
    (state: RootState) => state.background,
  );

  return (
    <MainContainer key={text}>
      <GradientBackground colors={backgroundGradient.gradientColors}>
        <TextBold style={{ fontSize: 16 }} color={theme.colors.white}>
          {text}
        </TextBold>
      </GradientBackground>
    </MainContainer>
  );
};

export default React.memo(Pill);
