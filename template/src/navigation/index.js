import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import '../../i18nconfig';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Login from '../screens/Auth/Login';
import Onboarding from '../screens/Auth/Onboarding';
import RecoverPassword from '../screens/Auth/RecoverPassword';
import Home from '../screens/Main/Home';

import { useThemeAwareObject } from '../theme';
import { wp } from '../utils';
import DrawerContent from './DrawerNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  const createStyles = () => {
    const themeStyles = StyleSheet.create({
      drawerStyle: {
        width: wp(100),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  const { i18n } = useTranslation();
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawerStyle,
        drawerPosition: i18n.language == 'en' ? 'left' : 'right',
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} options={{ unmountOnBlur: true }} />
    </Drawer.Navigator>
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
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
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
