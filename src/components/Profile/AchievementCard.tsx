//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';

type AchievementCardProps = {
  emoji: string;
  name: string;
  desc: string;
  color: string;
};
const AchievementCard = ({name, desc, emoji, color}: AchievementCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={[styles.logo, {backgroundColor: color}]}>
          <Text>{emoji}</Text>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.points}>{desc}</Text>
        </View>
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
  logo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
export default AchievementCard;
