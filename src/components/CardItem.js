import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles/CardItem.styles";
const COLORS = {
  enable: "green",
  disable: "gray"
};

export class CardItem extends Component {
  state = {
    chooseIndex: 0
  };
  render() {
    const { picture, info } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.borderAvatar} />
        <View style={styles.defaultAvatar}>
          <Image
            source={{
              uri:
                "https://i1.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg"
            }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: picture }} style={styles.avatar} />
        </View>
        <View style={styles.infoTextWrapper}>
          <Text style={styles.titleText}>
            {info[this.state.chooseIndex].title}
          </Text>
          <Text style={styles.detailText}>
            {info[this.state.chooseIndex].value}
          </Text>
        </View>
        <View style={styles.chooseButtonWrapper}>
          {info.map((item, index) => (
            <TouchableOpacity
              style={[
                {
                  borderTopColor:
                    this.state.chooseIndex === index
                      ? COLORS.enable
                      : "transparent"
                },
                styles.button
              ]}
              key={item.title}
              onPress={() => {
                this.setState({ chooseIndex: index });
              }}
            >
              <FontAwesome
                name={item.iconName}
                size={30}
                color={
                  this.state.chooseIndex === index
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
