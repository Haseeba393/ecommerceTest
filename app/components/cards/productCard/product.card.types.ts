import {T_PRODUCT_ITEM} from '../../../screens/products/products.types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/homeStack/home.stack.types';

export type T_PRODUCT_CARD_PROPS = {
  product: T_PRODUCT_ITEM;
  navigation: NativeStackNavigationProp<HomeStackParamList, 'ProductScreen'>;
};
