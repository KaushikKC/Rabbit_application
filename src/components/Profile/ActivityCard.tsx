//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {COLORS} from '../../constants/color';
import {wp} from '../../utils/ScreenDimension';

// create a component

type ActivityCardProps = {
  image: ImageSourcePropType;
  name: string;
  desc: string;
};
const ActivityCard = ({name, desc, image}: ActivityCardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.points}>{desc}</Text>
      </View>

      <View style={styles.border}>
        <Image source={image} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // height: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WhiteBG,
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.Gray,
    borderRadius: 10,
    marginVertical: 10,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  name: {
    color: COLORS.Black,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 14,
    width: wp(100) - 120,
  },
  points: {
    color: COLORS.Black,
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 32,
    marginRight: 10,
  },
  border: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: COLORS.Gray,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ActivityCard;
