import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Animated } from 'react-native';
import { Modalize } from 'react-native-modalize';


import { filterOptions } from '../constants/mock';


const Header = ({ onClose }) => {
  return (
    <View style={styles.headerContainer}>
      <Button title="Close" onPress={onClose} />
      <Text style={styles.headerTitle}>Filter</Text>
    </View>
  );
}

const renderItem = ({item}) => {
  return (
    <View style={styles.filterOption}>
      <Text>{item}</Text>
    </View>
  );
}


export class ScrollableModal extends React.Component  {
  constructor() {
    super();
    this.modalizeRef =  React.createRef(null);
  }
  
  onOpen = () => {
    this.modalizeRef.current?.open();
  };

  onClose = () => {
    this.modalizeRef.current?.close();
  };

  render() {
    return (
      <>
        <TouchableOpacity onPress={this.onOpen}>
          <Text>Open the modal</Text>
        </TouchableOpacity>
  
        <Modalize 
          ref={this.modalizeRef}
          HeaderComponent={<Header onClose={this.onClose} />}
          FooterComponent={<Button title="Apply Filter" />}
          modalHeight={400}
          flatListProps={{
            data: filterOptions,
            renderItem: renderItem,
            keyExtractor: (item, index) => index.toString(),
            showsVerticalScrollIndicator: false,
            scrollEventThrottle: 16,
            removeClippedSubviews: true,
            maxToRenderPerBatch: 20
          }}
          withHandle={false}
          useNativeDriver={true}
        />
      </>
    );
  }
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    marginLeft: 12,
    fontSize: 16
  },
  filterOption: {
    padding: 10,
  }
});