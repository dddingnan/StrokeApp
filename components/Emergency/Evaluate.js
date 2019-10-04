import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import {
  CheckBox,
  StyleProvider,
  Header,
  Left,
  Body,
  Right,
  Icon,
} from 'native-base';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import commonstyle from '../themes/variables/commonColor3';
import getTheme from '../themes/components';

export default class Evaluate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      ViewVisible: false,
      ModalVisible: false,
      sModalVisible: false,
    };
  }

  componentWillMount() {
    this.setState({ViewVisible: true});
  }

  ViewClose() {
    this.setState({ViewVisible: false});
  }

  confirm() {
    if (
      this.state.one == true ||
      this.state.two == true ||
      this.state.three == true ||
      this.state.four == true ||
      this.state.five == true ||
      this.state.six == true ||
      this.state.seven == true ||
      this.state.eight == true ||
      this.state.nine == true ||
      this.state.ten == true ||
      this.state.eleven == true ||
      this.state.twelve == true
    ) {
      this.setState({ModalVisible: true});
    } else {
      this.setState({sModalVisible: true});
    }
  }

  go() {
    var passstate = this.props.passstate;
    this.setState({ModalVisible: false});
    Actions.int11({passstate: passstate});
  }

  gonext() {
    var passstate = this.props.passstate;
    this.setState({sModalVisible: false});
    Actions.int11({passstate: passstate});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.ViewVisible}>
          <View
            style={{
              margin: 10,
              borderRadius: 20,
              height: Dimensions.get('window').height / 1.1,
              width: Dimensions.get('window').width / 1.2,
            }}>
            <View
              style={{
                backgroundColor: 'rgb(156,200,26)',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                height: Dimensions.get('window').height / 1.3,
              }}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.05,
                  color: 'white',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                本app主要是幫助您認識腦中風，並引導您在急診到住院的檢查處置與需要配合之注意事項。腦中風是與時間賽跑的重症，需要清楚掌握症狀，血栓溶解劑為目前唯一被認為治療急性缺血性中風有效的藥物，靜脈注射打通阻塞的血管，但因僅限於一開始最早出現的症狀3
                小時內使用，所以稱黃金三小時，由於本藥物若不當使用，容易造成腦出血或其他身體部位的出血進而威脅生命，故需要依藥物之使用規範，由醫師判讀是否可使用此藥以達安全。過了可以採用靜脈注射溶栓藥物，中風發生六小時內可以經由評估是否符合介入性動脈機械取栓，利用導管將血栓抽掉，打通阻塞的血管。若您中風症狀發生在3小時以內者，會以最快的流程做確定診斷，以下步驟需要您依序完成，評估您是否符合血栓溶解劑藥物之使用標準請您用自我評估方式幫助醫師對病史的了解，依自評結果提供專屬您的衛教指導，接下來請您依照下面步驟完成自我評估
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.ViewClose();
                }}
                style={styles.modeButton}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'white',
                  }}>
                  確定
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
                自評表
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

        <View style={styles.title}>
          <Text
            style={{
              fontSize: Dimensions.get('window').width * 0.06,
              color: '#ba222c',
              fontWeight: '900',
            }}>
            請問您是否有以下症狀？
          </Text>
        </View>

        <View style={styles.margins} />

        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.one}
              onPress={() => this.setState({one: !this.state.one})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text style={styles.texts}>1.嘴歪眼斜</Text>
        </View>

        <View style={styles.margins} />
        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.two}
              onPress={() => this.setState({two: !this.state.two})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text style={styles.texts}>2.突然臉部、手、腳麻木</Text>
        </View>

        <View style={styles.margins} />
        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.three}
              onPress={() => this.setState({three: !this.state.three})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text
            style={{
              marginLeft: Dimensions.get('window').height * 0.04,
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.043,
            }}>
            3.突然意識混亂、口齒不清、理解不能
          </Text>
        </View>

        <View style={styles.margins} />
        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.four}
              onPress={() => this.setState({four: !this.state.four})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text
            style={{
              marginLeft: Dimensions.get('window').height * 0.04,
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.043,
            }}>
            4.言語不清、構音障礙、溝通困難
          </Text>
        </View>

        <View style={styles.margins} />
        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.five}
              onPress={() => this.setState({five: !this.state.five})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text style={styles.texts}>5.感覺異常</Text>
        </View>

        <View style={styles.margins} />
        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.six}
              onPress={() => this.setState({six: !this.state.six})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text
            style={{
              marginLeft: Dimensions.get('window').height * 0.04,
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.043,
            }}>
            6.吞嚥困難、不自主流口水無法控制
          </Text>
        </View>

        <View style={styles.margins} />
        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.seven}
              onPress={() => this.setState({seven: !this.state.seven})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text style={styles.texts}>7.暈眩、嘔吐、頭痛</Text>
        </View>

        <View style={styles.margins} />

        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.eight}
              onPress={() => this.setState({eight: !this.state.eight})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text
            style={{
              marginLeft: Dimensions.get('window').height * 0.04,
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.043,
            }}>
            8.步態不穩，運動失調、大小便失禁
          </Text>
        </View>

        <View style={styles.margins} />

        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.nine}
              onPress={() => this.setState({nine: !this.state.nine})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text
            style={{
              marginLeft: Dimensions.get('window').height * 0.04,
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.043,
            }}>
            9.視力障礙、突然一眼或雙眼視力不明
          </Text>
        </View>

        <View style={styles.margins} />

        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.ten}
              onPress={() => this.setState({ten: !this.state.ten})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text
            style={{
              marginLeft: Dimensions.get('window').height * 0.04,
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.043,
            }}>
            10.突然暈眩，無法站立行動
          </Text>
        </View>

        <View style={styles.margins} />
        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.eleven}
              onPress={() => this.setState({eleven: !this.state.eleven})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text
            style={{
              marginLeft: Dimensions.get('window').height * 0.04,
              color: 'black',
              fontSize: Dimensions.get('window').width * 0.043,
            }}>
            11.突然爆發前所未有之劇烈頭痛
          </Text>
        </View>

        <View style={styles.margins} />

        <View style={styles.Top}>
          <StyleProvider style={getTheme(commonstyle)}>
            <CheckBox
              checked={this.state.twelve}
              onPress={() => this.setState({twelve: !this.state.twelve})}
              style={styles.checkboxs}
            />
          </StyleProvider>

          <Text style={styles.texts}>12.其他</Text>
        </View>

        <View style={styles.margins} />

        <Modal isVisible={this.state.ModalVisible}>
          <View style={styles.card}>
            <View style={styles.top1}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'red',
                }}>
                中風急性期為7-10天
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  marginTop: Dimensions.get('window').height * 0.02,
                  color: 'red',
                }}>
                您的症狀都可能會有變化，請密切注意病人的狀況，如果症狀變化或是增加、狀況變差請告知醫護人員
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.go();
                }}
                style={styles.modeButton}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'white',
                  }}>
                  確定
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal isVisible={this.state.sModalVisible}>
          <View style={styles.card}>
            <View style={styles.top1}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.08,
                  color: 'red',
                }}>
                您目前的腦中風症狀不明顯但仍須持續觀察
              </Text>

              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'white',
                  marginTop: Dimensions.get('window').height * 0.02,
                }}>
                症狀變化如有增加請告知醫護人員
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.gonext();
                }}
                style={styles.modeButton}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.04,
                    color: 'white',
                  }}>
                  確定
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  title: {
    margin: Dimensions.get('window').height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  margins: {
    marginTop: Dimensions.get('window').height * 0.005,
    borderColor: 'rgb(156,200,26)',
    borderWidth: 0.5,
  },
  listItems: {
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
  texts: {
    marginLeft: Dimensions.get('window').height * 0.04,
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.05,
  },
  checkboxs: {
    marginLeft: Dimensions.get('window').height * 0.01,
    color: 'blue',
  },
  Top: {
    flexDirection: 'row',
    margin: Dimensions.get('window').height * 0.01,
  },
  tt: {
    marginLeft: Dimensions.get('window').height * 0.03,
    borderColor: 'black',
    borderWidth: 0.45,
  },
  Button: {
    marginTop: Dimensions.get('window').height * 0.01,
    backgroundColor: 'rgb(156,200,26)',
    borderRadius: 20,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    borderRadius: 20,
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1.2,
  },
  top1: {
    backgroundColor: 'rgb(156,200,26)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: Dimensions.get('window').height / 3,
  },
  modeButton: {
    marginBottom: Dimensions.get('window').height * 0.03,
    marginTop: Dimensions.get('window').height * 0.03,
    backgroundColor: 'rgb(156,200,26)',
    borderRadius: 20,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
