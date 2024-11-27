import {useState} from 'react';
import {Animated, Image, ImageStyle, StyleProp, Text, View} from 'react-native';
import {CustomActivityIndicator} from './CustomActivityIndicator';
import {colors} from '../../../config/theme';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const {fadeIn, animatedOpacity} = useAnimation();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <CustomActivityIndicator color={colors.primary} size={10} />
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn({duration: 200});
          setIsLoading(false);
        }}
        style={[style, {opacity: animatedOpacity}]}
      />
    </View>
  );
};
