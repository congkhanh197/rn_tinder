import React, { Component } from "react";
import { Text, View } from "react-native";

import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "../../components/CardItem";
import LoadingCard from "./components/LoadingCard";

export class DiscoverView extends Component {
  onSwipedRight = index => {
    this.props.addFavoritePeopleAction([
      ...this.props.favoriteList,
      this.props.infos[index]
    ]);
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "lightgray" }}>
        <CardStack
          secondCardZoom={1}
          style={{ marginVertical: 100 }}
          verticalSwipe={false}
          renderNoMoreCards={() => <LoadingCard />}
          onSwipedRight={this.onSwipedRight}
          onSwiped={this.props.getPersonInfoAction}
        >
          {this.props.infos.map((item, index) => (
            <Card key={index}>
              <CardItem peopleInfo={item} />
            </Card>
          ))}
        </CardStack>
      </View>
    );
  }
}

export default DiscoverView;
