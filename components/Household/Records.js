import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  AsyncStorage,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
    };

    AsyncStorage.getItem('id').then(value => {
      this.setState({id: value});
    });
  }

  h1() {
    if (this.state.h1 === 0) {
      return (
        <Image style={styles.img} source={require('../../images/blood.png')} />
      );
    } else {
      return (
        <Image
          style={styles.img}
          source={require('../../images/blood_2.png')}
        />
      );
    }
  }

  h2() {
    if (this.state.h2 === 0) {
      return (
        <Image style={styles.img} source={require('../../images/suger.png')} />
      );
    } else {
      return (
        <Image
          style={styles.img}
          source={require('../../images/suger_2.png')}
        />
      );
    }
  }

  h3() {
    if (this.state.h3 === 0) {
      return (
        <Image style={styles.img} source={require('../../images/water.png')} />
      );
    } else {
      return (
        <Image
          style={styles.img}
          source={require('../../images/water_2.png')}
        />
      );
    }
  }

  h4() {
    if (this.state.h4 === 0) {
      return (
        <Image style={styles.img} source={require('../../images/weight.png')} />
      );
    } else {
      return (
        <Image
          style={styles.img}
          source={require('../../images/weight_2.png')}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <TouchableHighlight
            underlayColor="white"
            onShowUnderlay={() => {
              this.setState({h1: 1});
            }}
            onHideUnderlay={() => {
              this.setState({h1: 0});
            }}
            style={styles.Button}
            onPress={() => Actions.bloodd({id: this.state.id})}>
            <View>{this.h1()}</View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="white"
            onShowUnderlay={() => {
              this.setState({h2: 1});
            }}
            onHideUnderlay={() => {
              this.setState({h2: 0});
            }}
            style={styles.Button2}
            onPress={() => Actions.sugerr({id: this.state.id})}>
            <View>{this.h2()}</View>
          </TouchableHighlight>
        </View>

        <View style={styles.flexRow}>
          <TouchableHighlight
            underlayColor="white"
            onShowUnderlay={() => {
              this.setState({h3: 1});
            }}
            onHideUnderlay={() => {
              this.setState({h3: 0});
            }}
            style={styles.Button}
            onPress={() => Actions.waterr({id: this.state.id})}>
            <View>{this.h3()}</View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="white"
            onShowUnderlay={() => {
              this.setState({h4: 1});
            }}
            onHideUnderlay={() => {
              this.setState({h4: 0});
            }}
            style={styles.Button2}
            onPress={() => Actions.weightt({id: this.state.id})}>
            <View>{this.h4()}</View>
          </TouchableHighlight>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row'}}>
          <View style={styles.triangleCornerBottomLeft} />
          <View style={styles.triangleCornerHellowLeft} />
          <View style={styles.triangleCornerHellowRight} />
        </View>



        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: Dimensions.get('window').height * 0.03,
          }}>
          <Image
            style={styles.img2}
            source={require('../../images/logo1.png')}
          />
        </View>
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
  flexRow: {
    flexDirection: 'row',
  },
  img: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height * 0.25,
  },
  Button: {
    borderRightWidth: 0.4,
    borderRightColor: 'black',
    borderBottomWidth: 0.8,
    borderBottomColor: 'black',
  },
  Button2: {
    borderLeftWidth: 0.4,
    borderLeftColor: 'black',
    borderBottomWidth: 0.8,
    borderBottomColor: 'black',
  },
  img2: {
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').height * 0.3,
    marginTop: Dimensions.get('window').height * 0.1,
  },
  triangleCornerBottomLeft: {
    width: 0,
    height: 0,
    backgroundColor: '#80941d',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: '#80941d',
    transform: [{rotate: '270deg'}],
    margin: 2,
  },
  triangleCornerHellowLeft: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 90,
    borderTopWidth: 90,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    transform: [{rotate: '270deg'}],
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  triangleCornerHellowRight: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 90,
    borderTopWidth: 90,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    transform: [{rotate: '90deg'}],
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
});
