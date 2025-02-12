import { View } from 'react-native';
import styled from 'styled-components';

export const MainContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
