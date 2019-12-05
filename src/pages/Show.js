import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Context as BlogContext } from "../context/BlogContext";

const Show = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(BlogContext);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default Show;

Show.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
        <FontAwesome name="pencil" size={30} style={{ marginRight: 15 }} />
      </TouchableOpacity>
    )
  };
};
