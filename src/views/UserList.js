import React from "react";
import { View, FlatList } from "react-native";
import users from "../data/users";
import { Button, ListItem, Text } from "react-native-elements";

export default (props) => {
  function getUserItem({ item: user }) {
    return (
      <ListItem
        leftAvatar={{ source: { uri: user.avatarUrl } }}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        onPress={() => props.navigation.navigate("UserForm", user)}
      />
    );
  }

  return (
    <View>
      <Button title="Solid Button" />
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};
