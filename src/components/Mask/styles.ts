import { View } from 'react-native';
import { styled } from 'styled-components';

import { IMainCintainerMask } from './types';

export const MainContainer = styled(View)<IMainCintainerMask>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
