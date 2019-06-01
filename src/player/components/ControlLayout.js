import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const ControlLayout = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, .8)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
  },
})

export default ControlLayout;