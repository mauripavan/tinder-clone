import { Platform, Dimensions } from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const SCREEN_WIDTH = Dimensions.get('window').width;
