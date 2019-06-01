import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native';

const Fullscreen = (props) => (
  <TouchableHighlight
    onPress={props.onPress}
    style={styles.container}
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5,
    }}
  >
    <Image source={require('../../../assets/fullscreen-button.png')} style={styles.button} />
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    width: 18,
    height: 18,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginVertical: 5,
  },
});

export default Fullscreen;