//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/color';
import {hp, wp} from '../utils/ScreenDimension';
import ChallengesCard from '../components/Home/ChallegengesCard';
import HabitsCard from '../components/Home/HabitsCard';

// create a component
const Home = () => {
  const [selected, setSelected] = useState('Today');
  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <View style={styles.headerContainer}>
          <View style={styles.HeaderTitleContainer}>
            <View>
              <Text style={styles.Headertitle}>Hi, Kaushik 👋🏻</Text>
              <Text style={styles.HeaderSubTitle}>
                Let’s make habits together!
              </Text>
            </View>
            <Image source={require('../assets/images/Mood.png')} />
          </View>
          <View style={styles.HeaderMenu}>
            <TouchableOpacity
              style={
                selected === 'Today'
                  ? styles.HeaderMenuTitleActive
                  : styles.HeaderMenuTitle
              }
              onPress={() => setSelected('Today')}>
              <Text
                style={
                  selected === 'Today'
                    ? {color: COLORS.primary}
                    : {color: COLORS.Black}
                }>
                Today
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selected === 'Circles'
                  ? styles.HeaderMenuTitleActive
                  : styles.HeaderMenuTitle
              }
              onPress={() => setSelected('Circles')}>
              <Text
                style={
                  selected === 'Circles'
                    ? {color: COLORS.primary}
                    : {color: COLORS.Black}
                }>
                Circles
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {selected === 'Today' ? (
        <View style={styles.HomeContent}>
          <View>
            <View style={styles.SectionHeading}>
              <Text style={styles.SectionTitle}>Challenges</Text>
              <Text style={styles.SectionView}>VIEW ALL</Text>
            </View>
            <ChallengesCard
              name="Daily Fit Challenge!"
              description="5 days left"
              people="4"
              progress={0.8}
            />
          </View>
          <View>
            <View style={styles.SectionHeading}>
              <Text style={styles.SectionTitle}>Habits</Text>
              <Text style={styles.SectionView}>VIEW ALL</Text>
            </View>
            <HabitsCard
              name="Drink the water"
              description="500/2000 ML"
              emoji="🚶‍♂️"
              progress={0.4}
            />
            <HabitsCard
              name="Walk"
              description="0/10000 Steps"
              emoji="💧"
              progress={0.2}
            />
            <HabitsCard
              name="Water Plants"
              description="0/1 Times"
              emoji="🌿"
              progress={0.8}
            />
          </View>
        </View>
      ) : (
        <View style={styles.commingSoonContainer}>
          <Text style={styles.commingSoonText}>Coming Soon...</Text>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerDiv: {
    height: 180,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    marginTop: 60,
    paddingHorizontal: 24,
  },
  Headertitle: {
    color: COLORS.Black,
    fontSize: 18,
    fontFamily: 'Quicksand-semiBold',
  },
  HeaderSubTitle: {
    color: COLORS.Grey,
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
  },
  HeaderMenu: {
    height: 36,
    width: wp(100) - 48,
    backgroundColor: COLORS.Gray,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 4,
    marginTop: 12,
  },
  HeaderTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderMenuTitle: {
    height: 28,
    width: wp(43),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10,
  },
  HeaderMenuTitleActive: {
    height: 28,
    width: wp(43),
    backgroundColor: COLORS.WhiteBG,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    color: COLORS.primary,
  },
  HomeContent: {
    paddingHorizontal: 24,
    marginTop: 12,
  },
  SectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  SectionTitle: {
    color: COLORS.Black,
    fontSize: 14,
    fontFamily: 'Quicksand-semiBold',
  },
  SectionView: {
    color: COLORS.primary,
    fontFamily: 'Quicksand-semiBold',
  },
  commingSoonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(100) - 340,
  },
  commingSoonText: {
    color: COLORS.Black,
  },
});
export default Home;
