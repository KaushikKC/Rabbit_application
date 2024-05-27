//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {wp} from '../utils/ScreenDimension';
import {COLORS} from '../constants/color';

type ChooseContainerProps = {
  emoji: string;
  name: string;
  selected: boolean;
  onPress: () => void;
};
const ChooseContainer = ({
  emoji,
  name,
  selected,
  onPress,
}: ChooseContainerProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.chooseContainer,
        selected && {borderColor: COLORS.primary, borderWidth: 1},
      ]}
      onPress={onPress}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  chooseContainer: {
    height: 134,
    backgroundColor: COLORS.WhiteBG,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
    width: wp(40),
    borderRadius: 10,
    marginVertical: 10,
  },
  emoji: {
    fontSize: 40,
  },
  name: {
    color: COLORS.Black,
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
  },
});

//make this component available to the app
export default ChooseContainer;
