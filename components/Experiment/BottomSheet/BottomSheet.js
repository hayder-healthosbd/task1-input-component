import React, { Component, createRef } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { default as ReanimatedBottomSheet } from 'reanimated-bottom-sheet';

import HeaderContent from './HeaderContent';
import RenderContent from './RenderContent';

const sheetHeight = Dimensions.get('window').height - 20;

class BottomSheet extends Component {
  constructor() {
    super();

    this.isScrollable = createRef();
  }

  render() {
    const { sheetRef, onBackButtonPress, onResetButtonPress, applyFilterButtonHandler } =  this.props;
    this.isScrollable.current = true;
    console.log('isScrollable:', this.isScrollable.current);

    return (
      <ReanimatedBottomSheet
        ref={sheetRef}
        snapPoints={[sheetHeight, sheetHeight - 180, 0]}
        borderRadius={0}
        initialSnap={1}
        enabledContentTapInteraction={false}
        enabledInnerScrolling={this.isScrollable.current}
        enabledGestureInteraction={true}
        enabledHeaderGestureInteraction={true}
        enabledContentGestureInteraction={true}
        // onOpenEnd={() => this.isScrollable.current = true}
        // onCloseStart={() => this.isScrollable.current = false}
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

export default React.memo(BottomSheet);

const styles = StyleSheet.create({});
