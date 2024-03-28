import {atom, useAtom} from 'jotai';
import {T_CART_ITEM} from './types';

const cartItemsAtom = atom<T_CART_ITEM[]>([]);

export const useStoreJotai = () => {
  const [cartItems, setCartItem] = useAtom(cartItemsAtom);

  return {
    cartItems,
    setCartItem,
  };
};
