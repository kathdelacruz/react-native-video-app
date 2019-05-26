import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/CategoryListLayout';
import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Category';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <Separator />
  renderCategory = ({ item }) => <Category {...item} />
  render() {
    return (
      <Layout
        title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderCategory}
          horizontal
        />
      </Layout>
    );
  }
}

export default CategoryList;