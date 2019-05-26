import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <Separator />
  renderSuggestion = ({ item }) => {
    return (
      <Suggestion {...item} />
    );
  }
  render() {
    const list = [
      {
        key: '1',
        title: 'kath',
      },
      {
        key: '2',
        title: 'erine',
      }
    ];
    return (
      <Layout
        title="Recomendado para ti">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderSuggestion}
        />
      </Layout>
    );
  }
}

export default SuggestionList;