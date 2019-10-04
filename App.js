/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  YellowBox,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Orientation from 'react-native-orientation';

import {Icon} from 'native-base';

YellowBox.ignoreWarnings(['Remote debugger']);

LocaleConfig.locales.fr = {
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  monthNamesShort: [
    '1.',
    '2.',
    '3.',
    '4.',
    '5.',
    '6.',
    '7.',
    '8.',
    '9.',
    '10.',
    '11.',
    '12.',
  ],
  dayNames: [
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
    '星期日',
  ],
  dayNamesShort: ['日.', '一.', '二.', '三.', '四.', '五.', '六.'],
};

LocaleConfig.defaultLocale = 'fr';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
    Orientation.lockToPortrait();
    // Orientation.lockToLandscape();
  }

  componentDidMount() {
    var d = new Date();

    this.setState({
      selected: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
      Ctime: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
    });
  }

  onDayPress(day) {
    console.log('onDayPress', day);
    const aa = day.dateString;
    this.setState({selected: aa});
  }

  render() {
    const qq = [
      {id: 0, name: 'abc'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'abc'},
      {id: 3, name: 'abc'},
      {id: 4, name: 'abc'},
    ];
    console.log('App');

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round((dimensions.width * 10) / 16);
    const imageWidth = dimensions.width;

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}

            {/* <View>
              <Image
                style={{
                  height: imageHeight,
                  width: imageWidth,
                }}
                source={require('./images/logintitle.png')}
              />
            </View> */}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Icon
                  name="menu"
                  style={{
                    fontSize: Dimensions.get('window').width * 0.08,
                    color: 'black',
                    marginLeft: Dimensions.get('window').width * 0.03,
                  }}
                />
                {qq.map(val => (
                  <Text key={val.id} style={styles.sectionTitle}>
                    {val.id}
                  </Text>
                ))}

                <Calendar
                  onDayPress={d => this.onDayPress(d)}
                  style={styles.calendar}
                  hideExtraDays
                  markedDates={{
                    [this.state.selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedDotColor: 'orange',
                    },
                  }}
                />
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;
