import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface IMatchButtonItem {
  id: number;
  Icon: React.FC<SvgProps>;
  backgroundColor: string;
  iconColor: ColorValue;
}
export interface IMatchButton {
  item: IMatchButtonItem;
  onPress: () => void;
}
