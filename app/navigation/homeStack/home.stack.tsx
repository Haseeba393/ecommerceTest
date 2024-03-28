import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from './home.stack.types';
import {Cart, ProductDetails, Products} from '../../screens';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProductScreen" component={Products} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetails} />
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  );
};

export default HomeStack;
