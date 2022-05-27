import { useIsFocused } from '@react-navigation/core';
import { StatusBar, StatusBarProps } from 'react-native';

type FocusedStatusBarPropsType = StatusBarProps & {
  //
};

const FocusedStatusBar = (props: FocusedStatusBarPropsType) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated {...props} /> : null;
};

export default FocusedStatusBar;
