import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import TokenManagement from './src/components/token-management/tokenManagement';

export default class App extends Component {
  
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#dc082a"
        />
        <TokenManagement style={styles.welcome}></TokenManagement>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dc082a',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});