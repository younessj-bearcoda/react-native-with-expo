import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';

import { COLORS, SIZES, SHADOWS, ROUNDED, assets } from '../constants';
import type { NFTItemType } from '../types';
import { CircleButton, RectButton } from './Buttons';
import SubInfo, { ETHPrice, NFTTitle } from './SubInfo';

type NFTCardType = {
  data: NFTItemType;
};

const NFTCard = ({ data }: NFTCardType) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: ROUNDED.base,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark,
      }}>
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: ROUNDED.base,
            borderTopRightRadius: ROUNDED.base,
          }}
        />
        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <ETHPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
