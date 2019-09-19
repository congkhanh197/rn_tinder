import React, { Component } from "react";
import DiscoverView from "./Discover.view";
import { SafeAreaView, View } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";

import { getPersonInfoAction } from "../../store/actions";
import { addFavoritePeopleAction } from "../../store/actions/favoriteAction";

export class DiscoverScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    props.getPersonInfoAction();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <DiscoverView {...this.props} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.peopleInfoReducer.loading,
    error: state.peopleInfoReducer.error,
    info: state.peopleInfoReducer.info
  };
};

const mapDispatchToProps = dispatch => ({
  getPersonInfoAction: () => dispatch(getPersonInfoAction()),
  addFavoritePeopleAction: peopleInfo =>
    dispatch(addFavoritePeopleAction(peopleInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverScreen);
