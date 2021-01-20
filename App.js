import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

import Input from "./components/Input";
import CustomModal from './components/CustomModal';
import {ScrollableModal} from './components/ScrollableModal';
import PracticeModal from './components/PracticeModal';
import { theme } from './constants';

import ExperimentModal from './components/Experiment/ExperimentModal'

export default class App extends Component {
  render() {
    console.log('[App]: running...')
    return (
      <View style={styles.container}>
        {/* <CustomModal category="Filter" /> */}
        {/* <PracticeModal /> */}
        <ScrollableModal />

        {/* <ExperimentModal /> */}


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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary
  },
});
