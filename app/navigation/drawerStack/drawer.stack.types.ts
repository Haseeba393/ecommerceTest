import {HomeStackParamList} from '../homeStack/home.stack.types';

export type DrawerStackParamList = {
  HomeStack: HomeStackParamList;
};

export type T_MENU_CHILDREN_ITEM = {
  name: string;
  categories: string[];
};

export type T_MENU_ITEM = {
  name: string;
  img: string;
  children: T_MENU_CHILDREN_ITEM[];
};
