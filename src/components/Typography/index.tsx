import styled from 'styled-components';
import { Text } from 'react-native';

import { ITypographyProps, Typography } from './types';

const TextRegular = styled(Text)<ITypographyProps>`
  color: ${({ color, theme: defaultTheme }) =>
    color || defaultTheme.colors.black};
  font-family: ${Typography.maven_reg};
  font-size: 14px;
  line-height: 16px;
`;

const TextBold = styled(Text)<ITypographyProps>`
  color: ${({ color, theme: defaultTheme }) =>
    color || defaultTheme.colors.black};
  font-family: ${Typography.maven_bold};
  font-size: 14px;
  line-height: 19px;
`;

const TextH1 = styled(Text)<ITypographyProps>`
  color: ${({ color, theme: defaultTheme }) =>
    color || defaultTheme.colors.black};
  font-family: ${Typography.quicksand_bold};
  font-size: 30px;
  line-height: 28px;
`;

const TextH2 = styled(Text)<ITypographyProps>`
  color: ${({ color, theme: defaultTheme }) =>
    color || defaultTheme.colors.black};
  font-family: ${Typography.quicksand_bold};
  font-size: 20px;
  line-height: 34px;
`;

const TextH3 = styled(Text)<ITypographyProps>`
  color: ${({ color, theme: defaultTheme }) =>
    color || defaultTheme.colors.black};
  font-family: ${Typography.maven_bold};
  font-size: 19px;
  line-height: 19px;
`;

const TextH4 = styled(Text)<ITypographyProps>`
  color: ${({ color, theme: defaultTheme }) =>
    color || defaultTheme.colors.black};
  font-family: ${Typography.maven_bold};
  font-size: 16px;
  line-height: 24px;
`;

export { TextRegular, TextBold, TextH1, TextH2, TextH3, TextH4 };
