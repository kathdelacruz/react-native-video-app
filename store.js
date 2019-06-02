import { createStore } from 'redux';
import reducer from './reducers/videos.js';

const store = createStore(reducer, {});

export default store;