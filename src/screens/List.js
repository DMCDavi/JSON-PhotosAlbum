import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Style from '../styles/Style'
import PhotoCard from '../components/PhotoCard'

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {

        this.setState({
          isLoading: false,
          dataSource: json,
        })

      })

      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <SafeAreaView style={Style.container}>
          <ActivityIndicator />
        </SafeAreaView>
      )
    } else {
      return (
        <SafeAreaView style={Style.container}>
          <FlatList
            numColumns={2}
            horizontal={false}
            data={this.state.dataSource}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) =>
              <PhotoCard url={item.url} thumbnailUrl={item.thumbnailUrl} id={item.id} title={item.title}/>
            }
          />
        </SafeAreaView>
      );
    }
  }
};