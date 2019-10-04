import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ImageBackground,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Segment,
  Content,
} from 'native-base';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Modal from 'react-native-modal';

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

export default class Water extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ctime: '',
      selected: '',
      water: '',
      todaywater: '',
    };
    this.onDayPress = this.onDayPress.bind(this);

    fetch(
      'http://120.126.15.121:8088/Brain_stroke_APP/phy_record/drink_select_today.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.id,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({todaywater: responseJson});
      })
      .catch(error => {
        console.log(error);
      });
  }

  state = {
    isTimePickerVisible: false,
    calendarVisible: false,
  };

  _showDateTimePickers = () => this.setState({isTimePickerVisible: true});

  _hideDateTimePickers = () => this.setState({isTimePickerVisible: false});

  _handleDatePickeds = date => {
    var datess = date.toString();
    var splitword = datess.split(' ');
    var aa = splitword[4].split(':');
    this.setState({Ctime: splitword[4]});
    this.setState({isTimePickerVisible: false});
  };

  _showcalendar = () => this.setState({calendarVisible: true});

  onDayPress(day) {
    var aa = day.dateString;
    this.setState({calendarVisible: false});
    this.setState({selected: aa});
  }

  componentWillMount() {
    var d = new Date();

    this.setState({
      selected: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
      Ctime: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
    });
  }

  hh() {
    Actions.waterhh({id: this.props.id});
  }

  watercount() {
    return (
      <Text
        style={{
          color: 'white',
          fontSize: Dimensions.get('window').width * 0.06,
        }}>
        計算中
      </Text>
    );
  }

  save() {
    if (this.state.water != '') {
      fetch(
        'http://120.126.15.121:8088/Brain_stroke_APP/phy_record/drink_Insert.php',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: this.props.id,
            date: this.state.selected,
            time: this.state.Ctime,
            drink_quantity: this.state.water,
          }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          Alert.alert(responseJson);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      Alert.alert('請輸入飲水量');
    }
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../images/wave.jpeg')}
          style={styles.container}>
          <View>
            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.15,
                color: 'black',
                fontWeight: '900',
              }}>
              今日飲水量
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Image
                style={styles.photo}
                source={require('../../images/orangeOwl.png')}
              />
            </View>

            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.1,
                marginLeft: Dimensions.get('window').width * 0.02,
                color: 'black',
              }}>
              {this.state.todaywater ? this.state.todaywater : '0'}
            </Text>

            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.1,
                marginLeft: Dimensions.get('window').width * 0.02,
                color: 'black',
              }}>
              毫升
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.container2}>
          <View style={styles.flexRowBig}>
            <View style={styles.flexLeft}>
              <Text style={styles.leftTextNoSpace}>飲水量</Text>
            </View>
            <View style={styles.flexRight}>
              <TextInput
                returnKeyType="done"
                onChangeText={text => this.setState({water: text})}
                value={this.state.water}
                placeholderTextColor="white"
                style={styles.inputStyle}
                keyboardType="numeric"
                maxLength={3}
              />
              <Text style={styles.leftTextNoSpace}>毫升</Text>
            </View>
          </View>

          <View style={styles.flexRowBig}>
            <View style={styles.flexLeft}>
              <Text style={styles.leftText}>日期</Text>
            </View>
            <View style={styles.flexRight}>
              <TouchableOpacity onPress={this._showcalendar}>
                <View style={styles.date}>
                  <View style={[styles.flexCenter, {width: '25%'}]}>
                    <Icon
                      name="calendar"
                      size={Dimensions.get('window').width * 0.05}
                      style={{color: 'black'}}
                    />
                  </View>
                  <View style={{width: '75%', justifyContent: 'center'}}>
                    <Text style={styles.rightText}>{this.state.selected}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.flexRowBig}>
            <View style={styles.flexLeft}>
              <Text style={styles.leftText}>時間</Text>
            </View>
            <View style={styles.flexRight}>
              <TouchableOpacity onPress={this._showDateTimePickers}>
                <View style={styles.date}>
                  <View style={[styles.flexCenter, {width: '25%'}]}>
                    <Icon
                      name="ios-arrow-down"
                      size={Dimensions.get('window').width * 0.05}
                      style={{color: 'black'}}
                    />
                  </View>
                  <View style={{width: '75%', justifyContent: 'center'}}>
                    <Text style={styles.rightText}>{this.state.Ctime}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.flexRowBig}>
            <View style={styles.flexLeft}>
              <Text style={styles.leftTextNoSpace}>標準值</Text>
            </View>
            <View style={styles.flexRight}>
              <View style={styles.downText}>
                <Text style={styles.greenText}>每日建議喝水量</Text>
                <Text style={styles.green2Text}>「每公斤體重×30毫升」</Text>
              </View>
            </View>
          </View>

          <View style={styles.flexRow2}>
            <TouchableOpacity
              style={styles.blackBtn}
              onPress={() => {
                this.hh();
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  fontSize: Dimensions.get('window').width * 0.075,
                }}>
                歷史紀錄
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.greenBtn}
              onPress={() => {
                this.save();
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: Dimensions.get('window').width * 0.075,
                }}>
                儲存
              </Text>
            </TouchableOpacity>
          </View>

          <DateTimePicker
            isVisible={this.state.isTimePickerVisible}
            onConfirm={this._handleDatePickeds}
            onCancel={this._hideDateTimePickers}
            defaultData={this.state.curTime}
            cancelTextIOS="取消"
            confirmTextIOS="確定"
            titleIOS="選擇時間"
            datePickerModeAndroid="spinner"
            mode="time"
          />
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
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 6,
  },
  text2: {
    fontSize: Dimensions.get('window').width * 0.08,
    color: 'white',
  },
  date: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 0.8,
    width: Dimensions.get('window').width / 1.6,
    height: Dimensions.get('window').height / 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    borderTopWidth: 0.7,
    borderTopColor: 'black',
    height: Dimensions.get('window').height * 0.08,
  },
  flexRowBig: {
    flexDirection: 'row',
    borderTopWidth: 0.7,
    borderTopColor: 'black',
    height: Dimensions.get('window').height * 0.12,
  },
  flexLeft: {
    backgroundColor: '#e6efd1',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRight: {
    backgroundColor: '#fff',
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftText: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: '700',
    letterSpacing: Dimensions.get('window').width * 0.02,
  },
  leftTextNoSpace: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: '700',
    // justifyContent: 'flex-end',
  },
  rightText: {
    fontSize: Dimensions.get('window').width * 0.05,
    marginLeft: Dimensions.get('window').width * 0.03,
    color: 'black',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    borderRadius: Dimensions.get('window').height / 20,
    fontSize: Dimensions.get('window').width * 0.06,
    paddingHorizontal: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width / 2.3,
    height: Dimensions.get('window').height / 16,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'black',
    borderRightWidth: 0.7,
  },
  downText2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenText: {
    fontSize: Dimensions.get('window').width * 0.05,
    color: '#80b81d',
    fontWeight: 'bold',
  },
  green2Text: {
    fontSize: Dimensions.get('window').width * 0.06,
    color: '#80b81d',
    fontWeight: 'bold',
  },
  bText: {
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.04,
  },
  flexRow2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80b81d',
    borderWidth: 0.7,
    borderColor: '#80b81d',
    flex: 1,
    height: Dimensions.get('window').height * 0.07,
  },
  blackBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.7,
    borderColor: 'black',
    flex: 1,
    height: Dimensions.get('window').height * 0.07,
  },
});
