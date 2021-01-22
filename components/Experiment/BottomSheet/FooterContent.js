import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FooterContent extends Component {
  render() {
    const { onPress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPress} >
            <Text style={styles.buttonText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'white',
    marginTop: 'auto',
    elevation: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#eee'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e81a1a',
    borderRadius: 10,
  },
  buttonText: {
    // paddingHorizontal: 20,
    // paddingVertical: 14,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '700'
  }
});
