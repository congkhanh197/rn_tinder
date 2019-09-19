import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import CardItem from "../../components/CardItem";

export class FavoriteView extends Component {
  render() {
    console.log(this.props.peopleList);
    return (
      <View style={{ flex: 1, backgroundColor: "lightgray" }}>
        <FlatList
          data={this.props.peopleList}
          renderItem={({ item }) => <CardItem peopleInfo={item} />}
          keyExtractor={item => item.md5}
        />
      </View>
    );
  }
}

export default FavoriteView;
