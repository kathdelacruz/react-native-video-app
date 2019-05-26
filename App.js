import React, {Component} from 'react';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    console.log(movies);
  }
  render() {
    return (
      <Home>
        <Header />
        <SuggestionList />
      </Home>
    );
  }
}
