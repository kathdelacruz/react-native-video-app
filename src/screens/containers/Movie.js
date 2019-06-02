import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Back from '../../sections/components/Back';

class Movie extends Component {
  backHome = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: { movie: null }
    });
  }
  render() {
    return (
      <MovieLayout>
        <Header>
          <Back onPress={this.backHome} />
        </Header>
        <Player />
      </MovieLayout>
    );
  }
}

export default connect ()(Movie);