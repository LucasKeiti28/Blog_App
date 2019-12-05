import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";

const Edit = ({ navigation }) => {
  const id = navigation.getParam("id");

  return (
    <View>
      <Text>Edit Screen - {id} </Text>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#000",
    margin: 15,
    padding: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  }
});
