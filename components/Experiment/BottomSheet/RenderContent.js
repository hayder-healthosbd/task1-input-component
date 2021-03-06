import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import FooterContent from './FooterContent';
import { filterOptions } from '../../../constants';

const sheetHeight = Dimensions.get('window').height;

const renderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );
}

export default class RenderContent extends Component {

  render() {
    const { applyFilterButtonHandler } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            data={filterOptions}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={{ flex: 1 }}
          />
        </View>

        <FooterContent
          onPress={applyFilterButtonHandler}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexBasis: sheetHeight - 88,
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 4,
  },
  itemContainer: {
    marginHorizontal: 16,
    borderTopWidth: 1,
    borderColor: '#f2f2f2',
  },
  itemText: {
    fontSize: 17,
    color: '#363636',
    paddingVertical: 16,
  }
})
