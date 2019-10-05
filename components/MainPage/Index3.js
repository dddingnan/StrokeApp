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
  AsyncStorage,
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
import SideBar from './menu.js';
import {Actions} from 'react-native-router-flux';

export default class Index3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: 0,
      h1: 0,
      h2: 0,
      h3: 0,
    };
  }

  closeDrawer() {
    this._drawer._root.close();
  }
  openDrawer() {
    this._drawer._root.open();
  }

  h1() {
    var {height, width} = Dimensions.get('window');
    var aspectRatio = height / width;

    if (this.state.h1 == 0) {
      if (this.state.h2 == 0) {
        if (this.state.h3 == 0) {
          if (this.state.h == 0) {
            if (Platform.OS === 'ios') {
              if (aspectRatio > 1.6) {
                return (
                  <Image
                    style={styles.img2}
                    source={require('../../images/med.png')}
                  />
                );
              } else {
                return (
                  <Image
                  style={styles.img2}
                    source={require('../../images/med.png')}
                  />
                );
              }
            } else {
              return (
                <Image
                style={styles.img2}
                  source={require('../../images/med.png')}
                />
              );
            }
          } else {
            return (
              <Image
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height / 1,
                }}
                source={require('../../images/med1.png')}
              />
            );
          }
        } else {
          return <View />;
        }
      } else {
        return <View />;
      }
    } else {
      return <View />;
    }
  }

  h2() {
    var {height, width} = Dimensions.get('window');
    var aspectRatio = height / width;

    if (this.state.h2 == 0) {
      if (this.state.h3 == 0) {
        if (this.state.h1 == 0) {
          if (Platform.OS === 'ios') {
            if (aspectRatio > 1.6) {
              return (
                <Image
                style={styles.img2}
                  source={require('../../images/care.png')}
                />
              );
            } else {
              return (
                <Image
                style={styles.img2}
                  source={require('../../images/care.png')}
                />
              );
            }
          } else {
            return (
              <Image
              style={styles.img2}
                source={require('../../images/care.png')}
              />
            );
          }
        } else {
          return (
            <Image
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height / 1,
              }}
              source={require('../../images/care1.png')}
            />
          );
        }
      } else {
        return <View />;
      }
    } else {
      return <View />;
    }
  }

  h3() {
    var {height, width} = Dimensions.get('window');
    var aspectRatio = height / width;

    if (this.state.h3 == 0) {
      if (this.state.h2 == 0) {
        if (Platform.OS === 'ios') {
          if (aspectRatio > 1.6) {
            return (
              <Image
              style={styles.img2}
                source={require('../../images/reco.png')}
              />
            );
          } else {
            return (
              <Image
              style={styles.img2}
                source={require('../../images/reco.png')}
              />
            );
          }
        } else {
          return (
            <Image
            style={styles.img2}
              source={require('../../images/reco.png')}
            />
          );
        }
      } else {
        return (
          <Image
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height / 1,
            }}
            source={require('../../images/reco1.png')}
          />
        );
      }
    } else {
      return <View />;
    }
  }

  h4() {
    var {height, width} = Dimensions.get('window');
    var aspectRatio = height / width;

    if (this.state.h3 == 0) {
      if (Platform.OS === 'ios') {
        if (aspectRatio > 1.6) {
          return (
            <Image
            style={styles.img2}
              source={require('../../images/tech.png')}
            />
          );
        } else {
          return (
            <Image
            style={styles.img2}
              source={require('../../images/tech.png')}
            />
          );
        }
      } else {
        return (
          <Image
          style={styles.img2}
            source={require('../../images/tech.png')}
          />
        );
      }
    } else {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1,
          }}
          source={require('../../images/tech1.png')}
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
            height: Dimensions.get('window').height / 1.9,
          }}
          source={require('../../images/back.png')}
        />
      );
    } else if (this.state.h1 == 0) {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1.9,
          }}
          source={require('../../images/back.png')}
        />
      );
    } else if (this.state.h2 == 0) {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1.9,
          }}
          source={require('../../images/back.png')}
        />
      );
    } else if (this.state.h3 == 0) {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1.9,
          }}
          source={require('../../images/back.png')}
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
                  source={require('../../images/homelogo.png')}
                />
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                    marginLeft: Dimensions.get('window').height * 0.015,
                    fontWeight: '900',
                    color: '#FFFFFF',
                  }}>
                  病房資源
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                  underlayColor="white"
                  onShowUnderlay={() => {
                    this.setState({h: 1});
                  }}
                  onHideUnderlay={() => {
                    this.setState({h: 0});
                  }}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'grey',
                    borderRightWidth: 0.5,
                  }}
                  onPress={() => Actions.medoutlinee()}>
                  <View>{this.h1()}</View>
                </TouchableHighlight>

                <TouchableHighlight
                  underlayColor="white"
                  onShowUnderlay={() => {
                    this.setState({h1: 1});
                  }}
                  onHideUnderlay={() => {
                    this.setState({h1: 0});
                  }}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'grey',
                    borderLeftWidth: 0.5,
                  }}
                  onPress={() => Actions.caree()}>
                  <View>{this.h2()}</View>
                </TouchableHighlight>
              </View>

              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                  underlayColor="white"
                  onShowUnderlay={() => {
                    this.setState({h2: 1});
                  }}
                  onHideUnderlay={() => {
                    this.setState({h2: 0});
                  }}
                  style={{
                    borderBottomWidth: 2,
                    borderColor: 'grey',
                    borderRightWidth: 0.7,
                  }}
                  onPress={() => Actions.recoveryoutlinee()}>
                  <View>{this.h3()}</View>
                </TouchableHighlight>

                <TouchableHighlight
                  underlayColor="white"
                  onShowUnderlay={() => {
                    this.setState({h3: 1});
                  }}
                  onHideUnderlay={() => {
                    this.setState({h3: 0});
                  }}
                  style={{
                    borderBottomWidth: 2,
                    borderColor: 'grey',
                    borderLeftWidth: 0.7,
                  }}
                  onPress={() => Actions.techh()}>
                  <View>{this.h4()}</View>
                </TouchableHighlight>
              </View>

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
    backgroundColor: 'white',
  },
  img1: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 3.63,
  },
  img2: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.47,
  },
});
