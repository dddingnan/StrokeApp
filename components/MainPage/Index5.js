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

import {Actions} from 'react-native-router-flux';
import SideBar from './menu.js';

export default class Index5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: 0,
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
    };
  }

  closeDrawer() {
    this._drawer._root.close();
  }
  openDrawer() {
    this._drawer._root.open();
  }

  h1() {
    if (this.state.h1 == 0) {
      if (this.state.h2 == 0) {
        if (this.state.h3 == 0) {
          if (this.state.h4 == 0) {
            if (this.state.h5 == 0) {
              if (this.state.h == 0) {
                return (
                  <Image
                    style={styles.img2}
                    source={require('../../images/eat.png')}
                  />
                );
              } else {
                return (
                  <Image
                    style={{
                      width: Dimensions.get('window').width,
                      height: Dimensions.get('window').height / 1,
                    }}
                    source={require('../../images/eat1.png')}
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
      } else {
        return <View />;
      }
    } else {
      return <View />;
    }
  }

  h2() {
    if (this.state.h2 == 0) {
      if (this.state.h3 == 0) {
        if (this.state.h4 == 0) {
          if (this.state.h5 == 0) {
            if (this.state.h1 == 0) {
              return (
                <Image
                  style={styles.img2}
                  source={require('../../images/clothes.png')}
                />
              );
            } else {
              return (
                <Image
                  style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height / 1,
                  }}
                  source={require('../../images/clothes1.png')}
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
    } else {
      return <View />;
    }
  }

  h3() {
    if (this.state.h3 == 0) {
      if (this.state.h4 == 0) {
        if (this.state.h5 == 0) {
          if (this.state.h2 == 0) {
            return (
              <Image
                style={styles.img2}
                source={require('../../images/house.png')}
              />
            );
          } else {
            return (
              <Image
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height / 1,
                }}
                source={require('../../images/house1.png')}
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

  h4() {
    if (this.state.h4 == 0) {
      if (this.state.h5 == 0) {
        if (this.state.h3 == 0) {
          return (
            <Image
              style={styles.img2}
              source={require('../../images/walk.png')}
            />
          );
        } else {
          return (
            <Image
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height / 1,
              }}
              source={require('../../images/walk1.png')}
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

  h5() {
    if (this.state.h5 == 0) {
      if (this.state.h4 == 0) {
        return (
          <Image
            style={styles.img1}
            source={require('../../images/records.png')}
          />
        );
      } else {
        return (
          <Image
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height / 1,
            }}
            source={require('../../images/records1.png')}
          />
        );
      }
    } else {
      return <View />;
    }
  }

  h6() {
    if (this.state.h5 == 0) {
      return (
        <Image
          style={styles.img1}
          source={require('../../images/calendar.png')}
        />
      );
    } else {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1,
          }}
          source={require('../../images/calendar1.png')}
        />
      );
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
                  居家照護
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
                  onPress={() => Actions.eatt()}>
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
                  onPress={() => Actions.clothess()}>
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
                    borderBottomWidth: 1,
                    borderColor: 'grey',
                    borderRightWidth: 0.5,
                  }}
                  onPress={() => Actions.housee()}>
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
                    borderBottomWidth: 1,
                    borderColor: 'grey',
                    borderLeftWidth: 0.5,
                  }}
                  onPress={() => Actions.walkk()}>
                  <View>{this.h4()}</View>
                </TouchableHighlight>
              </View>

              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                  underlayColor="white"
                  onShowUnderlay={() => {
                    this.setState({h4: 1});
                  }}
                  onHideUnderlay={() => {
                    this.setState({h4: 0});
                  }}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'grey',
                    borderRightWidth: 0.2,
                  }}
                  onPress={() => Actions.recordss()}>
                  <View>{this.h5()}</View>
                </TouchableHighlight>

                <TouchableHighlight
                  underlayColor="white"
                  onShowUnderlay={() => {
                    this.setState({h5: 1});
                  }}
                  onHideUnderlay={() => {
                    this.setState({h5: 0});
                  }}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'grey',
                    borderLeftWidth: 0.3,
                  }}
                  onPress={() => Actions.calendarr()}>
                  <View>{this.h6()}</View>
                </TouchableHighlight>
              </View>
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
  img1: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 3.63,
  },
  img2: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 4,
  },
  img: {
    marginLeft: Dimensions.get('window').height * 0.015,
    width: Dimensions.get('window').width * 0.09,
    height: Dimensions.get('window').width * 0.09,
  },
});
