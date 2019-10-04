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
      '神經科病房位於復健大樓十一和十三樓，病人住院時護理人員會向您說明病人權利與需要配合事項：告知自身健康、過去病史、藥物過敏、目前服用藥物、旅遊史，配合醫院就醫規定與作業流程。',
    group: '須知事項',
  },

  {group: '環境介紹'},
  {
    des:
      '每個床位有一病床、陪客椅、床旁桌和床旁椅，每間病房有入院小百科，讓您對病房更了解，醫院會提供病患服，及一件毯子供病患使用，醫院不提供毯子供家屬使用。',
    group: '環境介紹',
  },

  {group: '陪病原則'},
  {des: '夜間陪伴家屬限一人，需自備毛毯，住院需有人陪伴。', group: '陪病原則'},

  {group: '用物準備'},
  {
    des:
      '每個床位有一病床、陪客椅、床旁桌和床旁椅，每間病房有入院小百科，讓您對病房更了解，醫院會提供病患服，及一件毯子供病患使用，醫院不提供毯子供家屬使用。',
    group: '用物準備',
  },
];

export default class Generalward extends Component {
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
    };
    this.SectionHeader1 = this.SectionHeader1.bind(this);
  }

  componentDidMount() {
    this.config1(data1);
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

  confirm() {
    Actions.selfevaluatee({gena: '0'});
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
                一般病房
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
              入住一般病房需要配合的事項
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
