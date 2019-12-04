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

export default class House extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

  hideSpinner() {
    this.setState({visible: false});
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
            uri: 'https://ltcpap.mohw.gov.tw/public/index.html',
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
