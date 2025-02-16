import { ImageBackground, Pressable, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styled } from 'styled-components';

export const CustomImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const SubContainer = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding-top: ${wp(5)}px;
  padding-bottom: ${wp(9)}px;
  padding-horizontal: ${wp(7)}px;
`;

export const ConnectButtonsWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-around;
`;

export const BottomInfoContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoButton = styled(Pressable)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 99px;
  padding: 5px;
`;

export const MatchButtonsWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${hp(2.5)}px;
`;
