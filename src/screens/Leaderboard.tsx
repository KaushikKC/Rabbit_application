import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  LogBox,
} from 'react-native';
import {COLORS} from '../constants/color';
import {wp} from '../utils/ScreenDimension';
import LinearGradient from 'react-native-linear-gradient';
import PositionCard from '../components/Leaderboard/PositionCard';
import {leaderboardData} from '../constants/data';

const Leaderboard = () => {
  const [selected, setSelected] = useState('Daily');
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const topThreeData = leaderboardData.slice(0, 3);

  // Extracting the rest of the items
  const restData = leaderboardData.slice(3);

  const renderPositionSuffix = (position: any) => {
    switch (position) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
      default:
        return `${position}th`;
    }
  };

  const renderItem = ({item}) => (
    <PositionCard
      name={item.name}
      position={item.position}
      points={item.points}
      image={require('../assets/images/Avatar.png')}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.headerTitle}>LeaderBoard</Text>

        <View style={styles.HeaderMenu}>
          <TouchableOpacity
            style={
              selected === 'Daily'
                ? styles.HeaderMenuTitleActive
                : styles.HeaderMenuTitle
            }
            onPress={() => setSelected('Daily')}>
            <Text
              style={
                selected === 'Daily'
                  ? {color: COLORS.primary}
                  : {color: COLORS.Black}
              }>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selected === 'Weekly'
                ? styles.HeaderMenuTitleActive
                : styles.HeaderMenuTitle
            }
            onPress={() => setSelected('Weekly')}>
            <Text
              style={
                selected === 'Weekly'
                  ? {color: COLORS.primary}
                  : {color: COLORS.Black}
              }>
              Weekly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selected === 'Monthly'
                ? styles.HeaderMenuTitleActive
                : styles.HeaderMenuTitle
            }
            onPress={() => setSelected('Monthly')}>
            <Text
              style={
                selected === 'Monthly'
                  ? {color: COLORS.primary}
                  : {color: COLORS.Black}
              }>
              Monthly
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <LinearGradient
          colors={['#6B73FF', '#000DFF']}
          start={{x: 0, y: 0}}
          end={{x: 0.5, y: 0.5}}
          style={styles.InnerContainer}
        />
        <View style={styles.outerContainer}>
          <View style={styles.topthreeContainer}>
            {topThreeData.map((item, index) => (
              <View key={item.id} style={styles[`placeContainer${index + 1}`]}>
                <Image
                  style={styles.profileImg}
                  source={require('../assets/images/Avatar.png')}
                />
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles[`placePointsContainer${index + 1}`]}>
                  <Text style={styles.positionText}>
                    {renderPositionSuffix(item.position)}
                  </Text>
                  <View style={styles.userPointsContainer}>
                    <Image source={require('../assets/images/Medal.png')} />
                    <Text style={styles.userPoints}>{item.points}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <FlatList
            data={restData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    height: 183,
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
  InnerContainer: {
    flex: 1,
    position: 'absolute',
    padding: 16,
    height: '100%',
    width: wp(100),
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
  outerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  topthreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  profileImg: {
    width: 64,
    height: 64,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: COLORS.WhiteBG,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
    color: COLORS.WhiteBG,
    marginVertical: 10,
  },
  positionText: {
    color: COLORS.primary,
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
  placeContainer1: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25,
  },
  placeContainer2: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  placeContainer3: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 35,
  },
  placePointsContainer1: {
    backgroundColor: COLORS.WhiteBG,
    flexDirection: 'column',
    paddingVertical: 16,
    width: wp(22),
    borderRadius: 80,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placePointsContainer2: {
    backgroundColor: COLORS.WhiteBG,
    flexDirection: 'column',
    paddingVertical: 16,
    width: wp(22),
    borderRadius: 80,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placePointsContainer3: {
    backgroundColor: COLORS.WhiteBG,
    flexDirection: 'column',
    paddingVertical: 16,
    width: wp(22),
    borderRadius: 80,
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.Gray,
    paddingVertical: 10,
  },
  positionCardName: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
  },
  positionCardPoints: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
  },
});

export default Leaderboard;
