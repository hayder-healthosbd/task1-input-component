import React, { Component, createRef } from 'react'
import { Text, StyleSheet, View, Button, Animated, Dimensions } from 'react-native'

export default class experimentModal extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  // fade in modal animation
  fadeInModal = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  // fade out modal animation
  fadeOutModal = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  componentDidMount() {
    this.fadeInModal();
  }

  componentWillUnmount() {
    this.fadeOutModal();
  }

  render() {
    return (
      <Animated.View style={{...styles.container, opacity: this.state.opacity}}>
        <Animated.View style={styles.modalOverlay}>
        </Animated.View>
        <Animated.View style={styles.modal}>
          {this.props.children}
        </Animated.View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
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
})
