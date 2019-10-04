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

export default class Tpa extends Component {
  confirm() {
    Actions.Pickward1();
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
                血栓溶解劑
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

        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'black',
                fontSize: Dimensions.get('window').height * 0.045,
                marginTop: Dimensions.get('window').height * 0.05,
                margin: Dimensions.get('window').height * 0.03,
              }}>
              血栓溶解劑治療注意事項
            </Text>
          </View>

          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').height * 0.037,
              marginTop: Dimensions.get('window').height * 0.03,
              margin: Dimensions.get('window').height * 0.03,
            }}>
            藥物使用後，需要密切監測血壓、呼吸、心跳，施打之後需要在加護病房密切觀察24小時，24小時內絕對臥床和禁食24小時，侵入性管路像是鼻胃管與導尿管不可置放，避免導致出血風險，用藥中需要您注意病人有沒有嚴重頭痛、意識改變、噁心或嘔吐，注意有無皮膚有不明原因的瘀血等出血徵狀，如果有請您立即告知醫護人員處置。
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
    marginTop: Dimensions.get('window').height * 0.01,
    backgroundColor: '#198ea6',
    borderRadius: 20,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
