import Person1 from '@assets/images/person1.png';
import Person2 from '@assets/images/person2.png';
import Person3 from '@assets/images/person3.png';
import Amistad from '@assets/images/amistad.png';
import Citas from '@assets/images/citas.png';
import Relacion from '@assets/images/relación.png';
import Close from '@assets/icons/close.svg';
import Check from '@assets/icons/check.svg';
import HeartFullFilled from '@assets/icons/heart-fullfiled.svg';
import { ICard } from '@components/Card/types';
import { ConnectButtonDataType } from '@components/ConnectButton/types';
import theme from '@theme/index';
import { IMatchButtonItem } from '@components/MatchButton/types';

export const MOCKED_CARDS_DATA: ICard[] = [
  {
    id: 1,
    image: Person1,
    name: 'Sandra Gómez',
    age: 21,
    city: 'Surco',
    country: 'Perú',
  },
  {
    id: 2,
    image: Person2,
    name: 'Beatriz',
    age: 22,
    city: '22 Km',
    country: 'Lima',
  },
  {
    id: 3,
    image: Person3,
    name: 'Carmen',
    age: 22,
    city: 'Miraflores',
    country: 'Perú',
  },
];

export const CONNECT_BUTTONS_DATA: ConnectButtonDataType[] = [
  {
    id: 1,
    label: 'Amistad',
    image: Amistad,
  },
  {
    id: 2,
    label: 'Citas',
    image: Citas,
  },
  {
    id: 3,
    label: 'Relación',
    image: Relacion,
  },
];

export const MATCH_BUTTONS_DATA: IMatchButtonItem[] = [
  {
    id: 1,
    Icon: Close,
    backgroundColor: theme.colors.neutral,
    iconColor: theme.colors.white,
  },
  {
    id: 2,
    Icon: HeartFullFilled,
    backgroundColor: theme.colors.white,
    iconColor: theme.colors.tertiary,
  },
  {
    id: 3,
    Icon: Check,
    backgroundColor: theme.colors.primary,
    iconColor: theme.colors.white,
  },
];
