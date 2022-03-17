import 'react-native-gesture-handler';
import { View, Text, LogBox } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorController } from './src/navigation/StackNavigationController';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigatorController />
    </NavigationContainer>
  )
}
