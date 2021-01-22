import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HeaderContent extends Component {
  render() {
    const { onBackButtonPress, onResetButtonPress } = this.props;

    return (
      <View style={styles.container}>
        <AntDesign name="left" size={24} color="black" style={{ marginRight: 20 }} onPress={onBackButtonPress} />
        <Text style={styles.title}>Filters</Text>
        <View style={styles.resetButtonContainer}>
          <TouchableOpacity onPress={onResetButtonPress} activeOpacity={1}  >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 68,
    paddingHorizontal: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#eee',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    top: 4,
  },
  title: {
    fontSize: 19,
    lineHeight: 24,
  },
  resetButtonContainer: {
    marginLeft: 'auto',
  },
  resetButtonText: {
    lineHeight: 24,
    fontSize: 16,
  }
})
