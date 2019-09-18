import React, { Component } from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

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
  render() {
    const { peopleInfo } = this.props;
    console.log(peopleInfo);
    return (
      <View
        style={{
          marginHorizontal: width * 0.1,
          marginTop: 100,
          width: viewWidth,
          backgroundColor: "white",
          borderRadius: 4,
          alignItems: "center"
        }}
      >
        <View
          style={{
            backgroundColor: "#f9f9f9",
            width: viewWidth - 2,
            height: 100,
            borderBottomColor: "gray",
            borderBottomWidth: 1
          }}
        />
        <View
          style={{
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
          }}
        />
        <View
          style={{
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
          }}
        >
          <Image
            // source={require("../../../assets/images/robot-dev.png")}
            // source={{ uri: peopleInfo.picture }}
            source={{ uri: "https://randomuser.me/api/portraits/men/60.jpg" }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <Text>test</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%"
          }}
        >
          {listIcon.map(item => (
            <TouchableOpacity
              style={{
                borderTopColor:
                  this.state.chooseItem === item
                    ? COLORS.enable
                    : "transparent",
                borderTopWidth: 2,
                width: 35,
                height: 40,
                alignItems: "center",
                justifyContent: "center"
              }}
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

export default CardItem;
