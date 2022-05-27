import { View, Text, Image } from "react-native";
import React from "react";
import { ETHPrice } from "../components/SubInfo";
import { COLORS, SIZES, FONTS, BidItemType } from "../constants";

type DetailsBidPropsType = {
  bid: BidItemType;
};

const DetailsBid = ({ bid }: DetailsBidPropsType) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <ETHPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
