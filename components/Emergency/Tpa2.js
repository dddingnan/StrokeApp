import React, {Component, Fragment} from 'react';
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
import ListView from 'deprecated-react-native-listview';
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

let data1 = [
  {group: '點滴'},
  {des: '可以維持腦灌流壓讓腦部有足夠血流', group: '點滴'},

  {group: '藥物治療'},
  {
    des:
      'aspirin(阿斯匹林)是一種抗血小板藥物，可以抑制血小板凝集，中風48小時內給予，可減少死亡率及預防中風復發。副作用：胃潰瘍、腸胃道出血，如果有解黑便、血便、皮膚有不明原因的瘀青等出血徵兆，請告知醫護人員',
    group: '藥物治療',
  },

  {group: '症狀觀察'},
  {
    des:
      '家屬須協助注意病患的狀況，包括意識是否改變、手腳有沒有更沒力感，呼吸喘或呼吸暫停等，若是病人一直睡，叫不醒或有任何徵象時，應立即告訴醫護人員處理以免延誤處理的時機。',
    group: '症狀觀察',
  },
];

let data2 = [
  {group: '檢查'},
  {
    des:
      '除了腦部影像檢查外，一般常規檢查尚包括：胸部X光、心電圖、血液檢查，其他處置尚包含顱內、外動脈超音波或心臟超音波檢查，有助於病因的診斷及分類。',

    t: '◎顱內、外動脈超音波：',
    t1:
      '主要是運用超音波反射原理，測得頸動脈狹窄程度、阻塞或顱內外血流速度及流量，評估供應腦部主要血管狀況，頸動脈為供應腦部血流的重要血管，若有狹窄，會增加腦中風機會。',
    t2: '注意事項：',
    t3: '1.檢查時，請勿穿著緊身、高領衣物，以免妨礙檢查的進行。',
    t4: '2.檢查時勿戴隱形眼鏡及項鍊。',
    t5:
      '3.檢查過程需 30 至 40 分鐘，以超音波探頭碰觸頸部的皮膚，需安靜地平躺。',

    t6: '◎心臟超音波：',
    t7:
      '此項檢查可進行心臟結構和功能的評估，瞭解心臟的大小、收縮情形，判斷心臟瓣膜活動的情況。心臟血管內的血流方向及流速及可看冠狀動脈是否狹窄，還可偵測是否有心臟瓣膜缺損，或心律不整。',
    t8: '檢查方式：',
    t9:
      '此為一項安全、非侵入性的檢查。受檢者平躺於床上，醫師以探頭置放在胸前移動，利用探頭放出超音波來偵測心臟內部構造及收縮功能。檢查時間約15分鐘。',

    t10: '◎24小時心電圖檢查：',
    t11:
      '攜帶式24小時心電圖檢查可連續紀錄24小時心電活動的全部過程，不同情况下的心電圖資料，能够發現靜態心電圖不易發現的心律不整和心肌缺血。',
    t12: '注意事項：',
    t13: '檢查當日不可洗澡',

    t14: '◎腦部磁振造影(MRI)：',
    t15:
      '可在發病很早期即清楚顯示腦中風的部 位和範圍。檢查時間大約 30 分鐘至 1 小時左右，通常視病人情況需要再做。',

    t16: '◎血液檢查：',
    t17:
      '生化、血液、血脂肪或凝血時間、血糖、電解質、抽驗肝、腎功能等等，篩檢腦中風之危險因子。',
    group: '檢查',
  },
];

export default class Tpa2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: undefined,
      Source1: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
        getRowData: (data, sectionID, rowID) => {
          if (data[sectionID][0].hide) {
            return undefined;
          } else {
            return data[sectionID][rowID];
          }
        },
        getSectionHeaderData: (data, sectionID) => {
          return data[sectionID];
        },
      }),

      data2: undefined,
      Source2: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
        getRowData: (data, sectionID, rowID) => {
          if (data[sectionID][0].hide) {
            return undefined;
          } else {
            return data[sectionID][rowID];
          }
        },
        getSectionHeaderData: (data, sectionID) => {
          return data[sectionID];
        },
      }),
    };
    this.SectionHeader1 = this.SectionHeader1.bind(this);
    this.SectionHeader2 = this.SectionHeader2.bind(this);
  }

  componentDidMount() {
    this.config1(data1);
    this.config2(data2);
  }

  render1(friend, sectionID, rowID) {
    if (friend === undefined || (rowID == 0 && !friend.hide)) {
      return null;
    }

    return (
      <View style={styles.content}>
        <Text style={styles.listviewwtext2}>{friend.des}</Text>
      </View>
    );
  }

  SectionHeader1(friend, sectionID) {
    return (
      <Fragment>
        <TouchableOpacity
          style={styles.listvieww}
          onPress={() => {
            let newSourceData = this.state.data1;

            for (let friendGroup in this.state.data1) {
              if (friendGroup === sectionID) {
                newSourceData[sectionID][0].hide = !newSourceData[sectionID][0]
                  .hide;
              }
            }

            this.setState({data1: newSourceData});
          }}>
          <View style={styles.test}>
            <Image
              style={styles.photo}
              source={require('../../images/book.png')}
            />
            <Text style={styles.text}>{sectionID}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.border} />
      </Fragment>
    );
  }

  config1(friends) {
    let data1 = {};
    for (let friend of friends) {
      if (data1[friend.group]) {
        data1[friend.group].push(friend);
      } else {
        data1[friend.group] = [{hide: true}];
      }
    }

    this.setState({
      data1: data1,
    });
  }

  render2(friend, sectionID, rowID) {
    if (friend === undefined || (rowID == 0 && !friend.hide)) {
      return null;
    }

    return (
      <View style={styles.content}>
        <Text style={styles.listviewwtext2}>{friend.des}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t1}</Text>
        <Text style={styles.listviewwtext2}>{friend.t2}</Text>
        <Text style={styles.listviewwtext2}>{friend.t3}</Text>
        <Text style={styles.listviewwtext2}>{friend.t4}</Text>
        <Text style={styles.listviewwtext2}>{friend.t5}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t6}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t7}</Text>
        <Text style={styles.listviewwtext2}>{friend.t8}</Text>
        <Text style={styles.listviewwtext2}>{friend.t9}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t10}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t11}</Text>
        <Text style={styles.listviewwtext2}>{friend.t12}</Text>
        <Text style={styles.listviewwtext2}>{friend.t13}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t14}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t15}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t16}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t17}</Text>
      </View>
    );
  }

  SectionHeader2(friend, sectionID) {
    return (
      <TouchableOpacity
        style={styles.listvieww}
        onPress={() => {
          let newSourceData = this.state.data2;

          for (let friendGroup in this.state.data2) {
            if (friendGroup === sectionID) {
              newSourceData[sectionID][0].hide = !newSourceData[sectionID][0]
                .hide;
            }
          }

          this.setState({data2: newSourceData});
        }}>
        <View style={styles.test}>
          <Image
            style={styles.photo}
            source={require('../../images/book.png')}
          />
          <Text style={styles.text}>{sectionID}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  config2(friends) {
    let data2 = {};
    for (let friend of friends) {
      if (data2[friend.group]) {
        data2[friend.group].push(friend);
      } else {
        data2[friend.group] = [{hide: true}];
      }
    }

    this.setState({
      data2: data2,
    });
  }

  confirm() {
    Actions.Pickward3();
  }

  render() {
    let Data1 = this.state.data1;
    let Ds1 = [];
    let Id1 = [];
    for (let sectionID in Data1) {
      // Work、Family
      Ds1.push(sectionID);

      let row = [];
      Data1[sectionID].map((friend, index) => {
        row.push(index);
      });

      Id1.push(row);
    }

    let Data2 = this.state.data2;
    let Ds2 = [];
    let Id2 = [];
    for (let sectionID in Data2) {
      // Work、Family
      Ds2.push(sectionID);

      let row = [];
      Data2[sectionID].map((friend, index) => {
        row.push(index);
      });

      Id2.push(row);
    }

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
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'black',
                fontSize: Dimensions.get('window').width * 0.06,
                marginTop: Dimensions.get('window').height * 0.06,
                margin: Dimensions.get('window').height * 0.03,
                fontWeight: 'bold',
              }}>
              經由醫師評估您
              <Text
                style={{
                  color: '#ba222c',
                  fontWeight: '900',
                  fontSize: Dimensions.get('window').width * 0.065,
                  marginTop: Dimensions.get('window').height * 0.06,
                  margin: Dimensions.get('window').height * 0.03,
                }}>
                不符合施打血栓溶解
              </Text>
              ，依中風病人治療，會給予抗血小板藥物治療、點滴注射、症狀觀察、安排相關檢查與住院密切觀察。
            </Text>
          </View>

          <ListView
            dataSource={this.state.Source1.cloneWithRowsAndSections(
              Data1,
              Ds1,
              Id1,
            )}
            renderRow={this.render1}
            renderSeparator={(sectionId, rowId) => (
              <View key={sectionId} style={styles.separator} />
            )}
            renderSectionHeader={this.SectionHeader1}
          />

          <ListView
            dataSource={this.state.Source2.cloneWithRowsAndSections(
              Data2,
              Ds2,
              Id2,
            )}
            renderRow={this.render2}
            renderSeparator={(sectionId, rowId) => (
              <View key={sectionId} style={styles.separator} />
            )}
            renderSectionHeader={this.SectionHeader2}
          />
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
  test: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Dimensions.get('window').width * 0.23,
  },

  text: {
    fontSize: Dimensions.get('window').width * 0.06,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  photo: {
    height: Dimensions.get('window').width * 0.2,
    width: Dimensions.get('window').width * 0.2,
  },
  content: {
    backgroundColor: '#e6efd1',
    borderColor: '#e6efd1',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  listvieww: {
    marginBottom: Dimensions.get('window').height * 0.01,
    marginTop: Dimensions.get('window').height * 0.01,
  },
  listviewwtext1: {
    marginBottom: Dimensions.get('window').height * 0.02,
    fontSize: Dimensions.get('window').width * 0.3,
    color: 'black',
  },
  listviewwtext2: {
    margin: Dimensions.get('window').height * 0.04,
    fontSize: Dimensions.get('window').width * 0.06,
    color: 'black',
    fontWeight: 'bold',
  },
  border: {
    borderColor: '#cad6ae',
    borderWidth: 0.8,
    width: '100%',
  },
});
