import {RefreshControl, ScrollView} from 'react-native';
import {CustomView} from '../components/ui/CustomView';
import {Title} from '../components/ui/Title';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useState} from 'react';
import {colors, globalStyles} from '../../config/theme';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={[colors.primary, 'black']}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      <Title title="Pull To Refresh" safe />
    </ScrollView>
  );
};
