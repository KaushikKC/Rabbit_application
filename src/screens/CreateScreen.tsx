//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Switch} from 'react-native';
import {COLORS} from '../constants/color';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {wp} from '../utils/ScreenDimension';
import EditableInputContainer from '../components/Create/InputContainer';
import HabitPopup from '../components/Create/HabitPopup';

// create a component
const CreateScreen = () => {
  const [selected, setSelected] = useState('Habit');
  const [dataselected, setDataSelected] = useState('Mobile');
  const [validatorSelected, setValidatorSelected] = useState('Enable');
  const [habitName, setHabitName] = useState('');
  const [icon, setIcon] = useState('🚶‍♂️');
  const [challengeName, setChallengeName] = useState('');
  const [goalName, setGoalName] = useState('1 times');
  const [goalDescription, setGoalDescription] = useState('or more per day');
  const [targetName, setTargetName] = useState('5,000 steps');
  const [targetDescription, setTargetDescription] = useState('or more per day');
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);
  const [stakeAmount, setStakeAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USDC');
  const [minPeople, setMinPeople] = useState('3');
  const [maxPeople, setMaxPeople] = useState('10');
  const [habitPopupVisible, setHabitPopupVisible] = useState(false);
  const [selectedHabits, setSelectedHabits] = useState([]);

  const toggleReminder = () => {
    setIsReminderEnabled(previousState => !previousState);
  };

  const toggleHabitSelection = (habit: never) => {
    // Check if the habit is already selected
    const isSelected = selectedHabits.includes(habit);
    if (isSelected) {
      // If it's selected, remove it from the selected habits
      setSelectedHabits(prevHabits =>
        prevHabits.filter(item => item !== habit),
      );
    } else {
      // If it's not selected, add it to the selected habits
      setSelectedHabits(prevHabits => [...prevHabits, habit]);
    }
  };

  const openHabitPopup = () => {
    setHabitPopupVisible(true);
  };

  const closeHabitPopup = () => {
    setHabitPopupVisible(false);
  };

  const handleHabitSelect = habit => {
    setSelectedHabits(prevHabits => [...prevHabits, habit]);
    setHabitPopupVisible(false);
  };

  const handleSave = (label, name, description) => {
    switch (label) {
      case 'Goal':
        // Save the edited goal (name and description) to the appropriate data structure or database
        setGoalName(name);
        setGoalDescription(description);
        break;
      case 'Target':
        // Save the edited target (name and description) to the appropriate data structure or database
        setTargetName(name);
        setTargetDescription(description);
        break;
      case 'Stake':
        // Save the edited stake (name and description) to the appropriate data structure or database
        console.log('Saving edited stake...');
        break;
      // Add additional cases for other input labels if needed
      default:
        console.log('Invalid label:', label);
    }
    // Update the habit name, description, and regular item here if needed
  };

  return (
    <View>
      <View style={styles.topHeader}>
        <Text style={styles.headerTitle}>Create {selected}</Text>
      </View>
      <ScrollView style={styles.CreateContent}>
        <View>
          <Text style={styles.createTxt}>CREATE</Text>
          <View style={styles.HeaderMenu}>
            <TouchableOpacity
              style={
                selected === 'Habit'
                  ? styles.HeaderMenuTitleActive
                  : styles.HeaderMenuTitle
              }
              onPress={() => setSelected('Habit')}>
              <Text
                style={
                  selected === 'Habit'
                    ? {color: COLORS.primary}
                    : {color: COLORS.Black}
                }>
                Habit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selected === 'Challenge'
                  ? styles.HeaderMenuTitleActive
                  : styles.HeaderMenuTitle
              }
              onPress={() => setSelected('Challenge')}>
              <Text
                style={
                  selected === 'Challenge'
                    ? {color: COLORS.primary}
                    : {color: COLORS.Black}
                }>
                Challenge
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {selected == 'Habit' ? (
          <>
            <View>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter the Name"
                placeholderTextColor={COLORS.Grey}
                value={habitName}
                onChangeText={text => setHabitName(text)}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Icon</Text>
              <TextInput
                style={styles.input}
                placeholder="Icon"
                placeholderTextColor={COLORS.Grey}
                value={icon}
                onChangeText={text => setIcon(text)}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Goal</Text>
              <EditableInputContainer
                label="Goal"
                initialName={goalName}
                initialDescription={goalDescription}
                onSave={handleSave}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Target</Text>
              <EditableInputContainer
                label="Target"
                initialName={targetName}
                initialDescription={targetDescription}
                onSave={handleSave}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Remainder</Text>
              <View style={styles.inputContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.description}>
                    Remember to set off time for a workout today.
                  </Text>
                  <Switch
                    trackColor={{false: '#767577', true: COLORS.Green}}
                    thumbColor={COLORS.WhiteBG}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleReminder}
                    value={isReminderEnabled}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.inputLabel}>DATA</Text>
              <View style={styles.HeaderMenu}>
                <TouchableOpacity
                  style={
                    dataselected === 'Mobile'
                      ? styles.HeaderMenuTitleActive
                      : styles.HeaderMenuTitle
                  }
                  onPress={() => setDataSelected('Mobile')}>
                  <Text
                    style={
                      dataselected === 'Mobile'
                        ? {color: COLORS.primary}
                        : {color: COLORS.Black}
                    }>
                    Mobile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    dataselected === 'Device'
                      ? styles.HeaderMenuTitleActive
                      : styles.HeaderMenuTitle
                  }
                  onPress={() => setDataSelected('Device')}>
                  <Text
                    style={
                      dataselected === 'Device'
                        ? {color: COLORS.primary}
                        : {color: COLORS.Black}
                    }>
                    Device
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <View>
            <View>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter the Name"
                placeholderTextColor={COLORS.Grey}
                value={challengeName}
                onChangeText={text => setChallengeName(text)}
              />
            </View>
            <Text style={styles.inputLabel}>Stake Amount</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter stake amount"
                placeholderTextColor={COLORS.Grey}
                keyboardType="numeric"
                value={stakeAmount}
                onChangeText={text => setStakeAmount(text)}
              />
            </View>
            <Text style={styles.inputLabel}>Stake Currency</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter stake Currency"
                value={selectedCurrency}
                onChangeText={text => setSelectedCurrency(text)}
              />
            </View>
            <Text style={styles.inputLabel}>Habits</Text>
            <View>
              <View style={styles.habitinputContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.description}>
                    Remember to set off time for habits.
                  </Text>
                  <Switch
                    trackColor={{false: '#767577', true: COLORS.Green}}
                    thumbColor={COLORS.WhiteBG}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleReminder}
                    value={isReminderEnabled}
                  />
                </View>
                <View style={styles.habitsGridContainer}>
                  {selectedHabits.map(
                    (habit, index) =>
                      index % 4 === 0 && (
                        <View key={index} style={styles.habitsGridRow}>
                          {selectedHabits
                            .slice(index, index + 4)
                            .map((habit, subIndex) => (
                              <TouchableOpacity
                                key={subIndex}
                                style={styles.habitItem}
                                onPress={() => toggleHabitSelection(habit)}>
                                <Text style={styles.habitItemText}>
                                  {habit}
                                </Text>
                              </TouchableOpacity>
                            ))}
                          {/* Add empty TouchableOpacity components to fill empty slots */}
                          {[
                            ...Array(
                              4 - selectedHabits.slice(index, index + 4).length,
                            ),
                          ].map((_, emptyIndex) => (
                            <TouchableOpacity
                              key={emptyIndex}
                              style={styles.habitItem}>
                              <Text> </Text>
                              {/* Ensure a Text component is rendered even for empty slots */}
                            </TouchableOpacity>
                          ))}
                        </View>
                      ),
                  )}
                </View>
                <TouchableOpacity
                  style={styles.habitsAdd}
                  onPress={openHabitPopup}>
                  <Text style={styles.habitAddText}>Add Habit</Text>
                </TouchableOpacity>
              </View>
              <HabitPopup
                isVisible={habitPopupVisible}
                onClose={closeHabitPopup}
                habits={['Exercise', 'Read', 'Meditate', 'Drink water', 'Walk']}
                onHabitSelect={handleHabitSelect}
              />
              <Text style={styles.inputLabel}>Limit</Text>
              <View>
                <View style={[styles.inputContainer, {height: 82}]}>
                  <View>
                    <Text style={styles.description}>
                      Should stake to join the challenge
                    </Text>
                    <View style={styles.regularBox}>
                      <View style={styles.limitDiv}>
                        <View style={styles.limitDiv}>
                          <Text style={{marginRight: 5, color: COLORS.Black}}>
                            Min:
                          </Text>
                          <TextInput
                            style={styles.limitinput}
                            placeholder="Enter Maxmimum peopley"
                            placeholderTextColor={COLORS.Grey}
                            keyboardType="numeric"
                            value={minPeople}
                            onChangeText={text => setMinPeople(text)}
                          />
                        </View>
                        <View style={styles.limitDiv}>
                          <Text style={{marginRight: 5, color: COLORS.Black}}>
                            Max:
                          </Text>
                          <TextInput
                            style={styles.limitinput}
                            placeholder="Enter Maxmimum people"
                            placeholderTextColor={COLORS.Grey}
                            keyboardType="numeric"
                            value={maxPeople}
                            onChangeText={text => setMaxPeople(text)}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.inputLabel}>Validator</Text>
              <View style={styles.HeaderMenu}>
                <TouchableOpacity
                  style={
                    validatorSelected === 'Enable'
                      ? styles.HeaderMenuTitleActive
                      : styles.HeaderMenuTitle
                  }
                  onPress={() => setValidatorSelected('Enable')}>
                  <Text
                    style={
                      validatorSelected === 'Enable'
                        ? {color: COLORS.primary}
                        : {color: COLORS.Black}
                    }>
                    Enable
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    validatorSelected === 'Disable'
                      ? styles.HeaderMenuTitleActive
                      : styles.HeaderMenuTitle
                  }
                  onPress={() => setValidatorSelected('Disable')}>
                  <Text
                    style={
                      validatorSelected === 'Disable'
                        ? {color: COLORS.primary}
                        : {color: COLORS.Black}
                    }>
                    Disable
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={styles.Container}></View>
      </ScrollView>
      <TouchableOpacity
        style={styles.createButton}>
        <Text style={styles.createButtonText}>
          {selected === 'Habit' ? 'Create Habit' : 'Create Challenge'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  Container: {
    height: 300,
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
  HeaderMenu: {
    height: 36,
    width: wp(100) - 48,
    backgroundColor: COLORS.Gray,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 4,
    marginVertical: 12,
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
    fontFamily: 'Quicksand-Regular',
    color: COLORS.Black,
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
    fontFamily: 'Quicksand-Regular',
  },
  CreateContent: {
    paddingHorizontal: 24,
    marginTop: 12,
  },
  inputLabel: {
    color: COLORS.Black,
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
    marginVertical: 8,
  },
  input: {
    color: COLORS.Black,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontFamily: 'Quicksand-Regular',
  },
  inputContainer: {
    width: wp(100) - 48,
    height: 72,
    padding: 15,
    backgroundColor: COLORS.WhiteBG,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  habitinputContainer: {
    width: wp(100) - 48,
    padding: 15,
    backgroundColor: COLORS.WhiteBG,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  edit: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: COLORS.Grey,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Quicksand-semiBold',
    fontSize: 14,
    color: COLORS.Black,
  },
  description: {
    fontFamily: 'Quicksand-Regular',
    color: COLORS.Grey,
    width: 250,
    marginBottom: 5,
  },
  regularBox: {
    height: 32,
    backgroundColor: COLORS.Gray,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  regularItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  regularItemsText: {
    fontFamily: 'Quicksand-Regular',
    marginHorizontal: 4,
    color: COLORS.Black,
  },
  regularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: COLORS.WhiteBG,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
  },
  picker: {
    height: 40,
    width: 100, // Adjust width as needed
  },
  habitsAdd: {
    height: 36,
    backgroundColor: COLORS.WhiteBG,
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  habitAddText: {
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
    color: COLORS.Black,
  },
  limitDiv: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  limitinput: {
    height: 45,
    width: wp(10),
    borderColor: 'gray',
    paddingHorizontal: 5,
    fontFamily: 'Quicksand-Regular',
    color: COLORS.Black,
  },
  habitsGridContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  habitsGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  habitItem: {
    width: '100%', // Adjust this width based on your preference
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
  },
  habitItemText: {
    marginVertical: 5,
    textAlign: 'center',
  },
  createButton: {
    position: 'absolute',
    bottom: 240, // Adjust as needed to position the button above the bottom navigation
    left: 24,
    right: 24,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: COLORS.WhiteBG,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
  },
  createTxt: {
    color: COLORS.Black,
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
    marginVertical: 8,
  },
});

//make this component available to the app
export default CreateScreen;
