//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Platform,
} from 'react-native';
import {COLORS} from '../../constants/color';
import {wp} from '../../utils/ScreenDimension';

// create a component
type CircleCardProps = {
  emoji: string;
  name: string;
  description: string;
};

const CircleCard = ({emoji, name, description}: CircleCardProps) => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.logo}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  OuterContainer: {
    width: 128,
    height: 102,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: COLORS.WhiteBG,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  name: {
    color: COLORS.Black,
    fontFamily: 'Quicksand-semiBold',
    fontSize: wp(100) * 0.035,
  },
  description: {
    fontFamily: 'Quicksand-Regular',
    color: COLORS.Grey,
    fontSize: wp(100) * 0.03,
  },
  logo: {
    backgroundColor: COLORS.WhiteBG,
    paddingHorizontal: 6,
    paddingVertical: 3,
    width: 34,
    height: 34,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 16,
  },
});

//make this component available to the app
export default CircleCard;
