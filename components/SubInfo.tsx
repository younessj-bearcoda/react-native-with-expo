import { View, Text, Image, ImageSourcePropType } from "react-native";
import { SIZES, FONTS, COLORS, assets } from "../constants";

export const NFTTitle = () => {
  return (
    <View>
      <Text>Title</Text>
    </View>
  );
};

export const ETHPrice = () => {
  return (
    <View>
      <Text>ETH Price</Text>
    </View>
  );
};

type ImageCmpPropsType = {
  imgUrl: ImageSourcePropType;
  index: number;
};

export const ImageCmp = ({ imgUrl, index }: ImageCmpPropsType) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={index}/>
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View>
      <Text>End Date</Text>
    </View>
  );
};

const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};

export default SubInfo;
