import {StyleSheet} from 'react-native';
import {
  appRadius,
  appSpacings,
  appTypography,
  pixelSizeHorizontal,
  pixelSizeVertical,
  wp,
} from '../../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderRadius: wp(appRadius[2]),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[2]),
    paddingVertical: pixelSizeVertical(appSpacings[2]),
    rowGap: pixelSizeVertical(appSpacings[2]),
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
