import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Animated, Dimensions } from 'react-native';
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
    const height = Dimensions.get("window").height - 60;

    return (
      <>
        <TouchableOpacity onPress={this.onOpen}>
          <Text>Open the modal</Text>
        </TouchableOpacity>
  
        <Modalize 
          ref={this.modalizeRef}
          HeaderComponent={<Header onClose={this.onClose} />}
          FooterComponent={<Button title="Apply Filter" />}
          modalHeight={height}
          // flatListProps={{
          //   data: filterOptions,
          //   renderItem: renderItem,
          //   keyExtractor: (item, index) => index.toString(),
          //   showsVerticalScrollIndicator: false,
          //   scrollEventThrottle: 16,
          //   removeClippedSubviews: true,
          //   maxToRenderPerBatch: 20
          // }}
          withHandle={true}
          useNativeDriver={true}
          snapPoint={height / 2 }
          handlePosition="outside"
          disableScrollIfPossible={false}
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