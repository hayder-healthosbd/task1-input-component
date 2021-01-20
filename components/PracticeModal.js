import React, { Component, createRef } from 'react';
import { Text, StyleSheet, View, Button, ScrollView, FlatList } from 'react-native';
import Modal from 'react-native-modal';

import { filterOptions } from '../constants/mock';

const renderItem = ({item}) => {
  return (
    <View style={styles.filterOption}>
      <Text>{item}</Text>
    </View>
  );
}

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: true, scrollOffset: null };
    this.scrollViewRef = createRef();
  }

  modalVisibleHandler = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.y,
    });
  };

  handleScrollTo = p => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };

  

  render() {
    console.log('runs fine');

    return (
      <View>
        <Button title="Open Modal" onPress={this.modalVisibleHandler} />

        <Modal 
          isVisible={this.state.isModalVisible}
          style={styles.modal}
        >
          <View style={styles.scrollableModal}>
            <View style={styles.topContent}>
              <Button title="close" onPress={this.modalVisibleHandler} />
              <Text style={styles.category}>{this.props.category}</Text>
            </View>
            
            {/* <Text style={{ backgroundColor: 'yellow'}}>Hello world</Text> */}
          </View>
        </Modal>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  topContent: {
    flexDirection: "row",
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  filterOptionsContainer: {
    flexGrow: 1,
  },  
  category: {
    fontSize: 17,
    marginLeft: 10,
  },
  scrollableModal: {
    height: 300,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
