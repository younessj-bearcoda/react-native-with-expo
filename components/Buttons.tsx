import {
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
  GestureResponderEvent,
} from 'react-native';

import { COLORS, FONTS, ROUNDED, SHADOWS, SIZES } from '../constants';

export type ButtonPropsType = {
  handlePress?: (event: GestureResponderEvent) => void;
};

export type CircleButtonType = ButtonPropsType & {
  imgUrl: ImageSourcePropType;
  top?: number;
  right?: number;
  left?: number;
};

export type RectButtonPropsType = ButtonPropsType & {
  minWidth: number;
  fontSize: number;
};

export const CircleButton = ({ imgUrl, handlePress, ...props }: CircleButtonType) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: ROUNDED.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }: RectButtonPropsType) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: ROUNDED.extraLarge,
        minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
