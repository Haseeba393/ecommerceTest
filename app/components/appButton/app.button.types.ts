import {DimensionValue, GestureResponderEvent} from 'react-native';

export type T_APP_BUTTON = {
  title?: string;
  disabled?: boolean;
  variant?: 'default' | 'outlined';
  width?: DimensionValue;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
