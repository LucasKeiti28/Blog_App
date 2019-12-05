import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";

const Edit = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(BlogContext);

  const blogPost = state.find(blogPost => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />

      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
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
