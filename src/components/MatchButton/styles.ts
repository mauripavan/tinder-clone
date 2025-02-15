import { Pressable } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { styled } from 'styled-components';

import { IMatchButtonItem } from './types';

export const StylesPressable = styled(Pressable)<
Pick<IMatchButtonItem, 'backgroundColor'>
>`
  width: ${wp(15)}px;
  height: ${hp(7)}px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
