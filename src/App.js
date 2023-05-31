import React, { useState, useEffect } from 'react';
import { View, FlatList, Modal, ScrollView, Text, Button, StyleSheet, ActivityIndicator, Dimensions, Switch, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './Styles/stylesheet';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/home';
import Test from './screens/test';


const Stack = createNativeStackNavigator();


const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SingleNewsPage" component={Test} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;