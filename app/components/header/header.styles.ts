import {StyleSheet} from 'react-native';
import {
  appSpacings,
  appTypography,
  pixelSizeHorizontal,
  pixelSizeVertical,
  wp,
} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[5]),
    paddingVertical: pixelSizeVertical(appSpacings[5]),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: pixelSizeHorizontal(appSpacings[4]),
  },
  rightContainer: {},
  title: {
    ...appTypography.MEDIUM.F_18,
  },
  cartBadgeContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: wp(18),
    height: wp(18),
    borderRadius: wp(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    ...appTypography.REGULAR.F_10,
  },
});
