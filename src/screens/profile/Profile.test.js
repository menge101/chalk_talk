import React from 'react';
import renderer from 'react-test-renderer';

import { ProfileScreen } from './Profile.js'

describe('<ProfileScreen />', () => {
  it('matches rendering snapshot', () => {
    let pic = require('./pic.jpg')
    let hashName = 'Kunt-Fu Weasel'
    let motherKennel = 'Pittsburgh Hash House Harriers'
    const tree = renderer.create(
      <ProfileScreen
        pic={pic}
        hashName={hashName}
        motherKennel={motherKennel}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});