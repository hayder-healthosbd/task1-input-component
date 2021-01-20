import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Animated } from "react-native";

import { theme } from '../constants';

const Input = (props) => {
  const { label } = props;
  const [placeholder, setPlaceholder] = useState(props.placeholder);
  const [onFocus, setOnFocus] = useState(false);
  const labelOpacity = useState(new Animated.Value(0))[0];

  const onFocuslabelAnimation = Animated.timing(labelOpacity, {
    toValue: 1,
    duration: 100,
    useNativeDriver: true
  });

  const onBlurlabelTextAnimation = Animated.timing(labelOpacity, {
    toValue: 0,
    duration: 100,
    useNativeDriver: true
  });

  const onFocusHandler = () => {
    onFocuslabelAnimation.start();
    setOnFocus(true);
  }
  
  const onBlurHandler = () => {
    onBlurlabelTextAnimation.start();
    setOnFocus(false);
  }

  useEffect(() => {
    if (onFocus) {
      setPlaceholder("");
    } else {
      setPlaceholder(props.placeholder);
    }
  }, [onFocus]);
  

  const inputStyles = StyleSheet.flatten([
    styles.inputOnBlur,
    onFocus && styles.inputOnFocus
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput 
          style={inputStyles} 
          placeholder={placeholder}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <Animated.View style={{ ...styles.label, opacity: labelOpacity }}>
          <Text style={styles.textLabel}>{label}</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  wrapper: {
    position: 'relative',
    width: "90%",
    height: 50,
    alignItems: "center",
    
    borderRadius: 6,
    marginVertical: 4,
  },
  inputOnBlur: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: theme.colors.textInputBorderColorOnBlur,
    borderRadius: 6,
    padding: 12,
    backgroundColor: 'white'
  },
  inputOnFocus: {
    borderColor: theme.colors.textInputBorderColorOnFocus,
  },
  label: {
    position: 'absolute',
    backgroundColor: "white",
    paddingHorizontal: 4,
    top: -2,
    left: 16,
    borderRadius: 5,
    
  },
  textLabel: {
    position: 'relative',
    color: 'purple',
    fontSize: 11,
    top: -5,
    fontWeight: "600",
  }
});
