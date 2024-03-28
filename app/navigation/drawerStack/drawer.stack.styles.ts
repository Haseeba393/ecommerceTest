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
  },
  topContainer: {
    paddingHorizontal: pixelSizeHorizontal(appSpacings[4]),
    paddingVertical: pixelSizeVertical(appSpacings[8]),
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: pixelSizeVertical(appSpacings[4]),
  },
  logo: {
    width: wp(80),
    height: wp(80),
  },
  appname: {
    ...appTypography.BOLD.F_20,
  },
  seperator: {
    width: '80%',
    alignSelf: 'center',
    height: 1,
  },
  listContainer: {
    paddingHorizontal: pixelSizeHorizontal(appSpacings[4]),
    paddingVertical: pixelSizeVertical(appSpacings[4]),
  },
  menuHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: pixelSizeHorizontal(appSpacings[2]),
  },
  menuItemImage: {
    width: wp(42),
    height: wp(42),
    borderRadius: wp(appRadius[2]),
  },
  menuTitle: {
    ...appTypography.MEDIUM.F_16,
  },
});
