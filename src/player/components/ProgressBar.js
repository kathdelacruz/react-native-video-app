import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

const Progressbar = (props) =>  (
  <View style={styles.container}>
    <View style={[
      styles.buffer,
      { width: `${props.buffer}%`  }
    ]}/>
    <View style={[
      styles.progress,
      { width: `${props.progress}%`  }
    ]}/>
    <View style={[
      styles.button,
      { left: `${props.progress}%` }
    ]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, .8)',
    position: 'absolute',
    height: 4,
    width: '100%',
    bottom: '95%',
  },
  button: {
    backgroundColor: 'red',
    height: 10,
    width: 10,
    bottom: -3,
    position: 'absolute',
    zIndex: 4,
    borderRadius: 5,
  },
  progress: {
    backgroundColor: 'rgba(255, 0, 0, .8)',
    width: 0,
    height: 4,
    position: 'absolute',
    zIndex: 3,
  },
  buffer: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    width: 0,
    height: 4,
    position: 'absolute',
    zIndex: 2,
  }
});

export default Progressbar;