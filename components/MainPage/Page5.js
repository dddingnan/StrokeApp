import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
  Header,
  Left,
  Right,
  Body,
  Title,
  Drawer,
  StyleProvider,
} from 'native-base';
import commonstyle from '../themes/variables/commonColor1';
import getTheme from '../themes/components';

import {Actions} from 'react-native-router-flux';
import Index1 from './Index1.js';
import Index2 from './Index2.js';
import Index3 from './Index3.js';
import Index4 from './Index4.js';
import Index5 from './Index5.js';
import SideBar from './menu.js';

export default class Page5 extends Component {
  constructor(props) {
    super(props);
    this.state = {index: 4};
  }
  closeDrawer() {
    this._drawer._root.close();
  }
  openDrawer() {
    this._drawer._root.open();
  }

  switchScreen(index) {
    this.setState({index: index});
  }

  Changecolor() {
    this.setState({index: 0});
  }

  Changecolor1() {
    this.switchScreen(1);
  }
  Changecolor2() {
    this.switchScreen(2);
  }
  Changecolor3() {
    this.switchScreen(3);
  }
  Changecolor4() {
    this.switchScreen(4);
  }

  a1() {
    if (this.state.index == 0) {
      return (
        <Text
          style={{
            color: 'white',
            fontSize: Dimensions.get('window').width * 0.05,
            fontWeight: '900',
          }}>
          急診
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: 'black',
            fontSize: Dimensions.get('window').width * 0.05,
          }}>
          急診
        </Text>
      );
    }
  }

  a2() {
    if (this.state.index == 1) {
      return (
        <Text
          style={{
            color: 'white',
            fontSize: Dimensions.get('window').width * 0.04,
            fontWeight: '900',
          }}>
          加護病房
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: 'black',
            fontSize: Dimensions.get('window').width * 0.04,
          }}>
          加護病房
        </Text>
      );
    }
  }

  a3() {
    if (this.state.index == 2) {
      return (
        <Text
          style={{
            color: 'white',
            fontSize: Dimensions.get('window').width * 0.05,
            fontWeight: '900',
          }}>
          病房
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: 'black',
            fontSize: Dimensions.get('window').width * 0.05,
          }}>
          病房
        </Text>
      );
    }
  }

  a4() {
    if (this.state.index == 3) {
      return (
        <Text
          style={{
            color: 'white',
            fontSize: Dimensions.get('window').width * 0.05,
            fontWeight: '900',
          }}>
          出院
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: 'black',
            fontSize: Dimensions.get('window').width * 0.05,
          }}>
          出院
        </Text>
      );
    }
  }

  a5() {
    if (this.state.index == 4) {
      return (
        <Text
          style={{
            color: 'white',
            fontSize: Dimensions.get('window').width * 0.05,
            fontWeight: '900',
          }}>
          居家
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: 'black',
            fontSize: Dimensions.get('window').width * 0.05,
          }}>
          居家
        </Text>
      );
    }
  }

  render() {
    let AppComponent = null;

    if (this.state.index == 0) {
      AppComponent = Index1;
    } else if (this.state.index == 1) {
      AppComponent = Index2;
    } else if (this.state.index == 2) {
      AppComponent = Index3;
    } else if (this.state.index == 3) {
      AppComponent = Index4;
    } else {
      AppComponent = Index5;
    }

    return (
      <Container>
        <Content scrollEnabled={false}>
          <View
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}>
            <AppComponent />
          </View>
        </Content>

        <StyleProvider style={getTheme(commonstyle)}>
          <Footer>
            <FooterTab>
              <Button
                style={{borderRightWidth: 1, borderColor: 'grey'}}
                active={this.state.index == 0}
                onPress={() => this.Changecolor()}>
                {this.a1()}
              </Button>
              <Button
                style={{borderRightWidth: 1, borderColor: 'grey'}}
                active={this.state.index == 1}
                onPress={() => this.Changecolor1()}>
                {this.a2()}
              </Button>
              <Button
                style={{borderRightWidth: 1, borderColor: 'grey'}}
                active={this.state.index == 2}
                onPress={() => this.Changecolor2()}>
                {this.a3()}
              </Button>
              <Button
                style={{borderRightWidth: 1, borderColor: 'grey'}}
                active={this.state.index == 3}
                onPress={() => this.Changecolor3()}>
                {this.a4()}
              </Button>
              <Button
                style={{borderRightWidth: 1, borderColor: 'grey'}}
                active={this.state.index == 4}
                onPress={() => this.Changecolor4()}>
                {this.a5()}
              </Button>
            </FooterTab>
          </Footer>
        </StyleProvider>
      </Container>
    );
  }
}
