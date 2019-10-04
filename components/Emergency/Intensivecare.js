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
import {Actions} from 'react-native-router-flux';
import ListView from 'deprecated-react-native-listview';

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
  {group: '加護病房須知'},
  {
    des:
      '神經科加護病房位於復健大樓九樓、病人因為病況危急，需要密切監測，入住加護病房護理人員會向您說明病人權利與義務，做環境介紹因為加護病房是密閉式的空間、儀器設備多， 加上儀器運作所以有時較為吵雜. 病人需要充分休息所以有訪客時間限制。',
    group: '加護病房須知',
  },
];

let data2 = [
  {group: '病患身上的管路'},
  {
    des:
      '各位家屬在進入加護病房會客時，可能會發現病人周遭有使用一些儀器，且身上多了許多管子或線路，為了減少家屬的不安，簡單介紹加護病房常見的設備。',

    t: '1. 床邊生理監測器：',
    t1:
      '可以隨時注意病人的心跳、血壓、呼吸等變化，幫助醫護人員隨時瞭解病人身起情況，一旦有異常，機器會發出警告聲。',

    t2: '2. 氧氣導管或氣管內插管：',
    t3:
      '當病人因腦中風而造成胸腔呼吸肌肉力氣減小或血中氧氣濃度不足時，就要藉助這些管路來改善體內氧氣的供應；如果病人意識不清、甚至沒辦法自行呼吸，還要靠呼吸器來幫助病人維持呼吸。',

    t4: '3. 鼻胃管：',
    t5:
      '腦中風病人常有肌肉麻痺或無法吞嚥情況，為避免吸入性肺炎的發生，此時會從鼻孔插入一條胃管通到胃或十二指腸內，直接把食物及水分灌入，以維持病人的營養需求。',

    t6: '4. 留置導尿管：',
    t7:
      '腦中風的病人因神經功能障礙無法順利自解小便，此時會插入尿管，讓尿液直接引流到袋子內，另外，也可藉由尿量來監測病人的生理狀態。',

    t8: '5. 靜脈輸液管：',
    t9:
      '靜脈輸液管就是俗稱的點滴，可以給藥、提供營養、水份等，通常會注射在手或腳的地方。在某些情況下，例如需要提供高濃度的營養、大量點滴、或是測量心臟壓力時，醫師會選擇較大的血管來注射，通常選擇在頸部或是鼠蹊部。',

    t10: '6. 點滴幫浦：',
    t11:
      '可以自動控制點滴滴速的機器，能準確計算藥物進入病人體內的劑量，點滴不順或藥劑滴空，機器會發出警告聲。',

    t12: '7. 約束帶：',
    t13:
      '為了避免意識不清或不合作的病人不小心傷害到自己，醫護人員會採取適當的保護性措施，如約束帶、乒乓球手套。',

    t14: '8. 烤燈：',
    t15:
      '有升溫保暖的作用外，也可促進局部血液循環，維持局部皮膚乾燥，加速傷口癒合。',

    t16: '9. 低溫毯：',
    t17:
      '有升溫保暖的作用外，也可促進局部血液循環，維持局部皮膚乾燥，加速傷口癒合。',

    t18:
      '以上是腦中風加護病房內常見的醫療儀器及管路，但在不同醫院或不同病情變化時會略有不同，若有不了解時，可隨時詢問醫護人員，以免造成不必要的困擾。',

    group: '病患身上的管路',
  },
];

let data3 = [
  {group: '會客時間'},
  {
    des: '11:00-11:30',
    t: '14:00-14:30',
    t1: '20:00-20:30',
    t2: '訪客進入時應先洗手及穿著加護病房供應之隔離衣。',
    group: '會客時間',
  },
];

let data4 = [
  {group: '用物準備'},
  {
    des:
      '協助病患身體清潔上所須之必須用物，毛巾，口腔清潔棒（牙膏、牙刷）、衛生紙、濕紙巾、看護墊、成人紙尿褲等。',
    group: '用物準備',
  },

  {group: '會客措施'},
  {
    des:
      '探視時可觸摸和握著病患的手，輕聲叫喚病人給予鼓勵，可給予一些簡單的肢體運動，這些對病患的病情都有很大的幫助。當病人準備轉出加護病房，護理人員會依病人狀況教導照護技巧：如翻身和拍背、鼻胃管灌食等，如您有需要照服員也可以向護理人員提出申請。',
    group: '會客措施',
  },
];

export default class Intensivecare extends Component {
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

      data3: undefined,
      Source3: new ListView.DataSource({
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

      data4: undefined,
      Source4: new ListView.DataSource({
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
    this.SectionHeader3 = this.SectionHeader3.bind(this);
    this.SectionHeader4 = this.SectionHeader4.bind(this);
  }

  componentDidMount() {
    this.config1(data1);
    this.config2(data2);
    this.config3(data3);
    this.config4(data4);
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
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t1}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t2}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t3}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t4}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t5}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t6}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t7}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t8}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t9}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t10}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t11}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t12}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t13}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t14}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t15}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t16}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t17}</Text>
        <Text style={styles.listviewwtext2}>{friend.t18}</Text>
      </View>
    );
  }

  SectionHeader2(friend, sectionID) {
    return (
      <Fragment>
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
        <View style={styles.border} />
      </Fragment>
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

  render3(friend, sectionID, rowID) {
    if (friend === undefined || (rowID == 0 && !friend.hide)) {
      return null;
    }

    return (
      <View style={styles.content}>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.des}
        </Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t}
        </Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#ba222c',
            fontWeight: '900',
          }}>
          {friend.t1}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t2}</Text>
      </View>
    );
  }

  SectionHeader3(friend, sectionID) {
    return (
      <Fragment>
        <TouchableOpacity
          style={styles.listvieww}
          onPress={() => {
            let newSourceData = this.state.data3;

            for (let friendGroup in this.state.data3) {
              if (friendGroup === sectionID) {
                newSourceData[sectionID][0].hide = !newSourceData[sectionID][0]
                  .hide;
              }
            }

            this.setState({data3: newSourceData});
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

  config3(friends) {
    let data3 = {};
    for (let friend of friends) {
      if (data3[friend.group]) {
        data3[friend.group].push(friend);
      } else {
        data3[friend.group] = [{hide: true}];
      }
    }

    this.setState({
      data3: data3,
    });
  }

  render4(friend, sectionID, rowID) {
    if (friend === undefined || (rowID == 0 && !friend.hide)) {
      return null;
    }

    return (
      <View style={styles.content}>
        <Text style={styles.listviewwtext2}>{friend.des}</Text>
      </View>
    );
  }

  SectionHeader4(friend, sectionID) {
    return (
      <Fragment>
        <TouchableOpacity
          style={styles.listvieww}
          onPress={() => {
            let newSourceData = this.state.data4;

            for (let friendGroup in this.state.data4) {
              if (friendGroup === sectionID) {
                newSourceData[sectionID][0].hide = !newSourceData[sectionID][0]
                  .hide;
              }
            }

            this.setState({data4: newSourceData});
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

  config4(friends) {
    let data4 = {};
    for (let friend of friends) {
      if (data4[friend.group]) {
        data4[friend.group].push(friend);
      } else {
        data4[friend.group] = [{hide: true}];
      }
    }

    this.setState({
      data4: data4,
    });
  }

  confirm() {
    Actions.selfevaluatee({inte: '0'});
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

    let Data3 = this.state.data3;
    let Ds3 = [];
    let Id3 = [];
    for (let sectionID in Data3) {
      // Work、Family
      Ds3.push(sectionID);

      let row = [];
      Data3[sectionID].map((friend, index) => {
        row.push(index);
      });

      Id3.push(row);
    }

    let Data4 = this.state.data4;
    let Ds4 = [];
    let Id4 = [];
    for (let sectionID in Data4) {
      // Work、Family
      Ds4.push(sectionID);

      let row = [];
      Data4[sectionID].map((friend, index) => {
        row.push(index);
      });

      Id4.push(row);
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
                加護病房
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
          <View style={styles.flexCenter}>
            <Icon
              name="md-star"
              style={{
                color: '#ba222c',
                marginTop: Dimensions.get('window').height * 0.03,
                marginLeft: Dimensions.get('window').height * 0.02,
              }}
            />
            <Text
              style={{
                color: '#ba222c',
                fontWeight: '900',
                fontSize: Dimensions.get('window').width * 0.06,
                marginTop: Dimensions.get('window').height * 0.03,
                marginLeft: Dimensions.get('window').height * 0.01,
              }}>
              入住加護病房需要配合的事項
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

          <ListView
            dataSource={this.state.Source3.cloneWithRowsAndSections(
              Data3,
              Ds3,
              Id3,
            )}
            renderRow={this.render3}
            renderSeparator={(sectionId, rowId) => (
              <View key={sectionId} style={styles.separator} />
            )}
            renderSectionHeader={this.SectionHeader3}
          />

          <ListView
            dataSource={this.state.Source4.cloneWithRowsAndSections(
              Data4,
              Ds4,
              Id4,
            )}
            renderRow={this.render4}
            renderSeparator={(sectionId, rowId) => (
              <View key={sectionId} style={styles.separator} />
            )}
            renderSectionHeader={this.SectionHeader4}
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
    marginLeft: Dimensions.get('window').width * 0.2,
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
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
