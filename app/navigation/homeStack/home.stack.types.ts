import {T_CART_ROUTE_PARAMS} from '../../screens/cart/cart.types';
import {T_PRODUCT_DETAILS_ROUTE_PARAMS} from '../../screens/productDetails/product.details.types';
import {T_PRODUCTS_ROUTE_PARAMS} from '../../screens/products/products.types';

export type HomeStackParamList = {
  ProductScreen: T_PRODUCTS_ROUTE_PARAMS;
  ProductDetailScreen: T_PRODUCT_DETAILS_ROUTE_PARAMS;
  CartScreen: T_CART_ROUTE_PARAMS;
};
