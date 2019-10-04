import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
  YellowBox,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Icon,CheckBox,Radio,StyleProvider} from 'native-base';
import Modal from "react-native-modal";
import Picker from 'react-native-picker';
import Milk from './Milk';
import Diaper from './Diaper';
import Back from './Back';
import Exer from './Exer';
import Change from './Change';
import CountDown from 'react-native-countdown-component';
import _ from 'lodash';
import {Select, Option} from "react-native-chooser";
import commonstyle from '../themes/variables/commonColor';
import getTheme from '../themes/components';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import { Calendar,LocaleConfig } from 'react-native-calendars';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

LocaleConfig.locales['fr'] = {
  monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
  monthNamesShort: ['1.','2.','3.','4.','5.','6.','7.','8.','9.','10.','11.','12.'],
  dayNames: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
  dayNamesShort: ['日.','一.','二.','三.','四.','五.','六.']
};

LocaleConfig.defaultLocale = 'fr';


export default class Care extends Component {

  constructor() {
    super();
    this.state = {
    milk:true,
    back:true,
    exer:true,
    change:true,
    diaper:true,
    date:'',
    Cdate:'歷史紀錄',
    curTime:'',
    ban:false,
    milkArray:[],
    diaperArray:[],
    backArray:[],
    exerArray:[],
    changeArray:[],
    pickers:'',
    lan:'',
    enabled:true,
    med1:'',
    med2:'',
    food:'',
    milknumber:'',
    waternumber:'',
    waternumbers:'',
    one:true,
    two:false,
    peenumber:'',
    poohnumber:'',
    getvalue:'',
    value:'',
    values:'',
    holdhour:'',
    holdmin:'',
    other:'',
    others:'',
    c:false,
    e:false,
    f:false,
    i:false,
    setlan:'',
    c1:'0',
    en:'0',
    id:'',
    selected:'',
    todaymilk:'',
    todaywater:'',
    todaypee:'',
    todaypoo:'',
    todaychange:'',
    todayback:'',
    todayexer:'',
    m1:0,
    d1:0,
    b1:0,
    c1:0,
    e1:0,

    };
    Picker.hide();

    this.onDayPress = this.onDayPress.bind(this);



    var d = new Date();


    AsyncStorage.getItem('id').then((value) => {

      //選取當日管灌資料
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_select_where_id_date.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value,
      date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()


      })
      }).then((response) => response.json())
      .then((responseJson) => {

      var split = responseJson.split("@_/_tr_")

      for (let data of split) {

      	var slite = data.split("@_/_td_")
      	var time  = slite[0];
      	var 藥物  = slite[1];
      	var 食物  = slite[2];
      	var 牛奶  = slite[3];
      	var 水  = slite[4];
      	var 其他  = slite[5];



      	this.setState(prevState => ({
      		milkArray: [...prevState.milkArray, {
      			'time': time,
      			'med': 藥物,
      			'food': 食物,
      			'milk': 牛奶,
      			'water': 水,
      			'other':其他
      		}]
      	}))

      }

      }).catch((error) => {
      console.log(error)
      });




      //選取今日牛奶水總量

      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        var slite = responseJson.split("@_/_td_")
        var milk  = slite[0];
        var water  = slite[1];


      	this.setState({ todaymilk: milk })
        this.setState({ todaywater: water })

      }).catch((error) => {
      console.log(error)
      });







      //選取當日尿量資料
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/diaper_select_where_id_date.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value,
      date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
      })
      }).then((response) => response.json())
      .then((responseJson) => {

      var split = responseJson.split("@_/_tr_")

      for (let data of split) {

        var slite = data.split("@_/_td_")
        var time  = slite[0];
        var 尿量  = slite[1];
        var 糞便  = slite[2];
        var 糞便形狀  = slite[3];
        var 糞便顏色  = slite[4];



        this.setState(prevState => ({
          diaperArray: [...prevState.diaperArray, {
            'timed': time,
            'diaper': 尿量,
            'pooh': 糞便,
            'shape': 糞便形狀,
            'color': 糞便顏色
          }]
        }))

      }

      }).catch((error) => {
      console.log(error)
      });




      //選取今日尿屎總量

      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/diaper_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        var slite = responseJson.split("@_/_td_")
        var milk  = slite[0];
        var water  = slite[1];


        this.setState({ todaypee: milk })
        this.setState({ todaypoo: water })

      }).catch((error) => {
      console.log(error)
      });





      //選取當日翻身資料
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/turn_over_select_where_id_date.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value,
      date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()


      })
    }).then((response) => response.json())
      .then((responseJson) => {

      var split = responseJson.split("@_/_tr_")

      for (let data of split) {

        var slite = data.split("@_/_td_")
        var time  = slite[0];
        var 次數  = slite[1];



        this.setState(prevState => ({
          changeArray: [...prevState.changeArray, {
            'time': time,
            's': 次數,
          }]
        }))

      }

      }).catch((error) => {
      console.log(error)
      });




      //選取今日翻身總量
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/turn_over_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        this.setState({ todaychange: responseJson })

      }).catch((error) => {
      console.log(error)
      });




      //選取當日拍痰資料
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sign_sputum_select_where_id_date.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value,
      date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()


      })
    }).then((response) => response.json())
      .then((responseJson) => {

      var split = responseJson.split("@_/_tr_")

      for (let data of split) {

        var slite = data.split("@_/_td_")
        var time  = slite[0];
        var 次數  = slite[1];



        this.setState(prevState => ({
          backArray: [...prevState.backArray, {
            'time': time,
            's': 次數,
          }]
        }))

      }

      }).catch((error) => {
      console.log(error)
      });




      //選取今日拍痰總量
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sign_sputum_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        this.setState({ todayback: responseJson })

      }).catch((error) => {
      console.log(error)
      });




      //選取當日關節資料
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sport_select_where_id_date.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value,
      date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()


      })
    }).then((response) => response.json())
      .then((responseJson) => {

      var split = responseJson.split("@_/_tr_")

      for (let data of split) {

        var slite = data.split("@_/_td_")
        var time  = slite[0];
        var 次數  = slite[1];
        var 部位  = slite[2];



        this.setState(prevState => ({
          exerArray: [...prevState.exerArray, {
            'time': time,
            's': 次數,
            'dd': 部位,
          }]
        }))

      }

      }).catch((error) => {
      console.log(error)
      });




      //選取今日關節總量
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sport_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:value
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        this.setState({ todayexer: responseJson })

      }).catch((error) => {
      console.log(error)
      });












    this.setState({id: value});


    })



  }


  state = {
  isDatePickerVisible:false,
  isMilkModalVisible:false,
  isMilksModalVisible:false,
  isDiaperModalVisible:false,
  isBackModalVisible:false,
  isExerModalVisible:false,
  isChangeModalVisible:false,
  isSettingModalVisible:false,
  TotalModalVisible:false,
  jrBackModalVisible:false,
  jrDiaperModalVisible:false,
  jrChangeModalVisible:false,
  jrExerModalVisible:false,
  upModalVisible:false,
  downModalVisible:false,
  LanguageVisible:false,
  calendarVisible:false,

  rate: 1,
  volume: 1,
  muted: false,
  resizeMode: 'contain',
  duration: 0.0,
  currentTime: 0.0,
  controls: false,
  paused: false,
  skin: 'custom',
  ignoreSilentSwitch: null,
  isBuffering: false,



  };



  _showcalendar = () => this.setState({ calendarVisible: true });


  onDayPress(day) {

  this.setState({milkArray: [] });
  this.setState({diaperArray: [] });
  this.setState({changeArray: [] });
  this.setState({backArray: [] });
  this.setState({exerArray: [] });

  var aa = day.dateString
  this.setState({ calendarVisible: false });
  this.setState({ selected: aa });

  //選取當日管灌資料
  fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_select_where_id_date.php', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  id:this.state.id,
  date:aa


  })
  }).then((response) => response.json())
  .then((responseJson) => {

  var split = responseJson.split("@_/_tr_")

  for (let data of split) {

  	var slite = data.split("@_/_td_")
  	var time  = slite[0];
  	var 藥物  = slite[1];
  	var 食物  = slite[2];
  	var 牛奶  = slite[3];
  	var 水  = slite[4];
  	var 其他  = slite[5];



  	this.setState(prevState => ({
  		milkArray: [...prevState.milkArray, {
  			'time': time,
  			'med': 藥物,
  			'food': 食物,
  			'milk': 牛奶,
  			'water': 水,
  			'other':其他
  		}]
  	}))

  }

  }).catch((error) => {
  console.log(error)
  });




  //選取當日尿量資料
  fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/diaper_select_where_id_date.php', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  id:this.state.id,
  date:aa
  })
  }).then((response) => response.json())
  .then((responseJson) => {

  var split = responseJson.split("@_/_tr_")

  for (let data of split) {

    var slite = data.split("@_/_td_")
    var time  = slite[0];
    var 尿量  = slite[1];
    var 糞便  = slite[2];
    var 糞便形狀  = slite[3];
    var 糞便顏色  = slite[4];



    this.setState(prevState => ({
      diaperArray: [...prevState.diaperArray, {
        'timed': time,
        'diaper': 尿量,
        'pooh': 糞便,
        'shape': 糞便形狀,
        'color': 糞便顏色
      }]
    }))

  }

  }).catch((error) => {
  console.log(error)
  });



  //選取當日翻身資料
  fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/turn_over_select_where_id_date.php', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  id:this.state.id,
  date:aa


  })
  }).then((response) => response.json())
  .then((responseJson) => {

  var split = responseJson.split("@_/_tr_")

  for (let data of split) {

    var slite = data.split("@_/_td_")
    var time  = slite[0];
    var 次數  = slite[1];



    this.setState(prevState => ({
      changeArray: [...prevState.changeArray, {
        'time': time,
        's': 次數,
      }]
    }))

  }

  }).catch((error) => {
  console.log(error)
  });





  //選取當日拍痰資料
  fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sign_sputum_select_where_id_date.php', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  id:this.state.id,
  date:aa


  })
}).then((response) => response.json())
  .then((responseJson) => {

  var split = responseJson.split("@_/_tr_")

  for (let data of split) {

    var slite = data.split("@_/_td_")
    var time  = slite[0];
    var 次數  = slite[1];



    this.setState(prevState => ({
      backArray: [...prevState.backArray, {
        'time': time,
        's': 次數,
      }]
    }))

  }

  }).catch((error) => {
  console.log(error)
  });



  //選取當日關節資料
  fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sport_select_where_id_date.php', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  id:this.state.id,
  date:aa


  })
}).then((response) => response.json())
  .then((responseJson) => {

  var split = responseJson.split("@_/_tr_")

  for (let data of split) {

    var slite = data.split("@_/_td_")
    var time  = slite[0];
    var 次數  = slite[1];
    var 部位  = slite[2];



    this.setState(prevState => ({
      exerArray: [...prevState.exerArray, {
        'time': time,
        's': 次數,
        'dd': 部位,
      }]
    }))

  }

  }).catch((error) => {
  console.log(error)
  });









  }




  close(){
    this.setState({ ModalVisible: false });

  }


  aa(){
    Orientation.lockToLandscape();
  }

  bb(){
    Orientation.lockToPortrait();
  }

  test(){
    Alert.alert('測試中')
  }

  _showDateTimePicker = () => this.setState({ isDatePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });

  _handleDatePicked = (date) => {
    if(Platform.OS === 'android'){
      this.setState({ isDatePickerVisible: false });
    }
    var dates = date.toString();
    var splitword = dates.split(' ')
    this.setState({week: splitword[0],mon:splitword[1],date:splitword[2],
    year:splitword[3],Cdate:splitword[3]+'/'+splitword[1]+'/'+splitword[2]})
  };

  componentWillMount() {
    var d = new Date();

    this.setState({
      selected:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+
      d.getDate()
    })


    AsyncStorage.getItem('id').then((value) => {

    fetch('http://120.126.15.121:8088/Brain_stroke_APP/User_check_language.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    id:value

    })
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson=="-1"){
        this.setState({ LanguageVisible: true });
      }else if (responseJson=="0") {
        this.setState({ setlan: '0' });

      }else if (responseJson=="1") {
        this.setState({ setlan: '1' });

      }else if (responseJson=="2") {
        this.setState({ setlan: '2' });

      }else {
        this.setState({ setlan: '3' });
      }

    }).catch((error) => {
    console.log(error)
    });




    })





  }

  c(){
    this.setState({ c: !this.state.c })

    if(this.state.c==false){
      this.setState({ e:false });
      this.setState({ f:false });
      this.setState({ i:false });
    }

  }

  e(){

    this.setState({ e: !this.state.e })

    if(this.state.e==false){
      this.setState({ c:false });
      this.setState({ f:false });
      this.setState({ i:false });
    }

  }

  f(){

    this.setState({ f: !this.state.f })

    if(this.state.f==false){
      this.setState({ e:false });
      this.setState({ c:false });
      this.setState({ i:false });
    }

  }

  i(){

    this.setState({ i: !this.state.i })

    if(this.state.i==false){
      this.setState({ e:false });
      this.setState({ f:false });
      this.setState({ c:false });
    }

  }

  one(){
    this.setState({ one: !this.state.one })

    if(this.state.one==false){
      this.setState({ two:false });
    }
  }

  two(){
    this.setState({ two: !this.state.two })

    if(this.state.two==false){
      this.setState({ one:false });
    }
  }



  Setting(){
      this.setState({ isSettingModalVisible: true });
  }

  Total(){
    this.setState({ TotalModalVisible: true });
  }


  valuetoLan()
  {
      if(this.state.c==true){

        fetch('http://120.126.15.121:8088/Brain_stroke_APP/User_language_set.php', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id:this.state.id,
        language:'0'

        })
        }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({ setlan: '0' });
        }).catch((error) => {
        console.log(error)
        });




      }else if (this.state.e==true) {
        fetch('http://120.126.15.121:8088/Brain_stroke_APP/User_language_set.php', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id:this.state.id,
        language:'1'

        })
        }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({ setlan: '1' });
        }).catch((error) => {
        console.log(error)
        });

      }else if (this.state.f==true) {
        fetch('http://120.126.15.121:8088/Brain_stroke_APP/User_language_set.php', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id:this.state.id,
        language:'2'

        })
        }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({ setlan: '2' });
        }).catch((error) => {
        console.log(error)
        });

      }else if (this.state.i==true) {
        fetch('http://120.126.15.121:8088/Brain_stroke_APP/User_language_set.php', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id:this.state.id,
        language:'3'

        })
        }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({ setlan: '3' });
        }).catch((error) => {
        console.log(error)
        });

      }
  }

  valueToBack(){
    if(this.state.one==true||this.state.two==true){
      if(this.state.one==true){
        this.setState({ getvalue: '0' });
        this.setState({ isSettingModalVisible: false });
      }else{
      this.setState({ getvalue: '1' });
      this.setState({ isSettingModalVisible: false });
      }

    }else {
      Alert.alert('請輸入完整資料')

    }
  }


  _showAreaPicker() {
        let data = [];
        for(var i=2;i<5;i++)
        {
            data.push(i);
        }
          Picker.init({
          pickerData:data,
          pickerTitleText:"請選擇",
          pickerConfirmBtnText:"確認",
          pickerCancelBtnText:"取消",
          selectedValue: [2],
          pickerFontSize:Dimensions.get('window').width*0.07,
          pickerToolBarFontSize: Dimensions.get('window').width*0.05,
          pickerBg: [255, 255, 255,4],
          pickerToolBarBg: [25, 142, 166,1],
          pickerConfirmBtnColor:  [255, 255, 255,4],
          pickerCancelBtnColor:  [255, 255, 255,4],
          pickerTitleColor:[255, 255, 255,4],
          onPickerConfirm: data => {
            this.setState({ pickers: data });
          },
          onPickerCancel: data => {
              Picker.hide();
          },
            });
        Picker.show();
    }

  componentWillUnmount(){
    this.tmilk && clearTimeout(this.tmilk);
    this.tback && clearTimeout(this.tback);
    this.texer && clearTimeout(this.texer);
    this.tchange && clearTimeout(this.tchange);
    this.tdiaper && clearTimeout(this.tdiaper);
    Picker.hide();
  }



  t1(){

    if(this.state.milk==true){

    return(
      <View>
      <Image style = {{
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').height/3.8/2,}}
      source = {require('../../images/t1.png')}/>
      </View>

    );

    }
  }

  s1(){

    if(this.state.milk==true){

      return(
        <View>
        <Image style = {{
          width: Dimensions.get('window').width/2,
          height: Dimensions.get('window').height/3.8/2,}}
        source = {require('../../images/s1.png')}/>
        </View>

      );

    }
  }


  _milkhide = () =>
  this.setState({ isMilkModalVisible: false });

  _totalhide = () =>
  this.setState({ TotalModalVisible: false });

  show(){
    if(this.state.c1=='1'){

      return(
        <View>
        <Video source={require('../../assets/c1.mp4')}
        repeat={false}
        style={styles.backgroundVideo}
        paused={false}/>
        </View>

      );
    }else if (this.state.en=='1') {

      return(
        <View>
        <Video source={require('../../assets/e.mp4')}
        repeat={false}
        style={styles.backgroundVideo}
        paused={false}/>
        </View>

      );


    }


  }




  Milkfetch(){

    this.setState({milkArray:[]});
    this.setState({todaymilk:''});
    this.setState({todaywater:''});
    var d = new Date();

      if(this.state.m1==1){
        //選取當日管灌資料
        fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_select_where_id_date.php', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id:this.state.id,
        date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
        })
        }).then((response) => response.json())
        .then((responseJson) => {

        var split = responseJson.split("@_/_tr_")

        for (let data of split) {

        	var slite = data.split("@_/_td_")
        	var time  = slite[0];
        	var 藥物  = slite[1];
        	var 食物  = slite[2];
        	var 牛奶  = slite[3];
        	var 水  = slite[4];
        	var 其他  = slite[5];



        	this.setState(prevState => ({
        		milkArray: [...prevState.milkArray, {
        			'time': time,
        			'med': 藥物,
        			'food': 食物,
        			'milk': 牛奶,
        			'water': 水,
        			'other':其他
        		}]
        	}))

        }

        }).catch((error) => {
        console.log(error)
        });


        //選取今日牛奶水總量

        fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_select_toay.php', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id:this.state.id
        })
        }).then((response) => response.json())
        .then((responseJson) => {

        	var slite = responseJson.split("@_/_td_")
        	var milk  = slite[0];
        	var water  = slite[1];


        	this.setState({ todaymilk: milk })
        	this.setState({ todaywater: water })

        }).catch((error) => {
        console.log(error)
        });


      }

  }

  Didaperfetch(){

  	this.setState({diaperArray:[]});
    this.setState({todaypee:''});
    this.setState({todaypoo:''});
  	var d = new Date();

  		if(this.state.d1==1){
  		//選取當日尿量資料
  		fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/diaper_select_where_id_date.php', {
  		method: 'POST',
  		headers: {
  		'Accept': 'application/json',
  		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
  		id:this.state.id,
  		date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
  		})
  		}).then((response) => response.json())
  		.then((responseJson) => {

  		var split = responseJson.split("@_/_tr_")

  		for (let data of split) {

  			var slite = data.split("@_/_td_")
  			var time  = slite[0];
  			var 尿量  = slite[1];
  			var 糞便  = slite[2];
  			var 糞便形狀  = slite[3];
  			var 糞便顏色  = slite[4];



  			this.setState(prevState => ({
  				diaperArray: [...prevState.diaperArray, {
  					'timed': time,
  					'diaper': 尿量,
  					'pooh': 糞便,
  					'shape': 糞便形狀,
  					'color': 糞便顏色
  				}]
  			}))

  		}

  		}).catch((error) => {
  		console.log(error)
  		});

      //選取今日尿屎總量

      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/diaper_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:this.state.id
      })
      }).then((response) => response.json())
      .then((responseJson) => {

      	var slite = responseJson.split("@_/_td_")
      	var milk  = slite[0];
      	var water  = slite[1];


      	this.setState({ todaypee: milk })
      	this.setState({ todaypoo: water })

      }).catch((error) => {
      console.log(error)
      });

  		}

  }

  Backfetch(){

  	this.setState({backArray:[]});
    this.setState({todayback:''});
  	var d = new Date();

  		if(this.state.b1==1){
  		//選取當日拍痰資料
  		fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sign_sputum_select_where_id_date.php', {
  		method: 'POST',
  		headers: {
  		'Accept': 'application/json',
  		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
  		id:this.state.id,
  		date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()


  		})
  	}).then((response) => response.json())
  		.then((responseJson) => {

  		var split = responseJson.split("@_/_tr_")

  		for (let data of split) {

  			var slite = data.split("@_/_td_")
  			var time  = slite[0];
  			var 次數  = slite[1];



  			this.setState(prevState => ({
  				backArray: [...prevState.backArray, {
  					'time': time,
  					's': 次數,
  				}]
  			}))

  		}

  		}).catch((error) => {
  		console.log(error)
  		});


      //選取今日拍痰總量
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sign_sputum_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:this.state.id
      })
      }).then((response) => response.json())
      .then((responseJson) => {

      	this.setState({ todayback: responseJson })

      }).catch((error) => {
      console.log(error)
      });


  		}

  }

  Changefetch(){

  	this.setState({changeArray:[]});
    this.setState({todaychange:''});
  	var d = new Date();

  		if(this.state.c1==1){
  		//選取當日翻身資料
  		fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/turn_over_select_where_id_date.php', {
  		method: 'POST',
  		headers: {
  		'Accept': 'application/json',
  		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
  		id:this.state.id,
  		date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()


  		})
  	}).then((response) => response.json())
  		.then((responseJson) => {

  		var split = responseJson.split("@_/_tr_")

  		for (let data of split) {

  			var slite = data.split("@_/_td_")
  			var time  = slite[0];
  			var 次數  = slite[1];



  			this.setState(prevState => ({
  				changeArray: [...prevState.changeArray, {
  					'time': time,
  					's': 次數,
  				}]
  			}))

  		}

  		}).catch((error) => {
  		console.log(error)
  		});

      //選取今日翻身總量
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/turn_over_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:this.state.id
      })
      }).then((response) => response.json())
      .then((responseJson) => {

      	this.setState({ todaychange: responseJson })

      }).catch((error) => {
      console.log(error)
      });


  		}

  }

  Exerfetch(){

  	this.setState({exerArray:[]});
    this.setState({todayexer:''});
  	var d = new Date();

  		if(this.state.e1==1){
  		//選取當日關節資料
  		fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sport_select_where_id_date.php', {
  		method: 'POST',
  		headers: {
  		'Accept': 'application/json',
  		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
  		id:this.state.id,
  		date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()


  		})
  	}).then((response) => response.json())
  		.then((responseJson) => {

  		var split = responseJson.split("@_/_tr_")

  		for (let data of split) {

  			var slite = data.split("@_/_td_")
  			var time  = slite[0];
  			var 次數  = slite[1];
  			var 部位  = slite[2];



  			this.setState(prevState => ({
  				exerArray: [...prevState.exerArray, {
  					'time': time,
  					's': 次數,
  					'dd': 部位,
  				}]
  			}))

  		}

  		}).catch((error) => {
  		console.log(error)
  		});


      //選取今日關節總量
      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sport_select_toay.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:this.state.id
      })
      }).then((response) => response.json())
      .then((responseJson) => {

      	this.setState({ todayexer: responseJson })

      }).catch((error) => {
      console.log(error)
      });


  		}

  }




  _milkshide = () =>
  this.setState({ isMilksModalVisible: false });

  milkconfirm(){
    if(this.state.med1== ""&&this.state.milknumber== ""&&this.state.waternumber== ""&&this.state.other== ""&&this.state.pickers== ""){

      this.setState({ isMilkModalVisible: false });

    }else {


          if(this.state.pickers== ""){
            Alert.alert('請輸入管灌時間')
          }else {

              if(this.state.lan== ""){
                Alert.alert('請輸入提示語言')
              }else{
                if(this.state.med1== ""&&this.state.milknumber== ""&&this.state.waternumber== ""&&this.state.other== ""){
                  Alert.alert('請輸入完整資料')
                }else{

                  if(this.state.milknumber== ""){

                    this.setState({ isMilkModalVisible: false });

                    var d = new Date();


                    fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_Insert.php', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    id:this.state.id,
                    state: this.state.getvalue,
                    date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
                    time:d.getHours()+
                    ":"+d.getMinutes()+
                    ":"+d.getSeconds(),
                    food:'',
                    drug:this.state.med1,
                    milk:this.state.milknumber,
                    water:this.state.waternumber,
                    other:this.state.other,

                    })
                    }).then((response) => response.json())
                    .then((responseJson) => {

                    this.setState({m1:1});
                    this.Milkfetch()

                    }).catch((error) => {
                    console.log(error)
                    });

                    this.setState({ holdhour: d.getHours() });
                    this.setState({ holdmin: d.getMinutes() });
                    this.setState({ med1:'' });
                    this.setState({ milknumber:'' });
                    this.setState({ waternumber: '' });
                    this.setState({ other: '' });


                  }else {

                    this.setState({ isMilkModalVisible: false });

                    var d = new Date();


                    fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_Insert.php', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    id:this.state.id,
                    state: this.state.getvalue,
                    date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
                    time:d.getHours()+
                    ":"+d.getMinutes()+
                    ":"+d.getSeconds(),
                    food:'',
                    drug:this.state.med1,
                    milk:this.state.milknumber,
                    water:this.state.waternumber,
                    other:this.state.other,

                    })
                    }).then((response) => response.json())
                    .then((responseJson) => {

                    this.setState({m1:1});
                    this.Milkfetch()

                    }).catch((error) => {
                    console.log(error)
                    });


                    this.setState({ holdhour: d.getHours() });
                    this.setState({ holdmin: d.getMinutes() });
                    this.setState({ med1:'' });
                    this.setState({ milknumber:'' });
                    this.setState({ waternumber: '' });
                    this.setState({ other: '' });



                    this.setState({ milk: !this.state.milk})

                    var dhour = this.state.pickers
                    var intervals = (dhour*1000)

                      this.tmilk = setTimeout(
                          ()=>{
                            this.setState({ milk: true,c1:'1'}),
                            Alert.alert('可以再次管灌了！');},intervals,
                        );

                  }


                }
              }

          }

          }


  }


  Emilkconfirm(){
    if(this.state.med1== ""&&this.state.milknumber== ""&&this.state.waternumber== ""&&this.state.other== ""&&this.state.pickers== ""){

      this.setState({ isMilkModalVisible: false });

    }else {

            if(this.state.pickers== ""){
              Alert.alert('Need to Enter Time')
            }else {
                  if(this.state.med1== ""&&this.state.milknumber== ""&&this.state.waternumber== ""&&this.state.other== ""){
                    Alert.alert('請輸入完整資料')
                  }else{
                    this.setState({ isMilkModalVisible: false });
                    var d = new Date();


                    fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_Insert.php', {
  									method: 'POST',
  									headers: {
  									'Accept': 'application/json',
  									'Content-Type': 'application/json',
  									},
  									body: JSON.stringify({
  									id:this.state.id,
  									state: this.state.getvalue,
  									date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
  									time:d.getHours()+
  									":"+d.getMinutes()+
  									":"+d.getSeconds(),
  									food:'',
  									drug:this.state.med1,
  									milk:this.state.milknumber,
  									water:this.state.waternumber,
  									other:this.state.other,

  									})
  									}).then((response) => response.json())
  									.then((responseJson) => {

  									this.setState({m1:1});
  									this.Milkfetch()

  									}).catch((error) => {
  									console.log(error)
  									});

                    this.setState({ holdhour: d.getHours() });
                    this.setState({ holdmin: d.getMinutes() });
                    this.setState({ med1:'' });
                    this.setState({ milknumber:'' });
                    this.setState({ waternumber: '' });
                    this.setState({ other: '' });

                    this.setState({ milk: !this.state.milk})



                    var dhour = this.state.pickers
                    var intervals = (dhour*1000)

                      this.tmilk = setTimeout(
                          ()=>{
                            this.setState({ milk: true,en:'1'}),
                            Alert.alert('Can be fed again!');},intervals,
                        );

                  }


            }
          }
  }

  milksconfirm(){

    if(this.state.food== ""&&this.state.med2== ""&&this.state.waternumbers== ""&&this.state.others== ""){

      this.setState({ isMilksModalVisible: false });
    }else {

      this.setState({ isMilksModalVisible: false });
      var d = new Date();


      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/tube_irrigation_Insert.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:this.state.id,
      state: this.state.getvalue,
      date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
      time:d.getHours()+
      ":"+d.getMinutes()+
      ":"+d.getSeconds(),
      food:this.state.food,
      drug:this.state.med2,
      milk:'',
      water:this.state.waternumbers,
      other:this.state.others,

      })
      }).then((response) => response.json())
      .then((responseJson) => {

      this.setState({m1:1});
      this.Milkfetch()

      }).catch((error) => {
      console.log(error)
      });


      this.setState({ holdhour: d.getHours() });
      this.setState({ holdmin: d.getMinutes() });
      this.setState({ food:'' });
      this.setState({ med2:'' });
      this.setState({ waternumbers: '' });
      this.setState({ others: '' });
    }

  }



  milkAlter(){
    if(this.state.milk==true){

      if(this.state.getvalue=="1"){
        this.setState({ isMilksModalVisible: true });
        this.setState({ med1:'' });
        this.setState({ milknumber:'' });
        this.setState({ waternumber: '' });
        this.setState({ pickers: '' });
        this.setState({ other: '' });
        this.setState({ lan: '' });

      }else{
        this.setState({ isMilkModalVisible: true });
        this.setState({ food:'' });
        this.setState({ med2:'' });
        this.setState({ waternumbers: '' });
        this.setState({ others: '' });
      }


    }else{
      Alert.alert('已經管灌過了')
    }
  }

  milkImage() {
    if(this.state.milk==true){
      return (
        <Image
          style = {styles.img2}
          source={ require('../../images/g1.png') }
        />
      );
    }

  }



  seveninput() {
  	if(this.state.holdhour>6&&this.state.holdhour<15
    &&this.state.holdmin<60){
  		return (
  			<Text>
        測試
  			</Text>
  		);
  	}
  }
  sevenoutput(){
    if(this.state.holdhour>6&&this.state.holdhour<15
    &&this.state.holdmin<60){
      return (
        <Text>
        測試
        </Text>
      );
    }
  }

  fifteninput(){
    if(this.state.holdhour>14&&this.state.holdhour<23
    &&this.state.holdmin<60){
      var aa = this.state.med1+this.state.milknumber+this.state.waternumber+this.state.other
      var bb =this.state.food+this.state.med2+this.state.waternumbers+this.state.others
      var tt = parseInt('bb', 10);
      var pp = parseInt('0', 10) + 3;


      if(this.state.one==true){
        return (
          <Text>
          測試
          </Text>
        );
      }else{
        return (
          <Text>
          測試
          </Text>
        );
      }
    }
  }
  fiftenoutput(){
    if(this.state.holdhour>14&&this.state.holdhour<23
    &&this.state.holdmin<60){
      return (
        <Text>
        測試
        </Text>
      );
    }

  }

  twentythreeinput(){
    if(this.state.holdhour>22&&this.state.holdhour<7
    &&this.state.holdmin<60){
      return (
        <Text>
        測試
        </Text>
      );
    }
  }
  twentythreeoutput(){
    if(this.state.holdhour>22&&this.state.holdhour<7
    &&this.state.holdmin<60){
      return (
        <Text>
        測試
        </Text>
      );
    }
  }


  diaperconfirm(){
    if(this.state.peenumber== ""&&this.state.poohnumber== ""&&this.state.value== ""&&this.state.values== ""){
    this.setState({ isDiaperModalVisible: false });
    }else {
      this.setState({ isDiaperModalVisible: false });
      var e = new Date();

      fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/diaper_Insert.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      id:this.state.id,
      date:e.getFullYear()+'-'+(e.getMonth()+1)+'-'+e.getDate(),
      time:e.getHours()+
      ":"+e.getMinutes()+
      ":"+e.getSeconds(),
      diaper:this.state.peenumber,
      pooh:this.state.poohnumber,
      shape:this.state.value,
      color:this.state.values,

      })
      }).then((response) => response.json())
      .then((responseJson) => {

      this.setState({d1:1});
      this.Didaperfetch()

      }).catch((error) => {
      console.log(error)
      });

      this.setState({ holdhour: e.getHours() });
      this.setState({ holdmin: e.getMinutes() });
      this.setState({ peenumber: '' });
      this.setState({ poohnumber: '' });
      this.setState({ value: '' });
      this.setState({ values: '' });
      this.tdiaper = setTimeout(
          ()=>{
            this.setState({ diaper: true}),
            Alert.alert('可以換尿布了！');},7200000,
        )
    }
  }


  diaperagain(){
    this.tdiaper && clearTimeout(this.tdiaper);
    this.tdiaper = setTimeout(
    		()=>{
    			this.setState({ diaper: true,jrDiaperModalVisible: false});},0,
    	)
  }


  _diaperhide = () =>
  this.setState({ isDiaperModalVisible: false });

  diaperAlter(){
    if(this.state.milk==true){
      this.tdiaper && clearTimeout(this.tdiaper);
      if(this.state.diaper==true){
        this.tdiaper && clearTimeout(this.tdiaper);
      this.setState({ isDiaperModalVisible: true });
      this.setState({ peenumber:'' });
      this.setState({ poohnumber:'' });
      this.setState({ value:'' });
      this.setState({ values:'' });
      }else{
        this.tdiaper && clearTimeout(this.tdiaper);
        this.setState({ jrDiaperModalVisible: true });
      }
    }else{
      Alert.alert('管灌中禁止其他動作')
    }
  }

  diaperImage() {
    if(this.state.milk==true){

      if(this.state.diaper==true){
        return (
          <Image
            style = {styles.img2}
            source={ require('../../images/g6.png') }
          />
        );
      }else{
        return (
          <Image
            style = {styles.img2}
            source={ require('../../images/g6.png') }
          />
        );
      }
    }
  }


  countdownback() {
    if(this.state.milk==true){
      if(this.state.back==false){
        return (
          <View>
          <View style={{alignItems: 'center',justifyContent:'center',margin:10}}>
          <Text style={{fontSize: 18,color:'black'}}>
          拍痰結束倒數：
          </Text>
          </View>


          <CountDown
            until={7200}
            size={20}
            digitBgColor='#198ea6'
          />
          </View>
        );
      }
    }
  }

  countdownexer() {
    if(this.state.milk==true){
      if(this.state.exer==false){
        return (
          <View>
          <View style={{alignItems: 'center',justifyContent:'center',margin:10}}>
          <Text style={{fontSize: 18,color:'black'}}>
          關節運動結束倒數：
          </Text>
          </View>


          <CountDown
            until={7200}
            size={20}
            digitBgColor='#198ea6'
          />
          </View>
        );
      }
    }
  }

  countdownchange() {
    if(this.state.milk==true){
      if(this.state.change==false){
        return (
          <View>
          <View style={{alignItems: 'center',justifyContent:'center',margin:10}}>
          <Text style={{fontSize: 18,color:'black'}}>
          翻身結束倒數：
          </Text>
          </View>


          <CountDown
            until={7200}
            size={20}
            digitBgColor='#198ea6'
          />
          </View>
        );
      }
    }
  }

  countdowndiaper() {
    if(this.state.milk==true){
      if(this.state.diaper==false){
        return (
          <View>
          <View style={{alignItems: 'center',justifyContent:'center',margin:10}}>
          <Text style={{fontSize: 18,color:'black'}}>
          換尿布結束倒數：
          </Text>
          </View>


          <CountDown
            until={7200}
            size={20}
            digitBgColor='#198ea6'
          />
          </View>
        );
      }
    }
  }

  onSelectTime(value, label) {
    this.setState({pickers : value});
  }

  onSelectlan(value, label) {
    this.setState({lan : value});
  }


  onSelect(value, label) {
    this.setState({value : value});
  }

  onSelect1(value, label) {
    this.setState({values : value});
  }

todayhistory(){
  Alert.alert('測試中')
}

  banImage() {
    if(this.state.milk==false){

      if(this.state.getvalue=="1"){
        return (
          <View>

          <Image
            style = {styles.banImages}
            source={ require('../../images/ban.png') }
          />
          <View style={{alignItems: 'center',justifyContent:'center',marginBottom:10}}>
          <Text style={{fontSize: Dimensions.get('window').height*0.05,
        color:'black'}}>
          管灌結束倒數：
          </Text>
          </View>

          <CountDown
            until={7200}
            size={28}
            digitBgColor='#198ea6'
          />

          </View>
        );
      }else{
        var floor = Math.floor;
        var pickup = this.state.pickers*3600
        var x = floor(pickup);

          return (
            <View>

            <Image
              style = {styles.banImages}
              source={ require('../../images/ban.png') }
            />
            <View style={{alignItems: 'center',justifyContent:'center',marginBottom:10}}>
            <Text style={{fontSize: Dimensions.get('window').height*0.05,
          color:'black'}}>
            管灌結束倒數：
            </Text>
            </View>

            <CountDown
              until={x}
              size={28}
              digitBgColor='#198ea6'
            />

            </View>
          );


      }
    }
  }

  _jrbackhide = () =>
  this.setState({ jrBackModalVisible: false });

  _jrDiaperhide = () =>
  this.setState({ jrDiaperModalVisible: false });

  _jrChangehide = () =>
  this.setState({ jrChangeModalVisible: false });

  _jrExerhide = () =>
  this.setState({ jrExerModalVisible: false });


  _backhide = () =>
  this.setState({ isBackModalVisible: false });

  backconfirm(){

    var d = new Date();

    fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sign_sputum_Insert.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    id:this.state.id,
    date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
    time:d.getHours()+
    ":"+d.getMinutes()+
    ":"+d.getSeconds(),
    s: "一次",

    })
    }).then((response) => response.json())
    .then((responseJson) => {

      this.setState({b1:1});
      this.Backfetch()

    }).catch((error) => {
    console.log(error)
    });



    this.setState({ isBackModalVisible: false });
    this.tchange = setTimeout(
        ()=>{
          this.setState({ back: true}),
          Alert.alert('可以拍痰了！');},7200000,
      )
  }

  backagain(){
    this.tback && clearTimeout(this.tback);
    this.tback = setTimeout(
    		()=>{
    			this.setState({ back: true,jrBackModalVisible: false});},0,
    	)
  }

  backAlter(time){
    if(this.state.milk==true){
      this.tback && clearTimeout(this.tback);
      if(this.state.back==true){
        this.tback && clearTimeout(this.tback);
      this.setState({ isBackModalVisible: true });
      }else{
        this.tback && clearTimeout(this.tback);
        this.setState({ jrBackModalVisible: true });
      }
    }else{
      Alert.alert('管灌中禁止其他動作')
    }
  }


  backImage() {
    if(this.state.milk==true){


      if(this.state.back==true){
        return (
          <Image
            style = {styles.img2}
            source={ require('../../images/g2.png') }
          />
        );
      }else{
        return (
          <Image
            style = {styles.img2}
            source={ require('../../images/r2.png') }
          />
        );
      }
    }
  }



  exeragain(){
  	this.texer && clearTimeout(this.texer);
  	this.texer = setTimeout(
  			()=>{
  				this.setState({ exer: true,jrExerModalVisible: false});},0,
  		)
  }


  _exerhide = () =>
  this.setState({ isExerModalVisible: false });

  upconfirm(){
    Actions.upp();
    this.setState({ isExerModalVisible: false });
  }


  downconfirm(){
    Actions.downn();
    this.setState({ isExerModalVisible: false });
  }


  exerconfirm(){

    var d = new Date();

    fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sport_Insert.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    id:this.state.id,
    date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
    time:d.getHours()+
    ":"+d.getMinutes()+
    ":"+d.getSeconds(),
    s: "一次",
    sport_part:"上肢"

    })
    }).then((response) => response.json())
    .then((responseJson) => {

      this.setState({e1:1});
      this.Exerfetch()

    }).catch((error) => {
    console.log(error)
    });

    this.setState({ isExerModalVisible: false });
    this.tchange = setTimeout(
        ()=>{
          this.setState({ exer: true}),
          Alert.alert('可以做關節運動了！');},7200000,
      )

  }

  exerconfirm1(){

    var d = new Date();

    fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/sport_Insert.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    id:this.state.id,
    date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
    time:d.getHours()+
    ":"+d.getMinutes()+
    ":"+d.getSeconds(),
    s: "一次",
    sport_part:"下肢"

    })
    }).then((response) => response.json())
    .then((responseJson) => {

    this.setState({e1:1});
    this.Exerfetch()

    }).catch((error) => {
    console.log(error)
    });


    this.setState({ isExerModalVisible: false });
    this.tchange = setTimeout(
        ()=>{
          this.setState({ exer: true}),
          Alert.alert('可以做關節運動了！');},7200000,
      )
  }


  exerAlter(time){
    if(this.state.milk==true){
      this.texer && clearTimeout(this.texer);
      if(this.state.exer==true){
        this.texer && clearTimeout(this.texer);
      this.setState({ isExerModalVisible: true });
      }else{
        this.texer && clearTimeout(this.texer);
        this.setState({ jrExerModalVisible: true });
      }
    }else{
      Alert.alert('管灌中禁止其他動作')
    }
  }

  exerImage() {
    if(this.state.milk==true){

      if(this.state.exer==true){
        return (
          <Image
            style = {styles.img2}
            source={ require('../../images/g4.png') }
          />
        );
      }else{
        return (
          <Image
            style = {styles.img2}
            source={ require('../../images/r4.png') }
          />
        );
      }
    }
  }


  _changehide = () =>
  this.setState({ isChangeModalVisible: false });

  changeagain(){
  	this.tchange && clearTimeout(this.tchange);
  	this.tchange = setTimeout(
  			()=>{
  				this.setState({ change: true,jrChangeModalVisible: false});},0,
  		)
  }

  changeconfirm(){

    var d = new Date();


    fetch('http://120.126.15.121:8088/Brain_stroke_APP/care_helper/turn_over_Insert.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    id:this.state.id,
    date:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(),
    time:d.getHours()+
    ":"+d.getMinutes()+
    ":"+d.getSeconds(),
    s: "一次",

    })
    }).then((response) => response.json())
    .then((responseJson) => {

      this.setState({c1:1});
      this.Changefetch()

    }).catch((error) => {
    console.log(error)
    });




    this.setState({ isChangeModalVisible: false });

    this.tchange = setTimeout(
        ()=>{
          this.setState({ change: true}),
          Alert.alert('可以翻身了！');},7200000,
      )
  }

  changeAlter(time){
      if(this.state.milk==true){
        this.tchange && clearTimeout(this.tchange);
        if(this.state.change==true){
          this.tchange && clearTimeout(this.tchange);
        this.setState({ isChangeModalVisible: true });
        }else{
          this.tchange && clearTimeout(this.tchange);
        this.setState({ jrChangeModalVisible: true });
        }
      }else{
        Alert.alert('管灌中禁止其他動作')
      }
    }


  changeImage() {
    if(this.state.milk==true){

      if(this.state.change==true){
        return (
          <Image
            style = {styles.img2}
            source={ require('../../images/g5.png') }
          />
        );
      }else{
        return (
          <Image
            style = {styles.img2}
            source={ require('../../images/r5.png') }
          />
        );
      }
    }
  }



  content(){

    let milks = this.state.milkArray.map((val, key)=>{
        return <Milk key={key} keyval={key} val={val}
                />
    });

    let diapers = this.state.diaperArray.map((val, key)=>{
        return <Diaper key={key} keyval={key} val={val}
                />
    });

    let backs = this.state.backArray.map((val, key)=>{
        return <Back key={key} keyval={key} val={val}
                />
    });

    let exers = this.state.exerArray.map((val, key)=>{
        return <Exer key={key} keyval={key} val={val}
                />
    });
    let changes = this.state.changeArray.map((val, key)=>{
        return <Change key={key} keyval={key} val={val}
                />
    });



    return(
      <View style={styles.container}>



      <Modal isVisible={this.state.isSettingModalVisible}>
        <View style={styles.todaymodal}>
          <View style={styles.todaymodalUp}>
            <View style={styles.flexCenter}>
              <Text style={styles.titleText}>
              請根據病患之狀
              </Text>
              <Text style={styles.titleText}>
              況填寫以下內容
              </Text>
            </View>
            <View style={styles.greenBorder}/>
            <View style={styles.flexCenter2}>
              <View style={styles.flexRow}>
                <StyleProvider style={getTheme(commonstyle)}>
                  <CheckBox checked={this.state.one}
                    onPress={() => this.one()}
                    style={{marginRight:Dimensions.get('window').height*0.05}}
                    />
                </StyleProvider>
                <Text style={styles.titleText}>
                  鼻胃管灌食
                </Text>
              </View>
              <View style={styles.flexCenter4}>
                <View style={styles.flexRow}>
                  <StyleProvider style={getTheme(commonstyle)}>
                    <CheckBox checked={this.state.two}
                      onPress={() => this.two()}
                      style={{marginRight:Dimensions.get('window').height*0.05}}
                      />
                  </StyleProvider>
                  <Text style={styles.titleText}>
                  由口進食
                    </Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.owlImg}
              source={require('../../images/orangeOwl2.png')}
            />
          </View>

          <View style={styles.todaymodalDown}>
            <TouchableOpacity onPress={() => {this.valueToBack()}} style={styles.greenBtn}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: Dimensions.get('window').width * 0.075,
              }}>
              儲存
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



      <Modal isVisible={this.state.isMilkModalVisible}>
        <View style={styles.todaymodal}>
          <View style={styles.todaymodalUp}>
            <View style={styles.flexCenter}>
              <Text style={styles.titleText}>
              管灌設定
              </Text>
            </View>

            <View style={styles.greenBorder}/>

            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>時間</Text>
              </View>
              <View style={styles.flexRight}>
                <Select
                  onSelect = {this.onSelectTime.bind(this)}
                  defaultText  = {this.state.pickers}
                  textStyle = {styles.leftTextNoSpace}
                  style={styles.inputStyle}>
                    <Option
                    style={{borderColor:'black',borderBottomWidth:2}}
                    styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                    value = "2">2小時</Option>
                    <Option
                    style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                    value = "3">3小時</Option>
                    <Option
                    style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                    value = "4">4小時</Option>
                </Select>
                <Text style={styles.leftTextNoSpace}>小時</Text>
              </View>
            </View>
            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>語言</Text>
              </View>
              <View style={styles.flexRight}>
                <Select
                  onSelect = {this.onSelectlan.bind(this)}
                  defaultText  = {this.state.lan}
                  textStyle = {styles.leftTextNoSpace}
                  style={styles.inputStyle}>
                    <Option
                    style={{borderColor:'black',borderBottomWidth:2}}
                    styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                    value = "中文">中文</Option>
                    <Option
                    style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                    value = "台語">台語</Option>
                    <Option
                    style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                    value = "客語">客語</Option>
                </Select>
                <Text style={styles.leftTextNoSpace}>提示</Text>
              </View>
            </View>
            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>藥物</Text>
              </View>
              <View style={styles.flexRight}>
                <TextInput
                  returnKeyType="done"
                  onChangeText={(text)=>this.setState({med1:text})}
                  value={this.state.med1}
                  placeholderTextColor="white"
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  maxLength={4}
                />
                <Text style={styles.leftTextNoSpace}>毫升</Text>
              </View>
            </View>
            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>牛奶</Text>
              </View>
              <View style={styles.flexRight}>
                <TextInput
                  returnKeyType="done"
                  onChangeText={(text)=>this.setState({milknumber:text})}
                  value={this.state.milknumber}
                  placeholderTextColor="white"
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  maxLength={4}
                />
                <Text style={styles.leftTextNoSpace}>毫升</Text>
              </View>
            </View>
            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>水</Text>
              </View>
              <View style={styles.flexRight}>
                <TextInput
                  returnKeyType="done"
                  onChangeText={(text)=>this.setState({waternumber:text})}
                  value={this.state.waternumber}
                  placeholderTextColor="white"
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  maxLength={4}
                />
                <Text style={styles.leftTextNoSpace}>毫升</Text>
              </View>
            </View>
            <View style={styles.flexRowBig}>
              <View style={styles.flexLeft}>
                <Text style={styles.leftText}>其他</Text>
              </View>
              <View style={styles.flexRight}>
                <TextInput
                  returnKeyType="done"
                  onChangeText={(text)=>this.setState({other:text})}
                  value={this.state.other}
                  placeholderTextColor="white"
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  maxLength={4}
                />
                <Text style={styles.leftTextNoSpace}>毫升</Text>
              </View>
            </View>
          </View>
          <View style={styles.todaymodalDown}>
            <TouchableOpacity
              style={styles.greenBtn2}
              onPress={this._milkhide}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: Dimensions.get('window').width * 0.075,
                }}>
                關閉
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.greenBtn}
              onPress={() => this.milkconfirm()}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: Dimensions.get('window').width * 0.075,
                }}>
                儲存
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <Modal isVisible={this.state.isMilksModalVisible}>
        <View style={styles.todaymodal}>
          <View style={styles.todaymodalUp}>
              <View style={styles.flexCenter}>
                <Text style={styles.titleText}>
                飲食設定
                </Text>
              </View>

              <View style={styles.greenBorder}/>

              <View style={styles.flexRowBigs}>
                <View style={styles.flexLeft}>
                  <Text style={styles.leftText}>食物</Text>
                </View>
                <View style={styles.flexRight}>
                  <TextInput
                    returnKeyType="done"
                    onChangeText={(text)=>this.setState({food:text})}
                    value={this.state.food}
                    placeholderTextColor="white"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    maxLength={4}
                  />
                  <Text style={styles.leftTextNoSpace}>公克</Text>
                </View>
              </View>
              <View style={styles.flexRowBigs}>
                <View style={styles.flexLeft}>
                  <Text style={styles.leftText}>藥物</Text>
                </View>
                <View style={styles.flexRight}>
                  <TextInput
                    returnKeyType="done"
                    onChangeText={(text)=>this.setState({med2:text})}
                    value={this.state.med2}
                    placeholderTextColor="white"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    maxLength={4}
                  />
                  <Text style={styles.leftTextNoSpace}>公克</Text>
                </View>
              </View>
              <View style={styles.flexRowBigs}>
                <View style={styles.flexLeft}>
                  <Text style={styles.leftText}>水</Text>
                </View>
                <View style={styles.flexRight}>
                  <TextInput
                    returnKeyType="done"
                    onChangeText={(text)=>this.setState({waternumbers:text})}
                    value={this.state.waternumbers}
                    placeholderTextColor="white"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    maxLength={4}
                  />
                  <Text style={styles.leftTextNoSpace}>毫升</Text>
                </View>
              </View>
              <View style={styles.flexRowBigs}>
                <View style={styles.flexLeft}>
                  <Text style={styles.leftText}>其他</Text>
                </View>
                <View style={styles.flexRight}>
                  <TextInput
                    returnKeyType="done"
                    onChangeText={(text)=>this.setState({others:text})}
                    value={this.state.others}
                    placeholderTextColor="white"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    maxLength={4}
                  />
                  <Text style={styles.leftTextNoSpace}>毫升</Text>
                </View>
              </View>
          </View>
          <View style={styles.todaymodalDown}>
            <TouchableOpacity
              style={styles.greenBtn2}
              onPress={this._milkshide}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: Dimensions.get('window').width * 0.075,
                }}>
                關閉
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.greenBtn}
              onPress={() => this.milksconfirm()}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: Dimensions.get('window').width * 0.075,
                }}>
                儲存
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



            <ScrollableTabView
            initialPage={0}
            tabBarBackgroundColor='rgb(156,200,26)'
            tabBarActiveTextColor='white'
            activeTabStyle={{ backgroundColor:'red'}}
            tabBarInactiveTextColor='black'
            tabBarUnderlineStyle={{backgroundColor:'rgb(156,200,26)'}}
            tabBarTextStyle={{fontSize: 18}}
            style={{borderColor:'white',borderTopWidth:1}}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <ScrollView tabLabel="照護狀況"
            scrollEnabled={this.state.enabled}
              >

            <View style={styles.container}>


            <View style={{flexDirection:'row'}}>

            <View>
            <TouchableOpacity
            style={{borderColor:'grey',
                    borderRightWidth:1,
                    borderBottomWidth:1,
                    width: Dimensions.get('window').width/2,}}
            onPress={() => {this.Total()}}>
            <View>
            {this.t1()}
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            style={{borderColor:'grey',
                    borderRightWidth:1,
                    borderBottomWidth:1,
                    width: Dimensions.get('window').width/2,}}
            onPress={() => {this.Setting()}}>
            <View>
            {this.s1()}
            </View>
            </TouchableOpacity>
            </View>


            <TouchableOpacity
            style={{borderColor:'grey',
                    borderLeftWidth:1,
                    borderBottomWidth:1,}}
            onPress={() => {this.milkAlter()}}
          >
            {this.milkImage()}
            </TouchableOpacity>



            </View>






            <View>
            {this.show()}
            </View>




              <View style={styles.imagespos}>

              <TouchableOpacity
              style={{borderColor:'grey',
                      borderRightWidth:0.5,
                      borderBottomWidth:1,}}
              onPress={() => {this.diaperAlter()}}
            >
              {this.diaperImage()}
              </TouchableOpacity>


              <TouchableOpacity
              style={{borderColor:'grey',
                      borderLeftWidth:0.5,
                      borderBottomWidth:1,}}
              onPress={() => {this.backAlter()}}
            >
              {this.backImage()}
              </TouchableOpacity>
              </View>

              <View style={styles.imagespos}>
              <TouchableOpacity
              style={{borderColor:'grey',
                      borderRightWidth:0.5,
                      borderBottomWidth:1,}}
              onPress={() => {this.changeAlter()}}
              >
              {this.changeImage()}
              </TouchableOpacity>

              <Modal isVisible={this.state.isDiaperModalVisible}>
                <View style={styles.todaymodal}>
                  <View style={styles.todaymodalUp}>
                    <View style={styles.flexCenter}>
                      <Text style={styles.titleText}>
                      排泄物設定
                      </Text>
                    </View>
                    <View style={styles.greenBorder}/>
                    <View style={styles.flexRowBigs}>
                      <View style={styles.flexLeft}>
                        <Text style={styles.leftText}>尿量</Text>
                      </View>
                      <View style={styles.flexRight}>
                        <TextInput
                          returnKeyType="done"
                          onChangeText={(text)=>this.setState({peenumber:text})}
                          value={this.state.peenumber}
                          placeholderTextColor="white"
                          style={styles.inputStyle}
                          keyboardType="numeric"
                          maxLength={4}
                        />
                        <Text style={styles.leftTextNoSpace}>公克</Text>
                      </View>
                    </View>
                    <View style={styles.flexRowBigs}>
                      <View style={styles.flexLeft}>
                        <Text style={styles.leftText}>糞便</Text>
                      </View>
                      <View style={styles.flexRight}>
                        <TextInput
                          returnKeyType="done"
                          onChangeText={(text)=>this.setState({poohnumber:text})}
                          value={this.state.poohnumber}
                          placeholderTextColor="white"
                          style={styles.inputStyle}
                          keyboardType="numeric"
                          maxLength={4}
                        />
                        <Text style={styles.leftTextNoSpace}>公克</Text>
                      </View>
                    </View>
                    <View style={styles.flexRowBigs}>
                      <View style={styles.flexLeft}>
                        <Text style={styles.leftText}>糞便</Text>
                        <Text style={styles.leftText}>形狀</Text>
                      </View>
                      <View style={styles.flexRight}>
                        <Select
                          onSelect = {this.onSelect.bind(this)}
                          defaultText  = {this.state.value}
                          textStyle = {styles.leftTextNoSpace}
                          style={styles.inputStyle}>
                            <Option
                            style={{borderColor:'black',borderBottomWidth:2}}
                            styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                            value = "糊的">糊的</Option>
                            <Option
                            style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                            value = "稀的">稀的</Option>
                            <Option
                            style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                            value = "水的">水的</Option>
                            <Option
                            style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                            value = "成型的">成型的</Option>
                        </Select>
                      </View>
                    </View>
                    <View style={styles.flexRowBigs}>
                      <View style={styles.flexLeft}>
                        <Text style={styles.leftText}>糞便</Text>
                        <Text style={styles.leftText}>顏色</Text>
                      </View>
                      <View style={styles.flexRight}>
                        <Select
                          onSelect = {this.onSelect1.bind(this)}
                          defaultText  = {this.state.values}
                          textStyle = {styles.leftTextNoSpace}
                          style={styles.inputStyle}>
                          <Option
                          style={{borderColor:'black',borderBottomWidth:2}}
                          styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                          value = "黃色">黃色</Option>
                          <Option
                          style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                          value = "紅色">紅色</Option>
                          <Option
                          style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                          value = "黑色">黑色</Option>
                          <Option
                          style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                          value = "棕色">棕色</Option>
                          <Option
                          style={{borderColor:'black',borderBottomWidth:2}} styleText={{fontSize:Dimensions.get('window').height/28,color:'black'}}
                          value = "墨綠色">墨綠色</Option>
                        </Select>
                      </View>
                    </View>
                  </View>
                  <View style={styles.todaymodalDown}>
                    <TouchableOpacity
                        style={styles.greenBtn2}
                        onPress={this._diaperhide}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: Dimensions.get('window').width * 0.075,
                          }}>
                          關閉
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.greenBtn}
                        onPress={() => this.diaperconfirm()}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: Dimensions.get('window').width * 0.075,
                          }}>
                          儲存
                        </Text>
                      </TouchableOpacity>
                  </View>
                </View>
              </Modal>


              <Modal isVisible={this.state.isBackModalVisible}>
                <View style={styles.todaymodal}>
                  <View style={styles.todaymodalUp}>
                    <View style={styles.flexCenter2}>
                      <Text style={styles.titleText}>
                      已經拍痰了嗎？
                      </Text>
                    </View>

                    <View style={styles.flexCenter2}>
                      <Image
                          style={styles.owlImgGreen}
                          source={require('../../images/greenOwlYes.png')}
                        />
                    </View>
                  </View>
                  <View style={styles.todaymodalDown}>
                    <TouchableOpacity
                        style={styles.greenBtn2}
                        onPress={this._backhide}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: Dimensions.get('window').width * 0.075,
                          }}>
                          否
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.greenBtn}
                        onPress={() => this.backconfirm()}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: Dimensions.get('window').width * 0.075,
                          }}>
                          是
                        </Text>
                      </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              <Modal isVisible={this.state.isChangeModalVisible}>
                <View style={styles.todaymodal}>
                  <View style={styles.todaymodalUp}>
                    <View style={styles.flexCenter2}>
                      <Text style={styles.titleText}>
                      已經翻身了嗎？
                      </Text>
                    </View>

                    <View style={styles.flexCenter2}>
                      <Image
                          style={styles.owlImgGreen}
                          source={require('../../images/greenOwlYes.png')}
                        />
                    </View>
                  </View>
                  <View style={styles.todaymodalDown}>
                    <TouchableOpacity
                        style={styles.greenBtn2}
                        onPress={this._changehide}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: Dimensions.get('window').width * 0.075,
                          }}>
                          否
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.greenBtn}
                        onPress={() => this.changeconfirm()}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: Dimensions.get('window').width * 0.075,
                          }}>
                          是
                        </Text>
                      </TouchableOpacity>
                  </View>
                </View>
              </Modal>


              <Modal isVisible={this.state.jrBackModalVisible}>
                <View style={styles.milkmodals}>
                  <View style={{alignItems:'center',justifyContent:'center',}}>
                  <Text style={{fontSize:Dimensions.get('window').height*0.05,
                    marginTop:Dimensions.get('window').height/12,
                    marginLeft:Dimensions.get('window').height*0.01,
                    color:'black'}}>
                  請過兩小時再拍痰
                  </Text>
                  </View>
                  <View style={{ flexDirection:'row',alignItems:'center',
                  justifyContent:'center',
                  marginTop:Dimensions.get('window').height/8,}}>
                  <TouchableOpacity
                  onPress={() => this.backagain()}>
                  <View style={{
                    backgroundColor:'white',
                    borderRadius:30,
                    height:Dimensions.get('window').height/10,
                    width:Dimensions.get('window').width/3,
                    alignItems:'center',
                    justifyContent:'center'}} >
                    <Text style={{fontSize:Dimensions.get('window').height*0.04,
                      color:'black',
                      }}>
                      重計時
                      </Text>
                      <Text style={{fontSize:Dimensions.get('window').height*0.02,
                        color:'black',
                        }}>
                        (情況嚴重者)
                        </Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={this._jrbackhide}>
                  <View style={{
                    backgroundColor:'white',
                    borderRadius:30,
                    height:Dimensions.get('window').height/10,
                    width:Dimensions.get('window').width/3,
                    marginLeft:Dimensions.get('window').height/18,
                    alignItems:'center',
                    justifyContent:'center',}} >

                  <Text style={{fontSize:Dimensions.get('window').height*0.04,
                    color:'black',}}>
                    關閉
                    </Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                </View>
              </Modal>



              <Modal isVisible={this.state.jrDiaperModalVisible}>
                <View style={styles.milkmodals}>
                  <View style={{alignItems:'center',justifyContent:'center',}}>
                  <Text style={{fontSize:Dimensions.get('window').height*0.05,
                    marginTop:Dimensions.get('window').height/12,
                    marginLeft:Dimensions.get('window').height*0.01,
                    color:'black'}}>
                  請過兩小時再換尿布
                  </Text>
                  </View>
                  <View style={{ flexDirection:'row',alignItems:'center',
                  justifyContent:'center',
                  marginTop:Dimensions.get('window').height/8,}}>
                  <TouchableOpacity
                  onPress={() => this.diaperagain()}>
                  <View style={{
                    backgroundColor:'white',
                    borderRadius:30,
                    height:Dimensions.get('window').height/10,
                    width:Dimensions.get('window').width/3,
                    alignItems:'center',
                    justifyContent:'center'}} >
                    <Text style={{fontSize:Dimensions.get('window').height*0.04,
                      color:'black',
                      }}>
                      重計時
                      </Text>
                      <Text style={{fontSize:Dimensions.get('window').height*0.02,
                        color:'black',
                        }}>
                        (情況嚴重者)
                        </Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={this._jrDiaperhide}>
                  <View style={{
                    backgroundColor:'white',
                    borderRadius:30,
                    height:Dimensions.get('window').height/10,
                    width:Dimensions.get('window').width/3,
                    marginLeft:Dimensions.get('window').height/18,
                    alignItems:'center',
                    justifyContent:'center',}} >

                  <Text style={{fontSize:Dimensions.get('window').height*0.04,
                    color:'black',}}>
                    關閉
                    </Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                </View>
              </Modal>


              <Modal isVisible={this.state.jrChangeModalVisible}>
                <View style={styles.milkmodals}>
                  <View style={{alignItems:'center',justifyContent:'center',}}>
                  <Text style={{fontSize:Dimensions.get('window').height*0.05,
                    marginTop:Dimensions.get('window').height/12,
                    marginLeft:Dimensions.get('window').height*0.01,
                    color:'black'}}>
                  請過兩小時再翻身
                  </Text>
                  </View>
                  <View style={{ flexDirection:'row',alignItems:'center',
                  justifyContent:'center',
                  marginTop:Dimensions.get('window').height/8,}}>
                  <TouchableOpacity
                  onPress={() => this.changeagain()}>
                  <View style={{
                    backgroundColor:'white',
                    borderRadius:30,
                    height:Dimensions.get('window').height/10,
                    width:Dimensions.get('window').width/3,
                    alignItems:'center',
                    justifyContent:'center'}} >
                    <Text style={{fontSize:Dimensions.get('window').height*0.04,
                      color:'black',
                      }}>
                      重計時
                      </Text>
                      <Text style={{fontSize:Dimensions.get('window').height*0.02,
                        color:'black',
                        }}>
                        (情況嚴重者)
                        </Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={this._jrChangehide}>
                  <View style={{
                    backgroundColor:'white',
                    borderRadius:30,
                    height:Dimensions.get('window').height/10,
                    width:Dimensions.get('window').width/3,
                    marginLeft:Dimensions.get('window').height/18,
                    alignItems:'center',
                    justifyContent:'center',}} >

                  <Text style={{fontSize:Dimensions.get('window').height*0.04,
                    color:'black',}}>
                    關閉
                    </Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                </View>
              </Modal>


              <Modal isVisible={this.state.jrExerModalVisible}>
                <View style={styles.milkmodals}>
                  <View style={{alignItems:'center',justifyContent:'center',}}>
                  <Text style={{fontSize:Dimensions.get('window').height*0.05,
                    marginTop:Dimensions.get('window').height/12,
                    marginLeft:Dimensions.get('window').height*0.01,
                    color:'black'}}>
                  請過兩小時再做關節運動
                  </Text>
                  </View>
                  <View style={{ flexDirection:'row',alignItems:'center',
                  justifyContent:'center',
                  marginTop:Dimensions.get('window').height/8,}}>
                  <TouchableOpacity
                  onPress={() => this.exeragain()}>
                  <View style={{
                    backgroundColor:'white',
                    borderRadius:30,
                    height:Dimensions.get('window').height/10,
                    width:Dimensions.get('window').width/3,
                    alignItems:'center',
                    justifyContent:'center'}} >
                    <Text style={{fontSize:Dimensions.get('window').height*0.04,
                      color:'black',
                      }}>
                      重計時
                      </Text>
                      <Text style={{fontSize:Dimensions.get('window').height*0.02,
                        color:'black',
                        }}>
                        (情況嚴重者)
                        </Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={this._jrExerhide}>
                  <View style={{
                    backgroundColor:'white',
                    borderRadius:30,
                    height:Dimensions.get('window').height/10,
                    width:Dimensions.get('window').width/3,
                    marginLeft:Dimensions.get('window').height/18,
                    alignItems:'center',
                    justifyContent:'center',}} >

                  <Text style={{fontSize:Dimensions.get('window').height*0.04,
                    color:'black',}}>
                    關閉
                    </Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                </View>
              </Modal>



              <Modal isVisible={this.state.calendarVisible}>
              <Calendar
                onDayPress={this.onDayPress}
                style={styles.calendar}
                hideExtraDays
                markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
              />
              </Modal>

              <Modal isVisible={this.state.TotalModalVisible}>
                <View style={styles.todaymodal}>

                  <View style={styles.todaymodalUp}>

                    <View style={styles.flexCenter}>
                      <Text style={styles.titleText}>
                      今日總量
                      </Text>
                    </View>

                    <View style={styles.greenBorder}/>

                    <View style={styles.flexRow}>
                      <View style={styles.flexOne2} />
                      <View style={styles.flexOne}>
                        <Text style={styles.todaymodalText}>
                          攝入
                        </Text>
                      </View>
                      <View style={styles.flexOne}>
                        <Text style={styles.todaymodalText}>
                          排出
                        </Text>
                      </View>
                      <View style={styles.flexOne}>
                        <Text style={styles.todaymodalText}>
                          差異
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flexRow2}>
                      <View style={styles.flexOne3}>
                        <Text style={styles.todaymodalText}>
                          白班
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                          {this.seveninput()}
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                          {this.sevenoutput()}
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flexRow2}>
                      <View style={styles.flexOne3}>
                        <Text style={styles.todaymodalText}>
                        小夜
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                          {this.fifteninput()}
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                          {this.fiftenoutput()}
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flexRow2}>
                      <View style={styles.flexOne3}>
                        <Text style={styles.todaymodalText}>
                        大夜
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                          {this.twentythreeinput()}
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                          {this.twentythreeoutput()}
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalText}>
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flexRow2}>
                      <View style={styles.flexOne4}>
                        <Text style={styles.todaymodalText}>
                        總量
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalTextOrange}>
                          
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalTextOrange}>
                         
                        </Text>
                      </View>
                      <View style={styles.flexOneWhite}>
                        <Text style={styles.todaymodalTextOrange}>
                        </Text>
                      </View>
                    </View>
                  </View>


                  <View style={styles.todaymodalDown}>
                    <TouchableOpacity
                      style={styles.greenBtn2}
                      onPress={this._showcalendar}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: Dimensions.get('window').width * 0.075,
                        }}>
                        歷史紀錄
                      </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                      style={styles.greenBtn}
                      onPress={this._totalhide}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: Dimensions.get('window').width * 0.075,
                        }}>
                        關閉
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Modal isVisible={this.state.calendarVisible}>
                  <Calendar
                    onDayPress={this.onDayPress}
                    style={styles.calendar}
                    hideExtraDays
                    markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
                  />
                  </Modal>

                </View>
              </Modal>


              <Modal isVisible={this.state.isExerModalVisible}>
                <View style={styles.todaymodal}>
                  <View style={styles.todaymodalUp}>
                    <View style={styles.flexCenter2}>
                      <Text style={styles.titleText}>
                      您想要做哪個關節運動呢？
                      </Text>
                    </View>
                    <View style={styles.flexCenter4}>
                      <TouchableOpacity
                        style={styles.flexCenter3}
                        onPress={() => this.exerconfirm()}>
                        <View style={styles.exerView}>
                          <Text style={styles.exerText}>
                            上肢
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.flexCenter3}
                        onPress={() => this.upconfirm()}>
                        <Text style={styles.exerText2}>
                          上肢衛教影片
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.flexCenter4}>
                      <TouchableOpacity
                        style={styles.flexCenter3}
                        onPress={() => this.exerconfirm1()}>
                        <View style={styles.exerView}>
                          <Text style={styles.exerText}>
                          下肢
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.flexCenter3}
                        onPress={() => this.downconfirm()}>
                        <Text style={styles.exerText2}>
                        下肢衛教影片
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Image
                        style={styles.owlImgGreen2}
                        source={require('../../images/greenOwl.png')}
                      />
                  </View>
                  <View style={styles.todaymodalDown}>
                      <TouchableOpacity
                        style={styles.greenBtn}
                        onPress={this._exerhide}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: Dimensions.get('window').width * 0.075,
                          }}>
                          取消
                        </Text>
                      </TouchableOpacity>
                  </View>
                </View>
              </Modal>



              <TouchableOpacity
              style={{borderColor:'grey',
                      borderLeftWidth:0.5,
                      borderBottomWidth:1,}}
              onPress={() => {this.exerAlter()}}
            >
              {this.exerImage()}
              </TouchableOpacity>
              </View>

              <View style={styles.ban}>
              {this.banImage()}
              </View>


              <ScrollView
              onTouchStart={(ev) => {
                this.setState({enabled:false }); }}
              onMomentumScrollEnd={(e) => { this.setState({ enabled:true }); }}
              onScrollEndDrag={(e) => { this.setState({ enabled:true }); }}
              style={{ maxHeight: Dimensions.get('window').height/3 }}
              >

              <View style={styles.ban}>
              {this.countdownback()}
              </View>


              <View style={styles.ban}>
              {this.countdownexer()}
              </View>

              <View style={styles.ban}>
              {this.countdownchange()}
              </View>

              <View style={styles.ban}>
              {this.countdowndiaper()}
              </View>

              </ScrollView>


            </View>

            </ScrollView>

            <ScrollView tabLabel="管灌" >


            <Modal isVisible={this.state.calendarVisible}>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
            />
            </Modal>

                <View style={{alignItems:'center',marginTop:20}}>
                  <TouchableOpacity onPress={this._showcalendar}>
                  <View style={styles.date}>
                    <Icon name="calendar" size={5}
                    style={{marginLeft:8,color:'black'}}
                    />
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20,marginLeft:8,color:'black'}}>
                    {this.state.selected}
                    </Text>
                    </View>
                  </View>
                  </TouchableOpacity>

                  <DateTimePicker
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    defaultData={this.state.curTime}
                    cancelTextIOS='取消'
                    confirmTextIOS='確定'
                    titleIOS='選擇日期'
                    datePickerModeAndroid='spinner'
                    mode='date'
                  />
                </View>

                <View style={{alignItems:'center'}}>
                <View style={styles.content1}>

                <View style={{flexDirection:'row',
                alignItems:'center'}}>
                <Text style={{fontSize:Dimensions.get('window').width*0.045,color:"black",
                marginLeft:Dimensions.get('window').width/12}}>時間</Text>
                <Text style={{fontSize:Dimensions.get('window').width*0.045,color:"black",
                marginLeft:Dimensions.get('window').width*0.1}}>藥物</Text>
                <Text style={{fontSize:Dimensions.get('window').width*0.045,color:"black",
                marginLeft:Dimensions.get('window').width*0.06}}>食物</Text>
                <Text style={{fontSize:Dimensions.get('window').width*0.045,color:"black",
              marginLeft:Dimensions.get('window').width*0.06}}>牛奶</Text>
                <Text style={{fontSize:Dimensions.get('window').width*0.045,color:"black",
              marginLeft:Dimensions.get('window').width*0.06}}>水</Text>
              <Text style={{fontSize:Dimensions.get('window').width*0.045,color:"black",
            marginLeft:Dimensions.get('window').width*0.06}}>
              其他</Text>

                </View>



                <View style={styles.margins}>
                </View>

                <ScrollView >
                    {milks}
                </ScrollView>

                </View>
                </View>

                <View style={{marginLeft:Dimensions.get('window').width/10}}>
                <Text style={{fontSize:20,color:"black",}}>今日總量：</Text>
                </View>
                <View style={{marginLeft:Dimensions.get('window').width/2.8}}>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:18,color:"black",}}>牛奶：</Text>
                <Text style={{fontSize:18,color:"black",}}>{this.state.todaymilk}</Text>
                <Text style={{fontSize:18,color:"black",}}> c.c</Text>
                </View>

                </View>

                <View style={{marginLeft:Dimensions.get('window').width/2.45}}>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:18,color:"black",}}>水：</Text>
                <Text style={{fontSize:18,color:"black",}}>{this.state.todaywater}</Text>
                <Text style={{fontSize:18,color:"black",}}> c.c</Text>
                </View>

                </View>


            </ScrollView>

            <ScrollView tabLabel="換尿布" >
            <View style={{alignItems:'center',marginTop:20}}>
            <Modal isVisible={this.state.calendarVisible}>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
            />
            </Modal>

              <TouchableOpacity onPress={this._showcalendar}>
              <View style={styles.date}>
                <Icon name="calendar" size={30}
                style={{marginLeft:8,color:'black'}}
                />
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,marginLeft:8,color:'black'}}>
                {this.state.selected}
                </Text>
                </View>
              </View>
              </TouchableOpacity>

              <DateTimePicker
                isVisible={this.state.isDatePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                defaultData={this.state.curTime}
                cancelTextIOS='取消'
                confirmTextIOS='確定'
                titleIOS='選擇日期'
                datePickerModeAndroid='spinner'
                mode='date'
              />
            </View>

            <View style={{alignItems:'center'}}>
            <View style={styles.content1}>


            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:Dimensions.get('window').width*0.05,color:"black",
            marginLeft:Dimensions.get('window').width/12}}>時間</Text>
            <Text style={{fontSize:Dimensions.get('window').width*0.05,color:"black",
            marginLeft:Dimensions.get('window').width*0.1}}>尿量</Text>
            <Text style={{fontSize:Dimensions.get('window').width*0.05,color:"black",
            marginLeft:Dimensions.get('window').width*0.06}}>糞便量</Text>
            <Text style={{fontSize:Dimensions.get('window').width*0.05,color:"black",
            marginLeft:Dimensions.get('window').width*0.07}}>形狀</Text>
            <Text style={{fontSize:Dimensions.get('window').width*0.05,color:"black",
            marginLeft:Dimensions.get('window').width*0.05}}>顏色</Text>

            </View>

            <View style={styles.margins}>
            </View>


            <ScrollView >
            {diapers}
            </ScrollView>

            </View>
            </View>

            <View style={{marginLeft:Dimensions.get('window').width/10}}>
            <Text style={{fontSize:20,color:"black",}}>今日總量：</Text>
            </View>
            <View style={{marginLeft:Dimensions.get('window').width/2.8}}>

            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:18,color:"black",}}>尿量：</Text>
            <Text style={{fontSize:18,color:"black",}}>{this.state.todaypee}</Text>
            <Text style={{fontSize:18,color:"black",}}> 公克</Text>
            </View>

            </View>

            <View style={{marginLeft:Dimensions.get('window').width/2.8}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:18,color:"black",}}>糞便：</Text>
            <Text style={{fontSize:18,color:"black",}}>{this.state.todaypoo}</Text>
            <Text style={{fontSize:18,color:"black",}}> 公克</Text>
            </View>

            </View>



            </ScrollView>

            <ScrollView tabLabel="翻身" >

            <Modal isVisible={this.state.calendarVisible}>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
            />
            </Modal>

            <View style={{alignItems:'center',marginTop:20}}>
              <TouchableOpacity onPress={this._showcalendar}>
              <View style={styles.date}>
                <Icon name="calendar" size={30}
                style={{marginLeft:8,color:'black'}}
                />
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,marginLeft:8,color:'black'}}>
                {this.state.selected}
                </Text>
                </View>
              </View>
              </TouchableOpacity>

              <DateTimePicker
                isVisible={this.state.isDatePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                defaultData={this.state.curTime}
                cancelTextIOS='取消'
                confirmTextIOS='確定'
                titleIOS='選擇日期'
                datePickerModeAndroid='spinner'
                mode='date'
              />
            </View>

            <View style={{alignItems:'center'}}>
            <View style={styles.content}>

            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,color:"black",
            marginLeft:Dimensions.get('window').width/6.8}}>時間</Text>
            <Text style={{fontSize:20,color:"black",
          marginLeft:Dimensions.get('window').width/5}}>次數</Text>
            </View>

            <View style={styles.margins}>
            </View>

            <ScrollView >
                {changes}
            </ScrollView>

            </View>
            </View>

            <View style={{marginLeft:Dimensions.get('window').width/10}}>
            <Text style={{fontSize:20,color:"black",}}>今日總量：{this.state.todaychange}
              次</Text>
            </View>


            </ScrollView>

            <ScrollView tabLabel="拍痰" >
            <Modal isVisible={this.state.calendarVisible}>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
            />
            </Modal>

            <View style={{alignItems:'center',marginTop:20}}>
              <TouchableOpacity onPress={this._showcalendar}>
              <View style={styles.date}>
                <Icon name="calendar" size={30}
                style={{marginLeft:8,color:'black'}}
                />
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,marginLeft:8,color:'black'}}>
                {this.state.selected}
                </Text>
                </View>
              </View>
              </TouchableOpacity>

              <DateTimePicker
                isVisible={this.state.isDatePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                defaultData={this.state.curTime}
                cancelTextIOS='取消'
                confirmTextIOS='確定'
                titleIOS='選擇日期'
                datePickerModeAndroid='spinner'
                mode='date'
              />
            </View>

            <View style={{alignItems:'center'}}>
            <View style={styles.content}>

            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,color:"black",
            marginLeft:Dimensions.get('window').width/6.8}}>時間</Text>
            <Text style={{fontSize:20,color:"black",
          marginLeft:Dimensions.get('window').width/5}}>次數</Text>
            </View>

            <View style={styles.margins}>
            </View>

            <ScrollView >
              {backs}
            </ScrollView>

            </View>
            </View>

            <View style={{marginLeft:Dimensions.get('window').width/10}}>
            <Text style={{fontSize:20,color:"black",}}>今日總量：{this.state.todayback}
              次</Text>
            </View>

            </ScrollView>

            <ScrollView tabLabel="被動關節運動" >

            <Modal isVisible={this.state.calendarVisible}>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
            />
            </Modal>

            <View style={{alignItems:'center',marginTop:20}}>
              <TouchableOpacity onPress={this._showcalendar}>
              <View style={styles.date}>
                <Icon name="calendar" size={30}
                style={{marginLeft:8,color:'black'}}
                />
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,marginLeft:8,color:'black'}}>
                {this.state.selected}
                </Text>
                </View>
              </View>
              </TouchableOpacity>

              <DateTimePicker
                isVisible={this.state.isDatePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                defaultData={this.state.curTime}
                cancelTextIOS='取消'
                confirmTextIOS='確定'
                titleIOS='選擇日期'
                datePickerModeAndroid='spinner'
                mode='date'
              />
            </View>

            <View style={{alignItems:'center'}}>
            <View style={styles.content}>

            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,color:"black",
            marginLeft:Dimensions.get('window').width/6.8}}>時間</Text>
            <Text style={{fontSize:20,color:"black",
          marginLeft:Dimensions.get('window').width/5}}>次數</Text>
            </View>

            <View style={styles.margins}>
            </View>

            <ScrollView >
                {exers}
            </ScrollView>

            </View>
            </View>

            <View style={{marginLeft:Dimensions.get('window').width/10}}>
            <Text style={{fontSize:20,color:"black",}}>今日總量：{this.state.todayexer}
            次</Text>
            </View>

            </ScrollView>

            </ScrollableTabView>
      </View>
    );



  }




  render() {

    return (
     <View style={styles.container}>

     <View>
     {this.content()}
     </View>



     <Modal isVisible={this.state.LanguageVisible}>

     <View style={{alignItems:'center'}}>
     <View style={styles.cardd}>

     <View style={styles.top11}>
     <Text style={{fontSize:Dimensions.get('window').height*0.06,color:'black'}}>
     語言設定
     </Text>
     </View>

     <View style={styles.marginsss}>
     </View>

     <View style={styles.top22}>


     <View  style={{flexDirection:'row',
     marginTop:Dimensions.get('window').height*0.07}}>

     <StyleProvider style={getTheme(commonstyle)}>
     <CheckBox checked={this.state.c}
     onPress={() => this.c()}
     style={{marginLeft:Dimensions.get('window').height*0.04}}
     />
     </StyleProvider>
     <Text style={{
     fontSize:Dimensions.get('window').height*0.04,
     color:'black',
     marginLeft:Dimensions.get('window').height*0.03}}>
     中文
     </Text>
     </View>

     <View style={{flexDirection:'row',
     marginTop:Dimensions.get('window').height*0.04}}>

     <StyleProvider style={getTheme(commonstyle)}>
     <CheckBox checked={this.state.e}
     onPress={() => this.e()}
     style={{marginLeft:Dimensions.get('window').height*0.04}}
     />
     </StyleProvider>

     <Text style={{
     fontSize:Dimensions.get('window').height*0.04,
     color:'black',
     marginLeft:Dimensions.get('window').height*0.03}}>
     English
     </Text>
     </View>

     <View style={{flexDirection:'row',
     marginTop:Dimensions.get('window').height*0.04}}>

     <StyleProvider style={getTheme(commonstyle)}>
     <CheckBox checked={this.state.f}
     onPress={() => this.f()}
     style={{marginLeft:Dimensions.get('window').height*0.04}}
     />
     </StyleProvider>

     <Text style={{
     fontSize:Dimensions.get('window').height*0.04,
     color:'black',
     marginLeft:Dimensions.get('window').height*0.03}}>
     Wikang Tagalog
     </Text>
     </View>

     <View style={{flexDirection:'row',
     marginTop:Dimensions.get('window').height*0.04}}>

     <StyleProvider style={getTheme(commonstyle)}>
     <CheckBox checked={this.state.i}
     onPress={() => this.i()}
     style={{marginLeft:Dimensions.get('window').height*0.04}}
     />
     </StyleProvider>

     <Text style={{
     fontSize:Dimensions.get('window').height*0.04,
     color:'black',
     marginLeft:Dimensions.get('window').height*0.03}}>
     Bahasa Indonesia
     </Text>
     </View>


     </View>

     </View>
     </View>

     <View style={{alignItems: 'center'}}>
     <TouchableOpacity onPress={() => {this.valuetoLan()}} style={styles.Button}>
      <Text style={{fontSize: Dimensions.get('window').height*0.04,color:'black'}}>儲存</Text>
     </TouchableOpacity>
     </View>

     </Modal>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button:{
    width: Dimensions.get('window').width/2.1,
    height: Dimensions.get('window').height/3.82,
    marginTop:10,
    marginLeft:10,
  },
  button2:{
    width: Dimensions.get('window').width/2.1,
    height: Dimensions.get('window').height/3.82,
  },
  img2:{
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/3.75,
  },
  img3:{
    width: Dimensions.get('window').width/2.7,
    height: Dimensions.get('window').height/2.5,
    borderRadius: 20,
  },
  date:{
    flexDirection:'row',
    borderRadius:20,
    borderColor:'black',
    borderWidth:2,
    width: Dimensions.get('window').width/2.2,
  },
  content:{
    marginTop:Dimensions.get('window').height/14,
    margin:Dimensions.get('window').height/35,
    borderColor:'black',
    borderRadius:10,
    borderWidth:2,
    height:Dimensions.get('window').height/2,
    width:Dimensions.get('window').width/1.2,
  },
  content1:{
  	marginTop:Dimensions.get('window').height/14,
  	borderColor:'black',
  	borderRadius:10,
  	borderWidth:2,
  	height:Dimensions.get('window').height/2,
    width:Dimensions.get('window').width/1.02,
    margin:Dimensions.get('window').width/35,
  },
  margins:{
    borderColor:'black',
    borderWidth:1,
  },
  imagespos:{
    flexDirection:'row',
  },
  ban:{
    justifyContent:'center',
    alignItems:'center',
  },
  banImages:{
    height:Dimensions.get('window').height/2.5,
    width:Dimensions.get('window').width/1.2,
  },
  milkmodalk:{
    height:Dimensions.get('window').height/1.5,
    backgroundColor:'#f5d2d4',
    borderRadius:30,
  },
  milkmodals:{
    height:Dimensions.get('window').height/2.18,
    backgroundColor:'#f5d2d4',
    borderRadius:30,
  },
  smilkmodal:{
    height:Dimensions.get('window').height/1.2,
    backgroundColor:'#f5d2d4',
    borderRadius:10,
  },
  videomodal:{
    height:Dimensions.get('window').height/2.18,
    borderRadius:30,
  },
  todaymodal:{
    height:Dimensions.get('window').height / 1.55,
    backgroundColor:'#fff',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todaymodalUp:{
    width: '95%',
    height: '87%',
    backgroundColor: '#fff',
    marginTop: 10,
    borderColor: '#92bf1a',
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  todaymodalDown:{
    width: '100%',
    height: '13%',
    backgroundColor: '#92bf1a',
    flexDirection: 'row',
  },
  exermodal:{
    height:Dimensions.get('window').height/2.1,
    backgroundColor:'#f5d2d4',
    borderRadius:10,
  },
  card: {
    marginTop:Dimensions.get('window').height/6.5,
    margin:10,
    borderColor:'#adabab',
    borderRadius:10,
    borderWidth:8,
    height:Dimensions.get('window').height/2,
    width:Dimensions.get('window').width/1.2,
  },
  top1:{
    backgroundColor:'#f5d2d4',
    alignItems:'center',
    justifyContent:'center',
    height:Dimensions.get('window').height/9
  },
  marginss:{
    borderColor:'#adabab',
    borderWidth:3,
  },
  top2:{
    backgroundColor:'#fffad1',
    height:Dimensions.get('window').height/2.8,
  },
  cardd: {
    marginTop:Dimensions.get('window').height/6.5,
    margin:10,
    borderColor:'#adabab',
    borderRadius:10,
    borderWidth:8,
    height:Dimensions.get('window').height/1.7,
    width:Dimensions.get('window').width/1.2,
  },
  top11:{
    backgroundColor:'#f5d2d4',
    alignItems:'center',
    justifyContent:'center',
    height:Dimensions.get('window').height/9
  },
  marginsss:{
    borderColor:'#adabab',
    borderWidth:3,
  },
  top22:{
    backgroundColor:'#fffad1',
    height:Dimensions.get('window').height/2.25,
  },

  amounts:{
    height:42,
    fontSize:20,
    marginLeft:3,
    borderRadius:10,
    borderColor:'#adabab',
    borderWidth:2,
    paddingHorizontal:10,
    width: Dimensions.get('window').width/6,
  },
  Button:{
    backgroundColor:'#f5ca9f',
    paddingVertical:10,
    borderRadius:10,
    marginTop:Dimensions.get('window').width*0.05,
    alignItems: 'center',
    justifyContent: 'center',
    height:Dimensions.get('window').width*0.13,
    width: Dimensions.get('window').width/2.5,
  },

  Buttons:{
    backgroundColor:'#f5ca9f',
    paddingVertical:10,
    borderRadius:10,
    marginTop:Dimensions.get('window').width*0.05,
    alignItems: 'center',
    justifyContent: 'center',
    height:Dimensions.get('window').width*0.13,
    width: Dimensions.get('window').width/2.5,
    marginLeft:Dimensions.get('window').width*0.03
  },

  pickers:{
    borderWidth:2,
    borderColor:'black',
    height:38,
    borderRadius:20,
    width:Dimensions.get('window').width/3,
    alignItems:'center',
    justifyContent:'center'
  },
  pickertest:{
    fontSize:18,
    color:'black',
  },
  video:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  greenBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92bf1a',
    borderWidth: 0.7,
    borderColor: '#92bf1a',
    flex: 1,
    height: '100%',
  },
  greenBtn2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92bf1a',
    borderWidth: 0.7,
    borderColor: '#92bf1a',
    flex: 1,
    height: '100%',
    borderRightColor: '#fff',
    borderRightWidth: 1,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: Dimensions.get('window').height*0.03,
  },
  flexCenter2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: Dimensions.get('window').height*0.03,
    marginTop: Dimensions.get('window').height*0.06,
  },
  flexCenter3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  flexCenter4: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: Dimensions.get('window').height*0.04,
  },
  titleText: {
    fontSize:Dimensions.get('window').height*0.04,
    color:'black',
    fontWeight: 'bold',
  },
  greenBorder: {
    borderColor: '#bbd587',
    borderWidth: 1,
    width: '100%',
  },
  flexRow: {
    flexDirection: 'row',
    width: '100%',
    height: Dimensions.get('window').height*0.06,
  },
  flexRow2: {
    flexDirection: 'row',
    width: '100%',
    height: Dimensions.get('window').height*0.1,
  },
  flexOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6efd1',
    width: '100%',
    borderBottomColor: '#bbd587',
    borderBottomWidth: 1,
    borderLeftColor: '#bbd587',
    borderLeftWidth: 1,
  },
  flexOneWhite: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderBottomColor: '#bbd587',
    borderBottomWidth: 1,
  },
  flexOne2 :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderBottomColor: '#bbd587',
    borderBottomWidth: 1,
  },
  flexOne3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6efd1',
    width: '100%',
    borderBottomColor: '#bbd587',
    borderBottomWidth: 1,
    borderRightColor: '#bbd587',
    borderRightWidth: 1,
  },
  flexOne4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffdbb4',
    width: '100%',
    borderBottomColor: '#bbd587',
    borderBottomWidth: 1,
    borderRightColor: '#bbd587',
    borderRightWidth: 1,
  },
  todaymodalText: {
    fontSize:Dimensions.get('window').height*0.025,
    color:'black',
    fontWeight: 'bold',
  },
  todaymodalTextOrange: {
    fontSize: Dimensions.get('window').height*0.025,
    color:'#e86919',
    fontWeight: 'bold',
  },
  owlImg: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.42,
  },
  owlImgGreen: {
    marginTop: Dimensions.get('window').width* 0.05,
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width* 0.575,
  },
  owlImgGreen2: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: Dimensions.get('window').width * 0.24,
    height: Dimensions.get('window').width* 0.325,
  },
  flexRowBig: {
    flexDirection: 'row',
    borderBottomColor: '#bbd587',
    borderBottomWidth: 1,
    height: Dimensions.get('window').height * 0.076,
  },
  flexRowBigs: {
    flexDirection: 'row',
    borderBottomColor: '#bbd587',
    borderBottomWidth: 1,
    height: Dimensions.get('window').height * 0.115,
  },
  flexLeft: {
    backgroundColor: '#e6efd1',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRight: {
    backgroundColor: '#fff',
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftText: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: '700',
    letterSpacing: Dimensions.get('window').width * 0.02,
  },
  leftTextNoSpace: {
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: '700',
    // justifyContent: 'flex-end',
  },
  exerText: {
    fontSize: Dimensions.get('window').width * 0.07,
    fontWeight: '700',
    letterSpacing: Dimensions.get('window').width * 0.02,
    color: 'black',
  },
  exerText2: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: '700',
    marginTop: 10,
    color: '#1964ac',
  },
  rightText: {
    fontSize: Dimensions.get('window').width * 0.05,
    marginLeft: Dimensions.get('window').width * 0.03,
    color: 'black',
  },
  inputStyle: {
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    borderRadius: Dimensions.get('window').height / 20,
    fontSize: Dimensions.get('window').width * 0.06,
    paddingHorizontal: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 18,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerView: {
    backgroundColor:'#e6efd1',
    borderRadius:30,
    height:Dimensions.get('window').height/14,
    width: '60%',
    alignItems:'center',
    justifyContent:'center',
  },
});