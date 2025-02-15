import { View, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styled } from 'styled-components';

import { IStyledImage } from './types';

export const ImageWrapper = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)<IStyledImage>`
  width: ${wp(15)};
  height: ${hp(7)}px;
  padding: 2px;
  border-radius: 99px;
  border-width: ${({ selected }) => (selected ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;

export const LabelContainer = styled(View)`
  justify-content: center;
`;
