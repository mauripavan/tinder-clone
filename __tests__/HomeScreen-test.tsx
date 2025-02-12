import React from 'react';
import HomeScreen from '@screens/Home';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';

describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>,
    );

    getByText('Home Screen');
  });
});
