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

export default class Introduce2 extends Component {
  confirm() {
    var passstate = this.props.passstate;
    Actions.str11({passstate: passstate});
  }

  sconfirm() {
    Actions.str22();
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
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'white',
                  fontWeight: '700',
                }}>
                急診資源
              </Text>
            </Body>
            <Right style={{flex: 1}} />
          </Header>
        </StyleProvider>

        <View style={styles.flexCenter}>
          <Icon
            name="md-star"
            style={{
              color: '#ba222c',
              marginTop: Dimensions.get('window').height * 0.08,
              marginLeft: Dimensions.get('window').height * 0.02,
            }}
          />
          <Text
            style={{
              color: '#ba222c',
              fontWeight: '900',
              fontSize: Dimensions.get('window').width * 0.07,
              marginTop: Dimensions.get('window').height * 0.08,
              marginLeft: Dimensions.get('window').height * 0.01,
            }}>
            醫師向您說明斷層結果
          </Text>
        </View>

        <View style={{marginTop: Dimensions.get('window').height * 0.01}} />

        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            this.confirm();
          }}>
          <View style={styles.flexCenter}>
            <Text
              style={{
                fontSize: Dimensions.get('window').height * 0.05,
                color: 'black',
                fontWeight: '900',
              }}>
              缺血型中風
            </Text>
            <Icon
              name="md-arrow-round-forward"
              style={{
                marginLeft: 10,
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            this.sconfirm();
          }}>
          <View style={styles.flexCenter}>
            <Text
              style={{
                fontSize: Dimensions.get('window').height * 0.05,
                color: 'black',
                fontWeight: '900',
              }}>
              出血型中風
            </Text>
            <Icon
              name="md-arrow-round-forward"
              style={{
                marginLeft: 10,
              }}
            />
          </View>
        </TouchableOpacity>
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
    marginTop: Dimensions.get('window').height * 0.02,
    backgroundColor: '#e6efd1',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#abcd62',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
