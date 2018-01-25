/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text, TextInput,
  View, ViewPagerAndroid
} from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
       'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
           'Shake or press menu button for dev menu'
})

const rnVersion = '0.52.0'

export default class App extends Component<{}> {
  constructor (props) {
    super(props)

    this.state = {
      testText: '',
      testText2: '',
      testText3: '',
      testText4: ''
    }
  }

  onChangeText = text => {
    this.setState({testText: text})
  }

  onChangeText2 = text => {
    this.setState({testText2: text})
  }

  onChangeText3 = text => {
    this.setState({testText3: text})
  }

  onChangeText4 = text => {
    this.setState({testText4: text})
  }

  render () {
    return (
      <ViewPagerAndroid
        peekEnabled={false}
        scrollEnabled={true}
        style={{flex: 1}}
      >
        <View key={'123213'} style={styles.container}>
          <Text>
            {`Hello there, imma first tab, RN version: ${rnVersion}`}
          </Text>

          <View style={styles.inputsWrap}>
            <TextInput
              value={this.state.testText} onChangeText={this.onChangeText}
              placeholder={'You can paste here'}
            />
            <TextInput
              value={this.state.testText2} onChangeText={this.onChangeText2}
              multiline
              placeholder={'But not here'}
            />
          </View>
        </View>
        <View key={'asdasd'} style={styles.container}>
          <Text>
            {'Hello there, imma second tab'}
          </Text>

          <View style={styles.inputsWrap}>
            <TextInput
              value={this.state.testText3} onChangeText={this.onChangeText3}
              placeholder={'You can paste here'}
            />
            <TextInput
              value={this.state.testText4} onChangeText={this.onChangeText4}
              multiline
              placeholder={'But not here'}
            />
          </View>
        </View>
      </ViewPagerAndroid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%'
  },
  inputsWrap: {
    flex: 1,
    width: '100%',
    maxHeight: 500
  }
})
