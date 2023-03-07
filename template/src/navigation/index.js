import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../screens/Auth/Login';
import Onboarding from '../screens/Auth/Onboarding';
import Home from '../screens/Main/Home';

const Stack = createStackNavigator();

const DrawerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  const onboard = useSelector(state => state.user.onboard);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {onboard && <Stack.Screen name="Onboarding" component={Onboarding} />}
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  const token = useSelector(state => state.user.token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {token ? (
          <Stack.Screen name="DrawerStack" component={DrawerStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
