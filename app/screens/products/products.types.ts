import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/homeStack/home.stack.types';

export type T_PRODUCTS_PROPS = NativeStackScreenProps<
  HomeStackParamList,
  'ProductScreen'
>;

export type T_PRODUCTS_ROUTE_PARAMS = undefined;

export type T_PRODUCT_ITEM = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
};
