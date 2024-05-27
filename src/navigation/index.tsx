import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Onboarding from '../screens/Onboarding';
import BottomNavigator from './BottomNavigation';
import JoinChallenge from '../screens/JoinChallenge';
import CreateAccount from '../screens/CreateAccount';
import SelectHabit from '../screens/SelectHabit';
import ClaimPoints from '../screens/ClaimPoints';
import ClaimSplit from '../screens/ClaimSplit';

export type StackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Bottom: undefined;
  JoinChallenge: undefined;
  CreateAccount: undefined;
  SelectHabit: undefined;
  ClaimPoints: undefined;
  ClaimSplit: undefined;
  login: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Bottom" component={BottomNavigator} />
      <Stack.Screen name="JoinChallenge" component={JoinChallenge} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="SelectHabit" component={SelectHabit} />
      <Stack.Screen name="ClaimPoints" component={ClaimPoints} />
      <Stack.Screen name="ClaimSplit" component={ClaimSplit} />
    </Stack.Navigator>
  );
};

export default MyStack;
