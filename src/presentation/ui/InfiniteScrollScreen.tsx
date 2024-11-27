import {useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {CustomView} from '../components/ui/CustomView';
import {Title} from '../components/ui/Title';
import {CustomActivityIndicator} from '../components/ui/CustomActivityIndicator';
import {colors} from '../../config/theme';
import {FadeInImage} from '../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <CustomView>
      <Title title="Infinite Scroll" />
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={item => <ListIitem number={item.item} />}
        keyExtractor={item => item.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <CustomActivityIndicator size={40} color={colors.primary} />
        )}
      />
    </CustomView>
  );
};

interface ListemItemProps {
  number: number;
}

const ListIitem = ({number}: ListemItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/200/300`}
      style={{
        height: 400,
        width: '100%',
      }}
    />

    //<Image
    //source={{uri: `https://picsum.photos/id/${number}/200/300`}}
    //style={{height: 400, width: 400, marginVertical: 10}}
    ///>
  );
};
