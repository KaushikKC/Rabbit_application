//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS} from '../constants/color';
import {hp, wp} from '../utils/ScreenDimension';
import PeopleCard from '../components/Profile/PeopleCard';
import {AchievementData, Activitydata, Peopledata} from '../constants/data';
import AchievementCard from '../components/Profile/AchievementCard';
import ActivityCard from '../components/Profile/ActivityCard';


// create a component
const Profile = () => {
  const [balanceAddress, setBalance] = useState(0);
  const [selected, setSelected] = useState('Activity');
 
  return (
    <View>
      <View style={styles.topHeader}>
        <View style={styles.profileContainer}>
          <Text style={styles.headerTitle}>Your Profile</Text>
          <Image source={require('../assets/images/Settings.png')} />
        </View>
        <View style={styles.usercontainer}>
          <Image
            style={styles.userImage}
            source={require('../assets/images/profile.webp')}
          />
          <View>
            <Text style={styles.userName}>Kaushik</Text>
            <View style={styles.userPointsContainer}>
              <Image
                style={styles.userBadgeImage}
                source={require('../assets/images/Medal.png')}
              />
              <Text style={styles.userPoints}>1452 Points</Text>
            </View>
          </View>
        </View>
        <View style={styles.HeaderMenu}>
          <TouchableOpacity
            style={
              selected === 'Activity'
                ? styles.HeaderMenuTitleActive
                : styles.HeaderMenuTitle
            }
            onPress={() => setSelected('Activity')}>
            <Text
              style={
                selected === 'Activity'
                  ? {color: COLORS.primary}
                  : {color: COLORS.Black}
              }>
              Activity
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selected === 'People'
                ? styles.HeaderMenuTitleActive
                : styles.HeaderMenuTitle
            }
            onPress={() => setSelected('People')}>
            <Text
              style={
                selected === 'People'
                  ? {color: COLORS.primary}
                  : {color: COLORS.Black}
              }>
              People
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selected === 'Achievements'
                ? styles.HeaderMenuTitleActive
                : styles.HeaderMenuTitle
            }
            onPress={() => setSelected('Achievements')}>
            <Text
              style={
                selected === 'Achievements'
                  ? {color: COLORS.primary}
                  : {color: COLORS.Black}
              }>
              Achievements
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {selected === 'Activity' ? (
        <ScrollView style={styles.Container}>
          <Text style={styles.connectedText}>Activity</Text>
          <FlatList
            data={Activitydata}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ActivityCard
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            )}
          />
          <View style={styles.emptyContainer}></View>
        </ScrollView>
      ) : selected === 'People' ? (
        <ScrollView style={styles.Container}>
          <Text style={styles.connectedText}>261 Connected</Text>
          <FlatList
            data={Peopledata}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PeopleCard
                name={item.name}
                points={item.points}
                image={item.image}
              />
            )}
          />
          <View style={styles.emptyContainer}></View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.Container}>
          <Text style={styles.connectedText}>2 Achievements</Text>
          <FlatList
            data={AchievementData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <AchievementCard
                name={item.name}
                desc={item.desc}
                emoji={item.emoji}
                color={item.color}
              />
            )}
          />
          <View style={styles.emptyContainer}></View>
        </ScrollView>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  emptyContainer: {
    height: 350,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  topHeader: {
    height: 251,
    backgroundColor: COLORS.WhiteBG,
    paddingTop: 75,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: COLORS.Gray,
  },
  headerTitle: {
    color: COLORS.Black,
    fontSize: 24,
    fontFamily: 'Quicksand-SemiBold',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usercontainer: {
    flexDirection: 'row',
  },
  userImage: {
    width: 56,
    height: 56,
    borderRadius: 56,
    marginRight: 10,
  },
  userName: {
    color: COLORS.Black,
    fontSize: 18,
    fontFamily: 'Quicksand-SemiBold',
  },
  userPointsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF3DA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  userPoints: {
    color: '#FEA800',
    marginRight: 3,
  },
  userBadgeImage: {},
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
    width: wp(28),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10,
  },
  HeaderMenuTitleActive: {
    height: 28,
    width: wp(28),
    backgroundColor: COLORS.WhiteBG,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    color: COLORS.primary,
  },
  Container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  connectedText: {
    color: COLORS.Black,
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
  },
  depositButton: {
    marginTop: 5,
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  depositButtonText: {
    color: COLORS.WhiteBG,
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
  },
  profileDetailContainer: {
    flexDirection: 'column',
    marginLeft: 'auto',
  },
  balanceTxt: {
    color: COLORS.Black,
  },
  addressTxt: {
    color: COLORS.Black,
  },
});

//make this component available to the app
export default Profile;
