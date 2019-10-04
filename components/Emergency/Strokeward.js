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
  {group: '須知事項'},
  {
    des:
      '腦中風觀察房位於復健大樓十一樓，病人住院時護理人員會向您說明病人權利與需要配合事項：告知自身健康、過去病史、藥物過敏、目前服用藥物、旅遊史，配合醫院就醫規定與作業流程，因觀察房為特殊病房',
    t: '不分男女入住',
    t1: '符合轉出標準',
    t2: '需要配合轉出',
    t3: '不限制床位。',
    group: '須知事項',
  },
];

let data2 = [
  {group: '環境介紹'},
  {
    des:
      '每個床位有一病床、陪客椅、床旁桌和床旁椅，每間病房有入院小百科，讓您對病房更了解，醫院會提供病患服，及一件毯子供病患使用，醫院不提供毯子供家屬使用。腦中風觀察房內設有生理儀器，病人使用生理監視器活動受到限制，需要家屬在旁協助，陪伴並適時給予鼓勵。',
    group: '環境介紹',
  },

  {group: '陪病原則'},
  {des: '夜間陪伴家屬限一人，需自備毛毯，住院需有人陪伴。', group: '陪病原則'},

  {group: '用物準備'},
  {des: '住院需自行準備日常用品，如毛巾、衛生紙等。', group: '用物準備'},
];

export default class Strokeward extends Component {
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
        <Text style={styles.listviewwtext2}>
          {friend.des}
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
          <Text style={styles.listviewwtext2}>{friend.t3}</Text>
        </Text>
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

  confirm() {
    Actions.selfevaluatee({stro: '0'});
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
                腦中風觀察房
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
              入住觀察房需要配合事項
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
