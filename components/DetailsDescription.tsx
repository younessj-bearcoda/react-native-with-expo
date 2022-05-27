import { View, Text } from "react-native";
import { useState } from "react";
import { ETHPrice, NFTTitle } from "../components/SubInfo";
import { COLORS, SIZES, FONTS, NFTItemType } from "../constants";

type DetailsDescriptionPropsType = {
  data: NFTItemType;
};

const DetailsDescription = ({ data }: DetailsDescriptionPropsType) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  const handleReadMorePress = (): void => {
    if (readMore) {
      setText(data.description.slice(0, 100));
      setReadMore(false);
    } else {
      setText(data.description);
      setReadMore(true);
    }
  };

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <ETHPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              onPress={handleReadMorePress}
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
            >
              {readMore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDescription;