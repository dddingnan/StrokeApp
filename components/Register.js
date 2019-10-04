import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Alert,
  Dimensions,
  Keyboard,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }

  UserRegistrationFunction = () => {
    Keyboard.dismiss();
    if (this.state.id != '') {
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/User_Register.php', {
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
          Alert.alert(responseJson);
        })
        .catch(error => {
          Alert.alert(error);
        });
    } else {
      Alert.alert('請輸入資料');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.logo}>註冊</Text>
          </View>

          <TextInput
            onChangeText={text => this.setState({id: text})}
            value={this.state.id}
            placeholder="病歷號碼"
            placeholderTextColor="black"
            style={styles.input}
            returnKeyType="next"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <TouchableOpacity
            onPress={this.UserRegistrationFunction}
            style={styles.Button}>
            <Text style={styles.Buttontext}>創建</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Actions.loginn()}
            style={styles.Button}>
            <Text style={styles.Buttontext}>上一頁</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: Dimensions.get('window').height * 0.063,
    width: Dimensions.get('window').width / 1.21,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginBottom: 20,
    color: 'black',
    paddingHorizontal: 50,
    fontWeight: '300',
    fontSize: 15,
  },
  Button: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  Buttons: {
    backgroundColor: 'rgba(255,255,255,10)',
    paddingVertical: 10,
  },
  Buttontext: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
  },
  logo: {
    color: 'black',
    fontSize: 45,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0)',
    marginBottom: Dimensions.get('window').height / 8,
  },
});
