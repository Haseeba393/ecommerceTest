import {Dimensions, PixelRatio, Platform} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const widthBaseScale = screenWidth / 390;
const heightBaseScale = screenHeight / 844;
function normalize(size: number, based?: 'width' | 'height') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

//for width  pixel
export const wp = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
export const hp = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
export const fontPixel = (size: number) => {
  return hp(size);
};
//for Margin and Padding vertical pixel
export const pixelSizeVertical = (size: number) => {
  return hp(size);
};
//for Margin and Padding horizontal pixel
export const pixelSizeHorizontal = (size: number) => {
  return wp(size);
};
