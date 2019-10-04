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
import RadioForm from 'react-native-simple-radio-button';

export default class Self extends Component {
  constructor(props) {
    super(props);

    this.state = {
      types1: [{label: '是', value: 0}, {label: '否', value: 1}],
      value1: -1,
      value1Index: -1,

      types2: [{label: '是', value: 0}, {label: '否', value: 1}],
      value2: -1,
      value2Index: -1,

      types3: [{label: '是', value: 0}, {label: '否', value: 1}],
      value3: -1,
      value3Index: -1,

      types4: [{label: '是', value: 0}, {label: '否', value: 1}],
      value4: -1,
      value4Index: -1,

      types5: [{label: '是', value: 0}, {label: '否', value: 1}],
      value5: -1,
      value5Index: -1,

      types6: [{label: '是', value: 0}, {label: '否', value: 1}],
      value6: -1,
      value6Index: -1,

      types7: [{label: '是', value: 0}, {label: '否', value: 1}],
      value7: -1,
      value7Index: -1,

      types8: [{label: '是', value: 0}, {label: '否', value: 1}],
      value8: -1,
      value8Index: -1,

      types9: [{label: '是', value: 0}, {label: '否', value: 1}],
      value9: -1,
      value9Index: -1,

      types10: [{label: '是', value: 0}, {label: '否', value: 1}],
      value10: -1,
      value10Index: -1,

      types11: [{label: '是', value: 0}, {label: '否', value: 1}],
      value11: -1,
      value11Index: -1,

      types12: [{label: '是', value: 0}, {label: '否', value: 1}],
      value12: -1,
      value12Index: -1,

      types13: [{label: '是', value: 0}, {label: '否', value: 1}],
      value13: -1,
      value13Index: -1,

      types14: [{label: '是', value: 0}, {label: '否', value: 1}],
      value14: -1,
      value14Index: -1,

      types15: [{label: '是', value: 0}, {label: '否', value: 1}],
      value15: -1,
      value15Index: -1,
    };
  }

  componentWillUnmount() {
    this.setState({isModalVisible: false});
  }

  confirm() {
    if (
      this.state.value1 != -1 &&
      this.state.value2 != -1 &&
      this.state.value3 != -1 &&
      this.state.value4 != -1 &&
      this.state.value5 != -1 &&
      this.state.value6 != -1 &&
      this.state.value7 != -1 &&
      this.state.value8 != -1 &&
      this.state.value9 != -1 &&
      this.state.value10 != -1 &&
      this.state.value11 != -1 &&
      this.state.value12 != -1 &&
      this.state.value13 != -1 &&
      this.state.value14 != -1 &&
      this.state.value15 != -1
    ) {
      Actions.selfoutt({
        selfout:
          this.state.types1[this.state.value1Index].label +
          's' +
          this.state.types2[this.state.value2Index].label +
          's' +
          this.state.types3[this.state.value3Index].label +
          's' +
          this.state.types4[this.state.value4Index].label +
          's' +
          this.state.types5[this.state.value5Index].label +
          's' +
          this.state.types6[this.state.value6Index].label +
          's' +
          this.state.types7[this.state.value7Index].label +
          's' +
          this.state.types8[this.state.value8Index].label +
          's' +
          this.state.types9[this.state.value9Index].label +
          's' +
          this.state.types10[this.state.value10Index].label +
          's' +
          this.state.types11[this.state.value11Index].label +
          's' +
          this.state.types12[this.state.value12Index].label +
          's' +
          this.state.types13[this.state.value13Index].label +
          's' +
          this.state.types14[this.state.value14Index].label +
          's' +
          this.state.types15[this.state.value15Index].label,
      });
    } else {
      Alert.alert('請完成以下自評表');
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

        <ScrollView>
          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').height * 0.025,
              marginTop: Dimensions.get('window').height * 0.05,
              margin: Dimensions.get('window').height * 0.03,
              fontWeight: '900',
              letterSpacing: 1,
            }}>
            血栓溶解劑不可使用於易發生出血之高危險患者，下列為一般性禁忌症，接下來請您完成自我評估：
          </Text>

          <View style={styles.border} />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => Actions.emerless311()}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#92bf1a',
                  borderRightWidth: 1.2,
                  marginTop: Dimensions.get('window').height * 0.03,
                  marginBottom: Dimensions.get('window').height * 0.03,
                }}>
                <Icon
                  name="play"
                  style={{
                    fontSize: Dimensions.get('window').width * 0.08,
                    color: '#92bf1a',
                  }}
                />
                <Text style={styles.greenText}>國語衛教影片</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Actions.emerless322()}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                  marginTop: Dimensions.get('window').height * 0.03,
                  marginBottom: Dimensions.get('window').height * 0.03,
                }}>
                <Icon
                  name="play"
                  style={{
                    fontSize: Dimensions.get('window').width * 0.08,
                    color: '#92bf1a',
                  }}
                />
                <Text style={styles.greenText}>台語衛教影片</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊ 最近三個月內有中風病史或有嚴重性頭部創傷。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value1: value,
                  value1Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>＊ 過去曾中風及合併糖尿病。</Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value2: value,
                  value2Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊ 目前或過去六個月內有顯著的凝血障礙、易出血體質。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value3: value,
                  value3Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊ 正接受口服抗凝血劑(如warfarin sodium)治療
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value4: value,
                  value4Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊ 有中樞神經系統損傷之病史 (腫瘤、血管瘤、顱內或脊柱的手術)。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value5: value,
                  value5Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊ 有蜘蛛膜下腔出血之顱內出血或其病史。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value6: value,
                  value6Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊
            過去10天內曾動過大手術或有嚴重創傷(包括最近之急性心肌梗塞所伴隨的任何創傷)、最近頭部或顱部曾發生創傷。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value7: value,
                  value7Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊
            過久的或創傷性的心肺復甦術(超過2分鐘)、分娩、過去10天內曾對無法壓制之部位施行血管穿刺(如鎖骨下靜脈或頸靜脈穿刺)。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value8: value,
                  value8Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊
            嚴重肝病，包括肝衰竭、肝硬化、肝門脈高壓(食道靜脈曲張)及急性肝炎。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value9: value,
                  value9Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊
            是否有出血性視網膜病變，如糖尿病性(視覺障礙可能為出血性視網膜病變的指標)或其他出血性眼疾。細菌性心內膜炎，心包炎。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value10: value,
                  value10Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>＊ 是否有急性胰臟炎。</Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value11: value,
                  value11Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊ 是否有最近三個月內曾患胃腸道潰瘍。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value12: value,
                  value12Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>＊ 是否有動脈瘤，靜/動脈畸形。</Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value13: value,
                  value13Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>＊ 是否有易出血之腫瘤。</Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              onPress={(value, index) => {
                this.setState({
                  value14: value,
                  value14Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />

          <Text style={styles.redText}>
            ＊ 是否有對本藥之主成份rt-PA或賦型劑過敏者。
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
              radio_props={this.state.types1}
              initial={-1}
              buttonColor={'#51B6F4'}
              animation={false}
              formHorizontal={true}
              radioStyle={{
                paddingRight: Dimensions.get('window').height * 0.02,
              }}
              labelStyle={{fontSize: Dimensions.get('window').height * 0.026}}
              style={{marginBottom: Dimensions.get('window').height * 0.038}}
              onPress={(value, index) => {
                this.setState({
                  value15: value,
                  value15Index: index,
                });
              }}
            />
          </View>

          <View style={styles.border} />
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
  border: {
    borderColor: '#92bf1a',
    borderWidth: 0.8,
    width: '100%',
  },
  greenText: {
    color: '#92bf1a',
    fontWeight: '900',
    fontSize: Dimensions.get('window').height * 0.025,
    marginLeft: 5,
  },
  redText: {
    color: '#ba222c',
    fontWeight: '900',
    fontSize: Dimensions.get('window').width * 0.055,
    marginTop: Dimensions.get('window').height * 0.05,
    margin: Dimensions.get('window').height * 0.03,
  },
});
