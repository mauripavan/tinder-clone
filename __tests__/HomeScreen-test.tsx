import React from 'react';
import HomeScreen from '@screens/Home';
import { render } from '@testing-library/react-native';

describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<HomeScreen />);

    getByText('Home Screen');
  });
});
