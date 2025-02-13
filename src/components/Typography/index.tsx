import styled from 'styled-components';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ITypographyProps, Typography } from './types';

const getResponsiveSize = (size: number) => RFValue(size);

const TextRegular = styled(Text)<ITypographyProps>`
  color: ${({ color, theme }) => color || theme.colors.black};
  font-family: ${Typography.maven_reg};
  font-size: ${({ theme }) =>
    getResponsiveSize(theme.typography.fontSizes.regular)}px;
  line-height: ${({ theme }) =>
    getResponsiveSize(theme.typography.lineHeights.regular)}px;
`;

const TextBold = styled(Text)<ITypographyProps>`
  color: ${({ color, theme }) => color || theme.colors.black};
  font-family: ${Typography.maven_bold};
  font-size: ${({ theme }) =>
    getResponsiveSize(theme.typography.fontSizes.small)}px;
  line-height: ${({ theme }) =>
    getResponsiveSize(theme.typography.lineHeights.small)}px;
`;

const TextH1 = styled(Text)<ITypographyProps>`
  color: ${({ color, theme }) => color || theme.colors.black};
  font-family: ${Typography.quicksand_bold};
  font-size: ${({ theme }) =>
    getResponsiveSize(theme.typography.fontSizes.xlarge)}px;
  line-height: ${({ theme }) =>
    getResponsiveSize(theme.typography.lineHeights.xlarge)}px;
`;

const TextH2 = styled(Text)<ITypographyProps>`
  color: ${({ color, theme }) => color || theme.colors.black};
  font-family: ${Typography.quicksand_bold};
  font-size: ${({ theme }) =>
    getResponsiveSize(theme.typography.fontSizes.large)}px;
  line-height: ${({ theme }) =>
    getResponsiveSize(theme.typography.lineHeights.large)}px;
`;

const TextH3 = styled(Text)<ITypographyProps>`
  color: ${({ color, theme }) => color || theme.colors.black};
  font-family: ${Typography.maven_bold};
  font-size: ${({ theme }) =>
    getResponsiveSize(theme.typography.fontSizes.medium)}px;
  line-height: ${({ theme }) =>
    getResponsiveSize(theme.typography.lineHeights.medium)}px;
`;

const TextH4 = styled(Text)<ITypographyProps>`
  color: ${({ color, theme }) => color || theme.colors.black};
  font-family: ${Typography.maven_bold};
  font-size: ${({ theme }) =>
    getResponsiveSize(theme.typography.fontSizes.regular)}px;
  line-height: ${({ theme }) =>
    getResponsiveSize(theme.typography.lineHeights.regular)}px;
`;

export { TextRegular, TextBold, TextH1, TextH2, TextH3, TextH4 };
