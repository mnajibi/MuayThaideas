import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, Alert } from 'react-native';
import Buttons from '../components/Button';
import { UIStyle, homeStyle } from '../utils/styles';

const WorkoutSettingsScreen = () => {
  const [workoutTime, setWorkoutTime] = useState(60);
  const [roundTime, setRoundTime] = useState(1);
  const [restTime, setRestTime] = useState(20);
  const [beginner, setBeginner] = useState(true);
  const [advanced, setAdvanced] = useState(false);
  const [userToggle, setUserToggle] = useState(false);

  const handleWorkoutTimeChange = (text) => {
    const enteredValue = parseInt(text, 10);
  
    if (!isNaN(enteredValue) && enteredValue >= 10 && enteredValue <= 120) {
      setWorkoutTime(enteredValue.toString());
    } else {
      Alert.alert(
        'Invalid Workout Time',
        'Must be a time between 10 minutes and 120 minutes',
        [{ text: 'OK' }]
      );
      setWorkoutTime(60);
    }
  };

  const handleRoundTimeChange = (text) => {
    const enteredValue = parseInt(text, 10);
  
    if (!isNaN(enteredValue) && enteredValue >= 0.5 && enteredValue <= 5) {
      setRoundTime(enteredValue.toString());
    } else {
      Alert.alert(
        'Invalid Round Time',
        'Must be a time between 0.5 and 5 minutes',
        [{ text: 'OK' }]
      );
      setRoundTime(1);
    }
  };

  const handleRestTimeChange = (text) => {
    const enteredValue = parseInt(text, 10);
  
    if (!isNaN(enteredValue) && enteredValue >= 0 && enteredValue <= 120) {
      setRestTime(enteredValue.toString());
    } else {
      Alert.alert(
        'Invalid Rest Time',
        'Must be a time between 0 and 120 seconds',
        [{ text: 'OK' }]
      );
      setRestTime(20);
    }
  };

  const handleIncrement = (param, maxValue) => {
    switch (param) {
      case 'workoutTime':
        setWorkoutTime((prev) => (prev + 10 <= 120 ? prev + 10 : 120));
        break;
      case 'roundTime':
        setRoundTime((prev) => (prev + 0.5 <= 5 ? prev + 0.5 : 5));
        break;
      case 'restTime':
        setRestTime((prev) => (prev + 10 <= 120 ? prev + 10 : 120));
        break;
      default:
        break;
    }
  };

  const handleDecrement = (param, minValue) => {
    switch (param) {
      case 'workoutTime':
        setWorkoutTime((prev) => (prev - 10 >= 10 ? prev - 10 : 10));
        break;
      case 'roundTime':
        setRoundTime((prev) => (prev - 0.5 >= 0.5 ? prev - 0.5 : 0.5));
        break;
      case 'restTime':
        setRestTime((prev) => (prev - 10 >= 0 ? prev - 10 : 0));
        break;
      default:
        break;
    }
  };

  const handleToggle = (toggleName) => {
    switch (toggleName) {
      case 'beginner':
        setBeginner((prev) => !prev);
        break;
      case 'advanced':
        setAdvanced((prev) => !prev);
        break;
      case 'userToggle':
        setUserToggle((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const startWorkout = () => {
    // Implement your logic for starting the workout
    console.log('Workout started!');
  };

  return (
    <View style = {homeStyle.container}>
      <Text style = {UIStyle.subHeaders}>Workout Time (minutes):</Text>
      <View style = {UIStyle.gridContainer}>
        <Buttons.BasicButton style = {UIStyle.gridItem} title="-" onPress={() => handleDecrement('workoutTime', 10)} />
        <View style={[UIStyle.space]} />
        <TextInput style={[UIStyle.textInput, UIStyle.gridItem]}
                   placeholder='60'
                   value={workoutTime.toString()}
                   onEndEditing={handleWorkoutTimeChange}
                   onChangeText={setWorkoutTime} />
        <View style={UIStyle.space} />
        <Buttons.BasicButton style = {UIStyle.gridItem} title="+" onPress={() => handleIncrement('workoutTime', 120)} />
      </View>

      <Text style = {UIStyle.subHeaders}>Round Time (minutes):</Text>
      <View style = {UIStyle.gridContainer}>
        <Buttons.BasicButton style = {UIStyle.gridItem} title="-" onPress={() => handleDecrement('roundTime', 0.5)} />
        <View style={[UIStyle.space]} />
        <TextInput style={[UIStyle.textInput, UIStyle.gridItem]}
                   placeholder='1'
                   value={roundTime.toString()}
                   onEndEditing={handleRoundTimeChange}
                   onChangeText={setRoundTime} />
        <View style={UIStyle.space} />
        <Buttons.BasicButton style = {UIStyle.gridItem} title="+" onPress={() => handleIncrement('roundTime', 5)} />
      </View>

      <Text style = {UIStyle.subHeaders}>Rest Time (seconds):</Text>
      <View style = {UIStyle.gridContainer}>
        <Buttons.BasicButton style = {UIStyle.gridItem} title="-" onPress={() => handleDecrement('restTime', 10)} />
        <View style={[UIStyle.space]} />
        <TextInput style={[UIStyle.textInput, UIStyle.gridItem]}
                   placeholder='1'
                   value={restTime.toString()}
                   onEndEditing={handleRestTimeChange}
                   onChangeText={setRestTime} />
        <View style={UIStyle.space} />
        <Buttons.BasicButton style = {UIStyle.gridItem} title="+" onPress={() => handleIncrement('restTime', 120)} />
      </View>

      <Text style = {UIStyle.subHeaders}>Toggle Beginner Combinations: {beginner ? 'ON' : 'OFF'}</Text>
      <Switch 
      value={beginner} 
      onValueChange={() => handleToggle('beginner')} 
      trackColor={{true: '#BC8034', false: '#8C7A6B'}}
      thumbColor='#D9CAB3'/>

      <Text style = {UIStyle.subHeaders}>Toggle Advanced Combinations: {advanced ? 'ON' : 'OFF'}</Text>
      <Switch 
      value={advanced} 
      onValueChange={() => handleToggle('advanced')} 
      trackColor={{true: '#BC8034', false: '#8C7A6B'}}
      thumbColor='#D9CAB3'/>
      
      <Text style = {UIStyle.subHeaders}>Toggle User Combinations: {userToggle ? 'ON' : 'OFF'}</Text>
      <Switch 
      value={userToggle} 
      onValueChange={() => handleToggle('userToggle')} 
      trackColor={{true: '#BC8034', false: '#8C7A6B'}}
      thumbColor='#D9CAB3'/>

      <View style = {UIStyle.space} />

      <Buttons.LargeGradientButton title="Start Workout" onPress={startWorkout} colour1={'#90323D'} colour2={'#5E0B15'}/>
    </View>
  );
};

export default WorkoutSettingsScreen;
