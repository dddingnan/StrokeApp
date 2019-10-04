import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
  Linking,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Qrcode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tt: '',
    };
  }

  onSuccess(e) {
    if (e.data != '') {
      Alert.alert(e.data);
      console.log('QR code scanned!', e);
      Actions.qrcode2({data: e.data});
    } else {
      Alert.alert('請再掃一次qrcode');
      console.log('QR code not scanned!', e.data);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: Dimensions.get('window').height * 0.03,
            }}>
            {' '}
            請掃描藥包上QR Code{' '}
          </Text>
        </View>

        <View style={styles.boxtwo}>
          <QRCodeScanner onRead={this.onSuccess.bind(this)} />
        </View>

        <View style={[styles.boxcContainer, styles.boxthree]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 4.5,
    width: Dimensions.get('window').width,
  },
  boxtwo: {
    flex: 3,
    backgroundColor: 'black',
    width: Dimensions.get('window').width,
  },
  boxthree: {
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.2,
  },
});
