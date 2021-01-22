import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { default as ReanimatedBottomSheet } from 'reanimated-bottom-sheet';

import HeaderContent from './HeaderContent';
import RenderContent from './RenderContent';

const sheetHeight = Dimensions.get('window').height - 20;

export default class BottomSheet extends Component {
  render() {
    const { sheetRef, onBackButtonPress, onResetButtonPress, applyFilterButtonHandler } =  this.props;

    return (
      <ReanimatedBottomSheet
        ref={sheetRef}
        snapPoints={[sheetHeight, sheetHeight - 180, 0]}
        borderRadius={0}
        initialSnap={1}
        enabledContentTapInteraction={false}
        enabledInnerScrolling={true}
        enabledGestureInteraction={true}
        enabledHeaderGestureInteraction={true}
        enabledContentGestureInteraction={true}
        renderHeader={() => (
          <HeaderContent 
            onBackButtonPress={onBackButtonPress}
            onResetButtonPress={onResetButtonPress}
          />
        )}
        renderContent={() => (
          <RenderContent
            applyFilterButtonHandler={applyFilterButtonHandler}
          />
        )}
      />
    )
  }
}

const styles = StyleSheet.create({});
