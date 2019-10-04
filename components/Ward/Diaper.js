import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class Diaper extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.first}>
        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.025,
            width: Dimensions.get('window').width * 0.25,
            color: 'black',
          }}>
          {this.props.val.timed}
        </Text>

        <Text
          style={{
            marginLeft: Dimensions.get('window').width * 0.03,
            fontSize: Dimensions.get('window').height * 0.028,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.diaper}
        </Text>

        <Text
          style={{
            marginLeft: Dimensions.get('window').width * 0.03,
            fontSize: Dimensions.get('window').height * 0.028,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.pooh}
        </Text>

        <Text
          style={{
            marginLeft: Dimensions.get('window').width * 0.03,
            fontSize: Dimensions.get('window').height * 0.025,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.shape}
        </Text>

        <Text
          style={{
            marginLeft: Dimensions.get('window').width * 0.03,
            fontSize: Dimensions.get('window').height * 0.025,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.color}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  first: {
    marginLeft: Dimensions.get('window').width * 0.01,
    marginTop: Dimensions.get('window').width / 20,
    flexDirection: 'row',
  },
});
