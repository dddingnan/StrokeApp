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
import Modal from 'react-native-modal';

export default class Emerless6 extends Component {
  confirm() {
    this.setState({isModalVisible: true});
  }

  state = {
    isModalVisible: false,
  };

  _Modalhide() {
    this.setState({isModalVisible: false});
    Actions.Pickward2();
  }

  gonext() {
    this.setState({isModalVisible: false});
    Actions.tpaa();
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

        <ScrollView>
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
                  醫生評估是否符合施打機械溶栓
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

          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.07,
              margin: Dimensions.get('window').height * 0.03,
            }}>
            經由醫師判定您不符合施打血栓溶解劑（通血路）藥物條件，但符合介入性動脈機械取栓術。
          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.07,
              margin: Dimensions.get('window').height * 0.03,
            }}>
            醫師會向您解釋好處與合併症、注意事項，取的您的同意後執行。病人需要在加護病房或中風中心密切觀察。
          </Text>

          <TouchableOpacity onPress={() => Actions.emerless611()}>
            <Text
              style={{
                color: '#0534f0',
                fontSize: Dimensions.get('window').height * 0.03,
                marginLeft: Dimensions.get('window').height * 0.05,
                marginRight: Dimensions.get('window').height * 0.03,
                marginTop: Dimensions.get('window').height * 0.04,
              }}>
              衛教影片
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: '#f24646',
              fontSize: Dimensions.get('window').height * 0.034,
              marginTop: Dimensions.get('window').height * 0.03,
              marginLeft: Dimensions.get('window').height * 0.03,
              marginRight: Dimensions.get('window').height * 0.03,
            }}>
            一. 什麼是介入性動脈機械取栓術
          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').height * 0.03,
              marginLeft: Dimensions.get('window').height * 0.03,
              marginRight: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.01,
            }}>
            以導管的方式將病人栓塞的血塊直接從動脈吸取血栓打通血管。介入操作過程可能產生血管損傷或腦出血，嚴重腦出血有可能致命，其他無法預料之併發症。
          </Text>

          <Text
            style={{
              color: '#f24646',
              fontSize: Dimensions.get('window').height * 0.034,
              marginTop: Dimensions.get('window').height * 0.03,
              marginLeft: Dimensions.get('window').height * 0.03,
              marginRight: Dimensions.get('window').height * 0.03,
            }}>
            二. 術後需要注意事項：
          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').height * 0.03,
              marginLeft: Dimensions.get('window').height * 0.03,
              marginRight: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.01,
            }}>
            1.
            術後需要密切監測血壓、呼吸、心跳，身上會有監測機器，24小時內絕對臥床
          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').height * 0.03,
              marginLeft: Dimensions.get('window').height * 0.03,
              marginRight: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.01,
            }}>
            2.
            需要注意嚴重頭痛、意識改變、噁心或嘔吐、肌肉力量改變，神經功能惡化懷疑中風或是腦出血需立即做電腦斷層檢查
          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').height * 0.03,
              marginLeft: Dimensions.get('window').height * 0.03,
              marginRight: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.01,
              marginBottom: Dimensions.get('window').height * 0.1,
            }}>
            3. 注射後24小時追蹤電腦斷層檢查
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
    backgroundColor: 'rgb(156,200,26)',
    borderRadius: 20,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Dimensions.get('window').height * 0.05,
  },
  milkmodals: {
    height: Dimensions.get('window').height / 2.18,
    width: Dimensions.get('window').width / 1.1,
    backgroundColor: '#f5d2d4',
    borderRadius: 30,
  },
});
