import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/homeStack/home.stack.types';

export type T_HEADER_PROPS = {
  title: string;
  withBackIcon?: boolean;
  hideCart?: boolean;
  navigation: NativeStackNavigationProp<
    HomeStackParamList,
    'ProductScreen' | 'ProductDetailScreen' | 'CartScreen'
  >;
};
