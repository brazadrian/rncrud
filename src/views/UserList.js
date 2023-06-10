import React from "react";
import { View, Text, FlatList } from "react-native";
import { Accessory, Avatar, ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";

import users from "../data/users";

export default (props) => {
  // console.warn(Object.keys(props));

  const getUserItem = ({ item: user }) => {
    console.log(user);
    return (
      <ListItem
        leftAvatar={{ source: { uri: user.avatarUrl } }}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        onPress={() => props.navigation.navigate("UserForm")}
      />
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};
