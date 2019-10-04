import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import {Icon} from 'native-base';
import {WebView} from 'react-native-webview';

export default class Caution3 extends Component {

      constructor(props) {
        super(props);
        this.state = { visible: true };
    }



    hideSpinner() {
      this.setState({ visible: false });
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
                  'http://ebooks.cgu.usalab.org/gogofinderReader/index.php?bid=240',
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
