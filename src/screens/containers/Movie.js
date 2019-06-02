import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Back from '../../sections/components/Back';
import Details from '../../videos/components/Details';

class Movie extends Component {
  state = { opacity: new Animated.Value(0) }

  backHome = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: { movie: null }
    });
  }

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}
      >
        <MovieLayout>
          <Header>
            <Back onPress={this.backHome} />
          </Header>
          <Player />
          <Details {...this.props.movie} />
        </MovieLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.selectedMovie,
});

export default connect (mapStateToProps)(Movie);