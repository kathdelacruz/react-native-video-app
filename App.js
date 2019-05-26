import React, {Component} from 'react';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from './utils/api';
import CategoryList from './src/videos/containers/CategoryList';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
