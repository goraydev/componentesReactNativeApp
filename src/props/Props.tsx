import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface PropsTitle {
  title: string;
  safe?: boolean;
  white?: boolean;
}

export interface PropsMenuItems {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export interface PropsCustomView {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
