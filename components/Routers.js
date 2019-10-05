/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, StyleSheet, Dimensions} from 'react-native';

import {Router, Scene, Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

import App from '../App';
import Login from '../components/Login';
import Register from '../components/Register';
import Main from '../components/MainPage/Main';
import Home from '../components/Home';
// Emergency
import Dates from '../components/Emergency/Date';
import Evaluate from '../components/Emergency/Evaluate';
import Introduce1 from '../components/Emergency/Introduce1';
import Com2 from '../components/Emergency/Com2';
import Introduce2 from '../components/Emergency/Introduce2';
import Stroke1 from '../components/Emergency/Stroke1';
import Stroke2 from '../components/Emergency/Stroke2';
import Outblood from '../components/Emergency/Outblood';
import Self from '../components/Emergency/Self';
import Emerless6 from '../components/Emergency/Emerless6';
import Tpa2 from '../components/Emergency/Tpa2';
import Selfout from '../components/Emergency/Selfout';
import Tpa from '../components/Emergency/Tpa';
import Pickward from '../components/Emergency/Pickward';
import Pickward1 from '../components/Emergency/Pickward1';
import Emerless31 from '../components/Emergency/Emerless31';
import Emerless32 from '../components/Emergency/Emerless32';
import Pickward3 from '../components/Emergency/Pickward3';
import Generalward from '../components/Emergency/Generalward';
import Intensivecare from '../components/Emergency/Intensivecare';
import Strokeward from '../components/Emergency/Strokeward';
import Selfevaluate from '../components/Emergency/Selfevaluate';
import Answer from '../components/Emergency/Answer';
import Swallow from '../components/Emergency/Swallow';
import Operate from '../components/Emergency/Operate';
import Generalwardsee from '../components/Emergency/Generalwardsee';

// MainPage
import Page2 from '../components/MainPage/Page2';
import Page3 from '../components/MainPage/Page3';
import Page4 from '../components/MainPage/Page4';
import Page5 from '../components/MainPage/Page5';

// IntensiveCare
import Intensivecare2 from '../components/IntensiveCare/Intensivecare2';
import Caution from '../components/IntensiveCare/Caution';

// Ward
import Recoveryoutline from '../components/Ward/Recoveryoutline';
import Physical from '../components/Ward/Physical';
import Functions from '../components/Ward/Functions';
import Language from '../components/Ward/Language';
import Tech from '../components/Ward/Tech';
import Caution3 from '../components/Ward/Caution3';
import A1 from '../components/Ward/A1';
import Medoutline from '../components/Ward/Medoutline';
import Medlist from '../components/Ward/Medlist';
import Record from '../components/Ward/Record';
import Care from '../components/Ward/Care';
import Up from '../components/Ward/Up';
import Down from '../components/Ward/Down';
import Qrcode from '../components/Ward/Qrcode';

// Discharged
import Dischargeinstructions from '../components/Discharged/Dischargeinstructions';

// Household
import Eat from '../components/Household/Eat';
import Eat1 from '../components/Household/Eat1';
import Eat2 from '../components/Household/Eat2';
import Eat3 from '../components/Household/Eat3';
import Clothes from '../components/Household/Clothes';
import Clothes1 from '../components/Household/Clothes1';
import House from '../components/Household/House';
import Walk from '../components/Household/Walk';
import Records from '../components/Household/Records';
import Calendars from '../components/Household/Calendars';
import Suger from '../components/Household/Suger';
import Blood from '../components/Household/Blood';
import Water from '../components/Household/Water';
import Weight from '../components/Household/Weight';
import Sugerh from '../components/Household/Sugerh';
import Waterh from '../components/Household/Waterh';
import Bloodh from '../components/Household/Bloodh';
import Weighth from '../components/Household/Weighth';

export default class Routers extends Component {
  async aa() {
    try {
      let value = await AsyncStorage.getItem('gonext');

      if (value == '0') {
        Actions.Page22();
      } else if (value == '1') {
        Actions.Page33();
      } else {
        Actions.Page33();
      }
    } catch (error) {
      Alert.alert(error);
    }
  }

  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key="root">
          <Scene
            panHandlers={null}
            key="loginn"
            component={Login}
            initial
            hideNavBar="true"
          />
          <Scene
            panHandlers={null}
            key="registerr"
            component={Register}
            hideNavBar="true"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="mainn"
            component={Main}
            hideNavBar="true"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="homee"
            component={Home}
            hideNavBar="true"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="datee"
            component={Dates}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="evaa"
            component={Evaluate}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="int11"
            component={Introduce1}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="com22"
            component={Com2}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="int22"
            component={Introduce2}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="str11"
            component={Stroke1}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="str22"
            component={Stroke2}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="outt"
            component={Outblood}
            navBarButtonColor="white"
            title="出血型腦中風"
          />
          <Scene
            panHandlers={null}
            key="selff"
            component={Self}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="el66"
            component={Emerless6}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="tpa22"
            component={Tpa2}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="selfoutt"
            component={Selfout}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="tpaa"
            component={Tpa}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="Pickwardd"
            component={Pickward}
            navBarButtonColor="white"
            title="病房類型"
          />
          <Scene
            panHandlers={null}
            key="Pickward1"
            component={Pickward1}
            navBarButtonColor="white"
            title="病房類型"
          />
          <Scene
            panHandlers={null}
            key="emerless311"
            component={Emerless31}
            navBarButtonColor="white"
            title="衛教影片"
          />
          <Scene
            panHandlers={null}
            key="emerless322"
            component={Emerless32}
            navBarButtonColor="white"
            title="衛教影片"
          />
          <Scene
            panHandlers={null}
            key="Pickward3"
            component={Pickward3}
            navBarButtonColor="white"
            title="病房類型"
          />
          <Scene
            panHandlers={null}
            key="generall"
            component={Generalward}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="intee"
            component={Intensivecare}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="strokewardd"
            component={Strokeward}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="selfevaluatee"
            component={Selfevaluate}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="answer1"
            component={Answer}
            navBarButtonColor="white"
            title="衛教內容"
            onRight={() => this.aa()}
            rightTitle="下一頁"
          />
          <Scene
            panHandlers={null}
            key="swaa"
            component={Swallow}
            navBarButtonColor="white"
            title="吞嚥照護"
          />
          <Scene
            panHandlers={null}
            key="operatee"
            component={Operate}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="generalseee"
            component={Generalwardsee}
            hideNavBar={true}
          />
          <Scene
            panHandlers={null}
            key="Page22"
            component={Page2}
            hideNavBar="true"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="Page33"
            component={Page3}
            hideNavBar="true"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="Page44"
            component={Page4}
            hideNavBar="true"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="Page55"
            component={Page5}
            hideNavBar="true"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="inte2"
            component={Intensivecare2}
            navBarButtonColor="white"
            title="加護病房"
          />
          <Scene
            panHandlers={null}
            key="cautionn"
            component={Caution}
            navBarButtonColor="white"
            title="注意事項"
          />
          <Scene
            panHandlers={null}
            key="recoveryoutlinee"
            component={Recoveryoutline}
            navBarButtonColor="white"
            title="復健"
          />
          <Scene
            panHandlers={null}
            key="functionss"
            component={Functions}
            navBarButtonColor="white"
            title="職能治療"
          />
          <Scene
            panHandlers={null}
            key="physicall"
            component={Physical}
            navBarButtonColor="white"
            title="物理治療"
          />
          <Scene
            panHandlers={null}
            key="languagee"
            component={Language}
            navBarButtonColor="white"
            title="語言治療"
          />
          <Scene
            panHandlers={null}
            key="techh"
            component={Tech}
            navBarButtonColor="white"
            title="衛教"
            onRight={() => Actions.caution33()}
            rightTitle="住院小百科"
          />
          <Scene
            panHandlers={null}
            key="caution33"
            component={Caution3}
            navBarButtonColor="white"
            title="住院小百科"
          />
          <Scene
            panHandlers={null}
            key="a11"
            component={A1}
            navBarButtonColor="white"
            title="自我照護"
          />
          <Scene
            panHandlers={null}
            key="medoutlinee"
            component={Medoutline}
            navBarButtonColor="white"
            title="藥物"
          />
          <Scene
            panHandlers={null}
            key="medlistt"
            component={Medlist}
            title="藥品清單"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="recordd"
            component={Record}
            title="藥物紀錄"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="dischargeinstructionss"
            component={Dischargeinstructions}
            navBarButtonColor="white"
            title="出院須知"
          />
          <Scene
            panHandlers={null}
            key="eatt"
            component={Eat}
            navBarButtonColor="white"
            title="食"
          />
          <Scene
            panHandlers={null}
            key="eat11"
            component={Eat1}
            navBarButtonColor="white"
            title="比價網"
          />
          <Scene
            panHandlers={null}
            key="eat22"
            component={Eat2}
            navBarButtonColor="white"
            title="查驗登記網址"
          />
          <Scene
            panHandlers={null}
            key="eat33"
            component={Eat3}
            navBarButtonColor="white"
            title="許可資料集網址"
          />
          <Scene
            panHandlers={null}
            key="clothess"
            component={Clothes}
            navBarButtonColor="white"
            title="衣"
            onRight={() => Actions.clothes11()}
            rightTitle="觀看影片"
          />
          <Scene
            panHandlers={null}
            key="clothes11"
            component={Clothes1}
            navBarButtonColor="white"
            title="穿衣教學"
          />
          <Scene
            panHandlers={null}
            key="housee"
            component={House}
            navBarButtonColor="white"
            title="住"
          />
          <Scene
            panHandlers={null}
            key="walkk"
            component={Walk}
            navBarButtonColor="white"
            title="行"
          />
          <Scene
            panHandlers={null}
            key="recordss"
            component={Records}
            navBarButtonColor="white"
            title="紀錄"
          />
          <Scene
            panHandlers={null}
            key="calendarr"
            component={Calendars}
            navBarButtonColor="white"
            title="行事曆"
          />
          <Scene
            panHandlers={null}
            key="caree"
            component={Care}
            title="照護小幫手"
            navBarButtonColor="white"
          />
          <Scene
            panHandlers={null}
            key="upp"
            component={Up}
            navBarButtonColor="white"
            title="上肢衛教影片"
          />
          <Scene
            panHandlers={null}
            key="downn"
            component={Down}
            navBarButtonColor="white"
            title="下肢衛教影片"
          />
          <Scene
            panHandlers={null}
            key="sugerr"
            component={Suger}
            navBarButtonColor="white"
            title="血糖"
          />
          <Scene
            panHandlers={null}
            key="bloodd"
            component={Blood}
            navBarButtonColor="white"
            title="血壓"
          />
          <Scene
            panHandlers={null}
            key="waterr"
            component={Water}
            navBarButtonColor="white"
            title="飲水"
          />
          <Scene
            panHandlers={null}
            key="weightt"
            component={Weight}
            navBarButtonColor="white"
            title="體重"
          />
          <Scene
            panHandlers={null}
            key="sugerhh"
            component={Sugerh}
            navBarButtonColor="white"
            title="歷史紀錄"
          />
          <Scene
            panHandlers={null}
            key="waterhh"
            component={Waterh}
            navBarButtonColor="white"
            title="歷史紀錄"
          />
          <Scene
            panHandlers={null}
            key="bloodhh"
            component={Bloodh}
            navBarButtonColor="white"
            title="歷史紀錄"
          />
          <Scene
            panHandlers={null}
            key="weighthh"
            component={Weighth}
            navBarButtonColor="white"
            title="歷史紀錄"
          />
          <Scene
            panHandlers={null}
            key="qrcodee"
            component={Qrcode}
            navBarButtonColor="white"
            title="QRcode"
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'rgb(156,200,26)',
    // changing navbar color
  },
  navTitle: {
    fontSize: Dimensions.get('window').width * 0.06,
    color: 'white', // changing navbar title color
  },
});
