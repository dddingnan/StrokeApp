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
  {group: '何謂電腦斷層'},
  {
    des:
      '利用 X 光穿透人體後，藉由偵檢器接受到不同的 X 光衰減值，再經由電腦運算組成不同切面的影像，藉由觀察身體內部訊息，可使病灶清楚的呈現。',
    group: '何謂電腦斷層',
  },

  {group: '對身體的影響'},
  {
    des:
      '除了少部分對顯影劑有過敏性體質的受檢者可能會有過敏現象之外。一 般而言，此項檢查不會對身體造成不適或不良影響。',
    group: '對身體的影響',
  },
];

let data2 = [
  {group: '檢查前準備事項'},
  {
    des:
      '1.醫師會向病人及家屬說明檢查的目的和注意事項，如有任何疑問，可於檢查前先請教醫護人員。',
    t:
      '2.應事先告知醫護人員是否曾經對對比劑或任何藥物過敏，若腎功能異常者，請於檢查前告知醫護人員。',
    t1:
      '3.檢查時須有一位可決定之成年家屬陪伴，以備突發狀況時，醫師會與家屬解釋及討論。',
    t2:
      '4.檢查前病人須取下檢查部位的金屬飾品，如：手錶、項鍊、戒指、手鍊、耳環及活動式假牙等，且勿穿著有金屬物品之衣服，以免因金屬產生的假影，而影響檢查結果。',
    group: '檢查前準備事項',
  },
];

let data3 = [
  {group: '檢查中注意事項'},
  {
    des:
      '1.於檢查台上時，請依檢查人員的指示，維持特定的姿勢，不可任意移動，以免影響影像的清晰程度，而無法判讀。',
    t:
      '2.檢查過程中，請配合檢查人員指示，執行吸氣或閉氣，幫助取得更清晰的影像。',
    t1:
      '3.施行電腦斷層攝影，如接受對比劑注射檢查者，當對比劑注射後，病人會感覺血管稍有溫熱感，這是正常的反應，約3-5 分鐘會自然消失。但如有任何疼痛或不適，請立即告知醫護人員，會迅速處理。',
    group: '檢查中注意事項',
  },
];

let data4 = [
  {group: '檢查後注意事項'},
  {
    des:
      '1.電腦斷層攝影雖然是X 光照射，但不會殘留在體內形成輻射源；接受對比劑注射的病人，若無飲水限制，至少額外補充1500C.C.之水份（開水、飲料、果汁、茶、湯），因為對比劑是從腎臟代謝，並隨著尿液排出，所以多補充水份、多解尿可以加速藥物排出。',
    t: '2.沒有注射對比劑者，檢查後即可回病房或返家休息。',
    t1:
      '3.若有皮膚發癢、起疹子、噁心、嘔吐、心悸、出汗、頭痛或呼吸困難等身體不適情形，請告知醫護人員處理。',
    t2: '4.醫師於檢查後會向病人解釋檢查報告。',
    group: '檢查後注意事項',
  },
];

export default class Com2 extends Component {
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
        <Text style={styles.listviewwtext2}>{friend.t}</Text>
        <Text style={styles.listviewwtext2}>{friend.t1}</Text>
        <Text style={styles.listviewwtext2}>{friend.t2}</Text>
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
        <Text style={styles.listviewwtext2}>{friend.des}</Text>
        <Text style={styles.listviewwtext2}>{friend.t}</Text>
        <Text style={styles.listviewwtext2}>{friend.t1}</Text>
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
        <Text style={styles.listviewwtext2}>{friend.t}</Text>
        <Text style={styles.listviewwtext2}>{friend.t1}</Text>
        <Text style={styles.listviewwtext2}>{friend.t2}</Text>
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
    var passstate = this.props.passstate;
    Actions.int22({passstate: passstate});
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
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'white',
                  fontWeight: '700',
                }}>
                電腦斷層
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
          <View style={{marginTop: Dimensions.get('window').height * 0.04}} />
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
          <View
            style={{marginBottom: Dimensions.get('window').height * 0.04}}
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
});
