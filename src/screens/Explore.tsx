//import liraries
import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {COLORS} from '../constants/color';
import HabitCard from '../components/Explore/HabitCard';
import CircleCard from '../components/Explore/CircleCard';
import ChallengesCard from '../components/Explore/ChallengesCard';
import LearnCard from '../components/Explore/LearnCard';
import {
  ChallengeExploredata,
  Circlesdata,
  HabitExploredata,
  LearnCarddata,
} from '../constants/data';

// create a component
const Explore = () => {
  return (
    <View>
      <View style={styles.topHeader}>
        <Text style={styles.headerTitle}>Explore</Text>
      </View>
      <ScrollView style={styles.ExploreContent}>
        <View>
          <View style={styles.SectionHeading}>
            <Text style={styles.SectionTitle}>Suggested for You</Text>
            <Text style={styles.SectionView}>VIEW ALL</Text>
          </View>
          <FlatList
            data={HabitExploredata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <HabitCard
                name={item.name}
                description={item.description}
                emoji={item.emoji}
                color={item.color}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <View style={styles.SectionHeading}>
            <Text style={styles.SectionTitle}>Circles</Text>
            <Text style={styles.SectionView}>VIEW ALL</Text>
          </View>
          <FlatList
            data={Circlesdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <CircleCard
                name={item.name}
                description={item.description}
                emoji={item.emoji}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <View style={styles.SectionHeading}>
            <Text style={styles.SectionTitle}>Challenges</Text>
            <Text style={styles.SectionView}>VIEW ALL</Text>
          </View>
          <FlatList
            data={ChallengeExploredata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <ChallengesCard
                name={item.name}
                description={item.description}
                people={item.people}
                progress={item.progress}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <View style={styles.SectionHeading}>
            <Text style={styles.SectionTitle}>Learn</Text>
            <Text style={styles.SectionView}>VIEW ALL</Text>
          </View>
          <FlatList
            data={LearnCarddata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <LearnCard image={item.image} title={item.title} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.Container}></View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  Container: {
    height: 230,
  },
  topHeader: {
    height: 135,
    backgroundColor: COLORS.WhiteBG,
    paddingTop: 80,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: COLORS.Gray,
  },
  headerTitle: {
    color: COLORS.Black,
    fontSize: 24,
    fontFamily: 'Quicksand-SemiBold',
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
  ExploreContent: {
    paddingHorizontal: 24,
    marginTop: 12,
  },
});

//make this component available to the app
export default Explore;
