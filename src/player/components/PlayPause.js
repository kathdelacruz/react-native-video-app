import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';

const PlayPause = (props) => (
  <TouchableHighlight
    onPress={props.onPress}
    style={styles.container}
    // underlayColor="red"
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5,
    }}
  >
    {
      props.paused
      ? <Image source={require('../../../assets/play-button.png')} style={styles.button} />
      : <Image source={require('../../../assets/pause-button.png')} style={styles.button} />
    }
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
    marginRight: 10,
    marginVertical: 5,
  },
});

export default PlayPause;