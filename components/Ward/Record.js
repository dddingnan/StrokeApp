import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import {Icon, CheckBox, Radio, StyleProvider} from 'native-base';
import {Actions} from 'react-native-router-flux';

import HISTORY from './medhistory';

import Modal from 'react-native-modal';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import commonstyle from '../themes/variables/commonColor2';
import getTheme from '../themes/components';

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

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      med: '',
      amount: '',
      curTime: '',
      week: '',
      mon: '',
      date: '',
      year: '',
      hour: '',
      Ctime: '',
      selected: '',
      types1: [{label: '飯前', value: 0}, {label: '飯後', value: 1}],
      value1: 0,
      value1Index: 0,
      pickers: '',
      medArray: [],
      one: true,
      two: false,
      id: '',
    };

    this.onDayPress = this.onDayPress.bind(this);

    fetch(
      'http://120.126.15.121:8088/Brain_stroke_APP/drug_record/Drug_Select.php',
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
        var split = responseJson.split('@_/_tr_');

        for (let data of split) {
          var slite = data.split('@_/_td_');
          var date = slite[0];
          var time = slite[1];
          var Drug_name = slite[2];
          var Drug_quantity = slite[3];
          var Before_meals_or_After_meals = slite[4];

          this.setState(prevState => ({
            medArray: [
              ...prevState.medArray,
              {
                med: Drug_name,
                date: date,
                time: time,
                amount: Drug_quantity,
                stage: Before_meals_or_After_meals,
              },
            ],
          }));
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  state = {
    ModalVisible: false,
    isTimePickerVisible: false,
    calendarVisible: false,
  };

  componentWillMount() {
    var d = new Date();

    this.setState({
      selected: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
      Ctime: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
    });
  }

  componentWillUnmount() {
    this.Time && clearTimeout(this.Time);
  }

  Insert() {
    fetch(
      'http://120.126.15.121:8088/Brain_stroke_APP/drug_record/Drug_Insert.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.id,
          med: this.state.med,
          date: this.state.selected,
          time: this.state.Ctime,
          amount: this.state.pickers,
          stage: '飯前',
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

        this.setState({ModalVisible: false});
      })
      .catch(error => {
        console.log(error);
      });
  }

  Insert1() {
    fetch(
      'http://120.126.15.121:8088/Brain_stroke_APP/drug_record/Drug_Insert.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.id,
          med: this.state.med,
          date: this.state.selected,
          time: this.state.Ctime,
          amount: this.state.pickers,
          stage: '飯後',
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

        this.setState({ModalVisible: false});
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetch() {
    if (this.state.ModalVisible == false) {
      if (!this.state.medArray.length) {
        fetch(
          'http://120.126.15.121:8088/Brain_stroke_APP/drug_record/Drug_Select.php',
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
            var split = responseJson.split('@_/_tr_');

            for (let data of split) {
              var slite = data.split('@_/_td_');
              var date = slite[0];
              var time = slite[1];
              var Drug_name = slite[2];
              var Drug_quantity = slite[3];
              var Before_meals_or_After_meals = slite[4];

              this.setState(prevState => ({
                medArray: [
                  ...prevState.medArray,
                  {
                    med: Drug_name,
                    date: date,
                    time: time,
                    amount: Drug_quantity,
                    stage: Before_meals_or_After_meals,
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

  store() {
    if (this.state.med != '' && this.state.pickers != '') {
      if (this.state.one == true) {
        this.Insert();
      } else {
        this.Insert1();
      }

      var d = new Date();
      this.setState({
        selected:
          d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
        Ctime: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
      });

      this.setState({med: ''});
      this.setState({pickers: ''});
      this.setState({ModalVisible: false});
    } else {
      Alert.alert('請輸入完整資料');
    }
  }

  deleteNote(key) {
    fetch(
      'http://120.126.15.121:8088/Brain_stroke_APP/drug_record/Drug_delete.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.id,
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

  one() {
    this.setState({one: !this.state.one});

    if (this.state.one == false) {
      this.setState({two: false});
    }
  }

  two() {
    this.setState({two: !this.state.two});

    if (this.state.two == false) {
      this.setState({one: false});
    }
  }

  addNote() {
    this.setState({ModalVisible: true});
  }

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

  close() {
    this.setState({ModalVisible: false});
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

  /*WholeNews() {

  return this.state.medArray.map(function(news, i){
    return(
      <View key={i}>
        <Text>{news.med}</Text>
        <View>
          <Text>{news.date}</Text>
        </View>
      </View>
    );
  });

}
*/

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
            <View style={{marginTop: Dimensions.get('window').height * 0.02}} />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.text1}>藥物名稱：</Text>
              <TextInput
                onChangeText={text => this.setState({med: text})}
                value={this.state.med}
                keyboardType="email-address"
                placeholder="藥物名稱"
                placeholderTextColor="white"
                returnKeyType="done"
                style={styles.input}
                maxLength={15}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: Dimensions.get('window').width * 0.05,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.text2}>日期：</Text>
              <TouchableOpacity onPress={() => this._showcalendar()}>
                <View style={styles.date}>
                  <Icon
                    name="calendar"
                    size={30}
                    style={{
                      marginLeft: Dimensions.get('window').width * 0.03,
                      color: 'white',
                    }}
                  />
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: Dimensions.get('window').width * 0.055,
                        marginLeft: Dimensions.get('window').width * 0.03,
                        color: 'white',
                      }}>
                      {this.state.selected}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
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

            <View
              style={{
                flexDirection: 'row',
                marginTop: Dimensions.get('window').width * 0.05,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.text2}>時間：</Text>
              <TouchableOpacity onPress={this._showDateTimePickers}>
                <View style={styles.date}>
                  <Icon
                    name="clock"
                    size={30}
                    style={{
                      marginLeft: Dimensions.get('window').width * 0.03,
                      color: 'white',
                    }}
                  />
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: Dimensions.get('window').width * 0.055,
                        marginLeft: Dimensions.get('window').width * 0.03,
                        color: 'white',
                      }}>
                      {this.state.Ctime}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
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
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: Dimensions.get('window').height * 0.03,
              }}>
              <Text style={styles.text2}>藥量：</Text>

              <TextInput
                onChangeText={text => this.setState({pickers: text})}
                value={this.state.pickers}
                placeholderTextColor="white"
                style={{
                  borderColor: 'white',
                  borderWidth: 2,
                  borderRadius: 20,
                  fontSize: Dimensions.get('window').height / 30,
                  color: 'white',
                  paddingHorizontal: Dimensions.get('window').height / 25,
                  height: Dimensions.get('window').height * 0.07,
                  width: Dimensions.get('window').width / 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                keyboardType="numeric"
                returnKeyType="done"
                maxLength={3}
              />

              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 18, color: 'white', marginLeft: 5}}>
                  顆
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: Dimensions.get('window').height * 0.04,
              }}>
              <Text style={styles.text2}>階段：</Text>

              <View style={{flexDirection: 'row'}}>
                <StyleProvider style={getTheme(commonstyle)}>
                  <CheckBox
                    checked={this.state.one}
                    onPress={() => this.one()}
                  />
                </StyleProvider>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'white',
                    marginLeft: Dimensions.get('window').height * 0.03,
                  }}>
                  飯前
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: Dimensions.get('window').height * 0.02,
                marginLeft: Dimensions.get('window').height * 0.053,
              }}>
              <StyleProvider style={getTheme(commonstyle)}>
                <CheckBox
                  checked={this.state.two}
                  onPress={() => this.two()}
                  style={{marginLeft: Dimensions.get('window').height * 0.08}}
                />
              </StyleProvider>
              <Text
                style={{
                  fontSize: Dimensions.get('window').height * 0.04,
                  color: 'white',
                  marginLeft: Dimensions.get('window').height * 0.03,
                }}>
                飯後
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  alignItems: 'center',
                  marginRight: Dimensions.get('window').height * 0.04,
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                <TouchableOpacity
                  onPress={this.store.bind(this)}
                  style={styles.Button}>
                  <Text style={styles.confirm}>儲存</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                <TouchableOpacity
                  onPress={this.close.bind(this)}
                  style={styles.Button}>
                  <Text style={styles.confirm}>關閉</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: '#F5FCFF',
  },
  text1: {
    fontSize: Dimensions.get('window').height * 0.038,
    color: 'white',
  },
  input: {
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width / 2,
    fontWeight: '400',
    fontSize: Dimensions.get('window').height * 0.037,
    borderColor: 'white',
    borderWidth: 2,
    paddingHorizontal: Dimensions.get('window').height * 0.037,
    borderRadius: 20,
    color: 'white',
  },
  text2: {
    fontSize: Dimensions.get('window').height * 0.045,
    color: 'white',
  },
  date: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height * 0.07,
  },
  Button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: Dimensions.get('window').width / 3,
  },
  confirm: {
    color: '#198ea6',
    fontSize: Dimensions.get('window').height * 0.034,
  },
  pickers: {
    borderWidth: 2,
    borderColor: 'black',
    height: 38,
    borderRadius: 20,
    width: Dimensions.get('window').width / 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickertest: {
    fontSize: 18,
    color: 'black',
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
    height: Dimensions.get('window').height / 1.35,
    backgroundColor: '#198ea6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
