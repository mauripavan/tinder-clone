import { Direction } from '@screens/Home/types';
import { Animated, ImageSourcePropType } from 'react-native';

export interface ICard {
  id: number;
  image: ImageSourcePropType;
  name: string;
  age: number;
  city: string;
  country: string;
  width?: number | false | undefined | Animated.Value;
  onSwipe?: (direction: Direction | null) => void;
}
