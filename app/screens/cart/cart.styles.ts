import {StyleSheet} from 'react-native';
import {
  appRadius,
  appSpacings,
  appTypography,
  pixelSizeHorizontal,
  pixelSizeVertical,
  wp,
} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(appSpacings[5]),
    paddingVertical: pixelSizeVertical(appSpacings[5]),
  },
  cartItemContainer: {
    paddingHorizontal: pixelSizeHorizontal(appSpacings[2]),
    paddingVertical: pixelSizeVertical(appSpacings[2]),
    borderWidth: 1,
    borderRadius: wp(appRadius[2]),
    rowGap: pixelSizeVertical(appSpacings[2]),
  },
  cartItemTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: pixelSizeHorizontal(appSpacings[2]),
  },
  cartItemImageContainer: {
    width: wp(60),
    height: wp(96),
    borderRadius: wp(appRadius[2]),
  },
  cartItemTopContent: {
    flex: 1,
  },
  cartItemName: {
    ...appTypography.REGULAR.F_16,
  },
  cartItemPrice: {
    ...appTypography.BOLD.F_24,
  },
  cartItemColor: {
    ...appTypography.REGULAR.F_14,
  },
  quantityContainer: {
    rowGap: pixelSizeVertical(appSpacings[2]),
  },
  quantity: {
    ...appTypography.REGULAR.F_12,
  },
  quantityActions: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: pixelSizeHorizontal(appSpacings[4]),
  },
  quantityValue: {
    ...appTypography.REGULAR.F_14,
  },
});
