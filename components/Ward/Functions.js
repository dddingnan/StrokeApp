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
      '美國職能治療學會（AOTA）的定義：職能治療是藉著使用「有目的性的活動」來治療或協助生理、心理、發展障礙或社會功能上有障礙的人，使他們能獲得最大的生活獨立性。強調透過有目的的活動來治療、協助及維持病者生理上、心理上的健康；或減輕及舒緩病者在發展障礙或社會功能上的障礙對他們的影響，使他們能獲得最大的生活獨立性。',
    group: '定義',
  },

  {group: '對象'},
  {
    des:
      '主要是以腦血管病變、腦腫瘤、頭部外傷、脊髓損傷等的生理疾患為主，時有如骨折、手部外傷、人工關節置換、截肢、燒燙傷、神經系統病變、肌肉骨骼系 統問題、退化性疾病、心臟疾病、失智症、巴金森氏症等病患。',
    group: '對象',
  },

  {group: '服務項目'},
  {
    des:
      '成人生理職能治療的服務內容主要是提供個案急性期的床邊訓練與衛教，以及穩定期的神經肌肉功能、感覺功能、知覺認知功能、平衡功能、協調功能、手功能、心理社會功能、日常生活功能、休 閒娛樂、工作能力等評估與治療。同時，依個案之需要並提供副木與輔具的評估、製作與訓練，照顧者之教育、諮詢與支持，居家及社區環境的評估與改造等，進而提昇其生活品質。',
    group: '服務項目',
  },
];

let data2 = [
  {group: '服務時間'},
  {
    des: '星期一至星期五：',
    t: 'AM8:30 ~ PM9:00',
    t1: '星期六：',
    t2: 'AM8:30 ~ 12:30',
    group: '服務時間',
  },
];

let data3 = [
  {group: '服務地點'},
  {des: '復健大樓5F', group: '服務地點'},

  {group: '諮詢電話'},
  {des: '(03)3281200 轉2652', group: '諮詢電話'},
];

export default class Functions extends Component {
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
    };
    this.SectionHeader1 = this.SectionHeader1.bind(this);
    this.SectionHeader2 = this.SectionHeader2.bind(this);
    this.SectionHeader3 = this.SectionHeader3.bind(this);
  }

  componentDidMount() {
    this.config1(data1);
    this.config2(data2);
    this.config3(data3);
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
            color: 'black',
          }}>
          {friend.des}
        </Text>
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
