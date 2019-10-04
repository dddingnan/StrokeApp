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
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'native-base';

export default class Medoutline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };

    AsyncStorage.getItem('id').then(value => {
      this.setState({id: value});
    });
  }

  confirm() {
    Actions.medlistt();
  }

  sconfirm() {
    Actions.recordd({id: this.state.id});
  }

  qrcode() {
    Actions.qrcodee();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              this.qrcode();
            }}>
            <View style={styles.flexCenter}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').height * 0.045,
                  color: '#92bf1a',
                  fontWeight: '500',
                }}>
                QRcode查詢
              </Text>
              <Icon
                name="md-arrow-round-forward"
                style={{
                  fontSize: Dimensions.get('window').height * 0.06,
                  color: '#92bf1a',
                  fontWeight: '500',
                  marginLeft: Dimensions.get('window').height * 0.02,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              this.confirm();
            }}>
            <View style={styles.flexCenter}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').height * 0.045,
                  color: '#92bf1a',
                  fontWeight: '500',
                }}>
                藥物查詢
              </Text>
              <Icon
                name="md-arrow-round-forward"
                style={{
                  fontSize: Dimensions.get('window').height * 0.06,
                  color: '#92bf1a',
                  fontWeight: '500',
                  marginLeft: Dimensions.get('window').height * 0.08,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              this.sconfirm();
            }}>
            <View style={styles.flexCenter}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').height * 0.045,
                  color: '#92bf1a',
                  fontWeight: '500',
                }}>
                藥物紀錄
              </Text>
              <Icon
                name="md-arrow-round-forward"
                style={{
                  fontSize: Dimensions.get('window').height * 0.06,
                  color: '#92bf1a',
                  fontWeight: '500',
                  marginLeft: Dimensions.get('window').height * 0.08,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: Dimensions.get('window').height * 0.03,
          }}>
          <Image
            style={styles.img2}
            source={require('../../images/logo1.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Button: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.7,
    borderColor: 'black',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img2: {
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').height * 0.3,
    marginTop: Dimensions.get('window').height * 0.1,
  },
});
