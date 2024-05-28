//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {COLORS} from '../../constants/color';
import {wp} from '../../utils/ScreenDimension';

type PositionCardProps = {
  image: ImageSourcePropType;
  name: string;
  points: string;
  position: string;
};
// create a component
const PositionCard = ({name, position, points, image}: PositionCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={styles.positionContainer}>
          <Text style={styles.position}>{position}</Text>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{points} points</Text>
        </View>
      </View>
      <Image source={image} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: wp(100) - 48,
    height: 68,
    borderRadius: 10,
    backgroundColor: COLORS.WhiteBG,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
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
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  positionContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    borderColor: COLORS.Gray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  position: {
    color: COLORS.Black,
  },
  name: {
    color: COLORS.Black,
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
  },
  description: {
    fontSize: 12,
    color: COLORS.Grey,
    fontFamily: 'Quicksand-Regular',
  },
});

//make this component available to the app
export default PositionCard;
