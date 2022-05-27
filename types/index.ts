import { ImageSourcePropType } from "react-native";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";

type BidItemType = {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  date: string;
};

type NFTItemType = {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
  bids: Array<BidItemType>;
};

type WithNavigationPropType = {
  navigation: NavigationProp<ParamListBase>;
};

export { NFTItemType, BidItemType, WithNavigationPropType };
