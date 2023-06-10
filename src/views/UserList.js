import React from "react";
import { View, Text, FlatList } from "react-native";
import users from "../data/users";
import { Accessory, Avatar, ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";

export default (props) => {
  function getUserItem({ item: user }) {
    return (
      <>
        <ListItem
          bottomDivider
          onPress={() => props.navigation.navigate("UserForm")}>
          <Avatar source={{ uri: user.avatarUrl }}></Avatar>
          <ListItemContent>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItemContent>
          <ListItem.Chevron />
        </ListItem>
      </>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};
