import { RootStackParamList } from '@navigation/types';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ModalScreenRouteProp = RouteProp<RootStackParamList, 'Modal'>;

export type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type ModalScreenProps = {
  route: ModalScreenRouteProp;
};
