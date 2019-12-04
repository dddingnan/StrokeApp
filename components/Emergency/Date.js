import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  StyleProvider,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import commonstyle from '../themes/variables/commonColor3.js';
import getTheme from '../themes/components';

import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales.fr = {
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  monthNamesShort: [
    '1.',
    '2.',
    '3.',
    '4.',
    '5.',
    '6.',
    '7.',
    '8.',
    '9.',
    '10.',
    '11.',
    '12.',
  ],
  dayNames: [
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
    '星期日',
  ],
  dayNamesShort: ['一.', '二.', '三.', '四.', '五.', '六.', '日.'],
};

LocaleConfig.defaultLocale = 'fr';

export default class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ctime: '',
      selected: '',

      calmon: '',
      caldate: '',
      calhour: '',
      calmin: '',

      passstate: '',

      t: '',
      t1: '',

      passmon: '',
      passdate: '',
      passhour: '',
      passmin: '',

      a: 0,
      b: 0,
    };

    this.onDayPress = this.onDayPress.bind(this);
  }

  state = {
    ViewVisible: false,
    isTimePickerVisible: false,
    calendarVisible: false,
    aVisible: false,
    bVisible: false,
    cVisible: false,
  };

  componentDidMount() {
    this.setState({ViewVisible: true});

    var d = new Date();

    var date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    this.setState({selected: date, Ctime: time});

    if (
      d.getMonth() + 1 == 1 ||
      d.getMonth() + 1 == 3 ||
      d.getMonth() + 1 == 5 ||
      d.getMonth() + 1 == 7 ||
      d.getMonth() + 1 == 8 ||
      d.getMonth() + 1 == 10 ||
      d.getMonth() + 1 == 12
    ) {
      this.setState({passmon: (d.getMonth() + 1) * 31 * 24 * 60});
    } else if (
      d.getMonth() + 1 == 4 ||
      d.getMonth() + 1 == 6 ||
      d.getMonth() + 1 == 9 ||
      d.getMonth() + 1 == 11
    ) {
      this.setState({passmon: (d.getMonth() + 1) * 30 * 24 * 60});
    } else {
      this.setState({passmon: (d.getMonth() + 1) * 28 * 24 * 60});
    }

    if (d.getHours() == 0) {
      this.setState({passhour: 24 * 60});
    } else {
      this.setState({passhour: d.getHours() * 60});
    }
    this.setState({passdate: d.getDate() * 24 * 60});
    this.setState({passmin: d.getMinutes()});
  }

  _showcalendar = () => this.setState({calendarVisible: true});

  _showDateTimePickers = () => this.setState({isTimePickerVisible: true});

  _hideDateTimePickers = () => this.setState({isTimePickerVisible: false});

  _handleDatePickeds = date => {
    this.setState({b: 1});

    var datess = date.toString();
    var splitword = datess.split(' ');
    var aa = splitword[4].split(':');
    this.setState({Ctime: splitword[4]});
    this.setState({isTimePickerVisible: false});

    if (aa[1] != '') {
      this.setState({calmin: (aa[1] * 2) / 2});
    }

    if (aa[0] == 0) {
      this.setState({calhour: 24 * 60});
    } else {
      this.setState({calhour: aa[0] * 60});
    }
  };

  onDayPress(day) {
    this.setState({a: 1});

    var aa = day.dateString;
    var splitword = aa.split('-');
    this.setState({selected: aa});
    this.setState({calendarVisible: false});

    if (
      splitword[1] == 1 ||
      splitword[1] == 3 ||
      splitword[1] == 5 ||
      splitword[1] == 7 ||
      splitword[1] == 8 ||
      splitword[1] == 10 ||
      splitword[1] == 12
    ) {
      this.setState({calmon: splitword[1] * 31 * 24 * 60});
    } else if (
      splitword[1] == 4 ||
      splitword[1] == 6 ||
      splitword[1] == 9 ||
      splitword[1] == 11
    ) {
      this.setState({calmon: splitword[1] * 30 * 24 * 60});
    } else {
      this.setState({calmon: splitword[1] * 28 * 24 * 60});
    }

    this.setState({caldate: splitword[2] * 24 * 60});
  }

  gonext() {
    if (this.state.a == 0 && this.state.b == 1) {
      var calTotal =
        this.state.passmon +
        this.state.passdate +
        this.state.calhour +
        this.state.calmin;

      this.setState({t: calTotal});

      var Total =
        this.state.passmon +
        this.state.passhour +
        this.state.passdate +
        this.state.passmin;

      this.setState({t1: Total});

      if (Math.abs(calTotal - Total) < 181) {
        this.setState({aVisible: true});
      } else if (Math.abs(calTotal - Total) < 361) {
        this.setState({bVisible: true});
      } else {
        this.setState({cVisible: true});
      }
    } else if (this.state.a == 1 && this.state.b == 0) {
      var calTotal =
        this.state.calmon +
        this.state.caldate +
        this.state.passhour +
        this.state.passmin;

      this.setState({t: calTotal});

      var Total =
        this.state.passmon +
        this.state.passhour +
        this.state.passdate +
        this.state.passmin;

      this.setState({t1: Total});

      if (Math.abs(calTotal - Total) < 181) {
        this.setState({aVisible: true});
      } else if (Math.abs(calTotal - Total) < 361) {
        this.setState({bVisible: true});
      } else {
        this.setState({cVisible: true});
      }
    } else if (this.state.a == 0 && this.state.b == 0) {
      var calTotal =
        this.state.passmon +
        this.state.passhour +
        this.state.passdate +
        this.state.passmin;

      this.setState({t: calTotal});

      var Total =
        this.state.passmon +
        this.state.passhour +
        this.state.passdate +
        this.state.passmin;

      this.setState({t1: Total});

      if (Math.abs(calTotal - Total) < 181) {
        this.setState({aVisible: true});
      } else if (Math.abs(calTotal - Total) < 361) {
        this.setState({bVisible: true});
      } else {
        this.setState({cVisible: true});
      }
    } else {
      var calTotal =
        this.state.calmon +
        this.state.caldate +
        this.state.calhour +
        this.state.calmin;

      this.setState({t: calTotal});

      var Total =
        this.state.passmon +
        this.state.passhour +
        this.state.passdate +
        this.state.passmin;

      this.setState({t1: Total});

      if (Math.abs(calTotal - Total) < 181) {
        this.setState({aVisible: true});
      } else if (Math.abs(calTotal - Total) < 361) {
        this.setState({bVisible: true});
      } else {
        this.setState({cVisible: true});
      }
    }
  }

  a() {
    this.setState({aVisible: false});
    Actions.evaa({passstate: '0'});
  }

  b() {
    this.setState({bVisible: false});
    Actions.evaa({passstate: '1'});
  }

  c() {
    this.setState({cVisible: false});
    Actions.evaa({passstate: '2'});
  }

  ViewClose() {
    this.setState({ViewVisible: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <StyleProvider style={getTheme(commonstyle)}>
          <Header>
            <Left style={{flex: 1}}>
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Icon
                  name="arrow-back"
                  style={{
                    fontSize: Dimensions.get('window').width * 0.08,
                    color: 'white',
                    marginLeft: Dimensions.get('window').width * 0.03,
                  }}
                />
              </TouchableOpacity>
            </Left>
            <Body
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'white',
                  fontWeight: '700',
                }}>
                症狀時間
              </Text>
            </Body>
            <Right style={{flex: 1}}>
              {/* <TouchableOpacity onPress={() => this.gonext()}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').width * 0.045,
                    color: 'white',
                    fontWeight: '700',
                  }}>
                  下一頁
                </Text>
              </TouchableOpacity> */}
            </Right>
          </Header>
        </StyleProvider>

        <Modal isVisible={this.state.ViewVisible}>
          <View
            style={{
              borderRadius: 5,
              height: Dimensions.get('window').width * 1.3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'rgb(156,200,26)',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                height: '100%',
              }}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.05,
                  color: 'white',
                  marginTop: Dimensions.get('window').width * 0.02,
                }}>
                本app主要是幫助您認識腦中風，並引導您在急診到住院的檢查處置與需要配合之注意事項。腦中風是與時間賽跑的重症，需要清楚掌握症狀，血栓溶解劑為目前唯一被認為治療急性缺血性中風有效的藥物，靜脈注射打通阻塞的血管，但因僅限於一開始最早出現的症狀3
                小時內使用，所以稱黃金三小時，由於本藥物若不當使用，容易造成腦出血或其他身體部位的出血進而威脅生命，故需要依藥物之使用規範，由醫師判讀是否可使用此藥以達安全。過了可以採用靜脈注射溶栓藥物，中風發生六小時內可以經由評估是否符合介入性動脈機械取栓，利用導管將血栓抽掉，打通阻塞的血管。若您中風症狀發生在3小時以內者，會以最快的流程做確定診斷，以下步驟需要您依序完成，評估您是否符合血栓溶解劑藥物之使用標準請您用自我評估方式幫助醫師對病史的了解，依自評結果提供專屬您的衛教指導，接下來請您依照下面步驟完成自我評估
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.ViewClose();
                }}
                style={styles.modeButton}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'white',
                  }}>
                  確定
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal isVisible={this.state.aVisible}>
          <View style={styles.card}>
            <View style={styles.top1}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.08,
                  color: 'white',
                }}>
                您症狀出現到目前為
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.1,
                  color: 'white',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                三小時內
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'red',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                可能符合施打血栓溶解劑，醫師會詢問您的病史、電腦斷層、抽血、心電圖檢查及中風嚴重程度（NIHSS），判斷您是否能施打
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.a();
                }}
                style={styles.modeButton}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'white',
                  }}>
                  確定
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal isVisible={this.state.bVisible}>
          <View style={styles.card}>
            <View style={styles.top1}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.08,
                  color: 'white',
                }}>
                您症狀出現到目前小於
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.1,
                  color: 'white',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                六小時
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'red',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                不符合施打血栓溶解劑，但符合介入性動脈機械取栓術，醫師會評估您的病史、電腦斷層、抽血、心電圖檢查及中風嚴重程度（NIHSS），判斷您是否需要執行
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.b();
                }}
                style={styles.modeButton}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'white',
                  }}>
                  確定
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal isVisible={this.state.cVisible}>
          <View style={styles.card}>
            <View style={styles.top1}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.08,
                  color: 'white',
                }}>
                您症狀出現到目前超過
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.1,
                  color: 'white',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                六小時
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'red',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                不符合施打血栓溶解劑，醫師會評估您的病史、電腦斷層、抽血、心電圖檢查及中風嚴重程度（NIHSS），給予抗血小板藥物治療，需要依照腦中風治療原則，進行住院密切觀觀察
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.c();
                }}
                style={styles.modeButton}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'white',
                  }}>
                  確定
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal isVisible={this.state.calendarVisible}>
          <Calendar
            onDayPress={this.onDayPress}
            style={styles.calendar}
            hideExtraDays
            markedDates={{
              [this.state.selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
          />
        </Modal>

        <View style={styles.wrap}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={styles.photo}
              source={require('../../images/orangeOwl.png')}
            />
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                // marginLeft: Dimensions.get('window').width / 5,
              }}>
              <Text style={styles.text1}>請您紀錄症狀</Text>
              <Text style={styles.text1}>最早出現的時間</Text>
            </View>
          </View>

          <View style={styles.flexCenter}>
            <View style={styles.border}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: Dimensions.get('window').height / 6,
                  width: '100%',
                }}>
                <View style={styles.flexLeft}>
                  <Text style={styles.text2}>日期</Text>
                </View>

                <View style={styles.flexRight}>
                  <TouchableOpacity onPress={this._showcalendar}>
                    <View style={styles.date}>
                      <View style={[styles.flexCenter, {width: '25%'}]}>
                        <Icon
                          name="calendar"
                          size={30}
                          style={{
                            color: 'black',
                          }}
                        />
                      </View>
                      <View style={{width: '75%', justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: Dimensions.get('window').width * 0.06,
                            marginLeft: Dimensions.get('window').width * 0.03,
                            color: 'black',
                          }}>
                          {this.state.selected}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.borderCenter} />

              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: Dimensions.get('window').height / 6,
                  width: '100%',
                }}>
                <View style={styles.flexLeft}>
                  <Text style={styles.text2}>時間</Text>
                </View>
                <View style={styles.flexRight}>
                  <TouchableOpacity onPress={this._showDateTimePickers}>
                    <View style={styles.date}>
                      <View style={[styles.flexCenter, {width: '25%'}]}>
                        <Icon
                          name="ios-arrow-down"
                          size={30}
                          style={{
                            color: 'black',
                          }}
                        />
                      </View>
                      <View style={{width: '75%', justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: Dimensions.get('window').width * 0.06,
                            marginLeft: Dimensions.get('window').width * 0.03,
                            color: 'black',
                          }}>
                          {this.state.Ctime}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <DateTimePicker
                  isVisible={this.state.isTimePickerVisible}
                  onConfirm={this._handleDatePickeds}
                  onCancel={this._hideDateTimePickers}
                  defaultData={this.state.Ctime}
                  cancelTextIOS="取消"
                  confirmTextIOS="確定"
                  titleIOS="選擇時間"
                  datePickerModeAndroid="spinner"
                  mode="time"
                />
              </View>

              <View style={styles.bottom}>
                <View style={styles.bottomContent1}>
                  <Text style={styles.bottomtext}>關閉</Text>
                </View>

                <TouchableOpacity
                  style={styles.bottomContent2}
                  onPress={() => this.gonext()}>
                  <Text style={styles.bottomtext}>儲存</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
  wrap: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: Dimensions.get('window').height / 10,
    width: '100%',
    height: '100%',
  },
  text1: {
    fontSize: Dimensions.get('window').width * 0.095,
    color: 'black',
    fontWeight: 'bold',
    // marginBottom: 20,
  },
  text2: {
    fontSize: Dimensions.get('window').width * 0.08,
    color: 'black',
    fontWeight: '500',
  },
  date: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 12,
  },
  Button: {
    backgroundColor: 'rgb(156,200,26)',
    borderRadius: 10,
    marginTop: Dimensions.get('window').width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').width * 0.15,
    width: Dimensions.get('window').width / 3,
  },
  confirm: {
    color: 'white',
    fontSize: Dimensions.get('window').width * 0.08,
  },
  card: {
    margin: 10,
    borderRadius: 20,
    height: Dimensions.get('window').height / 2.2,
    width: Dimensions.get('window').width / 1.2,
  },
  top1: {
    backgroundColor: 'rgb(156,200,26)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: Dimensions.get('window').height / 2,
  },
  modeButton: {
    marginBottom: Dimensions.get('window').width * 0.03,
    marginTop: Dimensions.get('window').width * 0.03,
    backgroundColor: 'rgb(156,200,26)',
    borderRadius: 5,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderColor: '#91c000',
    borderWidth: 1.5,
    width: '95%',
  },
  borderCenter: {
    borderColor: '#91c000',
    borderWidth: 1,
    width: '100%',
  },
  flexLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6efd1',
    width: '20%',
    height: '100%',
  },
  flexRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '100%',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: Dimensions.get('window').height / 12,
  },
  bottomContent1: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92bf1a',
    marginRight: 1,
  },
  bottomContent2: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92bf1a',
    marginLeft: 1,
  },
  bottomtext: {
    fontSize: Dimensions.get('window').width * 0.08,
    color: '#fff',
    fontWeight: 'bold',
  },
  photo: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.29,
  },
});
