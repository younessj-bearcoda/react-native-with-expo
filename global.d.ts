import { ImageSourcePropType } from 'react-native';

declare module '*.png' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpeg' {
  const value: ImageSourcePropType;
  export default value;
}
