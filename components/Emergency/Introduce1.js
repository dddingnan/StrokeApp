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
  {group: '血液檢查'},
  {des: '抽血檢驗評估凝血功能及目前身體情況', group: '血液檢查'},

  {group: '生理食鹽水點滴注射'},
  {
    des:
      '生理食鹽水點滴:可以維持腦灌流壓讓腦部有足夠血流，避免腦部的二度缺血傷害',
    group: '生理食鹽水點滴注射',
  },

  {group: '電腦斷層'},
  {
    des:
      '利用 X 光穿透人體後，經電腦重組顯像的攝影術，可以看到頭顱內部的狀況，快速且正確地區分是腦出血或腦梗塞，檢查過程不會感覺不舒服，大約只需幾分鐘就可完成，檢查中配合不要任意移動，避免影響清晰度',
    group: '電腦斷層',
  },
];

export default class Introduce1 extends Component {
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
      showImg: true,
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
            const one = newSourceData.生理食鹽水點滴注射[0].hide;
            const two = newSourceData.血液檢查[0].hide;
            const three = newSourceData.電腦斷層[0].hide;
            if (!one || !two || !three) {
              this.setState({data1: newSourceData, showImg: false});
            } else {
              this.setState({data1: newSourceData, showImg: true});
            }
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
    var passstate = this.props.passstate;
    Actions.com22({passstate: passstate});
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
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.06,
                  color: 'white',
                  fontWeight: '700',
                }}>
                急診資源
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

        <Text
          style={{
            color: 'black',
            fontSize: Dimensions.get('window').width * 0.06,
            marginTop: Dimensions.get('window').height * 0.06,
            margin: Dimensions.get('window').height * 0.03,
            fontWeight: 'bold',
          }}>
          因懷疑您是
          <Text
            style={{
              color: '#ba222c',
              fontWeight: '900',
              fontSize: Dimensions.get('window').width * 0.065,
              marginTop: Dimensions.get('window').height * 0.06,
              margin: Dimensions.get('window').height * 0.03,
            }}>
            腦中風
          </Text>
          ，醫師需要進行診斷，現在會先做血液檢測並給予您靜脈輸液注射，接著做頭部的電腦斷層檢查，完成檢查後醫師會向您說明電腦斷層檢查結果。
        </Text>

        <View style={styles.border} />

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
          {this.state.showImg ? (
            <View style={styles.imgPos}>
              <Image
                style={styles.owlImg}
                source={require('../../images/orangeOwl2.png')}
              />
            </View>
          ) : null}
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
    marginLeft: Dimensions.get('window').width * 0.15,
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
  imgPos: {
    position: 'absolute',
    bottom: -100,
    right: 0,
  },
  owlImg: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.45,
  },
});
