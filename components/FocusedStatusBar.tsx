import { StatusBar, StatusBarProps } from "react-native";
import { useIsFocused } from "@react-navigation/core";

type FocusedStatusBarPropsType = StatusBarProps & {
  //
};

const FocusedStatusBar = (props: FocusedStatusBarPropsType) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
