import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProfileScreen } from './src/screens/profile/Profile.js'

export default class App extends React.Component {
  render() {
    return (
      <ProfileScreen
        hashName='Kunt-Fu Weasel'
        motherKennel='Pittsburgh Hash House Harriers'
        pic={require('./src/screens/profile/pic.jpg')}
      />
    );
  }
}
