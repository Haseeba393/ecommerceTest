import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from './homeStack/home.stack.types';
import {T_PRODUCT_DETAILS_ROUTE_PARAMS} from '../screens/productDetails/product.details.types';
import {T_CART_ROUTE_PARAMS} from '../screens/cart/cart.types';

export const gotoProductDetailsFromProducts = (
  navigation: NativeStackNavigationProp<HomeStackParamList, 'ProductScreen'>,
  params: T_PRODUCT_DETAILS_ROUTE_PARAMS,
) => {
  navigation.navigate('ProductDetailScreen', params);
};

export const gotoCart = (
  navigation: NativeStackNavigationProp<
    HomeStackParamList,
    'ProductScreen' | 'ProductDetailScreen' | 'CartScreen'
  >,
  params?: T_CART_ROUTE_PARAMS,
) => {
  navigation.navigate('CartScreen', params);
};
