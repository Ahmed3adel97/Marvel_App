import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Home from './src/Screens/home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './src/Screens/signup'
const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
});
