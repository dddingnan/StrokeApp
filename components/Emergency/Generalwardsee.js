import React, {Component} from 'react';
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

export default class Generalwardsee extends Component {
  confirm() {
    Actions.Pickwardd();
  }

  render() {
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
                一般病房觀察
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
          <Text
            style={{
              color: '#ba222c',
              fontWeight: '900',
              fontSize: Dimensions.get('window').width * 0.065,
              marginTop: Dimensions.get('window').height * 0.06,
              margin: Dimensions.get('window').height * 0.03,
            }}>
            出血型病人急性期治療：
          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: Dimensions.get('window').height * 0.03,
              marginLeft: Dimensions.get('window').height * 0.03,
              marginRight: Dimensions.get('window').height * 0.03,
              marginTop: Dimensions.get('window').height * 0.03,
            }}>
            出血型中風急性期的治療會給予點滴注射，可以維持腦部有足夠灌流，這時血壓的維持很重要，依據腦中風協會中風標準處置流程，只要舒張壓維持小於180和收縮壓小於105，在此範圍內部需要降壓藥物使用，血壓太低會使腦部血流不夠，太高有在出血風險。
            {'\n'}
            可以將病人床頭搖高30度，用來降低腦部壓力，這時會使用將腦壓藥物用來快入降低腦壓及輕腦水腫，副作用有利尿、低血壓，家屬要注意排尿量及協助注意病患的狀況，包括意識是否清醒、有沒有腦壓升高徵象。如：頭痛、噁心、手腳有沒有沒力感，若是病人一直睡，叫不醒或有任何徵象時，應立即告訴醫護人員處理以免延誤處理的時機。
          </Text>
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
  Button: {
    marginTop: Dimensions.get('window').height * 0.01,
    backgroundColor: 'rgb(156,200,26)',
    borderRadius: 20,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
