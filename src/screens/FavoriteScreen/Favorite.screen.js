import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";
import FavoriteView from "./Favorite.view";
import Constants from "expo-constants";

export class FavoriteScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <FavoriteView {...this.props} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  peopleList: state.favoriteReducer.peopleList
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteScreen);
