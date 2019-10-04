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
  AsyncStorage,
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {Actions} from 'react-native-router-flux';

let data1 = [
  {group: '定義'},
  {
    des:
      '藉著治療師所設計的活動與練習，來幫助有溝通或吞嚥障礙的患者，改善他們的溝通技巧或吞嚥功能，使他們能更有效地與別人溝通，和安全的吞嚥與進食，使得生活品質提高。其實只要有關任何語言、吞嚥、發聲等問題，都是語言治療評估和治療的範疇。這就是說從小孩子常見的口吃、構音不全，到成年人中風後的吞嚥困難、聲帶結節、聽力問題等，都是語言治療的範圍。一般來說，以嘴巴以內到咽喉地方『功能性』的問題，大都可以在語言治療裡得到好的照顧。',
    group: '定義',
  },
];

let data2 = [
  {group: '對象'},
  {
    des: '孩童構音不清楚',
    t: '孩童唇顎裂的餵食及構音困難',
    t1: '中風或創傷後的溝通復健',
    t2: '孩童無法理解老師或大人在說什麼',
    t3: '孩童無法表達/敘述自己的想法及事件',
    t4: '聲音沙啞及發聲困難',
    t5: '說話不流暢(口吃)',
    t6: '提供失智症家屬或照顧者有關餵食及溝通協助',
    t7: '提供智能不足者溝通策略',
    t8: '餵食與吞嚥障礙',
    t9: '成人與孩童讀寫困難',
    group: '對象',
  },
];

let data3 = [
  {group: '服務項目'},
  {
    des: '學齡前/後語言發展及構音篩檢',
    t: '早期療育評估及提供文書報告',
    t1: '兒童及成人溝通及吞嚥困難的評估',
    t2: '兒童及成人溝通及吞嚥困難的診斷',
    t3: '兒童及成人溝通及吞嚥困難的治療',
    t4: '病患、家屬及照顧者諮詢與諮商',
    t5: '與專業團隊合作',
    t6: '轉介其它專業人員',
    group: '服務項目',
  },
];

let data4 = [{group: '吞嚥訓練'}, {des: '123', group: '吞嚥訓練'}];

let data5 = [
  {group: '服務時間'},
  {
    des: '星期一至星期五：',
    t: 'AM8:30 ~ PM9:00',
    t1: '星期六：',
    t2: 'AM8:30 ~ 12:30',
    group: '服務時間',
  },
];

let data6 = [
  {group: '服務地點'},
  {des: '復健大樓5F', group: '服務地點'},

  {group: '諮詢電話'},
  {des: '(03)3281200 轉2652', group: '諮詢電話'},
];

export default class Language extends Component {
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

      data5: undefined,
      Source5: new ListView.DataSource({
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

      data6: undefined,
      Source6: new ListView.DataSource({
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
    this.SectionHeader5 = this.SectionHeader5.bind(this);
    this.SectionHeader6 = this.SectionHeader6.bind(this);
  }

  componentDidMount() {
    this.config1(data1);
    this.config2(data2);
    this.config3(data3);
    this.config4(data4);
    this.config5(data5);
    this.config6(data6);
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
        <Text style={styles.listviewwtext2}>{friend.t3}</Text>
        <Text style={styles.listviewwtext2}>{friend.t4}</Text>
        <Text style={styles.listviewwtext2}>{friend.t5}</Text>
        <Text style={styles.listviewwtext2}>{friend.t6}</Text>
        <Text style={styles.listviewwtext2}>{friend.t7}</Text>
        <Text style={styles.listviewwtext2}>{friend.t8}</Text>
        <Text style={styles.listviewwtext2}>{friend.t9}</Text>
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
        <Text style={styles.listviewwtext2}>{friend.t2}</Text>
        <Text style={styles.listviewwtext2}>{friend.t3}</Text>
        <Text style={styles.listviewwtext2}>{friend.t4}</Text>
        <Text style={styles.listviewwtext2}>{friend.t5}</Text>
        <Text style={styles.listviewwtext2}>{friend.t6}</Text>
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
        <TouchableOpacity onPress={() => Actions.trainn()}>
          <Text
            style={{
              color: '#0534f0',
              fontSize: Dimensions.get('window').height * 0.03,
              margin: Dimensions.get('window').height * 0.03,
            }}>
            點擊前往
          </Text>
        </TouchableOpacity>
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

  render5(friend, sectionID, rowID) {
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
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t2}
        </Text>
      </View>
    );
  }

  SectionHeader5(friend, sectionID) {
    return (
      <Fragment>
        <TouchableOpacity
          style={styles.listvieww}
          onPress={() => {
            let newSourceData = this.state.data5;

            for (let friendGroup in this.state.data5) {
              if (friendGroup === sectionID) {
                newSourceData[sectionID][0].hide = !newSourceData[sectionID][0]
                  .hide;
              }
            }

            this.setState({data5: newSourceData});
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

  config5(friends) {
    let data5 = {};
    for (let friend of friends) {
      if (data5[friend.group]) {
        data5[friend.group].push(friend);
      } else {
        data5[friend.group] = [{hide: true}];
      }
    }

    this.setState({
      data5: data5,
    });
  }

  render6(friend, sectionID, rowID) {
    if (friend === undefined || (rowID == 0 && !friend.hide)) {
      return null;
    }

    return (
      <View style={styles.content}>
        <Text style={styles.listviewwtext2}>{friend.des}</Text>
      </View>
    );
  }

  SectionHeader6(friend, sectionID) {
    return (
      <Fragment>
        <TouchableOpacity
          style={styles.listvieww}
          onPress={() => {
            let newSourceData = this.state.data6;

            for (let friendGroup in this.state.data6) {
              if (friendGroup === sectionID) {
                newSourceData[sectionID][0].hide = !newSourceData[sectionID][0]
                  .hide;
              }
            }

            this.setState({data6: newSourceData});
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

  config6(friends) {
    let data6 = {};
    for (let friend of friends) {
      if (data6[friend.group]) {
        data6[friend.group].push(friend);
      } else {
        data6[friend.group] = [{hide: true}];
      }
    }

    this.setState({
      data6: data6,
    });
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

    let Data5 = this.state.data5;
    let Ds5 = [];
    let Id5 = [];
    for (let sectionID in Data5) {
      // Work、Family
      Ds5.push(sectionID);

      let row = [];
      Data5[sectionID].map((friend, index) => {
        row.push(index);
      });

      Id5.push(row);
    }

    let Data6 = this.state.data6;
    let Ds6 = [];
    let Id6 = [];
    for (let sectionID in Data6) {
      // Work、Family
      Ds6.push(sectionID);

      let row = [];
      Data6[sectionID].map((friend, index) => {
        row.push(index);
      });

      Id6.push(row);
    }

    return (
      <View style={styles.container}>
        <ScrollView>
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
          <ListView
            dataSource={this.state.Source5.cloneWithRowsAndSections(
              Data5,
              Ds5,
              Id5,
            )}
            renderRow={this.render5}
            renderSeparator={(sectionId, rowId) => (
              <View key={sectionId} style={styles.separator} />
            )}
            renderSectionHeader={this.SectionHeader5}
          />
          <ListView
            dataSource={this.state.Source6.cloneWithRowsAndSections(
              Data6,
              Ds6,
              Id6,
            )}
            renderRow={this.render6}
            renderSeparator={(sectionId, rowId) => (
              <View key={sectionId} style={styles.separator} />
            )}
            renderSectionHeader={this.SectionHeader6}
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
