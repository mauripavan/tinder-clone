import { View, Animated } from 'react-native';
import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const MainContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${wp(8)}px;
`;

export const CardWrapper = styled(View)`
  flex: 1;
  align-items: center;
  margin-top: ${hp(3)}px;
`;

export const StyledAnimatedView = styled(Animated.View)`
  position: absolute;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;
