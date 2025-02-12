import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';

import NavigationContainer from './src/navigation';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer />
    </ThemeProvider>
  );
}
