import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

import Input from "./components/Input";
import CustomModal from './components/CustomModal';
import {ScrollableModal} from './components/ScrollableModal';
import PracticeModal from './components/PracticeModal';
import { theme } from './constants';


import ExperimentModal from './components/Experiment/ExperimentModal'
import RNSBottomSheet from './components/Experiment/RNSBottomSheet';
import RNRBottomSheet from './components/Experiment/RNRBottomSheet';


export default class App extends Component {
  constructor() {
    super();

    this.timer = React.createRef(null);
  }

  state = {
    isVisible: false,
  };

  toggleModal = () => {
    if (this.state.isVisible) {
      this.timer.current = setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 250);
    } else {
      this.setState({ isVisible: !this.state.isVisible });
    }
  }

  componentDidMount() {
    if (this.timer.current !== null && this.timer.current) {
      clearTimeout(this.timer.current);
      this.timer.current = null;
    }
  }

  render() {
    console.log('[App]: running...');
    return (
      <View style={styles.container}>
        {/* <CustomModal category="Filter" /> */}
        {/* <PracticeModal /> */}
        {/* <ScrollableModal /> */}

        {/* <RNSBottomSheet /> */}
        <RNRBottomSheet />


        {/* { this.state.isVisible ? <ExperimentModal isVisible={this.state.isVisible} /> : null}
        <Button title="Open experimental modal" onPress={this.toggleModal} />
        <Button title="close" onPress={this.toggleModal} /> */}

        

        {/* <Input placeholder="Email" label="Email" />
        <Input placeholder="Password" label="Password" /> */}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: theme.colors.primary
  },
});
