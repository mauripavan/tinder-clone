import { ImageSourcePropType } from 'react-native';

export interface IConnectButton {
  selected: boolean;
  label: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

export type ConnectButtonDataType = {
  id: number;
  label: string;
  image: ImageSourcePropType;
};

export interface IStyledImage {
  selected: boolean;
}
