import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
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
} from 'native-base';
import commonstyle from '../themes/variables/commonColor3';
import getTheme from '../themes/components';

export default class Operate extends Component {
  confirm() {
    var passstate = this.props.passstate;
    Actions.intee({passstate: passstate});
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
                外科開刀
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

        <View style={{alignItems: 'center'}}>
          <Text style={styles.greenText}>【出血型中風手術治療】</Text>
        </View>

        <Text
          style={{
            color: 'black',
            fontSize: Dimensions.get('window').width * 0.058,
            marginTop: Dimensions.get('window').height * 0.01,
            margin: Dimensions.get('window').height * 0.03,
            letterSpacing: 1,
            fontWeight: '500',
          }}>
          經醫師評估後您需要開刀，醫師會解釋手術之過程內容以及合併症手術準備：
        </Text>

        <Text style={styles.bText}>● 並請您填寫手術同意書及麻醉同意書。</Text>

        <Text style={styles.bText}>● 手術前會給予點滴注射。</Text>

        <Text style={styles.bText}>● 手術前需要禁食包括喝水</Text>

        <Text style={styles.bText}>
          ● 要將身上的手錶、戒指、假牙、義眼拿掉，擦指甲油或口紅的話，必須擦掉。
        </Text>

        <Text style={styles.bText}>
          ●
          手術後身上可能有胃管、尿管、點滴、中心靜脈導管、氣管插管、術後傷口引流管等管路，這些管路相當重要，請勿拉扯。
        </Text>
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
    marginTop: Dimensions.get('window').height * 0.01,
    backgroundColor: '#198ea6',
    borderRadius: 20,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenText: {
    color: '#92bf1a',
    fontWeight: '900',
    fontSize: Dimensions.get('window').height * 0.035,
    marginTop: Dimensions.get('window').height * 0.05,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  bText: {
    fontWeight: '500',
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.055,
    marginTop: Dimensions.get('window').height * 0.02,
    marginLeft: Dimensions.get('window').height * 0.045,
    marginRight: Dimensions.get('window').height * 0.045,
    letterSpacing: 1,
  },
});
