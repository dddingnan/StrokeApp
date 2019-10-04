import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default class CALHISTORY extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.up}>
          <Text style={styles.orangeText}>{this.props.val.title}</Text>
        </View>

        <View style={styles.flexRow}>
          <View style={styles.cardLeft}>
            <Text style={styles.blackText}>確認</Text>
          </View>

          <View style={styles.cardRight}>
            <View style={styles.flexOne}>
              <Text style={styles.blackText}>{this.props.val.content}</Text>
            </View>
            <View style={styles.flexOne2}>
              <Text style={styles.blackText}>
                {this.props.val.date}
                {'    '}
                {this.props.val.time}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 6,
  },
  orangeText: {
    fontSize: Dimensions.get('window').height * 0.045,
    color: '#e86610',
    fontWeight: 'bold',
  },
  up: {
    backgroundColor: '#ffdbb4',
    height: '50%',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLeft: {
    display: 'flex',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6efd1',
  },
  cardRight: {
    display: 'flex',
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  blackText: {
    fontSize: Dimensions.get('window').height * 0.025,
    color: 'black',
    fontWeight: 'bold',
  },
  flexOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRightWidth: 0.8,
    borderRightColor: 'black',
  },
  flexOne2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 5,
  },

  flexRow: {
    height: '50%',
    borderBottomWidth: 0.8,
    borderBottomColor: 'black',
    flexDirection: 'row',
  },
  img1: {
    width: Dimensions.get('window').width / 11,
    height: Dimensions.get('window').height / 20,
  },
  img2: {
    marginLeft: Dimensions.get('window').width / 2.8,
  },
});
