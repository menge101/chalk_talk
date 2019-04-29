import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'


export class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.props.pic}
          style={{width: 100, height: 100}}
        />
        <Text>
          {this.props.hashName}
        </Text>
        <Text>
          {this.props.motherKennel}
        </Text>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  pic: PropTypes.object,
  hashName: PropTypes.string.isRequired,
  motherKennel: PropTypes.string.isRequired
}

ProfileScreen.defaultProps = {
    pic: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});