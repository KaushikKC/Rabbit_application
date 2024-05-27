/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackParamList} from '.';

// import Marketplace from '../screens/Marketplace';
import {Image, Text} from 'react-native';
import {wp} from '../utils/ScreenDimension';

import {COLORS} from '../constants/color';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Leaderboard from '../screens/Leaderboard';
import Profile from '../screens/Profile';
import CreateScreen from '../screens/CreateScreen';

type BottomTabNavigatorParamList = {
  Home: StackParamList;
  Explore: undefined;
  Marketplace: undefined;
  LeaderBoard: undefined;
  Profile: undefined;
  Create: undefined;
};

const Bottom = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: 'blue'},
        headerTintColor: '#000',
        tabBarIconStyle: {
          color: 'white',
        },
        tabBarStyle: {
          height: 69,
          width: wp(100) - 32,
          backgroundColor: COLORS.WhiteBG,
          position: 'absolute',
          borderRadius: 16,
          bottom: 24,
          marginHorizontal: 16,
          borderColor: '#fff',
          borderWidth: 1,
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Home',

          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../assets/images/BottomNavigator/HomeActive.png')
                    : require('../assets/images/BottomNavigator/Home.png')
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 15,
                        borderBottomColor: '#fff',
                        marginTop: -14,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
          ),
        }}
      />
      <Bottom.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../assets/images/BottomNavigator/ExploreActive.png')
                    : require('../assets/images/BottomNavigator/Explore.png')
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 15,
                        borderBottomColor: '#fff',
                        marginTop: -14,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
          ),
        }}
      />
      <Bottom.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Create',

          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../assets/images/BottomNavigator/Add.png')
                    : require('../assets/images/BottomNavigator/Add.png')
                }
                style={{
                  width: 50,
                  height: 50,
                }}
              />
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 15,
                        borderBottomColor: '#fff',
                        marginTop: -14,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
          ),
        }}
      />
      <Bottom.Screen
        name="LeaderBoard"
        component={Leaderboard}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../assets/images/BottomNavigator/LeaderboardActive.png')
                    : require('../assets/images/BottomNavigator/Leaderboard.png')
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 18,
                        borderBottomColor: '#fff',
                        marginTop: -12,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../assets/images/BottomNavigator/ProfileActive.png')
                    : require('../assets/images/BottomNavigator/Profile.png')
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 18,
                        borderBottomColor: '#fff',
                        marginTop: -12,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
