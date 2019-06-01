import React, { Component } from 'react';
import Video from 'react-native-video';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';

import Layout from '../components/PlayerLayout';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';
import Fullscreen from '../components/Fullscreen';
import ProgressBar from '../components/ProgressBar';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullscreen: false,
    progress: 0,
    buffer: 0,
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering,
    });
  }

  onLoad = () => {
    this.setState ({
      loading: false,
    });
  }

  playPause = () => {
    this.setState(prevState => ({ paused: !prevState.paused }));
  }

  fullscreen = () => {
    this.setState(prevState => ({ fullscreen: !prevState.fullscreen }));
  }

  progressBar = ({ currentTime, playableDuration, seekableDuration }) => {
    this.setState({
      progress: (currentTime/seekableDuration)*100,
      buffer: (playableDuration/seekableDuration)*100
    });
    console.log(this.state);
  }

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="cover"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            fullscreen={this.state.fullscreen}
            onFullscreenPlayerDidDismiss={() => this.setState({ fullscreen: false })}
            onProgress={this.progressBar}
          />
        }
        loader={
          <ActivityIndicator color="white" />
        }
        controls={
          <ControlLayout style={styles.controlContainer}>
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <ProgressBar
              progress={this.state.progress}
              buffer={this.state.buffer}
            />
            <Fullscreen onPress={this.fullscreen} />
          </ControlLayout>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  controlContainer: {
    position: 'relative',
    flex: 1,
  }
})

export default Player;