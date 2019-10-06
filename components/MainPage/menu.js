import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Title,
  Button,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity,
  Alert,
} from 'react-native';
export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
    };
  }

  async componentWillMount() {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value != '') {
        this.setState({id: value});
      }
    } catch (error) {
      Alert.alert(error);
    }
  }

  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').height * 0.04,
            marginLeft: Dimensions.get('window').width * 0.02,
          }}>
          <Image
            style={{
              height: Dimensions.get('window').width * 0.07,
              width: Dimensions.get('window').width * 0.07,
            }}
            source={require('../../images/people.png')}
          />
          <Text
            style={{
              fontSize: Dimensions.get('window').height * 0.03,
              marginLeft: Dimensions.get('window').width * 0.06,
            }}>
            {this.state.id}，你好
          </Text>
        </View>

        <View
          style={{
            borderColor: 'grey',
            borderBottomWidth: 1,
            marginTop: Dimensions.get('window').width * 0.02,
          }}
        />

        <Content style={{backgroundColor: 'white'}}>
          <List>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginTop: Dimensions.get('window').width * 0.05,
                  marginLeft: Dimensions.get('window').width * 0.06,
                }}>
                <Icon
                  name="alert"
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => Alert.alert('敬請期待')}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: Dimensions.get('window').width * 0.05,
                    marginLeft: Dimensions.get('window').width * 0.045,
                    marginTop: Dimensions.get('window').width * 0.054,
                  }}>
                  提醒
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderColor: 'grey',
                borderBottomWidth: 1,
                marginLeft: Dimensions.get('window').width * 0.15,
                marginTop: Dimensions.get('window').width * 0.017,
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginTop: Dimensions.get('window').width * 0.05,
                  marginLeft: Dimensions.get('window').width * 0.06,
                }}>
                <Icon
                  name="people"
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => Alert.alert('敬請期待')}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: Dimensions.get('window').width * 0.05,
                    marginLeft: Dimensions.get('window').width * 0.045,
                    marginTop: Dimensions.get('window').width * 0.054,
                  }}>
                  基本資料
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderColor: 'grey',
                borderBottomWidth: 1,
                marginLeft: Dimensions.get('window').width * 0.15,
                marginTop: Dimensions.get('window').width * 0.01,
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginTop: Dimensions.get('window').width * 0.05,
                  marginLeft: Dimensions.get('window').width * 0.06,
                }}>
                <Icon
                  name="calendar"
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => Actions.calendarr()}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: Dimensions.get('window').width * 0.05,
                    marginLeft: Dimensions.get('window').width * 0.045,
                    marginTop: Dimensions.get('window').width * 0.054,
                  }}>
                  行事曆
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderColor: 'grey',
                borderBottomWidth: 1,
                marginLeft: Dimensions.get('window').width * 0.15,
                marginTop: Dimensions.get('window').width * 0.01,
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginTop: Dimensions.get('window').width * 0.05,
                  marginLeft: Dimensions.get('window').width * 0.06,
                }}>
                <Icon
                  name="home"
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => Actions.homee()}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: Dimensions.get('window').width * 0.05,
                    marginLeft: Dimensions.get('window').width * 0.045,
                    marginTop: Dimensions.get('window').width * 0.054,
                  }}>
                  首頁
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderColor: 'grey',
                borderBottomWidth: 1,
                marginLeft: Dimensions.get('window').width * 0.15,
                marginTop: Dimensions.get('window').width * 0.01,
              }}
            />

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginTop: Dimensions.get('window').width * 0.05,
                  marginLeft: Dimensions.get('window').width * 0.06,
                }}>
                <Icon
                  name="log-out"
                  style={{
                    fontSize: Dimensions.get('window').height * 0.05,
                  }}
                />
              </View>

              <TouchableOpacity onPress={() => Actions.loginn()}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: Dimensions.get('window').width * 0.05,
                    marginLeft: Dimensions.get('window').width * 0.045,
                    marginTop: Dimensions.get('window').width * 0.054,
                  }}>
                  登出
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderColor: 'grey',
                borderBottomWidth: 1,
                marginLeft: Dimensions.get('window').width * 0.15,
                marginTop: Dimensions.get('window').width * 0.01,
              }}
            />
          </List>
        </Content>
      </Container>
    );
  }
}
