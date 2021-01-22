import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import BottomSheet from './BottomSheet/BottomSheet';


export default class App extends Component {
  constructor() {
    super();

    this.sheetRef = React.createRef(null);
  }

  state = {
    boolean: false,
    number: 0,
  }

  changeBooleanHandler = () => {
    this.setState({ bool: !this.state.boolean, number: this.state.number + 1 });
    console.log('changed boolean handler');
  }

  bottomSheetOpenHandler = () => {
    this.sheetRef.current.snapTo(1);
  }

  backButtonPressHandler = () => {
    console.log('[parent]: BACK button pressed on bottom sheet.');
    this.sheetRef.current.snapTo(2);
  }

  resetButtonPressHandler = () => {
    console.log('[parent]: RESET button pressed on bottom sheet.');
    this.sheetRef.current.snapTo(2);
  }

  applyFilterButtonHandler = () => {
    console.log('[parent]: APPLY FILTER button pressed on bottom sheet');
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: 'wheat',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <View style={{ marginTop: 30 }}>
            <Button
              title="Open Bottom Sheet"
              onPress={this.bottomSheetOpenHandler}
            />
            <Text>This text is under bootom sheet</Text>
            <Button
              title="Increase Number"
              onPress={this.changeBooleanHandler}
            />
          </View>
        </View>

        <BottomSheet 
          sheetRef={this.sheetRef} 
          onBackButtonPress={this.backButtonPressHandler} 
          onResetButtonPress={this.resetButtonPressHandler}
          applyFilterButtonHandler={this.applyFilterButtonHandler}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  
});