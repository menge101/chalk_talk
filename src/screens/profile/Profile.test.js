import React from 'react';
import renderer from 'react-test-renderer';

import { ProfileScreen } from './Profile.js'

describe('<ProfileScreen /> with pic', () => {
    let pic = require('./pic.jpg');
    let hashName = 'Kunt-Fu Weasel';
    let motherKennel = 'Pittsburgh Hash House Harriers';
    const tree = renderer.create(<ProfileScreen pic={pic} hashName={hashName} motherKennel={motherKennel}/>).toJSON();

    it('has a profile pic', () => {
        expect(tree.children[0].type).toBe('View');
    });

    it('has the hash name', () => {
        expect(tree.children[1].children[0].children[0]).toBe(hashName);
    });

    it('has the kennel name', () => {
        expect(tree.children[1].children[1].children[0]).toBe(motherKennel);
    });

    it('matches rendering snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});

describe('<ProfileScreen /> without pic', () => {
    let hashName = 'Kunt-Fu Weasel';
    let motherKennel = 'Pittsburgh Hash House Harriers';
    const tree = renderer.create(<ProfileScreen hashName={hashName} motherKennel={motherKennel}/>).toJSON();

    it('has a profile pic', () => {
        expect(tree.children[0].type).toBe('View');
    });

    it('has the hash name', () => {
        expect(tree.children[1].children[0].children[0]).toBe(hashName);
    });

    it('has the kennel name', () => {
        expect(tree.children[1].children[1].children[0]).toBe(motherKennel);
    });

    it('matches rendering snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});