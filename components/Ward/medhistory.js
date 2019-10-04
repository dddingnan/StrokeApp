import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'native-base';

export default class HISTORY extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.orangeText}>{this.props.val.med}</Text>
        </View>

        <View style={styles.cardMid}>
          <View style={{display: 'flex', alignItems: 'flex-start'}}>
            <Text style={styles.blackText}>
              {this.props.val.stage}
              {this.props.val.amount}顆
            </Text>
            <Text style={styles.greyText}>
              {this.props.val.date}
              {'    '}
              {this.props.val.time}
            </Text>
          </View>

        </View>

        <View style={styles.cardRight}>
          <Icon name="checkmark" style={styles.check} />
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
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    borderBottomColor: 'black',
  },
  orangeText: {
    fontSize: Dimensions.get('window').height * 0.045,
    color: '#e86610',
    fontWeight: 'bold',
  },
  blackText: {
    fontSize: Dimensions.get('window').height * 0.035,
    color: 'black',
    fontWeight: 'bold',
  },
  greyText: {
    fontSize: Dimensions.get('window').height * 0.015,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardLeft: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffdbb4',
  },
  cardMid: {
    display: 'flex',
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfefe',
  },
  cardRight: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6efd1',
  },
  check: {
    fontSize: Dimensions.get('window').height * 0.06,
    color: '#92bf1a',
    fontWeight: '500',
    marginLeft: Dimensions.get('window').height * 0.02,
  },
});
