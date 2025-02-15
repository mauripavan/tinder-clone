import { ImageSourcePropType } from 'react-native';

export interface ICard {
  id: number;
  image: ImageSourcePropType;
  name: string;
  age: number;
  city: string;
  country: string;
  width?: false | number;
}
