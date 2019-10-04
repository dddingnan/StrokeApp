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
  Alert,
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

export default class Weight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ctime: '',
      selected: '',
      height: '',
      weight: '',
      aa: '',
    };
    this.onDayPress = this.onDayPress.bind(this);
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

  hh() {
    Actions.weighthh({id: this.props.id});
  }

  componentWillMount() {
    var d = new Date();

    this.setState({
      selected: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
      Ctime: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
    });
  }

  bmi() {
    if (this.state.height != '' && this.state.weight != '') {
      var height = this.state.height * 0.01;
      var bmi = Math.round((this.state.weight / (height * height)) * 100) / 100;
      return (
        <View style={styles.inputStyle}>
          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.06,
            }}>
            {bmi}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.inputStyle}>
          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.06,
            }}>
            計算中
          </Text>
        </View>
      );
    }
  }

  save() {
    if (this.state.height != '' && this.state.weight != '') {
      fetch(
        'http://120.126.15.121:8088/Brain_stroke_APP/phy_record/height_weight_Insert.php',
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
            height: this.state.height,
            weight: this.state.weight,
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
      Alert.alert('請輸入完整資料');
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Text style={styles.title}>請輸入您的身高體重</Text>
        </View>
        <Content scrollEnabled={false}>
          <View style={styles.container2}>
            <View style={styles.flexRow}>
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
                      <Text style={styles.rightText}>
                        {this.state.selected}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.flexRow}>
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
                <Text style={styles.leftText}>身高</Text>
              </View>
              <View style={styles.flexRight}>
                <TextInput
                  returnKeyType="done"
                  onChangeText={text => this.setState({height: text})}
                  value={this.state.height}
                  placeholderTextColor="white"
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  maxLength={3}
                />
                <Text style={styles.leftTextNoSpace}>Cm</Text>
              </View>
            </View>

            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>體重</Text>
              </View>
              <View style={styles.flexRight}>
                <TextInput
                  returnKeyType="done"
                  onChangeText={text => this.setState({weight: text})}
                  value={this.state.weight}
                  placeholderTextColor="white"
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  maxLength={3}
                />
                <Text style={styles.leftTextNoSpace}>KG</Text>
              </View>
            </View>

            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>BMI</Text>
              </View>
              <View style={styles.flexRight}>{this.bmi()}</View>
            </View>

            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftTextNoSpace}>標準值</Text>
              </View>
              <View style={styles.flexRight}>
                <View style={styles.downText}>
                  <Text style={styles.green2Text}>
                    18.5 {'≦'} BMI {'<'}24
                  </Text>
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
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height:
      Dimensions.get('window').height - Dimensions.get('window').height / 8,
  },
  title: {
    fontSize: Dimensions.get('window').height * 0.04,
    color: 'black',
    fontWeight: 'bold',
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
    fontSize: Dimensions.get('window').width * 0.09,
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
