
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import LoginScreen from './app/pages/login';
import Dwernavigater from './app/navigation/dwernavigater';

 

const Props  ={}; 
export default class App extends Component<Props> {
  render() {
    return (
      // <View style={styles.container}> 
      //    <StatusBar backgroundColor="#ba2d65" barStyle="light-content" />
      //     <Login />
      // </View>
      <Dwernavigater />
    );
  }
} 

 

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#f06292',
    flex: 1,
  }, 
});
