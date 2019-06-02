import React, { Component } from 'react';
import { connect } from 'react-redux';

import API from '../utils/api';
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import SuggestionList from './videos/containers/SuggestionList';
import CategoryList from './videos/containers/CategoryList';
import Movie from './screens/containers/Movie';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: { categoryList }
    })

    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: { suggestionList }
    })
  }

  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});



export default connect(mapStateToProps)(AppLayout);