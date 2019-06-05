import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Auth } from 'aws-amplify-react-native';

import { ProfileScreen } from './src/screens/profile/Profile.js'

import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config);

const AppNavigator = createStackNavigator(
    {
        Profile: {screen: ProfileScreen},
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#70B199',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const App = createAppContainer(AppNavigator);

export default App;

/*
export default class App extends React.Component {
  render() {
    return (
        <ProfileScreen
          hashName='Kunt-Fu Weasel'
          motherKennel='Pittsburgh Hash House Harriers'
          pic={require('./src/screens/profile/pic.jpg')}
          auth={ Auth }
        />
    );
  }
}
*/
