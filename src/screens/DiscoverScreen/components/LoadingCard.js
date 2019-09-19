import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator
} from "react-native";

const { width, height } = Dimensions.get("window");
const viewWidth = width * 0.8;

export class LoadingCard extends Component {
  getInfoText = (title, detail) => (
    <>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.detailText}>{detail}</Text>
    </>
  );
  render() {
    const { peopleInfo } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.borderAvatar} />
        <View style={styles.avatarWrapper}>
          <ActivityIndicator />
        </View>

        <View style={styles.detail}>
          <ActivityIndicator />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: width * 0.1,
    width: viewWidth,
    backgroundColor: "white",
    borderRadius: 4,
    alignItems: "center"
  },
  header: {
    backgroundColor: "#f9f9f9",
    width: viewWidth - 2,
    height: 100,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  borderAvatar: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 25,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    width: 110,
    height: 110,
    borderRadius: 55,
    zIndex: 1
  },
  avatarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    zIndex: 2
  },
  detail: {
    width: "100%",
    height: 195,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoadingCard;
