//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {COLORS} from '../../constants/color';
import {wp} from '../../utils/ScreenDimension';
import * as Progress from 'react-native-progress';

type HabitsCardProps = {
  emoji: string;
  name: string;
  description: string;
  progress: number;
};
// create a component
const HabitsCard = ({emoji, name, description, progress}: HabitsCardProps) => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.InnerContainer}>
        <View style={styles.NameContainer}>
          <Progress.Circle
            size={32}
            progress={progress}
            indeterminate={false}
            color={COLORS.primary}
            thickness={2}
          />
          <View style={styles.logo}>
            <Text>{emoji}</Text>
          </View>

          <View>
            <Text style={styles.Name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.plus}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  OuterContainer: {
    width: wp(100) - 48,
    height: 68,
    borderRadius: 10,
    backgroundColor: COLORS.WhiteBG,
    padding: 16,
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
  InnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  NameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Name: {
    color: COLORS.Black,
    fontSize: 14,
    fontFamily: 'Quicksand-semiBold',
  },
  description: {
    fontSize: 12,
    color: COLORS.Grey,
    fontFamily: 'Quicksand-Regular',
  },
  logo: {
    //
    position: 'relative',
    right: 25,
  },
  plus: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: COLORS.Grey,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 18,
    color: '#000',
  },
});

//make this component available to the app
export default HabitsCard;
