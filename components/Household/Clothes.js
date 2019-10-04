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

let data1 = [
  {group: '穿脫衣褲技巧'},
  {
    des:
      '中風會造成病人單側肢體無力，容易導致病人在穿、脫衣服時的困難、無力及不便。但正確的選擇穿衣類型、運用正確的穿脫技巧，以及適當的訓練之後，中風病人也可以自己完成穿脫衣服的活動，使得自我生活的獨立性更上一層樓，並降低照顧者的負擔。主要的重點在於：先穿患側，再穿健側。先脫健側、再脫患側。',

    t: '1. 穿脫衣服',
    t1: '◎衣物的選擇：',

    t2: '●寬鬆（可比平常大一號）、可拉扯的衣服。',
    t3:
      '●扣子盡量簡單（難度由難至易：扣子、拉鍊、黏扣帶），且盡量能夠在旁邊或前面。',
    t4: '●可使用輔具或改良過的衣服（如：袖口改為鬆緊帶、領帶裝上夾子等）。',
    t5: '●需要保暖時，披巾較毛衣方便、適合。',
    t6:
      '●但須注意，若是平時會坐輪椅，則須避免過長、過大、袖子下垂的衣服、領帶或圍巾，以免卡住輪子或被輪子弄髒。使用拐杖的病患，蝴蝶袖或喇叭袖的衣服容易卡成一團或卡到拐杖，因此也應盡量避免。',

    t7: '◎穿著環境建議：',
    t8: '●一定要坐著進行，固定的輪椅或堅固的椅子都可以。',
    t9: '●衣服要擺在適當的地方。',
    t10: '●可使用適當的輔具。',

    t11: '◎外套、襯衫的穿脫技巧：壞邊先穿，好邊先脫！',

    t12: '◎穿衣服：',
    t13: '●方法一：',
    t14:
      '（1）將衣服攤開，標籤面朝上，衣領方向面向自己，讓壞邊的袖子放在雙腿中間，並讓袖子順順的朝下。',
    t15:
      '（2）好手帶壞手找到袖口，將壞手穿到袖子裡，身體彎曲使手可以再往下，並讓袖子能套到手肘以上。',
    t16: '（3）將壞手的袖子拉好，拉到肩膀以上',
    t17: '（4）將剩下的衣服往後拉，並使好手的袖子靠近好手的肩膀，以方便穿著。',
    t18: '（5）穿上好手的袖子，並整理好衣服。',
    t19: '●方法二：',
    t20:
      '（1）將衣服攤開，標籤面朝上，衣領方向面向自己，讓壞邊的袖子放在雙腿中間，並讓袖子順順的朝下。',
    t21:
      '（2）好手帶壞手找到袖口，將壞手穿到袖子裡，身體彎曲使手可以再往下，並讓袖子能套到手肘以上。',
    t22: '（3）將好手的袖子也穿上，並也拉到手肘以上。',
    t23: '（4）將衣服整個繞過頭、穿正、整理好。',

    t24: '◎脫衣服：',
    t25: '●先將好手的袖子脫掉，再把壞邊的袖子褪去。',

    t26: '2. 穿脫褲子：方法同穿脫衣服',
    t27:
      '◎褲子直較寬鬆，病人坐穩在床邊，用好手將壞腳置於好腳的膝上，成二郎腿 姿勢，再用好手將褲管套入壞腳',
    t28: '◎用好手將壞腳放下，將好腳穿入另一褲管，用手將褲子往上拉高超過膝蓋',
    t29: '◎病人靠著床邊站起，將褲子往上提，再拉上拉鏈或扣好扣子',

    group: '穿脫衣褲技巧',
  },
];

let data2 = [
  {group: '床上沐浴技巧'},
  {
    des:
      '對於長期臥床，或是日常生活活動無法完全自理，需要仰賴他人的腦中風病人來說，維持身體清潔是非常重要的，除了身體感到舒適、避免感染外，保持儀容的整潔，可增進尊嚴與自信心，提升生活品質。',

    t: '■沐浴前請準備以下物品：',
    t1:
      '一條小毛巾（臉部清潔用）、兩條大毛巾（身體、陰部）、浴巾、清潔用品（沐浴乳或是中性肥皂）、臉盆。',

    t2: '■沐浴時需留意：',
    t3: '◎個案可以下床，應每日淋浴或盆浴；若個案無法下床，則進行床上擦澡。',
    t4:
      '◎注意隱私，給予長輩基本的尊重，尚未清洗，或是已清洗完的部位可先用浴巾覆蓋。',
    t5:
      '◎留意環境溫度，若天氣較冷，可開暖氣或是準備暖爐在旁邊，也要留意水的溫度（水溫以40℃為佳，若有高血壓或心臟病者則降至37~38℃左右，或可詢問長輩感到舒適的溫度為佳），在進行清潔時，請先將您的雙手先溫熱喔！',
    t6: '◎擦洗的速度不宜過慢，但以清潔乾淨為首要原則，動作要盡量輕柔。',
    t7: '◎清潔的原則，由最乾淨的部位清洗到最髒的部位。',
    t8:
      '◎長期臥床或是體弱的長者，容易有泌尿道感染的問題，故在進行清洗時要更加注意清潔並保持乾燥。',
    t9: '◎飯前/飯後1小時內盡量不要進行身體清潔，以免影響消化。',
    t10: '◎身體清潔應在協助排泄後進行。',

    t11: '■沐浴之步驟：',

    t12: '（1）使用毛巾之一角由眼內擦向眼外側，先擦遠側眼睛再擦近側。',
    t13: '（2）大面積擦拭臉部、耳和頸部，清洗完頭頸部後更換另一條毛巾。',
    t14: '（3）清洗雙手 → 前胸 → 肚子 → 雙腳。',
    t15: '（4）翻身後擦：背部 → 臀部。',
    t16: '（5）更換新的一盆溫水及毛巾，清洗會陰及肛門。',
    t17:
      '請注意，關節處以及皮膚皺摺處要特別加強清洗，避開傷口處，身體清潔後再進行傷口護理。',
    t18:
      '(6)可在沐浴後（或睡前）進行背部按摩，除了可以讓長輩的肌肉放鬆外，也能促進血液循環。',
    t19:
      '每次按摩約4~6分鐘，由遠側往心臟方向按推，按摩時可使用乳液或是精油以減少摩擦，並增加舒緩、放鬆的效果。',

    t20: '■沐浴完畢，更換衣物：',
    t21:
      '每次按摩約4~應選擇寬鬆柔軟的衣服。穿脫重點：先脫健側（近側），再脫患側（遠側）；先穿患側（遠側），再穿健側（近側)。',

    group: '床上沐浴技巧',
  },
];

export default class Clothes extends Component {
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
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t}
        </Text>
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
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t7}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t8}</Text>
        <Text style={styles.listviewwtext2}>{friend.t9}</Text>
        <Text style={styles.listviewwtext2}>{friend.t10}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t11}
        </Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t12}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t13}</Text>
        <Text style={styles.listviewwtext2}>{friend.t14}</Text>
        <Text style={styles.listviewwtext2}>{friend.t15}</Text>
        <Text style={styles.listviewwtext2}>{friend.t16}</Text>
        <Text style={styles.listviewwtext2}>{friend.t17}</Text>
        <Text style={styles.listviewwtext2}>{friend.t18}</Text>
        <Text style={styles.listviewwtext2}>{friend.t19}</Text>
        <Text style={styles.listviewwtext2}>{friend.t20}</Text>
        <Text style={styles.listviewwtext2}>{friend.t21}</Text>
        <Text style={styles.listviewwtext2}>{friend.t22}</Text>
        <Text style={styles.listviewwtext2}>{friend.t23}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t24}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t25}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t26}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t27}</Text>
        <Text style={styles.listviewwtext2}>{friend.t28}</Text>
        <Text style={styles.listviewwtext2}>{friend.t29}</Text>
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
        <Text style={styles.listviewwtext2}>{friend.t3}</Text>
        <Text style={styles.listviewwtext2}>{friend.t4}</Text>
        <Text style={styles.listviewwtext2}>{friend.t5}</Text>
        <Text style={styles.listviewwtext2}>{friend.t6}</Text>
        <Text style={styles.listviewwtext2}>{friend.t7}</Text>
        <Text style={styles.listviewwtext2}>{friend.t8}</Text>
        <Text style={styles.listviewwtext2}>{friend.t9}</Text>
        <Text style={styles.listviewwtext2}>{friend.t10}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t11}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t12}</Text>
        <Text style={styles.listviewwtext2}>{friend.t13}</Text>
        <Text style={styles.listviewwtext2}>{friend.t14}</Text>
        <Text style={styles.listviewwtext2}>{friend.t15}</Text>
        <Text style={styles.listviewwtext2}>{friend.t16}</Text>
        <Text style={styles.listviewwtext2}>{friend.t17}</Text>
        <Text style={styles.listviewwtext2}>{friend.t18}</Text>
        <Text style={styles.listviewwtext2}>{friend.t19}</Text>
        <Text
          style={{
            margin: Dimensions.get('window').height * 0.02,
            fontSize: Dimensions.get('window').width * 0.06,
            color: '#f24646',
          }}>
          {friend.t20}
        </Text>
        <Text style={styles.listviewwtext2}>{friend.t21}</Text>
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
        <ScrollView>
          <View style={{marginTop: Dimensions.get('window').height * 0.09}} />

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
  img2: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3.75,
  },
});
