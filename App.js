/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, ViewPagerAndroid } from 'react-native'

const rnVersion = '0.52.0'

export default class App extends Component<{}> {
  constructor (props) {
    super(props)

    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      testWidth: '99%'
    }
  }

  onChangeText = index =>
    text => {
      this.setState({[`text${index}`]: text})
    }

  componentDidMount () {
    setTimeout(() => {
      this.setState({testWidth: '100%'})
    }, 100)
  }

  render () {
    return (
      <ViewPagerAndroid
        keyboardShouldPersistTaps={'handled'}
        style={{flex: 1}}
      >
        {/*First tab*/}
        <View key={'123213'} style={styles.container} keyboardShouldPersistTaps={'handled'}>
          <Text>
            {`React Native version: ${rnVersion}`}
          </Text>

          <Text>
            {'First tab, there is another one on the right ==>'}
          </Text>

          <View style={styles.inputsWrap}>
            <TextInput
              value={this.state.text1} onChangeText={this.onChangeText(1)}
              placeholder={'Single-line, you can copy-paste here'}
            />

            <TextInput
              value={this.state.text2} onChangeText={this.onChangeText(2)}
              multiline
              placeholder={'Multi-line, can\'t copy-paste'}
            />

            <TextInput
              value={this.state.text3} onChangeText={this.onChangeText(3)}
              multiline
              placeholder={'Multiline with hacks, can copy-paste'}
              style={{width: this.state.testWidth}}
            />
          </View>
        </View>

        {/*Second tab*/}
        <View key={'asdasd'} style={styles.container} keyboardShouldPersistTaps={'handled'}>
          <Text>
            {'Second tab'}
          </Text>

          <View style={styles.inputsWrap}>
            <TextInput
              value={this.state.text4} onChangeText={this.onChangeText(4)}
              placeholder={'Single-line, you can copy-paste here'}
            />

            <TextInput
              value={this.state.text5} onChangeText={this.onChangeText(5)}
              multiline
              placeholder={'Multi-line, can\'t copy-paste'}
            />

            <TextInput
              value={this.state.text6} onChangeText={this.onChangeText(6)}
              multiline
              placeholder={'Multiline with hacks, can copy-paste'}
              style={{width: this.state.testWidth}}
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
