import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { upperFirst } from "../utils/stringUtils";
import moment from "moment";

const { width, height } = Dimensions.get("window");
const viewWidth = width * 0.8;

const COLORS = {
  enable: "green",
  disable: "gray"
};
const listIcon = ["user-o", "calendar", "map-o", "phone", "lock"];

export class CardItem extends Component {
  state = {
    chooseItem: listIcon[0]
  };

  getInfoText = (title, detail) => (
    <>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.detailText}>{detail}</Text>
    </>
  );

  renderInfoText = () => {
    const { peopleInfo } = this.props;
    switch (this.state.chooseItem) {
      case listIcon[0]:
        return this.getInfoText(
          "My name is",
          upperFirst(peopleInfo.name.title) +
            ". " +
            upperFirst(peopleInfo.name.first) +
            " " +
            upperFirst(peopleInfo.name.last)
        );

      case listIcon[1]:
        return this.getInfoText(
          "My birthday is",
          moment.unix(peopleInfo.dob).format("D/M/YYYY")
        );

      case listIcon[2]:
        const { location } = this.props.peopleInfo;
        return this.getInfoText("My address is", upperFirst(location.street));

      case listIcon[3]:
        return this.getInfoText("My phone is", peopleInfo.phone);

      case listIcon[4]:
        return this.getInfoText("My phone is", peopleInfo.password);

      default:
        break;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.borderAvatar} />
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/60.jpg" }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.infoTextWrapper}>{this.renderInfoText()}</View>
        <View style={styles.chooseButtonWrapper}>
          {listIcon.map(item => (
            <TouchableOpacity
              style={[
                {
                  borderTopColor:
                    this.state.chooseItem === item
                      ? COLORS.enable
                      : "transparent"
                },
                styles.button
              ]}
              key={item}
              onPress={() => {
                this.setState({ chooseItem: item });
              }}
            >
              <FontAwesome
                name={item}
                size={30}
                color={
                  this.state.chooseItem === item
                    ? COLORS.enable
                    : COLORS.disable
                }
              />
            </TouchableOpacity>
          ))}
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
    backgroundColor: "lightgray",
    zIndex: 2
  },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  infoTextWrapper: { marginTop: 60, marginBottom: 30, alignItems: "center" },
  chooseButtonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginBottom: 10
  },
  button: {
    borderTopWidth: 2,
    width: 35,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    color: "gray",
    fontSize: 20
  },
  detailText: {
    color: "black",
    fontSize: 25
  }
});

export default CardItem;
