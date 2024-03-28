import {StyleSheet} from 'react-native';
import {
  appSpacings,
  hp,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme';

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: pixelSizeHorizontal(appSpacings[5]),
    rowGap: pixelSizeVertical(appSpacings[4]),
    paddingBottom: hp(100),
  },
});
