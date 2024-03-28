import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/homeStack/home.stack.types';

export type T_PRODUCT_DETAILS_PROPS = NativeStackScreenProps<
  HomeStackParamList,
  'ProductDetailScreen'
>;

export type T_PRODUCT_DETAILS_ROUTE_PARAMS = {
  productId: number;
};
