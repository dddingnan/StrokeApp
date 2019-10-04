import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  Linking,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {Actions} from 'react-native-router-flux';
import {Icon, StyleProvider} from 'native-base';

import Modal from 'react-native-modal';

export default class Walk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '請選擇',
      unit: '請選擇',
      visible: true,
    };
  }

  state = {
    CityVisible: false,
    UnitVisible: false,
    Visible: false,
  };

  componentWillMount() {
    this.setState({Visible: true});
  }

  open() {
    this.setState({Visible: true});
  }

  close() {
    this.setState({Visible: false});
  }

  city() {
    this.setState({CityVisible: true});
  }

  unit() {
    this.setState({UnitVisible: true});
  }

  city1() {
    this.setState({CityVisible: false, city: '基隆市'});
  }
  city2() {
    this.setState({CityVisible: false, city: '台北市'});
  }
  city3() {
    this.setState({CityVisible: false, city: '新北市'});
  }
  city4() {
    this.setState({CityVisible: false, city: '桃園市'});
  }
  city5() {
    this.setState({CityVisible: false, city: '新竹市'});
  }
  city6() {
    this.setState({CityVisible: false, city: '新竹縣'});
  }
  city7() {
    this.setState({CityVisible: false, city: '苗栗縣'});
  }
  city8() {
    this.setState({CityVisible: false, city: '臺中市'});
  }
  city9() {
    this.setState({CityVisible: false, city: '彰化縣'});
  }
  city10() {
    this.setState({CityVisible: false, city: '南投縣'});
  }
  city11() {
    this.setState({CityVisible: false, city: '雲林縣'});
  }
  city12() {
    this.setState({CityVisible: false, city: '嘉義市'});
  }
  city13() {
    this.setState({CityVisible: false, city: '嘉義縣'});
  }
  city14() {
    this.setState({CityVisible: false, city: '臺南市'});
  }
  city15() {
    this.setState({CityVisible: false, city: '高雄市'});
  }
  city16() {
    this.setState({CityVisible: false, city: '屏東縣'});
  }
  city17() {
    this.setState({CityVisible: false, city: '宜蘭縣'});
  }
  city18() {
    this.setState({CityVisible: false, city: '花蓮縣'});
  }
  city19() {
    this.setState({CityVisible: false, city: '臺東縣'});
  }
  city20() {
    this.setState({CityVisible: false, city: '澎湖縣'});
  }
  city21() {
    this.setState({CityVisible: false, city: '金門縣'});
  }
  city22() {
    this.setState({CityVisible: false, city: '連江縣'});
  }

  unit1() {
    this.setState({UnitVisible: false, unit: '復康/無障礙巴士'});
  }
  unit2() {
    this.setState({UnitVisible: false, unit: '無障礙計程車'});
  }
  unit3() {
    this.setState({UnitVisible: false, unit: '輔具'});
  }
  unit4() {
    this.setState({UnitVisible: false, unit: '爬梯機租借'});
  }

  cityclose() {
    this.setState({CityVisible: false});
  }

  unitclose() {
    this.setState({UnitVisible: false});
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

  content() {
    if (this.state.city == '台北市' && this.state.unit == '輔具') {
      return (
        <View style={styles.container}>
          <WebView
            onLoad={() => this.hideSpinner()}
            source={{
              uri:
                'https://repat.sfaa.gov.tw/mobile/03_a_list2.asp?country_in_cate=%A5x%A5_%A5%AB',
            }}
          />
          {this.state.visible && (
            <ActivityIndicator
              style={{
                position: 'absolute',
                top: Dimensions.get('window').height * 0.1,
                left: Dimensions.get('window').height * 0.25,
              }}
              size="large"
              color="black"
            />
          )}
        </View>
      );
    } else if (this.state.city == '桃園市' && this.state.unit == '輔具') {
      return (
        <View style={styles.container}>
          <WebView
            onLoad={() => this.hideSpinner()}
            source={{
              uri:
                'https://repat.sfaa.gov.tw/mobile/03_a_list2.asp?keyword=%AE%E7%B6%E9&Submit=%ACd%B8%DF',
            }}
          />
          {this.state.visible && (
            <ActivityIndicator
              style={{
                position: 'absolute',
                top: Dimensions.get('window').height * 0.1,
                left: Dimensions.get('window').height * 0.25,
              }}
              size="large"
              color="black"
            />
          )}
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.Visible}>
          <View
            style={{
              backgroundColor: 'white',
              height: Dimensions.get('window').height / 2.1,
              borderRadius: 20,
            }}>
            <Text
              style={{
                marginTop: Dimensions.get('window').height * 0.05,
                marginLeft: Dimensions.get('window').width * 0.05,
                color: 'black',
                fontSize: Dimensions.get('window').height * 0.04,
              }}>
              縣市：
            </Text>

            <TouchableOpacity
              onPress={() => {
                this.city();
              }}
              style={{
                borderColor: 'black',
                borderWidth: 1,
                width: Dimensions.get('window').width / 1.4,
                height: Dimensions.get('window').height * 0.06,
                marginTop: Dimensions.get('window').height * 0.02,
                marginLeft: Dimensions.get('window').height * 0.07,
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: Dimensions.get('window').height * 0.03,
                    marginLeft: Dimensions.get('window').height * 0.1,
                    marginTop: Dimensions.get('window').height * 0.01,
                  }}>
                  {this.state.city}
                </Text>

                <Icon
                  name="md-arrow-dropdown"
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                    color: 'black',
                    position: 'absolute',
                    top: -3,
                    right: 10,
                  }}
                />
              </View>
            </TouchableOpacity>

            <Text
              style={{
                marginTop: Dimensions.get('window').height * 0.05,
                marginLeft: Dimensions.get('window').width * 0.05,
                color: 'black',
                fontSize: Dimensions.get('window').height * 0.04,
              }}>
              單位：
            </Text>

            <TouchableOpacity
              onPress={() => {
                this.unit();
              }}
              style={{
                borderColor: 'black',
                borderWidth: 1,
                width: Dimensions.get('window').width / 1.4,
                height: Dimensions.get('window').height * 0.06,
                marginTop: Dimensions.get('window').height * 0.02,
                marginLeft: Dimensions.get('window').height * 0.07,
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: Dimensions.get('window').height * 0.03,
                    marginLeft: Dimensions.get('window').height * 0.1,
                    marginTop: Dimensions.get('window').height * 0.01,
                  }}>
                  {this.state.unit}
                </Text>

                <Icon
                  name="md-arrow-dropdown"
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                    color: 'black',
                    position: 'absolute',
                    top: -3,
                    right: 10,
                  }}
                />
              </View>
            </TouchableOpacity>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: Dimensions.get('window').height * 0.05,
                  marginBottom: Dimensions.get('window').height * 0.04,
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 10,
                  width: Dimensions.get('window').width * 0.2,
                }}
                onPress={() => {
                  this.close();
                }}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'black',
                  }}>
                  關閉
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Modal isVisible={this.state.UnitVisible}>
            <View
              style={{
                backgroundColor: 'white',
                height: Dimensions.get('window').height / 2.2,
                borderRadius: 20,
              }}>
              <ScrollView>
                <View
                  style={{marginLeft: Dimensions.get('window').height * 0.03}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: Dimensions.get('window').height * 0.035,
                      marginTop: Dimensions.get('window').height * 0.03,
                      margin: Dimensions.get('window').height * 0.01,
                    }}>
                    請選擇：
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.unit1();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      復康/無障礙巴士
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.unit2();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      無障礙計程車
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.unit3();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      輔具
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.unit4();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      爬梯機租借
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />
              </ScrollView>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: Dimensions.get('window').height * 0.05,
                  marginBottom: Dimensions.get('window').height * 0.04,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  width: Dimensions.get('window').width * 0.2,
                  height: Dimensions.get('window').height * 0.06,
                  borderRadius: 10,
                }}
                onPress={() => {
                  this.unitclose();
                }}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'black',
                  }}>
                  關閉
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal isVisible={this.state.CityVisible}>
            <View
              style={{
                backgroundColor: 'white',
                height: Dimensions.get('window').height / 1.5,
                borderRadius: 20,
              }}>
              <ScrollView>
                <View
                  style={{marginLeft: Dimensions.get('window').height * 0.03}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: Dimensions.get('window').height * 0.035,
                      marginTop: Dimensions.get('window').height * 0.03,
                      margin: Dimensions.get('window').height * 0.01,
                    }}>
                    請選擇：
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city1();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      基隆市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city2();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      台北市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city3();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      新北市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city4();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      桃園市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city5();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      新竹市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city6();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      新竹縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city7();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      苗栗縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city8();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      臺中市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city9();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      彰化縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city10();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      南投縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city11();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      雲林縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city12();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      嘉義市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city13();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      嘉義縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city14();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      臺南市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city15();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      高雄市
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city16();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      屏東縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city17();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      宜蘭縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city18();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      花蓮縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city19();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      臺東縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city20();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      澎湖縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city21();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      金門縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.city22();
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height * 0.05,
                      }}>
                      連江縣
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginTop: Dimensions.get('window').height * 0.02,
                    marginBottom: Dimensions.get('window').height * 0.01,
                  }}
                />
              </ScrollView>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: Dimensions.get('window').height * 0.05,
                  marginBottom: Dimensions.get('window').height * 0.04,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  width: Dimensions.get('window').width * 0.2,
                  height: Dimensions.get('window').height * 0.06,
                  borderRadius: 10,
                }}
                onPress={() => {
                  this.cityclose();
                }}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'black',
                  }}>
                  關閉
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Modal>

        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 10,
              marginTop: Dimensions.get('window').height * 0.01,
              width: Dimensions.get('window').width / 7,
              height: Dimensions.get('window').height * 0.04,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.open();
            }}>
            <Text
              style={{
                fontSize: Dimensions.get('window').height * 0.03,
                color: 'black',
              }}>
              設定
            </Text>
          </TouchableOpacity>
        </View>

        {this.content()}
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
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: Dimensions.get('window').height * 0.02,
    paddingTop: Dimensions.get('window').height * 0.01,
  },
  ratingText: {
    color: 'black',
    fontSize: Dimensions.get('window').height * 0.02,
    paddingTop: Dimensions.get('window').height * 0.002,
  },
  ratingTexts: {
    color: 'black',
    fontSize: Dimensions.get('window').height * 0.02,
  },
});
