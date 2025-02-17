import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styled } from 'styled-components';

export const MainContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 99px;
  align-self: flex-start;
  overflow: hidden;
`;

export const GradientBackground = styled(LinearGradient).attrs({
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 },
})`
  border-radius: 99px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-vertical: ${hp(1)}px;
  padding-horizontal: ${wp(6)}px;
`;
