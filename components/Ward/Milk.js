import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class Milk extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.first}>
        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.023,
            width: Dimensions.get('window').width * 0.25,
            color: 'black',
          }}>
          {this.props.val.time}
        </Text>

        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.023,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.med}
        </Text>

        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.023,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.food}
        </Text>

        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.023,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.milk}
        </Text>

        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.023,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.water}
        </Text>

        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.023,
            width: Dimensions.get('window').width * 0.15,
            color: 'black',
          }}>
          {this.props.val.other}
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
