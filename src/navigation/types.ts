import { Direction } from '@screens/Home/types';
import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Modal: {
    item: {
      name: string;
      age: number;
      city: string;
      country: string;
      gender: string;
      interest: string[];
      image: ImageSourcePropType;
      handleMatchPress?: ({
        direction,
        id,
      }: {
        direction: Direction | null;
        id: number;
      }) => void;
    };
  };
};
