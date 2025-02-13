import theme from '@theme/index';

export interface ITypographyProps {
  color?: typeof theme.colors;
}

export enum Typography {
  quicksand_bold = 'Quicksand_700Bold',
  maven_reg = 'MavenPro_400Regular',
  maven_bold = 'MavenPro_700Bold',
}
