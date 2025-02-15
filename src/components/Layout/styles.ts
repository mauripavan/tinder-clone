import { ImageBackground, View } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

import { IMainLayoutContainer } from './types';

export const MainContainer = styled(View)<IMainLayoutContainer>`
  flex: 1;
  background-color: ${({ theme, color }) => color || theme.colors.primary};
  padding-top: ${({ isGradient }) =>
    (isGradient ? 0 : Constants.statusBarHeight + 5)}px;
`;

export const BackgroundGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const CustomImageBackground = styled(ImageBackground)`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 5}px;
`;
