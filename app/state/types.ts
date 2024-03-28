import {T_PRODUCT_ITEM} from '../screens/products/products.types';

export type T_CART_ITEM = T_PRODUCT_ITEM & {quantity: number};
