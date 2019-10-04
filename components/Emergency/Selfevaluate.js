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
  ListView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  StyleProvider,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  CheckBox,
} from 'native-base';

import commonstyle from '../themes/variables/commonColor0';
import getTheme from '../themes/components';
import RadioForm from 'react-native-simple-radio-button';

export default class Selfevaluate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      types1: [
        {label: '可配合指令', value: 1},
        {label: '不可配合指令', value: 2},
      ],
      value1: 0,
      value1Index: 0,

      types2: [
        {label: '可正常由口進食', value: 1},
        {label: '可自行由口進食但有咳嗽情形', value: 2},
        {label: '需要餵食', value: 3},
        {label: '鼻胃管灌食', value: 4},
      ],
      value2: 0,
      value2Index: 0,

      types3: [
        {label: '四肢可正常活動', value: 1},
        {label: '一側稍無力部分仍可拿東西', value: 2},
        {label: '一側肢體無法移動', value: 3},
        {label: '四肢無法移動', value: 4},
      ],
      value3: 0,
      value3Index: 0,

      onebyone: false,
      onebytwo: false,

      twobyone: false,
      twobytwo: false,
      twobythree: false,
      twobyfour: false,

      threebyone: false,
      threebytwo: false,
      threebythree: false,
      threebyfour: false,
    };
  }

  confirm() {
    console.log(this.state.value1);
    console.log(this.state.value2);
    console.log(this.state.value3);

    console.log(this.state.types1[this.state.value1Index].label);

    if (
      this.state.value1 == 1 &&
      this.state.value2 == 3 &&
      this.state.value3 == 3
    ) {
      Actions.answer1({
        state: '1',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 2 &&
      this.state.value3 == 3
    ) {
      Actions.answer1({
        state: '2',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 1 &&
      this.state.value3 == 3
    ) {
      Actions.answer1({
        state: '3',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 4 &&
      this.state.value3 == 3
    ) {
      Actions.answer1({
        state: '4',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 3 &&
      this.state.value3 == 2
    ) {
      Actions.answer1({
        state: '5',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 2 &&
      this.state.value3 == 2
    ) {
      Actions.answer1({
        state: '6',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 1 &&
      this.state.value3 == 2
    ) {
      Actions.answer1({
        state: '7',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 4 &&
      this.state.value3 == 2
    ) {
      Actions.answer1({
        state: '8',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 2 &&
      this.state.value3 == 1
    ) {
      Actions.answer1({
        state: '9',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 1 &&
      this.state.value3 == 1
    ) {
      Actions.answer1({
        state: '10',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 4 &&
      this.state.value3 == 1
    ) {
      Actions.answer1({
        state: '11',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 1 &&
      this.state.value2 == 4 &&
      this.state.value3 == 4
    ) {
      Actions.answer1({
        state: '12',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 4 &&
      this.state.value3 == 3
    ) {
      Actions.answer1({
        state: '13',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 3 &&
      this.state.value3 == 3
    ) {
      Actions.answer1({
        state: '14',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 4 &&
      this.state.value3 == 2
    ) {
      Actions.answer1({
        state: '15',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 3 &&
      this.state.value3 == 2
    ) {
      Actions.answer1({
        state: '16',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 2 &&
      this.state.value3 == 2
    ) {
      Actions.answer1({
        state: '17',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 1 &&
      this.state.value3 == 2
    ) {
      Actions.answer1({
        state: '18',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 1 &&
      this.state.value3 == 1
    ) {
      Actions.answer1({
        state: '19',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 2 &&
      this.state.value3 == 1
    ) {
      Actions.answer1({
        state: '20',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 3 &&
      this.state.value3 == 1
    ) {
      Actions.answer1({
        state: '21',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 4 &&
      this.state.value3 == 1
    ) {
      Actions.answer1({
        state: '22',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    } else if (
      this.state.value1 == 2 &&
      this.state.value2 == 4 &&
      this.state.value3 == 4
    ) {
      Actions.answer1({
        state: '23',
        inte: this.props.inte,
        stro: this.props.stro,
        gena: this.props.gena,
      });
    }
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
                照護需求評估
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

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.05,
              marginLeft: Dimensions.get('window').height * 0.03,
              marginRight: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.01,
              fontWeight: 'bold',
            }}>
            請您依照病人目前狀況點選符合之選項，最後會綜合您點選結果提供專屬您的衛教指導
          </Text>
        </View>

        <View style={styles.content}>
          <View
            style={{
              marginLeft: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.01,
            }}>
            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.045,
                color: 'black',
              }}>
              意識狀況：
            </Text>
          </View>

          <RadioForm
            radio_props={this.state.types1}
            buttonColor={'#51B6F4'}
            buttonSize={18}
            initial={-1}
            style={{
              marginLeft: Dimensions.get('window').height * 0.13,
              marginTop: Dimensions.get('window').height * 0.01,
            }}
            animation={false}
            labelStyle={{fontSize: Dimensions.get('window').width * 0.045}}
            onPress={(value, index) => {
              this.setState({
                value1: value,
                value1Index: index,
              });
            }}
          />

          <View
            style={{
              borderColor: 'black',
              borderWidth: 0.5,
            }}
          />

          <View
            style={{
              marginLeft: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.01,
            }}>
            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.045,
                color: 'black',
              }}>
              吞嚥狀況：
            </Text>
          </View>

          <RadioForm
            radio_props={this.state.types2}
            buttonColor={'#51B6F4'}
            initial={-1}
            buttonSize={18}
            style={{
              marginLeft: Dimensions.get('window').height * 0.13,
              marginTop: Dimensions.get('window').height * 0.01,
            }}
            animation={false}
            labelStyle={{fontSize: Dimensions.get('window').width * 0.045}}
            onPress={(value, index) => {
              this.setState({
                value2: value,
                value2Index: index,
              });
            }}
          />

          <View
            style={{
              borderColor: 'black',
              borderWidth: 0.5,
            }}
          />

          <View
            style={{
              marginLeft: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.01,
            }}>
            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.045,
                color: 'black',
              }}>
              肌肉力量：
            </Text>
          </View>

          <RadioForm
            radio_props={this.state.types3}
            buttonColor={'#51B6F4'}
            initial={-1}
            buttonSize={18}
            style={{
              marginLeft: Dimensions.get('window').height * 0.13,
              marginTop: Dimensions.get('window').height * 0.01,
            }}
            animation={false}
            labelStyle={{fontSize: Dimensions.get('window').width * 0.045}}
            onPress={(value, index) => {
              this.setState({
                value3: value,
                value3Index: index,
              });
            }}
          />
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
  Button: {
    marginTop: Dimensions.get('window').height * 0.005,
    backgroundColor: 'rgb(156,200,26)',
    borderRadius: 20,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#ebf9fa',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: Dimensions.get('window').height * 0.01,
  },
});
