import {PropsWithChildren} from 'react';
import {ColorValue} from 'react-native';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../../config/theme';

interface Props extends PropsWithChildren {
  refreshing: boolean;
  onRefresh: (() => void) | undefined;
  colors?: ColorValue[] | undefined;
}

export const CustomPullToRefresh = ({
  refreshing,
  onRefresh,
  colors,
  children,
}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={colors}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      {children}
    </ScrollView>
  );
};
