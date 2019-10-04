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
  TextInput,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'native-base';
import Modal from 'react-native-modal';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import HISTORY from './calhistory';
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
  dayNamesShort: ['日.', '一.', '二.', '三.', '四.', '五.', '六.'],
};

LocaleConfig.defaultLocale = 'fr';

export default class Calendars extends Component {
  constructor() {
    super();
    this.state = {
      Ctime: '',
      selected: '',
      title: '',
      content: '',
      medArray: [],
      id: '',
    };
    this.onDayPress = this.onDayPress.bind(this);

    AsyncStorage.getItem('id').then(value => {
      fetch(
        'http://120.126.15.121:8088/Brain_stroke_APP/calendar/calendar_select.php',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: value,
          }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          var split = responseJson.split('@_/_tr_');

          for (let data of split) {
            var slite = data.split('@_/_td_');
            var date = slite[0];
            var time = slite[1];
            var title = slite[2];
            var content = slite[3];

            this.setState(prevState => ({
              medArray: [
                ...prevState.medArray,
                {
                  title: title,
                  content: content,
                  date: date,
                  time: time,
                },
              ],
            }));
          }
        })
        .catch(error => {
          console.log(error);
        });

      this.setState({id: value});
    });
  }

  state = {
    ModalVisible: false,
    isTimePickerVisible: false,
    calendarVisible: false,
  };

  componentDidMount() {
    var d = new Date();

    this.setState({
      selected: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
      Ctime: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
    });
  }

  componentWillUnmount() {
    this.Time && clearTimeout(this.Time);
  }

  addNote() {
    this.setState({ModalVisible: true});
  }

  _modalhide = () => this.setState({ModalVisible: false});

  _showDateTimePickers = () => this.setState({isTimePickerVisible: true});

  _hideDateTimePickers = () => this.setState({isTimePickerVisible: false});

  _handleDatePickeds = date => {
    var datess = date.toString();
    var splitword = datess.split(' ');
    var aa = splitword[4].split(':');
    this.setState({Ctime: splitword[4]});
    this.setState({isTimePickerVisible: false});
  };

  _showcalendar() {
    this.setState({calendarVisible: true});
  }

  onDayPress(day) {
    var aa = day.dateString;
    this.setState({calendarVisible: false});
    this.setState({selected: aa});
  }

  fetch() {
    if (this.state.ModalVisible == false) {
      if (!this.state.medArray.length) {
        fetch(
          'http://120.126.15.121:8088/Brain_stroke_APP/calendar/calendar_select.php',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: this.state.id,
            }),
          },
        )
          .then(response => response.json())
          .then(responseJson => {
            var split = responseJson.split('@_/_tr_');

            for (let data of split) {
              var slite = data.split('@_/_td_');
              var date = slite[0];
              var time = slite[1];
              var title = slite[2];
              var content = slite[3];

              this.setState(prevState => ({
                medArray: [
                  ...prevState.medArray,
                  {
                    title: title,
                    content: content,
                    date: date,
                    time: time,
                  },
                ],
              }));
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }

  emScreen() {
    if (!this.state.medArray.length) {
      return (
        <View>
          <ActivityIndicator size="large" color="black" />
          <Text style={{marginTop: Dimensions.get('window').height * 0.04}}>
            正在從伺服器取得資料
          </Text>
        </View>
      );
    }
  }

  save() {
    if (this.state.title != '' && this.state.content != '') {
      fetch(
        'http://120.126.15.121:8088/Brain_stroke_APP/calendar/calendar_insert.php',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: this.state.id,
            date: this.state.selected,
            time: this.state.Ctime,
            title: this.state.title,
            content: this.state.content,
          }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          this.Time = setTimeout(() => {
            this.setState({
              medArray: [],
            });
          }, 1);
        })
        .catch(error => {
          console.log(error);
        });

      var d = new Date();
      this.setState({
        selected:
          d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
        Ctime: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
      });
      this.setState({title: ''});
      this.setState({content: ''});
      this.setState({ModalVisible: false});
    } else {
      Alert.alert('請輸入完整資料');
    }
  }

  addData() {
    if (!this.state.medArray.length) {
      return <View />;
    } else {
      return (
        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>+新增</Text>
        </TouchableOpacity>
      );
    }
  }

  deleteNote(key) {
    fetch(
      'http://120.126.15.121:8088/Brain_stroke_APP/calendar/calendar_delete.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.id,
          date: this.state.medArray[key].date,
          time: this.state.medArray[key].time,
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

    this.state.medArray.splice(key, 1);
    this.setState({medArray: this.state.medArray});
  }

  render() {
    let meds = this.state.medArray.map((val, key) => {
      return (
        <HISTORY
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            right: Dimensions.get('window').height * 0.17,
            top: Dimensions.get('window').height * 0.3,
          }}>
          {this.emScreen()}
        </View>

        <View>{this.fetch()}</View>

        <Modal isVisible={this.state.ModalVisible}>
          <View style={styles.smilkmodal}>
            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftTextNoSpace}>標題</Text>
              </View>
              <View style={styles.flexRight}>
                <TextInput
                  returnKeyType="done"
                  onChangeText={text => this.setState({title: text})}
                  value={this.state.title}
                  style={styles.inputStyle}
                  keyboardType="email-address"
                  placeholderTextColor="#757171"
                />
              </View>
            </View>

            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftTextNoSpace}>內容</Text>
              </View>
              <View style={styles.flexRight}>
                <TextInput
                  returnKeyType="done"
                  onChangeText={text => this.setState({content: text})}
                  value={this.state.content}
                  style={styles.inputStyle}
                  keyboardType="email-address"
                  placeholderTextColor="#757171"
                />
              </View>
            </View>

            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>日期</Text>
              </View>
              <View style={styles.flexRight}>
                <TouchableOpacity onPress={() => this._showcalendar()}>
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

            <View style={styles.flexRow2}>
              <TouchableOpacity
                style={styles.greenBtn}
                onPress={this._modalhide}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: Dimensions.get('window').width * 0.075,
                  }}>
                  關閉
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.greenBtn2}
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
          </View>
        </Modal>

        <ScrollView>{meds}</ScrollView>

        <View>{this.addData()}</View>
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
  addButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#92bf1a',
    width: Dimensions.get('window').width,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderTopWidth: 0.5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: Dimensions.get('window').height * 0.035,
    fontWeight: 'bold',
  },
  smilkmodal: {
    height: Dimensions.get('window').height / 1.5,
    backgroundColor: '#fff',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: Dimensions.get('window').width * 0.1,
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
  greenBtn2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80b81d',
    borderWidth: 0.7,
    borderColor: '#80b81d',
    flex: 1,
    height: Dimensions.get('window').height * 0.07,
    borderLeftColor: '#fff',
    borderLeftWidth: 0.5,
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
  container2: {
    flex: 1,
    backgroundColor: '#198ea6',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 20,
  },
  button2: {
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 4,
  },
  img2: {
    borderRadius: 20,
  },
  input: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 13,
    paddingHorizontal: Dimensions.get('window').height * 0.03,
    color: 'white',
    fontSize: Dimensions.get('window').height * 0.042,
  },
});
