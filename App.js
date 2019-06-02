import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import API from './utils/api';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import Player from './src/player/containers/Player';
import Loading from './src/sections/components/Loading';

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: { categoryList }
    })

    const suggestionList = await API.getSuggestion(10);
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: { suggestionList }
    })
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <Home>
            <Header />
            <Player />
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}
