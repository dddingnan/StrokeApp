import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  processColor,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import {LineChart} from 'react-native-charts-wrapper';
import update from 'immutability-helper';

export default class Waterh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 1,
      enabled: false,
      data1: {},
      xAxis: {},
      yAxis: {},
      legend: {
        enabled: true,
        textColor: processColor('black'),
        textSize: 12,
        position: 'BELOW_CHART_RIGHT',
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
        custom: {
          colors: [processColor('rgb(156,200,26)')],
          labels: ['飲水量'],
        },
      },
      marker: {
        enabled: true,
        markerColor: processColor('rgb(156,200,26)'),
        textColor: processColor('white'),
        textSize: 15,
      },
      id: '',
      array: [],
      at: [],
      test: false,
    };

    fetch(
      'http://120.126.15.121:8088/Brain_stroke_APP/phy_record/drink_select.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.id,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        var split = responseJson.split('@_/_tr_');

        for (let data of split) {
          var slite = data.split('@_/_td_');
          var x = slite[0];
          var y = slite[1];
          var marker = slite[2];
          var tt = slite[3];
          var xi = parseInt(x);
          var yi = parseInt(y);

          this.setState(prevState => ({
            array: [
              ...prevState.array,
              {
                x: xi,
                y: yi,
                marker: marker,
              },
            ],
          }));

          this.setState(prevState => ({
            at: [...prevState.at, tt],
          }));
        }

        this.setState(
          update(this.state, {
            xAxis: {
              $set: {
                textColor: processColor('black'),
                textSize: 12,
                gridColor: processColor('black'),
                gridLineWidth: 1,
                axisLineColor: processColor('darkgray'),
                axisLineWidth: 1,
                gridDashedLine: {
                  lineLength: 10,
                  spaceLength: 0,
                },
                avoidFirstLastClipping: true,
                position: 'BOTTOM',
                drawGridLines: false,
                drawLabels: true,
                drawAxisLine: true,
                valueFormatter: this.state.at,
                granularityEnabled: true,
                granularity: 1,
              },
            },
            yAxis: {
              $set: {
                left: {
                  drawGridLines: false,
                  axisMinimum: 0,
                  axisMaximum: 4000,
                  labelCountForce: true,
                  granularityEnabled: true,
                  granularity: 25,
                },
                right: {
                  drawGridLines: false,
                  axisMinimum: 0,
                  axisMaximum: 4000,
                  labelCountForce: true,
                  granularityEnabled: true,
                  granularity: 25,
                },
              },
            },
            data1: {
              $set: {
                dataSets: [
                  {
                    values: this.state.array,
                    label: 'length',
                    config: {
                      lineWidth: 2.5,
                      drawCubicIntensity: 0.4,
                      circleRadius: 5,
                      drawHighlightIndicators: false,
                      circleRadius: 3,
                      circleColor: processColor('black'),
                      highlightColor: processColor('darkgray'),
                      color: processColor('rgb(156,200,26)'),
                      drawFilled: true,
                      fillColor: processColor('white'),
                      fillAlpha: 45,
                      valueTextSize: 10,
                      dashedLine: {
                        lineLength: 11,
                        spaceLength: 0,
                      },
                    },
                  },
                ],
              },
            },
          }),
        );
        this.setState({test: true});
      })
      .catch(error => {
        console.log(error);
      });
  }

  con() {
    if (this.state.test == true) {
      return (
        <LineChart
          style={styles.chart}
          data={this.state.data1}
          xAxis={this.state.xAxis}
          yAxis={this.state.yAxis}
          legend={this.state.legend}
          marker={this.state.marker}
          chartDescription={{text: '飲水量'}}
          doubleTapToZoomEnabled={false}
        />
      );
    } else {
      return (
        <View style={{marginTop: Dimensions.get('window').height * 0.3}}>
          <ActivityIndicator size="large" color="black" />
          <View style={{alignItems: 'center'}}>
            <Text style={{marginTop: Dimensions.get('window').height * 0.04}}>
              正在從伺服器取得資料
            </Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return <View style={styles.chart}>{this.con()}</View>;
  }
}

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
});
