import {RefreshControl, ScrollView} from 'react-native';
import {CustomView} from '../components/ui/CustomView';
import {Title} from '../components/ui/Title';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext, useState} from 'react';
import {colors, globalStyles} from '../../config/theme';
import {ThemeContext} from '../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  const {colors} = useContext(ThemeContext);

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
      style={[
        globalStyles.mainContainer,
        globalStyles.globalMargin,
        {backgroundColor: colors.background},
      ]}>
      <Title title="Pull To Refresh" safe />
    </ScrollView>
  );
};
