import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { AntDesign } from '@expo/vector-icons'; 

const sheetHeight = Dimensions.get('window').height - 20;

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

  renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: sheetHeight,
      }}
    >
      <Text>Swipe down to close</Text>
      <Text>Number: {this.state.number}</Text>
    </View>
  );

  renderHeader = () => (
    <View style={styles.sheetHeaderContainer}>
      <AntDesign name="left" size={24} color="black" style={{ marginRight: 20 }} />
      <Text style={styles.sheetHeaderTitle}>Filters</Text>
      <Text style={{ marginLeft: 'auto', lineHeight: 25, }}>Reset</Text>
    </View>
  )

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
              onPress={() => this.sheetRef.current.snapTo(1)}
            />
            <Text>This text is under bootom sheet</Text>
            <Button
              title="Increase Number"
              onPress={this.changeBooleanHandler}
            />
          </View>
        </View>

        <BottomSheet
          ref={this.sheetRef}
          snapPoints={[sheetHeight, sheetHeight - 180, 0]}
          borderRadius={0}
          initialSnap={1}
          renderContent={this.renderContent}
          renderHeader={this.renderHeader}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  sheetHeaderContainer: {
    backgroundColor: 'white',
    // paddingVertical: 18,
    height: 68,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    top: 4,
  },
  sheetHeaderTitle: {
    fontSize: 19,
    lineHeight: 25,
  }
});