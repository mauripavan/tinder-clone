import { TextRegular } from '@components/Typography';
import Constants from 'expo-constants';
import { ImageBackground, Pressable, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components';

export const FlexContainer = styled(View)`
  flex: 1;
`;

export const CustomBackground = styled(ImageBackground)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: ${Constants.statusBarHeight + 5}px;
  padding-horizontal: ${wp(7)}px;
`;

export const HeaderContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const ExpandButtonModalContainer = styled(View)`
  position: absolute;
  top: -20px;
  right: 20px;
`;

export const ExpandButtonModal = styled(Pressable)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 10px;
  border-radius: 99px;
  elevation: 5;
  shadow-offset: 0px 2px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.25px;
  shadow-radius: 3.84px;
`;

export const ContentContainer = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding-horizontal: ${wp(7)}px;
`;

export const StyledTextRegular = styled(TextRegular)`
  margin-top: -8px;
`;

export const InfoContainer = styled(View)`
  margin-top: ${wp(4)}px;
`;

export const PillsContainer = styled(View)`
  flex-direction: row;
  gap: ${wp(2.5)}px;
  flex-wrap: wrap;
`;

export const MatchButtonsContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
