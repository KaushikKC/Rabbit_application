//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/color';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import {wp} from '../../utils/ScreenDimension';

type ChallengesCardProps = {
  name: string;
  description: string;
  people: string;
  progress: number;
};
// create a component
const ChallengesCard = ({
  name,
  description,
  people,
  progress,
}: ChallengesCardProps) => {
  var navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('JoinChallenge')}>
      <LinearGradient
        colors={['#6B73FF', '#000DFF']}
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 0.5}}
        style={styles.OuterContainer}>
        <View style={styles.Innercontainer}>
          <Image source={require('../../assets/images/TimeCircle.png')} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Progress.Bar
            progress={progress}
            height={3}
            width={168}
            color={COLORS.white}
          />
          <View style={styles.friendsContainer}>
            <Image source={require('../../assets/images/Avatar.png')} />
            <Text style={styles.friendsText}>{people} friends joined</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  OuterContainer: {
    width: 200,
    height: 128,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 8,
  },
  Innercontainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  name: {
    color: COLORS.WhiteBG,
    fontFamily: 'Quicksand-semiBold',
    fontSize: 14,
    marginVertical: 3,
  },
  description: {
    color: COLORS.WhiteBG,
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    marginBottom: 5,
  },
  friendsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  friendsText: {
    color: COLORS.WhiteBG,
    fontFamily: 'Quicksand-Regular',
    fontSize: 10,
    marginLeft: 5,
  },
});

//make this component available to the app
export default ChallengesCard;
