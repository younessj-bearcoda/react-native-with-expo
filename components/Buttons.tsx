import React from 'react'
import { TouchableOpacity, View, Text, Image, ImageSourcePropType, GestureResponderEvent } from 'react-native'
import { COLORS, ROUNDED, SHADOWS } from '../constants'

export type ButtonPropsType = {
  //
}

export type CircleButtonType = {
  imgUrl: ImageSourcePropType,
  handlePress?: (event: GestureResponderEvent) => void,
  top?: number,
  right?: number,
}

export type RectButtonPropsType = ButtonPropsType | {
  //
}

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
      }} onPress={ handlePress }>
        <Image 
          source={imgUrl}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
    </TouchableOpacity>
  )
}



export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  )
}