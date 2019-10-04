import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'native-base';

export default class Dischargeinstructions extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  Button: {
    marginTop: Dimensions.get('window').height * 0.02,
    backgroundColor: '#f5d2d4',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
