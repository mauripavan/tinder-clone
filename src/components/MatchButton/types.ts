import React from 'react';
import { Direction } from '@screens/Home/types';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface IMatchButtonItem {
  id: number;
  Icon: React.FC<SvgProps>;
  backgroundColor: string;
  iconColor: ColorValue;
  direction: Direction | null;
}
export interface IMatchButton {
  item: IMatchButtonItem;
  onPress: (direction: Direction | null) => void;
}

export interface IStylesPressable {
  backgroundColor: string;
  selected: boolean;
}
