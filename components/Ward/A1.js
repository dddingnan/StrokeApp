import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class A1 extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

  hideSpinner() {
    this.setState({visible: false});
  }

  emScreen() {
    if (this.state.visible == true) {
      return (
        <View style={{marginTop: Dimensions.get('window').height * 0.04}}>
          <ActivityIndicator size="large" color="black" />
          <Text
            style={{
              marginTop: Dimensions.get('window').height * 0.04,
              marginLeft: Dimensions.get('window').height * 0.17,
              marginBottom: Dimensions.get('window').height * 0.04,
            }}>
            正在從伺服器取得資料
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        {this.state.visible && (
          <ActivityIndicator
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: Dimensions.get('window').height * 0.04,
            }}
            size="large"
            color="black"
          />
        )}
        <WebView
          onLoad={() => this.hideSpinner()}
          style={{flex: 1}}
          source={{
            uri:
              'https://drive.google.com/file/d/1vi7BMYhPtCyviosl4eJT0cjnJ0-m-Xd7/view',
            // 'http://ebooks.cgu.usalab.org/gogofinderReader/index.php?bid=251'
          }}
        />
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
});
