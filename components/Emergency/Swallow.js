import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Swallow extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://ebooks.cgu.usalab.org/books/m0544007/16/'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
