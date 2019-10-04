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

export default class Stroke1 extends Component {
  confirm() {
    var state = this.props.passstate;
    Alert.alert('Stroke1', state);
    if (state == 0) {
      Actions.selff();
    } else if (state == 1) {
      Actions.el66();
    } else {
      Actions.tpa22();
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
                缺血型腦中風
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

        <View style={styles.flex}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={styles.img1}
              source={require('../../images/stroke1.png')}
            />
          </View>

          <Text style={styles.greenText}>【缺血型腦中風介紹】</Text>

          <Text style={styles.bText}>
            缺血性腦中風是指血栓或栓塞阻斷了供應腦部的血流，導致出現腦中風的症狀，如手腳無力、嘴巴歪斜、說話不清、嚴重會出現意識改變或是昏迷的情況。常見的危險因子有：高血壓、糖尿病、肥胖、抽菸、喝酒等。
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  img1: {
    borderRadius: 10,
    marginTop: Dimensions.get('window').height * 0.01,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenText: {
    color: '#92bf1a',
    fontWeight: '900',
    fontSize: Dimensions.get('window').height * 0.035,
    marginTop: Dimensions.get('window').height * 0.05,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  bText: {
    fontSize: Dimensions.get('window').height * 0.028,
    color: 'black',
    fontWeight: '500',
    marginLeft: Dimensions.get('window').height * 0.045,
    marginRight: Dimensions.get('window').height * 0.045,
    letterSpacing: 1,
  },
});
