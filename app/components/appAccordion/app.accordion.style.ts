import {StyleSheet} from 'react-native';
import {
  appSpacings,
  appTypography,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: pixelSizeHorizontal(appSpacings[4]),
    paddingBottom: pixelSizeVertical(appSpacings[2]),
  },
  heading: {
    ...appTypography.REGULAR.F_16,
  },
  contentContainer: {
    overflow: 'hidden',
  },
  bodyContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingBottom: 0,
  },
});
