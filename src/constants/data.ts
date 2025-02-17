import Person1 from '@assets/images/person1.png';
import Person2 from '@assets/images/person2.png';
import Person3 from '@assets/images/person3.png';
import Amistad from '@assets/images/amistad.png';
import Citas from '@assets/images/citas.png';
import Relacion from '@assets/images/relacion.png';
import Close from '@assets/icons/close.svg';
import Check from '@assets/icons/check.svg';
import HeartFullFilled from '@assets/icons/heart-fullfiled.svg';
import { ICard } from '@components/Card/types';
import { ConnectButtonDataType } from '@components/ConnectButton/types';
import theme from '@theme/index';
import { IMatchButtonItem } from '@components/MatchButton/types';
import { Direction } from '@screens/Home/types';

export const MOCKED_RELATIONSHIP_CARDS_DATA: ICard[] = [
  {
    id: 1,
    image: Person1,
    name: 'Sandra Gómez',
    age: 21,
    city: 'Surco',
    country: 'Perú',
    gender: 'Femme',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
  },
  {
    id: 2,
    image: Person2,
    name: 'Beatriz',
    age: 22,
    city: 'Lima',
    country: 'Perú',
    gender: 'Femme',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
  },
  {
    id: 3,
    image: Person3,
    name: 'Carmen',
    age: 22,
    city: 'Miraflores',
    country: 'Perú',
    gender: 'Femme',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
  },
];

export const MOCKED_DATE_CARDS_DATA: ICard[] = [
  {
    id: 1,
    image: Person3,
    name: 'Carmen',
    age: 22,
    city: 'Miraflores',
    country: 'Perú',
    gender: 'Femme',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
  },
  {
    id: 2,
    image: Person1,
    name: 'Sandra Gómez',
    age: 21,
    city: 'Surco',
    country: 'Perú',
    gender: 'Femme',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
  },
  {
    id: 3,
    image: Person2,
    name: 'Beatriz',
    age: 22,
    city: 'Lima',
    country: 'Perú',
    gender: 'Femme',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
  },
];

export const MOCKED_FRIENDSHIP_CARDS_DATA: ICard[] = [
  {
    id: 1,
    image: Person2,
    name: 'Beatriz',
    age: 22,
    city: 'Lima',
    country: 'Perú',
    gender: 'Femme',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
  },
  {
    id: 2,
    image: Person3,
    name: 'Carmen',
    age: 22,
    city: 'Miraflores',
    country: 'Perú',
    gender: 'FemmeF',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
  },
  {
    id: 3,
    image: Person1,
    name: 'Sandra Gómez',
    age: 21,
    city: 'Surco',
    country: 'Perú',
    gender: 'Femme',
    interest: ['Viajar', 'Leer', 'Amistad', 'Salir de Fiesta', 'Pasarla Bien'],
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
    id: 0,
    Icon: Close,
    backgroundColor: theme.colors.neutral,
    iconColor: theme.colors.white,
    direction: Direction.left,
  },
  {
    id: 1,
    Icon: HeartFullFilled,
    backgroundColor: theme.colors.white,
    iconColor: theme.colors.tertiary,
    direction: Direction.right,
  },
  {
    id: 2,
    Icon: Check,
    backgroundColor: theme.colors.primary,
    iconColor: theme.colors.white,
    direction: Direction.right,
  },
];
