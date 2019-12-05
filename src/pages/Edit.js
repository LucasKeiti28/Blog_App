import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const Edit = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(BlogContext);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
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
