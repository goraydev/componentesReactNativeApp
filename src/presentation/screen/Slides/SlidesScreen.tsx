import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import {useContext, useRef, useState} from 'react';
import {Button} from '../../components/ui/Button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigator/StackNavigator';
import {ThemeContext} from '../../context/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [isNext, setisNext] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [valueScroll, setValueScroll] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const onNext = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
    if (index === items.length - 1) {
      setValueScroll(true);
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setisNext(currentIndex > 0 ? currentIndex : 0);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled={valueScroll}
        onScroll={onScroll}
      />

      {isNext === items.length - 1 ? (
        <Button
          text="Finalizar"
          onPress={() => navigation.navigate('home')}
          styles={{borderRadius: 0}}
          positionText="center"
        />
      ) : (
        <Button
          text="Siguiente"
          onPress={() => onNext(isNext + 1)}
          styles={{borderRadius: 0}}
          nameIcon="chevron-forward-circle-outline"
          sizeIcon={25}
          colorIcon="white"
          positionText="flex-end"
        />
      )}
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({item}: SlideItemProps) => {
  const {width} = useWindowDimensions();
  const {colors} = useContext(ThemeContext);
  const {title, desc, img} = item;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding: 4,
        justifyContent: 'center',
        width: width,
      }}>
      <Image
        source={img}
        style={{width: width * 0.7, height: width * 0.7, alignSelf: 'center'}}
      />
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: 10,
          color: colors.primary,
        }}>
        {title}
      </Text>
      <Text style={{marginHorizontal: 20, color: colors.text}}>{desc}</Text>
    </View>
  );
};
