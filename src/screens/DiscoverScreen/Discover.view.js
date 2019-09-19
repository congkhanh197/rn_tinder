import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import styles from "../../assets/styles";

// import Card from "./components/Card";

import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "../../components/CardItem";

export class DiscoverView extends Component {
  onSwipedLeft = data => {
    console.log("left", data);
    this.props.getPersonInfoAction();
  };
  onSwipedRight = () => {
    this.props.addFavoritePeopleAction(this.props.info[0]);
    this.props.getPersonInfoAction();
  };
  render() {
    console.log("render", this.props.info.length);
    const { info } = this.props;
    if (this.props.loading === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, backgroundColor: "lightgray" }}>
        <CardStack
          style={{ marginVertical: 100 }}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}
          onSwipedLeft={this.onSwipedLeft}
          onSwipedRight={this.onSwipedRight}
        >
          {info.map((item, index) => (
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
