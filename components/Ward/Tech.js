import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  ScrollView,
  WebView,
  ActivityIndicator
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import {Icon} from 'native-base';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class Tech extends Component {


  constructor(props) {
    super(props)

    this.state = {
      stage: "",
      visible: true
    };

  }

  test(){
    Actions.swaa()
  }

  showSpinner() {
      console.log('Show Spinner');
      this.setState({ visible: true });
  }

  hideSpinner() {
      console.log('Hide Spinner');
      this.setState({ visible: false });
  }

  emScreen(){
    if(this.state.visible==true){
      return(
        <View style={{marginTop:Dimensions.get('window').height*0.04,}}>
        <ActivityIndicator size="large" color="black" />
        <Text style={{marginTop:Dimensions.get('window').height*0.04,
        marginLeft:Dimensions.get('window').height*0.17,
        marginBottom:Dimensions.get('window').height*0.04,}}>
        正在從伺服器取得資料
        </Text>
        </View>
      );
    }
  }



  async componentWillMount(){

    try {
      let value = await AsyncStorage.getItem('state');

      if (value !== null){
        this.setState({ stage: value });
      }
    } catch (error) {
      Alert.alert(error);
    }

  }


  content(){

  	if(this.state.stage=='1'){

  		return(
  			<View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >


        <ScrollView tabLabel="進食">


        <View>
        <ScrollView contentContainerStyle={{ flex: 1}}>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、要如何餵食
        </Text>

  			<TouchableOpacity
  			onPress={() => Actions.a11()}>
  			<Text style={{color:'#0534f0',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
  			點擊觀看衛教手冊
  			</Text>
  			</TouchableOpacity>

  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			1. 餵食需要病人意識清楚才能餵食，不可一邊吃飯一邊睡覺　
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			2. 進食需要讓病人坐起來，就像我們平常吃東西一樣
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			3. 每一次只餵食一小口食物，吞下後再餵食下一口
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			4. 一邊肢體無力時，食物放在有力氣那一邊
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			5. 吃東西時一直有咳嗽情形需要停止餵食
  			</Text>

        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.05,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        點擊觀看衛教：
        </Text>




        <TouchableOpacity
        onPress={() => Actions.a11()}>
        <Text style={{color:'#0534f0',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.06,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        復建起立姿勢
        </Text>
        </TouchableOpacity>



        <TouchableOpacity
        onPress={() => Actions.a11()}>
        <Text style={{color:'#0534f0',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.06,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        關節運動及轉位、擺位
        </Text>
        </TouchableOpacity>



        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
  			一、衛教
  			</Text>

  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			1. 病患服的選擇M.L.XL。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			2  一側無力如何穿脫衣服（影片：中風偏癱患者如何穿衣)。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			3. 打點滴如何穿脫衣服。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			4  如何使用尿壺、便盆（手冊： 腦中風病人自我照護p37-38)。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			5. 如何使用便盆椅（影片：便盆椅介紹教學）
  			</Text>



  			<Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
  			二、一側無力如何正確穿脫衣褲
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			1. 安全第一，開始動作前要確定已經坐穩或站穩。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			2. 無論是衣服或是褲子,穿時先由患側穿,脫時則由健側開始。
  			</Text>

  			<Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
  			margin:Dimensions.get('window').height*0.03,}}>
  			(1)穿衣服:(襯衫或外套,參考圖一)
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			A.坐穩。將衣服攤開,領子朝自己,內面朝上,露出袖子接口。將患手放入患側袖子接口,好手將袖子慢慢上拉,至患側手穿出袖口(袖子接口需拉高於手肘)。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			B.好手抓住領子,將衣服由後方繞過肩。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			C.將好手穿入,整理好不順處。
  			</Text>

  			<Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
  			margin:Dimensions.get('window').height*0.03,}}>
  			(2)脫衣服:(即是穿的相反動作)
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			A.好手抓住衣領往後翻,好手袖子脫下(鬆的袖子可用甩的,較緊的袖口可用臀部稍微 壓住再將手抽出)。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			B.衣服由後方繞到患側,衣領拉下患側肩,好手抓住袖口將患側袖子脫下。
  			</Text>


  			<Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
  			margin:Dimensions.get('window').height*0.03,}}>
  			(3)穿褲子:(參考圖二)
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			A.坐姿穩定下(動態坐姿平衡穩定者可坐椅子或床邊,平衡稍差者可坐床上)先將褲子 放在好側邊,好手抓住患腳腳踝將患腳抬上好腳,如翹二郎腿的姿勢。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			B.將褲子套入患腳,褲管上拉,露出腳板。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			C.將患腳放下,好腳套入褲管。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			D.將褲頭拉上高於膝蓋
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			E.站起將褲子完全拉起扣好。(無法穩定站立者可躺下用好腳撐起臀部,左右交互將褲頭拉起)
  			</Text>


  			<Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
  			margin:Dimensions.get('window').height*0.03,}}>
  			(4)脫褲子:(即是穿的相反動作)
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			A.穩定站姿下(或躺下)將褲頭拉下後坐下(坐起)。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.01,}}>
  			B.好腳抬起褲管脫掉。
  			</Text>
  			<Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
  			marginLeft:Dimensions.get('window').height*0.03,
  			marginRight:Dimensions.get('window').height*0.03,
  			marginBottom:Dimensions.get('window').height*0.2,}}>
  			C.好手將患腳抬上好腳,將患腳褲管拉下。
  			</Text>
        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

  			</View>
  		);

  	}else if (this.state.stage=='2') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、如何協助病人進食:餐具選擇止滑（手冊： 腦中風病人自我照護p1-3）
        </Text>
        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2  一側無力如何穿脫衣服（影片：中風偏癱患者如何穿衣)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 打點滴如何穿脫衣服。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4  如何使用尿壺、便盆（手冊： 腦中風病人自我照護p37-38)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 如何使用便盆椅（影片：便盆椅介紹教學）
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、一側無力如何正確穿脫衣褲
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 安全第一，開始動作前要確定已經坐穩或站穩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 無論是衣服或是褲子,穿時先由患側穿,脫時則由健側開始。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (1)穿衣服:(襯衫或外套,參考圖一)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐穩。將衣服攤開,領子朝自己,內面朝上,露出袖子接口。將患手放入患側袖子接口,好手將袖子慢慢上拉,至患側手穿出袖口(袖子接口需拉高於手肘)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好手抓住領子,將衣服由後方繞過肩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將好手穿入,整理好不順處。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (2)脫衣服:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.好手抓住衣領往後翻,好手袖子脫下(鬆的袖子可用甩的,較緊的袖口可用臀部稍微 壓住再將手抽出)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.衣服由後方繞到患側,衣領拉下患側肩,好手抓住袖口將患側袖子脫下。
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (3)穿褲子:(參考圖二)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐姿穩定下(動態坐姿平衡穩定者可坐椅子或床邊,平衡稍差者可坐床上)先將褲子 放在好側邊,好手抓住患腳腳踝將患腳抬上好腳,如翹二郎腿的姿勢。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.將褲子套入患腳,褲管上拉,露出腳板。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將患腳放下,好腳套入褲管。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        D.將褲頭拉上高於膝蓋
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        E.站起將褲子完全拉起扣好。(無法穩定站立者可躺下用好腳撐起臀部,左右交互將褲頭拉起)
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (4)脫褲子:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.穩定站姿下(或躺下)將褲頭拉下後坐下(坐起)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好腳抬起褲管脫掉。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        C.好手將患腳抬上好腳,將患腳褲管拉下。
        </Text>
        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='3') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        進食中或進食後出現嗆到或咳嗽的現象要注意
        </Text>
        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2  一側無力如何穿脫衣服（影片：中風偏癱患者如何穿衣)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 打點滴如何穿脫衣服。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4  如何使用尿壺、便盆（手冊： 腦中風病人自我照護p37-38)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 如何使用便盆椅（影片：便盆椅介紹教學）
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、一側無力如何正確穿脫衣褲
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 安全第一，開始動作前要確定已經坐穩或站穩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 無論是衣服或是褲子,穿時先由患側穿,脫時則由健側開始。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (1)穿衣服:(襯衫或外套,參考圖一)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐穩。將衣服攤開,領子朝自己,內面朝上,露出袖子接口。將患手放入患側袖子接口,好手將袖子慢慢上拉,至患側手穿出袖口(袖子接口需拉高於手肘)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好手抓住領子,將衣服由後方繞過肩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將好手穿入,整理好不順處。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (2)脫衣服:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.好手抓住衣領往後翻,好手袖子脫下(鬆的袖子可用甩的,較緊的袖口可用臀部稍微 壓住再將手抽出)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.衣服由後方繞到患側,衣領拉下患側肩,好手抓住袖口將患側袖子脫下。
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (3)穿褲子:(參考圖二)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐姿穩定下(動態坐姿平衡穩定者可坐椅子或床邊,平衡稍差者可坐床上)先將褲子 放在好側邊,好手抓住患腳腳踝將患腳抬上好腳,如翹二郎腿的姿勢。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.將褲子套入患腳,褲管上拉,露出腳板。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將患腳放下,好腳套入褲管。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        D.將褲頭拉上高於膝蓋
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        E.站起將褲子完全拉起扣好。(無法穩定站立者可躺下用好腳撐起臀部,左右交互將褲頭拉起)
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (4)脫褲子:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.穩定站姿下(或躺下)將褲頭拉下後坐下(坐起)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好腳抬起褲管脫掉。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        C.好手將患腳抬上好腳,將患腳褲管拉下。
        </Text>
        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);


  	}
  	else if (this.state.stage=='4') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、鼻胃管灌食要注意什麼（影片：鼻胃管照護）（手冊： 鼻胃管灌食）
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 將病人搖高坐正(保持坐姿)，再行灌食。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 要灌食前應該先反抽確認前一餐消化的情況，若尚未消化完畢，需延後灌食時間。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每天鼻胃管深度確認。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 維持鼻腔及口腔清潔。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 維持管道清潔與通暢：每次灌食(灌藥)後灌食溫開水(以能將內管壁沖洗乾淨為原則)，避免食物殘渣沾黏管壁，容易藏污納垢或發霉。 　
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、鼻胃管清潔步驟
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輕輕移除舊膠布。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 用沾開水水的棉棒清潔鼻孔。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        3. 取適當的膠布，每天轉15度的角度貼，注意鼻胃管的深度有沒有跑掉。
        </Text>

        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2  一側無力如何穿脫衣服（影片：中風偏癱患者如何穿衣)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 打點滴如何穿脫衣服。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4  如何使用尿壺、便盆（手冊： 腦中風病人自我照護p37-38)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 如何使用便盆椅（影片：便盆椅介紹教學）
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、一側無力如何正確穿脫衣褲
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 安全第一，開始動作前要確定已經坐穩或站穩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 無論是衣服或是褲子,穿時先由患側穿,脫時則由健側開始。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (1)穿衣服:(襯衫或外套,參考圖一)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐穩。將衣服攤開,領子朝自己,內面朝上,露出袖子接口。將患手放入患側袖子接口,好手將袖子慢慢上拉,至患側手穿出袖口(袖子接口需拉高於手肘)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好手抓住領子,將衣服由後方繞過肩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將好手穿入,整理好不順處。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (2)脫衣服:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.好手抓住衣領往後翻,好手袖子脫下(鬆的袖子可用甩的,較緊的袖口可用臀部稍微 壓住再將手抽出)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.衣服由後方繞到患側,衣領拉下患側肩,好手抓住袖口將患側袖子脫下。
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (3)穿褲子:(參考圖二)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐姿穩定下(動態坐姿平衡穩定者可坐椅子或床邊,平衡稍差者可坐床上)先將褲子 放在好側邊,好手抓住患腳腳踝將患腳抬上好腳,如翹二郎腿的姿勢。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.將褲子套入患腳,褲管上拉,露出腳板。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將患腳放下,好腳套入褲管。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        D.將褲頭拉上高於膝蓋
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        E.站起將褲子完全拉起扣好。(無法穩定站立者可躺下用好腳撐起臀部,左右交互將褲頭拉起)
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (4)脫褲子:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.穩定站姿下(或躺下)將褲頭拉下後坐下(坐起)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好腳抬起褲管脫掉。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        C.好手將患腳抬上好腳,將患腳褲管拉下。
        </Text>
        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='5') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、要如何餵食（手冊： 腦中風病人自我照護p1-3）
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 餵食需要病人意識清楚才能餵食，不可一邊吃飯一邊睡覺　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 進食需要讓病人坐起來，就像我們平常吃東西一樣
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每一次只餵食一小口食物，吞下後再餵食下一口
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 一邊肢體無力時，食物放在有力氣那一邊
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 吃東西時一直有咳嗽情形需要停止餵食
        </Text>

        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2  一側無力如何穿脫衣服（影片：中風偏癱患者如何穿衣)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 打點滴如何穿脫衣服。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4  如何使用尿壺、便盆（手冊： 腦中風病人自我照護p37-38)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 如何使用便盆椅（影片：便盆椅介紹教學）
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、一側無力如何正確穿脫衣褲
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 安全第一，開始動作前要確定已經坐穩或站穩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 無論是衣服或是褲子,穿時先由患側穿,脫時則由健側開始。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (1)穿衣服:(襯衫或外套,參考圖一)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐穩。將衣服攤開,領子朝自己,內面朝上,露出袖子接口。將患手放入患側袖子接口,好手將袖子慢慢上拉,至患側手穿出袖口(袖子接口需拉高於手肘)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好手抓住領子,將衣服由後方繞過肩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將好手穿入,整理好不順處。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (2)脫衣服:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.好手抓住衣領往後翻,好手袖子脫下(鬆的袖子可用甩的,較緊的袖口可用臀部稍微 壓住再將手抽出)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.衣服由後方繞到患側,衣領拉下患側肩,好手抓住袖口將患側袖子脫下。
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (3)穿褲子:(參考圖二)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐姿穩定下(動態坐姿平衡穩定者可坐椅子或床邊,平衡稍差者可坐床上)先將褲子 放在好側邊,好手抓住患腳腳踝將患腳抬上好腳,如翹二郎腿的姿勢。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.將褲子套入患腳,褲管上拉,露出腳板。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將患腳放下,好腳套入褲管。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        D.將褲頭拉上高於膝蓋
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        E.站起將褲子完全拉起扣好。(無法穩定站立者可躺下用好腳撐起臀部,左右交互將褲頭拉起)
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (4)脫褲子:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.穩定站姿下(或躺下)將褲頭拉下後坐下(坐起)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好腳抬起褲管脫掉。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        C.好手將患腳抬上好腳,將患腳褲管拉下。
        </Text>
        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='6') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、如何協助病人進食:餐具選擇止滑（手冊： 腦中風病人自我照護p1-3）
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2  一側無力如何穿脫衣服（影片：中風偏癱患者如何穿衣)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 打點滴如何穿脫衣服。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4  如何使用尿壺、便盆（手冊： 腦中風病人自我照護p37-38)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 如何使用便盆椅（影片：便盆椅介紹教學）
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、一側無力如何正確穿脫衣褲
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 安全第一，開始動作前要確定已經坐穩或站穩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 無論是衣服或是褲子,穿時先由患側穿,脫時則由健側開始。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (1)穿衣服:(襯衫或外套,參考圖一)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐穩。將衣服攤開,領子朝自己,內面朝上,露出袖子接口。將患手放入患側袖子接口,好手將袖子慢慢上拉,至患側手穿出袖口(袖子接口需拉高於手肘)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好手抓住領子,將衣服由後方繞過肩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將好手穿入,整理好不順處。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (2)脫衣服:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.好手抓住衣領往後翻,好手袖子脫下(鬆的袖子可用甩的,較緊的袖口可用臀部稍微 壓住再將手抽出)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.衣服由後方繞到患側,衣領拉下患側肩,好手抓住袖口將患側袖子脫下。
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (3)穿褲子:(參考圖二)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐姿穩定下(動態坐姿平衡穩定者可坐椅子或床邊,平衡稍差者可坐床上)先將褲子 放在好側邊,好手抓住患腳腳踝將患腳抬上好腳,如翹二郎腿的姿勢。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.將褲子套入患腳,褲管上拉,露出腳板。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將患腳放下,好腳套入褲管。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        D.將褲頭拉上高於膝蓋
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        E.站起將褲子完全拉起扣好。(無法穩定站立者可躺下用好腳撐起臀部,左右交互將褲頭拉起)
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (4)脫褲子:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.穩定站姿下(或躺下)將褲頭拉下後坐下(坐起)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好腳抬起褲管脫掉。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        C.好手將患腳抬上好腳,將患腳褲管拉下。
        </Text>
        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='7') {
  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        進食中或進食後出現嗆到或咳嗽的現象要注意
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2  一側無力如何穿脫衣服（影片：中風偏癱患者如何穿衣)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 打點滴如何穿脫衣服。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4  如何使用尿壺、便盆（手冊： 腦中風病人自我照護p37-38)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 如何使用便盆椅（影片：便盆椅介紹教學）
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、一側無力如何正確穿脫衣褲
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 安全第一，開始動作前要確定已經坐穩或站穩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 無論是衣服或是褲子,穿時先由患側穿,脫時則由健側開始。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (1)穿衣服:(襯衫或外套,參考圖一)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐穩。將衣服攤開,領子朝自己,內面朝上,露出袖子接口。將患手放入患側袖子接口,好手將袖子慢慢上拉,至患側手穿出袖口(袖子接口需拉高於手肘)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好手抓住領子,將衣服由後方繞過肩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將好手穿入,整理好不順處。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (2)脫衣服:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.好手抓住衣領往後翻,好手袖子脫下(鬆的袖子可用甩的,較緊的袖口可用臀部稍微 壓住再將手抽出)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.衣服由後方繞到患側,衣領拉下患側肩,好手抓住袖口將患側袖子脫下。
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (3)穿褲子:(參考圖二)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐姿穩定下(動態坐姿平衡穩定者可坐椅子或床邊,平衡稍差者可坐床上)先將褲子 放在好側邊,好手抓住患腳腳踝將患腳抬上好腳,如翹二郎腿的姿勢。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.將褲子套入患腳,褲管上拉,露出腳板。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將患腳放下,好腳套入褲管。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        D.將褲頭拉上高於膝蓋
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        E.站起將褲子完全拉起扣好。(無法穩定站立者可躺下用好腳撐起臀部,左右交互將褲頭拉起)
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (4)脫褲子:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.穩定站姿下(或躺下)將褲頭拉下後坐下(坐起)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好腳抬起褲管脫掉。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        C.好手將患腳抬上好腳,將患腳褲管拉下。
        </Text>
        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);
  	}
  	else if (this.state.stage=='8') {
  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、鼻胃管灌食要注意什麼（影片：鼻胃管照護）（手冊： 鼻胃管灌食）
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 將病人搖高坐正(保持坐姿)，再行灌食。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 要灌食前應該先反抽確認前一餐消化的情況，若尚未消化完畢，需延後灌食時間。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每天鼻胃管深度確認。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 維持鼻腔及口腔清潔。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 維持管道清潔與通暢：每次灌食(灌藥)後灌食溫開水(以能將內管壁沖洗乾淨為原則)，避免食物殘渣沾黏管壁，容易藏污納垢或發霉。 　
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、鼻胃管清潔步驟
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輕輕移除舊膠布。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 用沾開水水的棉棒清潔鼻孔。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 取適當的膠布，每天轉15度的角度貼，注意鼻胃管的深度有沒有跑掉。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2  一側無力如何穿脫衣服（影片：中風偏癱患者如何穿衣)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 打點滴如何穿脫衣服。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4  如何使用尿壺、便盆（手冊： 腦中風病人自我照護p37-38)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 如何使用便盆椅（影片：便盆椅介紹教學）
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、一側無力如何正確穿脫衣褲
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 安全第一，開始動作前要確定已經坐穩或站穩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 無論是衣服或是褲子,穿時先由患側穿,脫時則由健側開始。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (1)穿衣服:(襯衫或外套,參考圖一)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐穩。將衣服攤開,領子朝自己,內面朝上,露出袖子接口。將患手放入患側袖子接口,好手將袖子慢慢上拉,至患側手穿出袖口(袖子接口需拉高於手肘)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好手抓住領子,將衣服由後方繞過肩。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將好手穿入,整理好不順處。
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (2)脫衣服:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.好手抓住衣領往後翻,好手袖子脫下(鬆的袖子可用甩的,較緊的袖口可用臀部稍微 壓住再將手抽出)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.衣服由後方繞到患側,衣領拉下患側肩,好手抓住袖口將患側袖子脫下。
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (3)穿褲子:(參考圖二)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.坐姿穩定下(動態坐姿平衡穩定者可坐椅子或床邊,平衡稍差者可坐床上)先將褲子 放在好側邊,好手抓住患腳腳踝將患腳抬上好腳,如翹二郎腿的姿勢。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.將褲子套入患腳,褲管上拉,露出腳板。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        C.將患腳放下,好腳套入褲管。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        D.將褲頭拉上高於膝蓋
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        E.站起將褲子完全拉起扣好。(無法穩定站立者可躺下用好腳撐起臀部,左右交互將褲頭拉起)
        </Text>


        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        (4)脫褲子:(即是穿的相反動作)
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        A.穩定站姿下(或躺下)將褲頭拉下後坐下(坐起)。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        B.好腳抬起褲管脫掉。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        C.好手將患腳抬上好腳,將患腳褲管拉下。
        </Text>
        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);
  	}
  	else if (this.state.stage=='9') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、如何協助病人進食:餐具選擇止滑（手冊： 腦中風病人自我照護p1-3）
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、預防跌倒衛教（手冊： 預防跌倒衛教單張）
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='10') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        進食中或進食後出現嗆到或咳嗽的現象要注意
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、預防跌倒衛教（手冊： 預防跌倒衛教單張）
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='11') {
  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、鼻胃管灌食要注意什麼（影片：鼻胃管照護）（手冊： 鼻胃管灌食）
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 將病人搖高坐正(保持坐姿)，再行灌食。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 要灌食前應該先反抽確認前一餐消化的情況，若尚未消化完畢，需延後灌食時間。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每天鼻胃管深度確認。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 維持鼻腔及口腔清潔。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 維持管道清潔與通暢：每次灌食(灌藥)後灌食溫開水(以能將內管壁沖洗乾淨為原則)，避免食物殘渣沾黏管壁，容易藏污納垢或發霉。 　
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、鼻胃管清潔步驟
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輕輕移除舊膠布。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 用沾開水水的棉棒清潔鼻孔。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 取適當的膠布，每天轉15度的角度貼，注意鼻胃管的深度有沒有跑掉。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、預防跌倒衛教（手冊： 預防跌倒衛教單張）
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);
  	}
  	else if (this.state.stage=='12') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、鼻胃管灌食要注意什麼（影片：鼻胃管照護）（手冊： 鼻胃管灌食）
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 將病人搖高坐正(保持坐姿)，再行灌食。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 要灌食前應該先反抽確認前一餐消化的情況，若尚未消化完畢，需延後灌食時間。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每天鼻胃管深度確認。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 維持鼻腔及口腔清潔。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 維持管道清潔與通暢：每次灌食(灌藥)後灌食溫開水(以能將內管壁沖洗乾淨為原則)，避免食物殘渣沾黏管壁，容易藏污納垢或發霉。 　
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、鼻胃管清潔步驟
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輕輕移除舊膠布。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 用沾開水水的棉棒清潔鼻孔。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 取適當的膠布，每天轉15度的角度貼，注意鼻胃管的深度有沒有跑掉。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、教導翻身技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每二小時正確翻身預防壓瘡（手冊：預防壓瘡護理指導）（影片：臥床避免吸入性肺炎）
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、被動關節活動 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每天三次被動關節活動預防關節攣縮（影片：貞吟老師被動關節活動）、音樂復健運動
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、如何正確擺位 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        （手冊：關節運動及轉位 、擺位p21-23）
        </Text>
        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        四、轉位移位技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        先將下肢彎曲，接著一手扶著膝蓋，一手扶著肩膀，利用下肢重量使個案全身，側翻至面相照顧者，將雙腳同上放下床面，一手扶著骨盆，另一手繞過頸部、扶助肩胛骨的位置，將壓在骨盆的手用力向下壓，順勢將身體帶起來，即可完成床上的翻身坐
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        早期下床的準備（影片：中風的復健之路坐起）
        （床上至輪椅、輪椅至床上（影片：協助病人上下輪椅））
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        五、預防跌倒衛教（手冊：預防跌倒衛教單張）
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        六、正確使用輪椅
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='13') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、鼻胃管灌食要注意什麼（影片：鼻胃管照護）（手冊： 鼻胃管灌食）
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 將病人搖高坐正(保持坐姿)，再行灌食。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 要灌食前應該先反抽確認前一餐消化的情況，若尚未消化完畢，需延後灌食時間。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每天鼻胃管深度確認。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 維持鼻腔及口腔清潔。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 維持管道清潔與通暢：每次灌食(灌藥)後灌食溫開水(以能將內管壁沖洗乾淨為原則)，避免食物殘渣沾黏管壁，容易藏污納垢或發霉。 　
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、鼻胃管清潔步驟
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輕輕移除舊膠布。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 用沾開水水的棉棒清潔鼻孔。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 取適當的膠布，每天轉15度的角度貼，注意鼻胃管的深度有沒有跑掉。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、教導翻身技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每二小時正確翻身預防壓瘡（手冊：預防壓瘡護理指導）（影片：臥床避免吸入性肺炎）
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、被動關節活動 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每天三次被動關節活動預防關節攣縮（影片：貞吟老師被動關節活動）、音樂復健運動
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、如何正確擺位 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        （手冊：關節運動及轉位 、擺位p21-23）
        </Text>
        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        四、轉位移位技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        先將下肢彎曲，接著一手扶著膝蓋，一手扶著肩膀，利用下肢重量使個案全身，側翻至面相照顧者，將雙腳同上放下床面，一手扶著骨盆，另一手繞過頸部、扶助肩胛骨的位置，將壓在骨盆的手用力向下壓，順勢將身體帶起來，即可完成床上的翻身坐
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        早期下床的準備（影片：中風的復健之路坐起）
        （床上至輪椅、輪椅至床上（影片：協助病人上下輪椅））
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        五、預防跌倒衛教（手冊：預防跌倒衛教單張）
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        六、正確使用輪椅
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='14') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、要如何餵食（手冊： 腦中風病人自我照護p1-3）
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 餵食需要病人意識清楚才能餵食，不可一邊吃飯一邊睡覺　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 進食需要讓病人坐起來，就像我們平常吃東西一樣
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每一次只餵食一小口食物，吞下後再餵食下一口
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 一邊肢體無力時，食物放在有力氣那一邊
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 吃東西時一直有咳嗽情形需要停止餵食
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、教導翻身技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每二小時正確翻身預防壓瘡（手冊：預防壓瘡護理指導）（影片：臥床避免吸入性肺炎）
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、被動關節活動 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每天三次被動關節活動預防關節攣縮（影片：貞吟老師被動關節活動）、音樂復健運動
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、如何正確擺位 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        （手冊：關節運動及轉位 、擺位p21-23）
        </Text>
        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        四、轉位移位技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        先將下肢彎曲，接著一手扶著膝蓋，一手扶著肩膀，利用下肢重量使個案全身，側翻至面相照顧者，將雙腳同上放下床面，一手扶著骨盆，另一手繞過頸部、扶助肩胛骨的位置，將壓在骨盆的手用力向下壓，順勢將身體帶起來，即可完成床上的翻身坐
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        早期下床的準備（影片：中風的復健之路坐起）
        （床上至輪椅、輪椅至床上（影片：協助病人上下輪椅））
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        五、預防跌倒衛教（手冊：預防跌倒衛教單張）
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        六、正確使用輪椅
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='15') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、鼻胃管灌食要注意什麼（影片：鼻胃管照護）（手冊： 鼻胃管灌食）
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 將病人搖高坐正(保持坐姿)，再行灌食。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 要灌食前應該先反抽確認前一餐消化的情況，若尚未消化完畢，需延後灌食時間。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每天鼻胃管深度確認。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 維持鼻腔及口腔清潔。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 維持管道清潔與通暢：每次灌食(灌藥)後灌食溫開水(以能將內管壁沖洗乾淨為原則)，避免食物殘渣沾黏管壁，容易藏污納垢或發霉。 　
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、鼻胃管清潔步驟
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輕輕移除舊膠布。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 用沾開水水的棉棒清潔鼻孔。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 取適當的膠布，每天轉15度的角度貼，注意鼻胃管的深度有沒有跑掉。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、教導翻身技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每二小時正確翻身預防壓瘡（手冊：預防壓瘡護理指導）（影片：臥床避免吸入性肺炎）
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、被動關節活動 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每天三次被動關節活動預防關節攣縮（影片：貞吟老師被動關節活動）、音樂復健運動
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、如何正確擺位 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        （手冊：關節運動及轉位 、擺位p21-23）
        </Text>
        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        四、轉位移位技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        先將下肢彎曲，接著一手扶著膝蓋，一手扶著肩膀，利用下肢重量使個案全身，側翻至面相照顧者，將雙腳同上放下床面，一手扶著骨盆，另一手繞過頸部、扶助肩胛骨的位置，將壓在骨盆的手用力向下壓，順勢將身體帶起來，即可完成床上的翻身坐
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        早期下床的準備（影片：中風的復健之路坐起）
        （床上至輪椅、輪椅至床上（影片：協助病人上下輪椅））
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        五、預防跌倒衛教（手冊：預防跌倒衛教單張）
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        六、正確使用輪椅
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='16') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、要如何餵食（手冊： 腦中風病人自我照護p1-3）
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 餵食需要病人意識清楚才能餵食，不可一邊吃飯一邊睡覺　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 進食需要讓病人坐起來，就像我們平常吃東西一樣
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每一次只餵食一小口食物，吞下後再餵食下一口
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 一邊肢體無力時，食物放在有力氣那一邊
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 吃東西時一直有咳嗽情形需要停止餵食
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、教導翻身技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每二小時正確翻身預防壓瘡（手冊：預防壓瘡護理指導）（影片：臥床避免吸入性肺炎）
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、被動關節活動 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每天三次被動關節活動預防關節攣縮（影片：貞吟老師被動關節活動）、音樂復健運動
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、如何正確擺位 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        （手冊：關節運動及轉位 、擺位p21-23）
        </Text>
        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        四、轉位移位技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        先將下肢彎曲，接著一手扶著膝蓋，一手扶著肩膀，利用下肢重量使個案全身，側翻至面相照顧者，將雙腳同上放下床面，一手扶著骨盆，另一手繞過頸部、扶助肩胛骨的位置，將壓在骨盆的手用力向下壓，順勢將身體帶起來，即可完成床上的翻身坐
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        早期下床的準備（影片：中風的復健之路坐起）
        （床上至輪椅、輪椅至床上（影片：協助病人上下輪椅））
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        五、預防跌倒衛教（手冊：預防跌倒衛教單張）
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        六、正確使用輪椅
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='17') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        如何協助病人進食:餐具選擇止滑（手冊：腦中風病人自我照護p1-3）
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、教導翻身技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每二小時正確翻身預防壓瘡（手冊：預防壓瘡護理指導）（影片：臥床避免吸入性肺炎）
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、被動關節活動 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每天三次被動關節活動預防關節攣縮（影片：貞吟老師被動關節活動）、音樂復健運動
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、如何正確擺位 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        （手冊：關節運動及轉位 、擺位p21-23）
        </Text>
        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        四、轉位移位技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        先將下肢彎曲，接著一手扶著膝蓋，一手扶著肩膀，利用下肢重量使個案全身，側翻至面相照顧者，將雙腳同上放下床面，一手扶著骨盆，另一手繞過頸部、扶助肩胛骨的位置，將壓在骨盆的手用力向下壓，順勢將身體帶起來，即可完成床上的翻身坐
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        早期下床的準備（影片：中風的復健之路坐起）
        （床上至輪椅、輪椅至床上（影片：協助病人上下輪椅））
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        五、預防跌倒衛教（手冊：預防跌倒衛教單張）
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        六、正確使用輪椅
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='18') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        進食中或進食後出現嗆到或咳嗽的現象要注意
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、教導翻身技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每二小時正確翻身預防壓瘡（手冊：預防壓瘡護理指導）（影片：臥床避免吸入性肺炎）
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、被動關節活動 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每天三次被動關節活動預防關節攣縮（影片：貞吟老師被動關節活動）、音樂復健運動
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、如何正確擺位 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        （手冊：關節運動及轉位 、擺位p21-23）
        </Text>
        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        四、轉位移位技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        先將下肢彎曲，接著一手扶著膝蓋，一手扶著肩膀，利用下肢重量使個案全身，側翻至面相照顧者，將雙腳同上放下床面，一手扶著骨盆，另一手繞過頸部、扶助肩胛骨的位置，將壓在骨盆的手用力向下壓，順勢將身體帶起來，即可完成床上的翻身坐
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        早期下床的準備（影片：中風的復健之路坐起）
        （床上至輪椅、輪椅至床上（影片：協助病人上下輪椅））
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        五、預防跌倒衛教（手冊：預防跌倒衛教單張）
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2,}}>
        六、正確使用輪椅
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='19') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        進食中或進食後出現嗆到或咳嗽的現象要注意
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='20') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        如何協助病人進食:餐具選擇止滑（手冊：腦中風病人自我照護p1-3）
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='21') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、要如何餵食（手冊： 腦中風病人自我照護p1-3）
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 餵食需要病人意識清楚才能餵食，不可一邊吃飯一邊睡覺　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 進食需要讓病人坐起來，就像我們平常吃東西一樣
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每一次只餵食一小口食物，吞下後再餵食下一口
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 一邊肢體無力時，食物放在有力氣那一邊
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 吃東西時一直有咳嗽情形需要停止餵食
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='22') {

  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、鼻胃管灌食要注意什麼（影片：鼻胃管照護）（手冊： 鼻胃管灌食）
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 將病人搖高坐正(保持坐姿)，再行灌食。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 要灌食前應該先反抽確認前一餐消化的情況，若尚未消化完畢，需延後灌食時間。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每天鼻胃管深度確認。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 維持鼻腔及口腔清潔。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 維持管道清潔與通暢：每次灌食(灌藥)後灌食溫開水(以能將內管壁沖洗乾淨為原則)，避免食物殘渣沾黏管壁，容易藏污納垢或發霉。 　
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、鼻胃管清潔步驟
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輕輕移除舊膠布。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 用沾開水水的棉棒清潔鼻孔。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 取適當的膠布，每天轉15度的角度貼，注意鼻胃管的深度有沒有跑掉。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、轉位移位技巧（影片：復建起立姿勢）(影片：關節運動及轉位、擺位)
        </Text>

        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.03,}}>
        轉位技巧(一) 由輪椅轉位到床邊
        </Text>


        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輪椅上以45°由健側靠近床緣。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照護者注意輪椅煞車固定後，移至病患前方。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 照護者抓住病患褲頭衣物，協助病患站起。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 以病患健側腳為軸心轉為病患背向床且彎腰坐下，照護者注意病患的安全，完成轉位動作。
        </Text>




        <Text style={{color:'#ff8a8a',fontSize:Dimensions.get('window').height*0.03,
        margin:Dimensions.get('window').height*0.03,}}>
        轉位技巧(二) 由床邊移位到輪椅
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患於床上以45°由健側靠近輪椅。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 確定輪椅煞車鎖上，並將腳踏板移開。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 病患以健側手撐著輪椅對側的扶手，並彎腰慢慢站起來，照護者協助攙扶病患維持平衡和安全，讓病患轉身慢慢坐進輪椅中。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 病患以健側手或腳協助患側腳抬高後，將患側腳放在腳踏板上。
        </Text>



        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、預防跌倒衛教(手冊：預防跌倒衛教單張)
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、正確使用輪椅：使用輪椅需綁上安全帶。(影片：協助病人上下輪椅)
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        協助者應注意：
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 儘可能接近病人，若觀察到軀幹向左或向右偏時，需以口語指示或協助病人軀幹回到身體中線位置。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 照顧者站在病人前，一腳前，一腳後的站立，並彎曲膝蓋。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 鼓勵病人站立時盡量利用較有力的腿幫忙支持其體重。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 確定病人較有力的腿穩定站立。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 雙腳打開，穩定重心。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        6. 站穩，腳跟不要離地。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}
  	else if (this.state.stage=='23') {


  		return(
        <View>

        <ScrollableTabView
        initialPage={0}
        tabBarBackgroundColor='rgb(156,200,26)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='black'
        tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
        tabBarTextStyle={{fontSize: 18}}
        style={{borderColor:'white',borderTopWidth:1}}
        renderTabBar={() => <ScrollableTabBar />}
        >

        <ScrollView tabLabel="進食">


        <View style={styles.container}>
        <ScrollView>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、鼻胃管灌食要注意什麼（影片：鼻胃管照護）（手冊： 鼻胃管灌食）
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 將病人搖高坐正(保持坐姿)，再行灌食。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 要灌食前應該先反抽確認前一餐消化的情況，若尚未消化完畢，需延後灌食時間。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 每天鼻胃管深度確認。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 維持鼻腔及口腔清潔。　
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        5. 維持管道清潔與通暢：每次灌食(灌藥)後灌食溫開水(以能將內管壁沖洗乾淨為原則)，避免食物殘渣沾黏管壁，容易藏污納垢或發霉。 　
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、鼻胃管清潔步驟
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 輕輕移除舊膠布。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 用沾開水水的棉棒清潔鼻孔。
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 取適當的膠布，每天轉15度的角度貼，注意鼻胃管的深度有沒有跑掉。
        </Text>


        </ScrollView>
        </View>
        </ScrollView>

        <ScrollView tabLabel="活動及擺位">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、教導翻身技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每二小時正確翻身預防壓瘡（手冊：預防壓瘡護理指導）（影片：臥床避免吸入性肺炎）
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、被動關節活動 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        每天三次被動關節活動預防關節攣縮（影片：貞吟老師被動關節活動）、音樂復健運動
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        三、如何正確擺位 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        （手冊：關節運動及轉位 、擺位p21-23）
        </Text>
        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        四、轉位移位技巧 :
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        先將下肢彎曲，接著一手扶著膝蓋，一手扶著肩膀，利用下肢重量使個案全身，側翻至面相照顧者，將雙腳同上放下床面，一手扶著骨盆，另一手繞過頸部、扶助肩胛骨的位置，將壓在骨盆的手用力向下壓，順勢將身體帶起來，即可完成床上的翻身坐
        </Text>
        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        早期下床的準備（影片：中風的復健之路坐起）
        （床上至輪椅、輪椅至床上（影片：協助病人上下輪椅））
        </Text>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        五、預防跌倒衛教（手冊：預防跌倒衛教單張）
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.2}}>
        六、正確使用輪椅
        </Text>


        </ScrollView>
        </View>
        </ScrollView>



        <ScrollView tabLabel="穿衣">

        <View style={styles.container}>
        <ScrollView>

        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        一、衛教
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 病患服的選擇M.L.XL。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        2. 臥床病人如何穿脫衣服、床上擦澡（手冊： 腦中風病人自我照護p19-21)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        3. 大小便失禁：尿套使用、 更換尿布 （手冊： 更換尿布尿套)。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        4. 導尿管護理：有導尿管者每天早晚會陰部皮膚清潔（手冊： 會陰沖洗）。
        </Text>


        <Text style={{color:'#198ea6',fontSize:Dimensions.get('window').height*0.03,margin:Dimensions.get('window').height*0.03}}>
        二、臥床病人如何穿脫褲
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.01,}}>
        1. 穿衣時，從患側手先穿、身體翻身至健側，再將衣服塞到背部靠近健側處，躺平後再翻身至患側，然後將衣服由健側穿好。
        </Text>

        <Text style={{color:'black',fontSize:Dimensions.get('window').height*0.03,
        marginLeft:Dimensions.get('window').height*0.03,
        marginRight:Dimensions.get('window').height*0.03,
        marginBottom:Dimensions.get('window').height*0.12,}}>
        2. 穿褲子時，由患腳先穿，再穿健側，拉高至靠近屁股處，然後一樣翻身至健側，將褲子拉高穿好，最後翻身至患側將健側褲子拉高穿好。
        </Text>

        </ScrollView>
        </View>

        </ScrollView>

        </ScrollableTabView>

        </View>

  		);

  	}



  }


  render() {

    return (
      <View style={styles.container}>
      <ScrollView>
      {this.content()}
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
  Button:{
    marginTop:Dimensions.get('window').height*0.02,
    backgroundColor:'#f5d2d4',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/12,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
