import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';
import { Quicksand_700Bold, useFonts } from '@expo-google-fonts/quicksand';
import {
  MavenPro_400Regular,
  MavenPro_700Bold,
} from '@expo-google-fonts/maven-pro';
import * as SplashScreen from 'expo-splash-screen';

import NavigationContainer from './src/navigation';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Quicksand_700Bold,
    MavenPro_400Regular,
    MavenPro_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer />
    </ThemeProvider>
  );
}
