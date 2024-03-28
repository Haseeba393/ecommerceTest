import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './root.stack.types';
import DrawerStack from '../drawerStack/drawer.stack';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {darkTheme, lightTheme} from '../../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const colorScheme = useColorScheme();

  // Hook to hide the splash scree
  // after 1 second
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
  }, []);

  return (
    <NavigationContainer
      theme={colorScheme === 'light' ? lightTheme : darkTheme}>
      <Stack.Navigator
        initialRouteName="DrawerStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
