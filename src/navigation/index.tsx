import React from 'react';
import {
  NavigationContainer as ReactNavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  TransitionSpecs,
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import ModalScreen from '@screens/Modal';
import HomeScreen from '@screens/Home';

import { RootStackParamList } from './types';

const NavigationContainer: React.FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  const navigationRef = useNavigationContainerRef();

  return (
    <ReactNavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </ReactNavigationContainer>
  );
};

export default NavigationContainer;
