import theme from '@theme/index';
import { Platform, Dimensions } from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const gradientBackgrounds = [
  theme.colors.gradientTertiaty,
  theme.colors.gradientQuaternary,
  theme.colors.gradientPrimary,
];

export const maskColorArray = [
  theme.colors.maskDismiss,
  theme.colors.maskMatch,
  theme.colors.maskMatch,
];
