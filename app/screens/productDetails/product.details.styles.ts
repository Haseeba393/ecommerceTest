import {StyleSheet} from 'react-native';
import {
  appRadius,
  appSpacings,
  appTypography,
  hp,
  pixelSizeHorizontal,
  pixelSizeVertical,
  wp,
} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    paddingHorizontal: pixelSizeHorizontal(appSpacings[5]),
    paddingVertical: pixelSizeVertical(appSpacings[5]),
    rowGap: pixelSizeVertical(appSpacings[8]),
    paddingBottom: hp(100),
  },
  imgStyle: {
    aspectRatio: 740 / 1180,
    borderRadius: wp(appRadius[2]),
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    columnGap: pixelSizeHorizontal(appSpacings[4]),
  },
  name: {
    flex: 1,
    ...appTypography.REGULAR.F_16,
  },
  price: {
    ...appTypography.BOLD.F_24,
  },
  color: {
    ...appTypography.REGULAR.F_14,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
