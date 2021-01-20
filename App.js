import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Input from "./components/Input";
import CustomModal from './components/CustomModal';
import {ScrollableModal} from './components/ScrollableModal';
import PracticeModal from './components/PracticeModal';
import { theme } from './constants';

export default class App extends Component {
  render() {
    console.log('[App]: running...')
    return (
      <View style={styles.container}>
        {/* <CustomModal category="Filter" /> */}
        {/* <PracticeModal /> */}
        <ScrollableModal />


        <Input placeholder="Email" label="Email" />
        <Input placeholder="Password" label="Password" />
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
