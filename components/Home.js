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

import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

import SideBar from './MainPage/menu';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      color: 'rgb(163,202,23)',
      backgroundColor: 'white',

      h1: require('../images/aa.png'),
      h1s: 0,
      h2: require('../images/bb.png'),
      h2s: 0,
      h3: require('../images/cc.png'),
      h3s: 0,
      h4: require('../images/dd.png'),
      h4s: 0,
      h5: require('../images/ee.png'),
      h5s: 0,
      id: '',
    };
  }
  closeDrawer() {
    this._drawer._root.close();
  }
  openDrawer() {
    this._drawer._root.open();
  }

  async componentWillMount() {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value != '') {
        this.setState({id: value});
      }
    } catch (error) {
      Alert.alert(error);
    }
  }

  h1() {
    if (this.state.h1s == 0) {
      return (
        <Image style={styles.img1} source={require('../images/h1_1.png')} />
      );
    } else {
      return <Image style={styles.img1} source={require('../images/h1.jpg')} />;
    }
  }

  h2() {
    if (this.state.h2s == 0) {
      return (
        <Image style={styles.img1} source={require('../images/h2_1.png')} />
      );
    } else {
      return <Image style={styles.img1} source={require('../images/h2.jpg')} />;
    }
  }

  h3() {
    if (this.state.h3s == 0) {
      return (
        <Image style={styles.img1} source={require('../images/h3_1.png')} />
      );
    } else {
      return <Image style={styles.img1} source={require('../images/h3.jpg')} />;
    }
  }

  h4() {
    if (this.state.h4s == 0) {
      return (
        <Image style={styles.img1} source={require('../images/h4_1.png')} />
      );
    } else {
      return <Image style={styles.img1} source={require('../images/h4.jpg')} />;
    }
  }

  h5() {
    if (this.state.h5s == 0) {
      return (
        <Image style={styles.img1} source={require('../images/h5_1.png')} />
      );
    } else {
      return <Image style={styles.img1} source={require('../images/h5.jpg')} />;
    }
  }

  render() {
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()}>
        <Container>
          <View style={styles.container}>
            <View style={styles.top}>
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
                  marginTop: Dimensions.get('window').width * 0.05,
                }}>
                <Image
                  style={styles.img}
                  source={require('../images/homelogo.png')}
                />
                <Text
                  style={{
                    fontSize: Dimensions.get('window').width * 0.08,
                    fontWeight: '900',
                    color: '#FFFFFF',
                  }}>
                  腦中風管理
                </Text>
              </View>
            </View>

            <View style={styles.mid}>
              <TouchableHighlight
                underlayColor="white"
                onShowUnderlay={() => {
                  this.setState({h1s: 1});
                }}
                onHideUnderlay={() => {
                  this.setState({h1s: 0});
                }}
                onPress={() => Actions.mainn()}
                style={styles.btnBorder}>
                <View>{this.h1()}</View>
              </TouchableHighlight>


              <TouchableHighlight
                underlayColor="white"
                onShowUnderlay={() => {
                  this.setState({h2s: 1});
                }}
                onHideUnderlay={() => {
                  this.setState({h2s: 0});
                }}
                onPress={() => Actions.Page22()}
                style={styles.btnBorder}>
                <View>{this.h2()}</View>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="white"
                onShowUnderlay={() => {
                  this.setState({h3s: 1});
                }}
                onHideUnderlay={() => {
                  this.setState({h3s: 0});
                }}
                onPress={() => Actions.Page33()}
                style={styles.btnBorder}>
                <View>{this.h3()}</View>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="white"
                onShowUnderlay={() => {
                  this.setState({h4s: 1});
                }}
                onHideUnderlay={() => {
                  this.setState({h4s: 0});
                }}
                onPress={() => Actions.Page44()}
                style={styles.btnBorder}>
                <View>{this.h4()}</View>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="white"
                onShowUnderlay={() => {
                  this.setState({h5s: 1});
                }}
                onHideUnderlay={() => {
                  this.setState({h5s: 0});
                }}
                onPress={() => Actions.Page55()}
                style={styles.btnBorder}>
                <View>{this.h5()}</View>
              </TouchableHighlight>
            </View>

            <View style={styles.down}>
              <Image
                style={styles.img2}
                source={require('../images/logo1.png')}
              />
            </View>
          </View>
        </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  img1: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.2,
  },
  img2: {
    height: Dimensions.get('window').width * 0.085,
    width: Dimensions.get('window').width * 0.53,
  },
  img: {
    marginLeft: Dimensions.get('window').height * 0.015,
    width: Dimensions.get('window').width * 0.09,
    height: Dimensions.get('window').width * 0.09,
  },
  btnBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
  },
  top: {
    flexDirection: 'row',
    backgroundColor: 'rgb(156,200,26)',
    height: '12%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    height: '68%',
  },
  down: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '20%',
    paddingBottom: Dimensions.get('window').width * 0.08,
  },
});
