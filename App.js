import React, {Component} from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
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
        <View
          style={{
            flex: 1,
            height: 100,
          }}
        >
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
            resizeMode="cover"
          />
        </View>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
