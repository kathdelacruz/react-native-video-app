import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../../sections/components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <Separator />
  renderSuggestion = ({ item }) => <Suggestion {...item} />
  render() {
    return (
      <Layout
        title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderSuggestion}
        />
      </Layout>
    );
  }
}

export default SuggestionList;