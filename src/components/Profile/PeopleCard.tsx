//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {COLORS} from '../../constants/color';

// create a component

type PeopleCardProps = {
  image: ImageSourcePropType;
  name: string;
  points: string;
};
const PeopleCard = ({name, points, image}: PeopleCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Image style={styles.image} source={image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.points}>{points}</Text>
        </View>
      </View>
      <View style={styles.border}>
        <Image source={require('../../assets/images/TrashCan.png')} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 68,
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
export default PeopleCard;
