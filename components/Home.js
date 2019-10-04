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

  con() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: Dimensions.get('window').height * 0.02,
            marginLeft: Dimensions.get('window').height * 0.015,
            color: 'black',
          }}>
          Hi,{this.state.id}
        </Text>
        <Image
          style={{
            width: Dimensions.get('window').width * 0.05,
            height: Dimensions.get('window').width * 0.05,
          }}
          source={require('../images/person.png')}
        />
      </View>
    );
  }

  h1() {
    if (this.state.h1s == 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').width * 0.03,
          }}>
          <Image
            style={{
              width: Dimensions.get('window').width * 0.2,
              height: Dimensions.get('window').width * 0.13,
              marginLeft: Dimensions.get('window').width * 0.065,
              marginTop: Dimensions.get('window').height * 0.01,
            }}
            source={this.state.h1}
          />

          <Text
            style={{
              marginLeft: Dimensions.get('window').width * 0.04,
              color: this.state.color,
              fontSize: Dimensions.get('window').width * 0.133,
              marginTop: Dimensions.get('window').width * 0.004,
            }}>
            急診資源
          </Text>
        </View>
      );
    } else {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 0.2,
          }}
          source={require('../images/h1.jpg')}
        />
      );
    }
  }

  h2() {
    if (this.state.h2s == 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').height * 0.03,
          }}>
          <Image
            style={{
              width: Dimensions.get('window').width * 0.16,
              height: Dimensions.get('window').width * 0.13,
              marginLeft: Dimensions.get('window').width * 0.08,
              marginTop: Dimensions.get('window').height * 0.003,
            }}
            source={this.state.h2}
          />
          <Text
            style={{
              marginLeft: Dimensions.get('window').width * 0.06,
              color: this.state.color,
              fontSize: Dimensions.get('window').width * 0.133,
            }}>
            加護病房
          </Text>
        </View>
      );
    } else {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 0.2,
          }}
          source={require('../images/h2.jpg')}
        />
      );
    }
  }

  h3() {
    if (this.state.h3s == 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').height * 0.015,
          }}>
          <Image
            style={{
              width: Dimensions.get('window').width * 0.14,
              height: Dimensions.get('window').width * 0.18,
              marginLeft: Dimensions.get('window').width * 0.08,
            }}
            source={this.state.h3}
          />
          <Text
            style={{
              marginLeft: Dimensions.get('window').width * 0.08,
              marginTop: Dimensions.get('window').height * 0.015,
              color: this.state.color,
              fontSize: Dimensions.get('window').width * 0.133,
            }}>
            病房資源
          </Text>
        </View>
      );
    } else {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 0.2,
          }}
          source={require('../images/h3.jpg')}
        />
      );
    }
  }

  h4() {
    if (this.state.h4s == 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').height * 0.025,
          }}>
          <Image
            style={{
              width: Dimensions.get('window').width * 0.12,
              height: Dimensions.get('window').width * 0.15,
              marginLeft: Dimensions.get('window').width * 0.096,
            }}
            source={this.state.h4}
          />
          <Text
            style={{
              marginLeft: Dimensions.get('window').width * 0.085,
              marginTop: Dimensions.get('window').height * 0.007,
              color: this.state.color,
              fontSize: Dimensions.get('window').width * 0.133,
            }}>
            出院準備
          </Text>
        </View>
      );
    } else {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width * 1,
            height: Dimensions.get('window').width * 0.2,
          }}
          source={require('../images/h4.jpg')}
        />
      );
    }
  }

  h5() {
    if (this.state.h5s == 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').height * 0.025,
          }}>
          <Image
            style={{
              width: Dimensions.get('window').width * 0.18,
              height: Dimensions.get('window').width * 0.15,
              marginLeft: Dimensions.get('window').width * 0.065,
            }}
            source={this.state.h5}
          />
          <Text
            style={{
              marginLeft: Dimensions.get('window').width * 0.065,
              marginTop: Dimensions.get('window').height * 0.007,
              color: this.state.color,
              fontSize: Dimensions.get('window').width * 0.133,
            }}>
            居家照顧
          </Text>
        </View>
      );
    } else {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 0.2,
          }}
          source={require('../images/h5.jpg')}
        />
      );
    }
  }

  mar() {
    if (this.state.h1s == 0) {
      return (
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'grey',
            marginTop: Dimensions.get('window').width * 0.03,
          }}
        />
      );
    } else {
      return <View />;
    }
  }
  mar1() {
    if (this.state.h2s == 0) {
      return (
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'grey',
            marginTop: Dimensions.get('window').height * 0.012,
          }}
        />
      );
    } else {
      return <View />;
    }
  }

  mar2() {
    if (this.state.h3s == 0) {
      return (
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'grey',
            marginTop: Dimensions.get('window').height * 0.012,
          }}
        />
      );
    } else {
      return <View />;
    }
  }

  mar3() {
    if (this.state.h4s == 0) {
      return (
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'grey',
            marginTop: Dimensions.get('window').height * 0.012,
          }}
        />
      );
    } else {
      return <View />;
    }
  }

  mar4() {
    if (this.state.h5s == 0) {
      return (
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'grey',
            marginTop: Dimensions.get('window').height * 0.012,
          }}
        />
      );
    } else {
      return <View />;
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
                  source={require('../images/homelogo.png')}
                />
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                    marginLeft: Dimensions.get('window').height * 0.015,
                    fontWeight: '900',
                    color: '#FFFFFF',
                  }}>
                  腦中風管理
                </Text>
              </View>

              {/* <View
                style={{
                  position: 'absolute',
                  right: Dimensions.get('window').width * 0.022,
                  bottom: Dimensions.get('window').height * 0.003,
                }}>
                {this.con()}
              </View> */}
            </View>

            <TouchableHighlight
              underlayColor="white"
              onShowUnderlay={() => {
                this.setState({h1s: 1});
              }}
              onHideUnderlay={() => {
                this.setState({h1s: 0});
              }}
              style={{backgroundColor: 'white'}}
              onPress={() => Actions.mainn()}>
              <View>{this.h1()}</View>
            </TouchableHighlight>

            <View>{this.mar()}</View>

            <TouchableHighlight
              underlayColor="white"
              onShowUnderlay={() => {
                this.setState({h2s: 1});
              }}
              onHideUnderlay={() => {
                this.setState({h2s: 0});
              }}
              style={{backgroundColor: 'white'}}
              onPress={() => Actions.Page22()}>
              <View>{this.h2()}</View>
            </TouchableHighlight>

            <View>{this.mar1()}</View>

            <TouchableHighlight
              underlayColor="white"
              onShowUnderlay={() => {
                this.setState({h3s: 1});
              }}
              onHideUnderlay={() => {
                this.setState({h3s: 0});
              }}
              style={{backgroundColor: 'white'}}
              onPress={() => Actions.Page33()}>
              <View>{this.h3()}</View>
            </TouchableHighlight>

            <View>{this.mar2()}</View>

            <TouchableHighlight
              underlayColor="white"
              onShowUnderlay={() => {
                this.setState({h4s: 1});
              }}
              onHideUnderlay={() => {
                this.setState({h4s: 0});
              }}
              style={{backgroundColor: 'white'}}
              onPress={() => Actions.Page44()}>
              <View>{this.h4()}</View>
            </TouchableHighlight>

            <View>{this.mar3()}</View>

            <TouchableHighlight
              underlayColor="white"
              onShowUnderlay={() => {
                this.setState({h5s: 1});
              }}
              onHideUnderlay={() => {
                this.setState({h5s: 0});
              }}
              style={{backgroundColor: 'white'}}
              onPress={() => Actions.Page55()}>
              <View>{this.h5()}</View>
            </TouchableHighlight>

            <View>{this.mar4()}</View>

            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingTop: Dimensions.get('window').height * 0.2,
              }}>
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
    width: Dimensions.get('window').width * 0.24,
    height: Dimensions.get('window').width * 0.15,
  },
  img2: {
    height: Dimensions.get('window').height * 0.055,
    width: Dimensions.get('window').height * 0.33,
  },
  img: {
    marginLeft: Dimensions.get('window').height * 0.015,
    width: Dimensions.get('window').width * 0.09,
    height: Dimensions.get('window').width * 0.09,
  },
});
