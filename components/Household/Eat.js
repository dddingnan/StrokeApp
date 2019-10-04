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

let data1 = [
  {group: '如何購買選擇'},
  {
    des:
      '管灌牛奶是供給吞嚥障礙、不能由口進食或經口攝食量 不足但具有腸胃功能之患者的一種營養均衡且易於消化吸收的飲食。住院病人管灌牛奶經醫師開立醫囑，可健保給付費用醫院提供，出院後可到各地藥房購買或是電子商務購買管灌飲食，管灌配方有沖泡及罐裝、鋁箔包等品牌眾多，如果病人吃了合適不建議隨意更換，價錢可到各大藥局、電子商務比較或直接打電話到廠商去訂購整箱較便宜，量多者有些可直接貨送到府。',
    group: '如何購買選擇',
  },
];

let data2 = [{group: '比價網網址'}, {des: '1', group: '比價網網址'}];

let data3 = [
  {group: '管灌配方'},
  {
    des: '◎聚合配方(一般配方)',
    t:
      '特色：含有完整、均衡的營養素，大部分不含乳糖，適用於腸道功能正常患者。例如：益力壯、益力康高纖、安素、體力健',
    t1: '◎聚合配方(特殊配方)',
    t2: '特色：依據特殊疾病調整其三大營養素比例或調整特殊營養成分。',
    t3:
      '適合：糖尿病、腎臟病(洗腎前、洗腎後)、慢性腎衰竭、肺部疾病、褥瘡、營養不良、重症之免疫功能不全、肝腦病變',
    t4: '例如：',
    t5:
      '●特殊高蛋白配方(特色：含有完整、均衡的營養素，提供須加強蛋白質補充之管灌、營養不良、癌症、手術前後等患者)。如：愛美力+健力體',
    t6:
      '●特殊糖尿病配方(特色：含有完整、均衡的營養素，有些不含蔗糖且含膳食纖維)。如：葡勝納嚴選、益力康高纖',
    t7:
      '●特殊配方低糖高脂(特色：低糖、高脂，可減少二氧化碳產生，減少呼吸負擔)。如：保肺狀、益肺佳',
    t8: '●特殊配方血液透析。如；腎補鈉、普寧勝',
    t9:
      '●特殊配方濃縮(特色：高蛋白、濃縮：1.5~2.0 kcal/ml、適用:限水患者)。亞培雙卡、愛攝適、愛美力涵纖1.2、立攝適均康',
    t10:
      '●特殊配方免疫灌食(特色：添加特殊營養素(Arginine, Glutamin, EPA, GLA)扮 演調節發炎、代謝、免疫等反應之功能；適用重症對象：腫瘤、重大手術、多部位創傷、燙傷等)如：飲沛、亞培愛會佳',
    t11:
      '●特殊配方腫瘤(特色：濃縮熱量、含部分水解蛋白、提供魚油)。如：亞培倍力康、力攝適。',
    t12: '◎單體配方(元素灌食)',
    t13:
      '特色：水解成小分子的營養素低渣配方(胜肽、胺基酸、葡萄糖聚合物)，易吸收，有足夠的電解質、維生素、礦物質及稀有元素，營養素在近端小腸快速直接被吸收。如：新普派、佳易得、創快復。',
    t14: '◎單素配方',
    t15: '特色：',
    t16: '●提供蛋白質、醣類、脂肪等單一營養素的配方',
    t17: '●自行組合，彌補聚合配方成分固定不變之缺點',
    t18: '●為非均衡營養配方，不宜單獨做為全天之營養素提供使用',
    t19: '●混合使用時，應注意各類營養素是否達需求',
    group: '管灌配方',
  },
];

let data4 = [{group: '選購注意事項'}, {des: '123', group: '選購注意事項'}];

let data5 = [
  {group: '衛生署營養食品查驗網址'},
  {des: '11', group: '衛生署營養食品查驗網址'},
];

let data6 = [
  {group: '衛生署營養食品許可資料集網址'},
  {des: '123', group: '衛生署營養食品許可資料集網址'},
];

export default class Eat extends Component {
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
        <TouchableOpacity onPress={() => Actions.eat11()}>
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
            color: '#f24646',
          }}>
          {friend.des}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t1}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t2}</Text>
        <Text style={styles.listviewwtext2}>{friend.t3}</Text>
        <Text style={styles.listviewwtext2}>{friend.t4}</Text>
        <Text style={styles.listviewwtext2}>{friend.t5}</Text>
        <Text style={styles.listviewwtext2}>{friend.t6}</Text>
        <Text style={styles.listviewwtext2}>{friend.t7}</Text>
        <Text style={styles.listviewwtext2}>{friend.t8}</Text>
        <Text style={styles.listviewwtext2}>{friend.t9}</Text>
        <Text style={styles.listviewwtext2}>{friend.t10}</Text>
        <Text style={styles.listviewwtext2}>{friend.t11}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t12}
        </Text>
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
        <Text style={styles.listviewwtext2}>{friend.t16}</Text>
        <Text style={styles.listviewwtext2}>{friend.t17}</Text>
        <Text style={styles.listviewwtext2}>{friend.t18}</Text>
        <Text style={styles.listviewwtext2}>{friend.t19}</Text>
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
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 3.75,
            marginTop: Dimensions.get('window').height * 0.01,
          }}
          source={require('../../images/eat3.png')}
        />

        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 2,
            marginTop: Dimensions.get('window').height * 0.01,
          }}
          source={require('../../images/eat2.png')}
        />
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
        <TouchableOpacity onPress={() => Actions.eat22()}>
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
            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.045,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 5,
              }}>
              {sectionID}
            </Text>
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
        <TouchableOpacity onPress={() => Actions.eat33()}>
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
            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.045,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 5,
              }}>
              {sectionID}
            </Text>
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
    marginLeft: Dimensions.get('window').width * 0.08,
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
  img2: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3.75,
  },
});
