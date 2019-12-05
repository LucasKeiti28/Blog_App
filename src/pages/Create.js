import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";

const Create = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPosts } = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />

      <Button
        title="Add Blog Post"
        onPress={() =>
          addBlogPosts(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
};

export default Create;

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
