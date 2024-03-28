import {StyleSheet} from 'react-native';
import {
  appSpacings,
  appTypography,
  hp,
  pixelSizeHorizontal,
  wp,
} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: hp(40),
    borderRadius: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[4]),
  },
  title: {
    ...appTypography.MEDIUM.F_14,
  },
});
