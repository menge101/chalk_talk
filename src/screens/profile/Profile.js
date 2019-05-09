import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types'


export class ProfileScreen extends React.Component {
  render() {
    let default_props = { size: styles.image.height, style: styles.image};
    let avatar = ((null != this.props.pic) ?
        <Avatar {...default_props} source={this.props.pic}/> :
        <Avatar {...default_props} icon={{name: 'user', type: 'font-awesome'}}/>);
    let name = <Text>{this.props.hashName}</Text>;
    let kennel = <Text>{this.props.motherKennel}</Text>;
    return (
      <View style={styles.outerContainer}>
        { avatar }
        <View style={styles.innerContainer}>
          { name }
          { kennel }
        </View>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  pic: PropTypes.number,
  hashName: PropTypes.string.isRequired,
  motherKennel: PropTypes.string.isRequired
};

ProfileScreen.defaultProps = {
    pic: null
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#70B199',
    alignItems: 'baseline',
    justifyContent: 'center',
    height: 105,
    borderRadius: 6,
    borderWidth: 2.5,
    borderColor: '#70B199',
    padding: 10,
    paddingTop: 25,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 80,
    padding: 10,
  },
  image: {
    borderRadius: 8,
    borderWidth: 5,
    borderColor: '#fff',
    width: 100,
    height: 100,
    alignSelf: 'center',
  }
});