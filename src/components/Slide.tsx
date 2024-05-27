import {PropsWithChildren} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {hp, wp} from '../utils/ScreenDimension';

type slideProps = PropsWithChildren<{
  item: {
    id: string;
    img: ImageSourcePropType;
    title: string;
    para: string;
  };
}>;

export function Slide({item}: slideProps) {
  return (
    <View style={styles.slide}>
      <View style={styles.imageDiv}>
        <Image source={item?.img} style={styles.image} />
      </View>
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.para}>{item?.para}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    position: 'static',
    width: wp(100),
  },
  para: {
    color: '#fff',
    fontSize: wp(100) * 0.035,
    fontWeight: '300',
    marginLeft: 20,
    fontFamily: 'Quicksand-Regular',
  },
  imageDiv: {
    alignItems: 'center',
  },
  image: {
    height: hp(100) * 0.4,
    width: wp(100) * 0.8,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: wp(100) * 0.09,
    fontWeight: '600',
    marginHorizontal: 20,
    fontFamily: 'Quicksand-SemiBold',
  },
});
