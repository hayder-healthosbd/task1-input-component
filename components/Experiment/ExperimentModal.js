import React, { Component, createRef } from 'react';
import Animated, { Easing } from 'react-native-reanimated'
import { Text, StyleSheet, View, Button, Dimensions } from 'react-native';

export default class experimentModal extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  // fade in modal animation
  fadeInModal = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      easing: Easing.in(Easing.ease),
    }).start();
  }

  // fade out modal animation
  fadeOutModal = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 200,
      easing: Easing.in(Easing.ease),
    }).start();
  }

  componentDidMount() {
    this.fadeInModal();
  }

  // componentDidUpdate(prevState, prevProps) {
  //   console.log('in cmp update');
  //   if ((prevProps.isVisible !== this.props.isVisible) && this.props.isVisible === true) {
  //     this.fadeOutModal();
  //   }
  // }

  componentWillUnmount() {
    console.log('modal unmounted!');
    this.fadeOutModal();
  }

  render() {
    console.log('[ExperimentModal]: ', this.props.isVisible);

    const modalContainer = (
      <Animated.View style={{ ...styles.container, opacity: this.state.opacity} }>
        <Animated.View style={styles.modalOverlay}>
        </Animated.View>
        <Animated.View style={styles.modal}>
          {this.props.children}
        </Animated.View>
      </Animated.View>
    );

    return modalContainer;

  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  modalOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  modal: {
    width: Dimensions.get('window').width,
    height: 500,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    position: 'absolute',
  }
});
