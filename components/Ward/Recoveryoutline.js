import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'native-base';

export default class Recoveryoutline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h1: 0,
      h2: 0,
      h3: 0,
    };
  }

  h1() {
    if (this.state.h1 === 0) {
      return (
        <Image style={styles.img} source={require('../../images/workTh.png')} />
      );
    } else {
      return (
        <Image
          style={styles.img}
          source={require('../../images/workTh2.png')}
        />
      );
    }
  }

  h2() {
    if (this.state.h2 === 0) {
      return (
        <Image style={styles.img} source={require('../../images/phiTh.png')} />
      );
    } else {
      return (
        <Image style={styles.img} source={require('../../images/phiTh2.png')} />
      );
    }
  }

  h3() {
    if (this.state.h3 === 0) {
      return (
        <Image style={styles.img} source={require('../../images/LanTh.png')} />
      );
    } else {
      return (
        <Image style={styles.img} source={require('../../images/LanTh2.png')} />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight
          underlayColor="white"
          onShowUnderlay={() => {
            this.setState({h1: 1});
          }}
          onHideUnderlay={() => {
            this.setState({h1: 0});
          }}
          style={styles.Button}
          onPress={() => {
            Actions.functionss();
          }}>
          <View>{this.h1()}</View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="white"
          onShowUnderlay={() => {
            this.setState({h2: 1});
          }}
          onHideUnderlay={() => {
            this.setState({h2: 0});
          }}
          style={styles.Butto2}
          onPress={() => {
            Actions.physicall();
          }}>
          <View>{this.h2()}</View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="white"
          onShowUnderlay={() => {
            this.setState({h3: 1});
          }}
          onHideUnderlay={() => {
            this.setState({h3: 0});
          }}
          style={styles.Butto2}
          onPress={() => {
            Actions.languagee();
          }}>
          <View>{this.h3()}</View>
        </TouchableHighlight>

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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  Button: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  Butto2: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 3,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.25,
  },
  img2: {
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').height * 0.3,
    marginTop: Dimensions.get('window').height * 0.1,
  },
});
