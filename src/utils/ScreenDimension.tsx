import {Dimensions, PixelRatio} from 'react-native';

const wp = (widthPercent: number, getScreenWidth?: boolean): number => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(String(widthPercent));

  return getScreenWidth
    ? screenWidth * (widthPercent / 100)
    : PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const hp = (heightPercent: number): number => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(String(heightPercent));

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const circleW = (widthPercent: number, getScreenWidth?: boolean): number => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(String(widthPercent));

  const cw = getScreenWidth
    ? screenWidth * (widthPercent / 100)
    : PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);

  console.log('cw', cw);
  return cw;
};

const circleH = (heightPercent: number): number => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(String(heightPercent));
  const ch = PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);

  console.log('ch', ch);
  return ch;
};

export {wp, hp, circleW, circleH};
