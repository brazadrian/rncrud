import React from "react";
import { Text } from "react-native";

export default (props) => {
  console.log(props.route.params);
  return (
    <>
      <Text>UserForm</Text>
    </>
  );
};
