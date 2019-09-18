import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import styles from "../../assets/styles";

// import Card from "./components/Card";

import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "./components/CardItem";

export class DiscoverView extends Component {
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
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}
        >
          {info.map((item, index) => (
            <Card key={index}>
              <CardItem
                peopleInfo={item}
                // image={item.image}
                // name={item.name}
                // description={item.description}
                // matches={item.match}
                // actions
                // onPressLeft={() => this.swiper.swipeLeft()}
                // onPressRight={() => this.swiper.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    );
  }
}

export default DiscoverView;
