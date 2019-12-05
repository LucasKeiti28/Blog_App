import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const Create = ({ navigation }) => {
  const { addBlogPosts } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        addBlogPosts(title, content, () => navigation.navigate("Index"))
      }
    />
  );
};

export default Create;

const styles = StyleSheet.create({});
