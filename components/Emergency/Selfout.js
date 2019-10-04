import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import {
  Icon,
  CheckBox,
  StyleProvider,
  Header,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import commonstyle from '../themes/variables/commonColor0';
import getTheme from '../themes/components';

export default class Selfout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 0,
    };
  }

  componentWillMount() {
    var count = this.props.selfout;

    var split = count.split('s');

    if (split[0] == '是') {
      var a = 1;
      var b = 0;
    } else {
      var b = 1;
      var a = 0;
    }

    if (split[1] == '是') {
      var a1 = 1;
      var b1 = 0;
    } else {
      var b1 = 1;
      var a1 = 0;
    }

    if (split[2] == '是') {
      var a2 = 1;
      var b2 = 0;
    } else {
      var b2 = 1;
      var a2 = 0;
    }

    if (split[3] == '是') {
      var a3 = 1;
      var b3 = 0;
    } else {
      var b3 = 1;
      var a3 = 0;
    }

    if (split[4] == '是') {
      var a4 = 1;
      var b4 = 0;
    } else {
      var b4 = 1;
      var a4 = 0;
    }

    if (split[5] == '是') {
      var a5 = 1;
      var b5 = 0;
    } else {
      var b5 = 1;
      var a5 = 0;
    }

    if (split[6] == '是') {
      var a6 = 1;
      var b6 = 0;
    } else {
      var b6 = 1;
      var a6 = 0;
    }

    if (split[7] == '是') {
      var a7 = 1;
      var b7 = 0;
    } else {
      var b7 = 1;
      var a7 = 0;
    }

    if (split[8] == '是') {
      var a8 = 1;
      var b8 = 0;
    } else {
      var b8 = 1;
      var a8 = 0;
    }

    if (split[9] == '是') {
      var a9 = 1;
      var b9 = 0;
    } else {
      var b9 = 1;
      var a9 = 0;
    }

    if (split[10] == '是') {
      var a10 = 1;
      var b10 = 0;
    } else {
      var b10 = 1;
      var a10 = 0;
    }

    if (split[11] == '是') {
      var a11 = 1;
      var b11 = 0;
    } else {
      var b11 = 1;
      var a11 = 0;
    }

    if (split[12] == '是') {
      var a12 = 1;
      var b12 = 0;
    } else {
      var b12 = 1;
      var a12 = 0;
    }

    if (split[13] == '是') {
      var a13 = 1;
      var b13 = 0;
    } else {
      var b13 = 1;
      var a13 = 0;
    }

    if (split[14] == '是') {
      var a14 = 1;
      var b14 = 0;
    } else {
      var b14 = 1;
      var a14 = 0;
    }

    var yes =
      a +
      a1 +
      a2 +
      a3 +
      a4 +
      a5 +
      a6 +
      a7 +
      a8 +
      a9 +
      a10 +
      a11 +
      a12 +
      a13 +
      a14;
    var no =
      b +
      b1 +
      b2 +
      b3 +
      b4 +
      b5 +
      b6 +
      b7 +
      b8 +
      b9 +
      b10 +
      b11 +
      b12 +
      b13 +
      b14;

    this.setState({count: yes});
    this.setState({count1: no});

    if (yes != 0) {
      Alert.alert(
        '依您所勾選結果，您為易出血之高危險患者，仍須由醫師判斷您是否符合施打',
      );
    } else {
      Alert.alert(
        '依您所勾選結果，沒有一般性禁忌症，仍須由醫師判斷您是否符合施打',
      );
    }
  }

  componentWillUnmount() {
    this.setState({isModalVisible: false});
  }

  confirm() {
    this.setState({isModalVisible: true});
  }

  state = {
    isModalVisible: false,
  };

  _Modalhide() {
    Actions.tpa22();
    this.setState({isModalVisible: false});
  }

  gonext() {
    Actions.tpaa();
    this.setState({isModalVisible: false});
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
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'white',
                  fontWeight: '700',
                }}>
                自評表結果
              </Text>
            </Body>
            <Right style={{flex: 1}}>
              <TouchableOpacity onPress={() => this.confirm()}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').width * 0.045,
                    color: 'white',
                    fontWeight: '700',
                  }}>
                  下一頁
                </Text>
              </TouchableOpacity>
            </Right>
          </Header>
        </StyleProvider>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.milkmodals}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').height * 0.05,
                  marginTop: Dimensions.get('window').height / 12,
                  marginLeft: Dimensions.get('window').height * 0.01,
                  color: 'black',
                }}>
                醫生評估是否符合施打血栓溶解劑
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: Dimensions.get('window').height / 8,
              }}>
              <TouchableOpacity onPress={() => this.gonext()}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 30,
                    height: Dimensions.get('window').height / 10,
                    width: Dimensions.get('window').width / 3,
                    marginLeft: Dimensions.get('window').height * 0.01,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: Dimensions.get('window').height * 0.04,
                      color: 'black',
                    }}>
                    符合
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._Modalhide()}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 30,
                    height: Dimensions.get('window').height / 10,
                    width: Dimensions.get('window').width / 3,
                    marginLeft: Dimensions.get('window').height / 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: Dimensions.get('window').height * 0.04,
                      color: 'black',
                    }}>
                    不符合
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <ScrollView>
          <Text
            style={{
              fontSize: Dimensions.get('window').height * 0.04,
              color: 'black',
            }}>
            自評表結果：
          </Text>

          <Text
            style={{
              fontSize: Dimensions.get('window').height * 0.04,
              color: 'black',
            }}>
            是：{this.state.count}
          </Text>

          <Text
            style={{
              fontSize: Dimensions.get('window').height * 0.04,
              color: 'black',
            }}>
            否：{this.state.count1}
          </Text>
        </ScrollView>
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
  Button: {
    marginTop: Dimensions.get('window').height * 0.05,
    backgroundColor: '#198ea6',
    borderRadius: 20,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Dimensions.get('window').height * 0.038,
  },
  milkmodals: {
    height: Dimensions.get('window').height / 2.18,
    width: Dimensions.get('window').width / 1.1,
    backgroundColor: '#f5d2d4',
    borderRadius: 30,
  },
});
