import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class Exer extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.first}>
        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.025,
            width: Dimensions.get('window').width * 0.25,
            color: 'black',
          }}>
          {this.props.val.time}
        </Text>

        <Text
          style={{
            marginLeft: Dimensions.get('window').width * 0.18,
            fontSize: Dimensions.get('window').height * 0.03,
            color: 'black',
          }}>
          {this.props.val.s}
          {this.props.val.dd}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  first: {
    marginLeft: Dimensions.get('window').width / 25,
    marginTop: Dimensions.get('window').width / 20,
    flexDirection: 'row',
  },
});
