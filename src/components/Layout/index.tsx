import React from 'react';
import Vector from '@assets/images/vector.png';

import {
  BackgroundGradient,
  CustomImageBackground,
  MainContainer,
} from './styles';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({
  children,
  gradientColor,
  backgroundColor,
  isGradient,
}) => (
  <MainContainer>
    {isGradient ? (
      <>
        <BackgroundGradient
          colors={gradientColor as [string, string, ...string[]]}
        />
        <CustomImageBackground source={Vector} resizeMode="cover">
          {children}
        </CustomImageBackground>
      </>
    ) : (
      <MainContainer color={backgroundColor}>{children}</MainContainer>
    )}
  </MainContainer>
);
export default React.memo(Layout);
