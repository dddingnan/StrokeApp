import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Alert,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Orientation from 'react-native-orientation';
import AsyncStorage from '@react-native-community/async-storage';

export default class LOGIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      height: '',
    };

    Orientation.lockToPortrait();
  }

  async go() {
    Keyboard.dismiss();
    if (this.state.id != '') {
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/User_Login.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.id,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'YES') {
            let id = this.state.id;
            AsyncStorage.setItem('id', id);
            Alert.alert('登入成功');
            Actions.homee();
          } else {
            Alert.alert('登入失敗');
          }
        })
        .catch(error => {
          console.log('error');
          Alert.alert(error);
        });
    } else {
      Alert.alert('請輸入資料');
    }
  }

  gos() {
    Actions.homee();
  }

  goCare() {
    AsyncStorage.setItem('id', this.state.id);
    Actions.caree();
  }

  render() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round((dimensions.width * 10) / 15);
    const imageWidth = dimensions.width;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <Image
            style={{
              height: imageHeight,
              width: imageWidth,
            }}
            source={require('../images/logintitle.png')}
          />
        </View>

        <View>
          <View
            style={{
              marginLeft: Dimensions.get('window').height * 0.05,
              marginRight: Dimensions.get('window').width * 0.05,
              marginTop: Dimensions.get('window').width * 0.02,
            }}>
            <Text style={styles.top}>
              腦中風的治療是與時間賽跑的重症,急診資源app可以幫助您在急診接下來得流程,引導您對健康處置進一步認識,事先了解需要配合之注意事項,利用自我的評估方式幫助醫師對病史的了解,也讓您對腦中風有所認識。
            </Text>
          </View>

          <View
            style={{
              marginLeft: Dimensions.get('window').height * 0.02,
              marginRight: Dimensions.get('window').height * 0.02,
              marginTop: Dimensions.get('window').height * 0.02,
            }}>
            <Text style={styles.down}>一請您先輸入病歷號碼一</Text>
          </View>

          <TextInput
            onChangeText={text => this.setState({id: text})}
            value={this.state.id}
            keyboardType="email-address"
            placeholderTextColor="#757171"
            returnKeyType="go"
            placeholderTextColor="#525252"
            style={styles.input}
          />

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => this.go()} style={styles.Button}>
              <Text style={styles.confirm}>確認 / Enter</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.goCare()}
              style={styles.Button}>
              <Text style={styles.confirm}>前往照護小幫手</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => Actions.registerr()}
              style={styles.Button}>
              <Text style={styles.confirms}>註冊 / Log in</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
            <Image
              style={styles.img2}
              source={require('../images/logo1.png')}
            />
          </View>

          <View
            style={{
              height: Dimensions.get('window').height * 0.09,
              width: Dimensions.get('window').width,
              backgroundColor: 'white',
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  input: {
    height: Dimensions.get('window').height * 0.063,
    width: Dimensions.get('window').width / 1.21,
    backgroundColor: '#F1F1F1',
    marginTop: Dimensions.get('window').height * 0.02,
    marginLeft: Dimensions.get('window').width * 0.09,
    fontWeight: '600',
    fontSize: Dimensions.get('window').height * 0.034,
    borderColor: 'rgb(152,189,48)',
    borderWidth: 3,
    borderRadius: 30,
    color: 'black',
    paddingHorizontal: Dimensions.get('window').height * 0.04,
  },
  Button: {
    backgroundColor: '#9cc112',
    paddingVertical: 10,
    marginTop: Dimensions.get('window').height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: Dimensions.get('window').height * 0.068,
    width: Dimensions.get('window').width / 1.21,
  },
  confirm: {
    color: 'white',
    // marginLeft: Dimensions.get('window').width * 0.07,
    fontSize: Dimensions.get('window').height * 0.03,
    fontWeight: '500',
  },
  confirms: {
    color: 'white',
    // marginLeft: Dimensions.get('window').width * 0.07,
    fontSize: Dimensions.get('window').height * 0.03,
    fontWeight: '500',
  },
  top: {
    fontSize: Dimensions.get('window').height * 0.021,
    color: 'black',
    fontWeight: '400',
    letterSpacing: 1,
  },
  down: {
    fontSize: Dimensions.get('window').height * 0.033,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  sendControlContainerOuter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  img1: {
    height: Dimensions.get('window').height / 2.7,
    width: Dimensions.get('window').width,
  },
  img2: {
    height: Dimensions.get('window').width * 0.085,
    width: Dimensions.get('window').width * 0.53,
    marginTop: Dimensions.get('window').height * 0.1,
  },
});
