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

export default class Pickward extends Component {
  general() {
    Actions.generall();
  }
  stroke() {
    Actions.strokewardd();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexCenter}>
          <Icon
            name="md-star"
            style={{
              color: '#ba222c',
              marginTop: Dimensions.get('window').height * 0.05,
              marginLeft: Dimensions.get('window').height * 0.01,
            }}
          />
          <Text
            style={{
              color: '#ba222c',
              fontWeight: '900',
              fontSize: Dimensions.get('window').width * 0.06,
              marginTop: Dimensions.get('window').height * 0.05,
              marginLeft: Dimensions.get('window').height * 0.01,
            }}>
            請照醫師告知選擇病房類型
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height * 0.01}} />

        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            this.general();
          }}>
          <View style={styles.flexCenter}>
            <Text
              style={{
                fontSize: Dimensions.get('window').height * 0.05,
                color: 'black',
                fontWeight: '900',
              }}>
              一般病房觀察
            </Text>
            <Icon name="md-arrow-round-forward" style={{marginLeft: 10}} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            this.stroke();
          }}>
          <View style={styles.flexCenter}>
            <Text
              style={{
                fontSize: Dimensions.get('window').height * 0.05,
                color: 'black',
                fontWeight: '900',
              }}>
              腦中風觀察房
            </Text>
            <Icon name="md-arrow-round-forward" style={{marginLeft: 10}} />
          </View>
        </TouchableOpacity>
      </View>
    );
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
    backgroundColor: '#e6efd1',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#abcd62',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
