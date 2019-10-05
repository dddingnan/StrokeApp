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
} from 'react-native';

import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
  Header,
  Left,
  Right,
  Body,
  Title,
  Drawer,
} from 'native-base';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import {Actions} from 'react-native-router-flux';

import SideBar from './menu.js';

export default class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: 0,
    };
  }

  closeDrawer() {
    this._drawer._root.close();
  }
  openDrawer() {
    this._drawer._root.open();
  }

  hh() {
    var {height, width} = Dimensions.get('window');
    var aspectRatio = height / width;

    if (this.state.h == 0) {
      if (Platform.OS === 'ios') {
        if (aspectRatio > 1.6) {
          return (
            <Image
              style={styles.img2}
              source={require('../../images/note.png')}
            />
          );
        } else {
          return (
            <Image
            style={styles.img2}
              source={require('../../images/note.png')}
            />
          );
        }
      } else {
        return (
          <Image
            style={styles.img2}
            source={require('../../images/note.png')}
          />
        );
      }
    } else {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1.2,
          }}
          source={require('../../images/eva2.png')}
        />
      );
    }
  }

  hd() {
    if (this.state.h == 0) {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1.3,
          }}
          source={require('../../images/back.png')}
        />
      );
    } else {
      return <View />;
    }
  }

  render() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round((dimensions.width * 3.3) / 16);
    const imageWidth = Math.round((dimensions.height * 0.6) / 16);

    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()}>
        <Container>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'rgb(156,200,26)',
                height: Dimensions.get('window').height / 8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                transparent
                onPress={() => this.openDrawer()}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: Dimensions.get('window').height / 25,
                }}>
                <Icon
                  name="menu"
                  style={{
                    color: '#fff',
                    fontSize: 40,
                  }}
                />
              </Button>

              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginTop: 15,
                }}>
                <Image
                  style={styles.img}
                  source={require('../../images/homelogo.png')}
                />
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                    marginLeft: Dimensions.get('window').height * 0.015,
                    fontWeight: '900',
                    color: '#FFFFFF',
                  }}>
                  急診資源
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <TouchableHighlight
                underlayColor="white"
                onShowUnderlay={() => {
                  this.setState({h: 1});
                }}
                onHideUnderlay={() => {
                  this.setState({h: 0});
                }}
                style={{borderBottomWidth: 1, borderColor: 'grey'}}
                onPress={() => Actions.datee()}>
                <View>{this.hh()}</View>
              </TouchableHighlight>

              <View style={{backgroundColor: 'white'}}>{this.hd()}</View>
            </View>
          </View>
        </Container>
      </Drawer>
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
  button: {
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 3.82,
    marginTop: Dimensions.get('window').height / 8,
    marginLeft: 10,
  },
  button2: {
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 3.82,
    marginLeft: Dimensions.get('window').width / 2.1,
  },
  img1: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3.65,
  },
  img: {
    marginLeft: Dimensions.get('window').height * 0.015,
    width: Dimensions.get('window').width * 0.09,
    height: Dimensions.get('window').width * 0.09,
  },
  img2: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.47,
  },
});
