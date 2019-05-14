import React from 'react';
import { ProfileScreen } from './src/screens/profile/Profile.js'

import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config);

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
