//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/color';

type LearnCardProps = {
  image: ImageSourcePropType;
  title: string;
};
// create a component
const LearnCard = ({image, title}: LearnCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} />
      <LinearGradient
        colors={['#6B73FF', '#000DFF']}
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 0.5}}
        style={styles.innerContainer}>
        <Image source={require('../../assets/images/Folder.png')} />
        <Text style={styles.name}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 200,
    marginRight: 8,
  },
  image: {},
  innerContainer: {
    height: 52,
    width: 200,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  logo: {},
  name: {
    width: 140,
    fontFamily: 'Quicksand-semiBold',
    fontSize: 14,
    color: COLORS.WhiteBG,
    marginLeft: 10,
  },
});

//make this component available to the app
export default LearnCard;
