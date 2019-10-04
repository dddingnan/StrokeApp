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

export default class Stroke2 extends Component {
  confirm() {
    Actions.outt();
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
                出血型腦中風
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
              source={require('../../images/stroke2.png')}
            />
          </View>

          <Text style={styles.greenText}>【出血型腦中風介紹】</Text>

          <Text style={styles.bText}>
            出血型腦中風就是腦的血管破裂出血，俗稱「爆血管」導致腦組織壞死，腦出血會破壞腦細胞以及擠壓附近的腦組織，出血量越多，越會造成腦壓增高，死亡率也越高，大多跟高血壓控制不良有關，發生時常見有手腳無力、頭痛、血壓高、意識不清等症狀。
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
