import {
  NavigationContainer as ReactNavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from '../screens/Home';

const NavigationContainer: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const navigationRef = useNavigationContainerRef();

  return (
    <ReactNavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ReactNavigationContainer>
  );
};

export default NavigationContainer;
