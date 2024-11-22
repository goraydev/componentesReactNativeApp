import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../../navigator/StackNavigator';
import {colors, globalStyles} from '../../../config/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {Title} from '../../components/ui/Title';
import {MenuItem} from '../../components/MenuItem';

export const animationsItems = [
  {
    name: 'Animation 101',
    icon: 'cubo-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const menuItems = [
  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

export const uiItems = [
  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

export const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={{...globalStyles.globalMargin}}>
        <ScrollView>
          <Title title="Opciones de Menú" safe />
          {animationsItems.map((item, index) => (
            <MenuItem
              key={item.component}
              name={item.name}
              icon={item.icon}
              component={item.component}
              isFirst={index === 0}
              isLast={index === animationsItems.length - 1}
            />
          ))}
          <View style={{marginVertical: 10}} />
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              name={item.name}
              icon={item.icon}
              component={item.component}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}
          <View style={{marginVertical: 10}} />

          {uiItems.map((item, index) => (
            <MenuItem
              key={item.component}
              name={item.name}
              icon={item.icon}
              component={item.component}
              isFirst={index === 0}
              isLast={index === uiItems.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
